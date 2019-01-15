import React from 'react';
import Square from './Square';

class Board extends React.Component {

    constructor(props){
        super(props);
        this.boardSize = 3;

        // feedback this isn't necessary because renderSquare doesn't use the state, but it's a good practice to add it anyway
		this.renderSquare = this.renderSquare.bind(this);
	}

    renderSquare(i) {
        const {squares, onClick} = this.props;

        return (
            <Square
                key={i}
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    render() {

        return (
            <div>
                {Array(this.boardSize).fill(null).map((_, row) =>

					<div className={"board-row"} key={row}>

						{Array(this.boardSize).fill(null).map((_, col) =>

							this.renderSquare(row * this.boardSize + col)

                        )}

					</div>

                )}
            </div>
        );

        // feedback - this way is fine, but it's rather more natural like the one over here

        // let boardRows = [];
		//
        // for(let row = 0; row < this.boardSize; row++){
        //     let boardCols = [];
		//
        //     for(let col = 0; col < this.boardSize; col++){
        //         boardCols.push(this.renderSquare(row * this.boardSize + col));
        //     }
		//
        //     boardRows.push(
        //         <div className={"board-row"} key={row}>
        //             {boardCols}
        //         </div>
        //     );
        // }
		//
        // return <div>{boardRows}</div>;

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