import React from 'react';
import Button from "@mui/material/Button";

type ButtonPropsType = {
    text: string;
    onClickHandler: () => void;
};

const SuperButton = (props: ButtonPropsType) => {
    return (
        <div>
            <Button
                onClick={props.onClickHandler}
                variant="contained"
                style={{ background: "#189ec6", color: "#383232" }}
            >
                {props.text}
            </Button>
        </div>
    );
};

export default SuperButton;
