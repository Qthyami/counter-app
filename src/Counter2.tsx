import React, {useEffect, useState} from 'react';
import s from './Counter2.module.css';
import SuperButton from "./SuperButton";
import { Container, Grid } from "@mui/material";
type Counter2PropsType = {
    maxValue:number;
    minValue:number;
}
export const Counter2 = (props:Counter2PropsType) => {
    // const getMin = () => {
    //     let minLocal = localStorage.getItem('setMinValue');
    //     if (minLocal) {
    //         let newMinValue = JSON.parse(minLocal);
    //         return newMinValue;
    //     } else {
    //         return 0;
    //     }
    // };

    // const getMax = () => {
    //     let maxLocal = localStorage.getItem('setMaxValue');
    //     if (maxLocal) {
    //         let newMaxValue = JSON.parse(maxLocal);
    //         return newMaxValue;
    //     } else {
    //         return 5;
    //     }
    // };

    let [value, setValue] = useState<number>(props.minValue);
    useEffect(() => {
        if (props.minValue < value) {
            setValue(props.minValue);
        }
    }, [props.minValue]);


    function IncHandler() {
        if (value < props.maxValue) {
            setValue(value + 1);
        }
    }

    return (
        <div className={s.container}>
            <div className={s.innerRectangle}>{value}</div>
            <div className={s.buttonRectangle}>
                <Container fixed>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <SuperButton onClickHandler={IncHandler} text={"INC"} />
                        </Grid>
                        <Grid item xs={6}>
                            <SuperButton onClickHandler={() => {}} text={"RESET"} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
