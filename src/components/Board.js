import React from 'react';
import Square from './Square';

class Board extends React.Component {

    constructor(props){
        super(props);
        this.boardSize = 3;
    }

    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={ () => {this.props.onClick(i)} }
            />
        );
    }

    render() {

        let boardRows = [];

        for(let row = 0; row < this.boardSize; row++){
            let boardCols = [];

            for(let col = 0; col < this.boardSize; col++){
                boardCols.push(this.renderSquare(row * this.boardSize + col));
            }

            boardRows.push(
                <div className={"board-row"} key={row}>
                    {boardCols}
                </div>
            );
        }

        return <div>{boardRows}</div>;

        /*return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );*/
    }
}

export default Board;