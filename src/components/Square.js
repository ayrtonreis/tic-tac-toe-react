import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Square(props) {
    return (


        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>


        // "Grid layout" not working with with Material-Ui components
        // Refactor later

        /*<Paper>
            <Typography className={"square"} onClick={props.onClick} variant="h5" component="h3">
                {props.value}
            </Typography>
        </Paper>
        */

    );
}

export default Square;