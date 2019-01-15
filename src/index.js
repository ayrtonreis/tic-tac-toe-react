import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Board from './components/Board'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const chipStyle = {
    margin: "4px 0",
    fontSize: "8px",
};
const appBarStyle = {
    fontSize: '12px',
    color: 'white',
    textAlign: 'center',
};

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                posCol: null,
                posRow: null
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        const row = Math.floor(i/3);
        const col = i % 3;

        if(calculateWinner(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                posCol: col + 1,
                posRow: row + 1,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
           const desc = move ?
               'Go to move #' + move + ' (x: ' + step.posCol + ', y: ' + step.posRow+ ')':
               'Go to game start';

           return (
               <li key={move}>
                   {/*<button
                       onClick={() => this.jumpTo(move)}
                       className = {this.state.stepNumber === move ? 'selected-list-item' : ''}
                   >{desc}
                   </button>*/}
                   <Chip
                       style={chipStyle}
                       label={desc}
                       className = {this.state.stepNumber === move ? 'selected-list-item' : ''}
                       onClick={() => this.jumpTo(move)}
                   />
               </li>
           );
        });

        let status;

        if(winner){
            status = 'Winner: ' + winner;
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <AppBar position={"static"} style={{marginBottom: '20px'}}>
                    <Toolbar style={{minHeight: '20px'}}>
                        <Typography style={appBarStyle}>
                            Tic Tac Toe
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className="game">
                    <div className="game-board">
                        <Board
                            squares = {current.squares}
                            onClick = {(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares){
    const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
}
