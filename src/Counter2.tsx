import React, {useEffect, useState} from 'react';
import s from './Counter2.module.css';
import SuperButton from "./SuperButton";
import { Container, Grid } from "@mui/material";
type Counter2PropsType = {
    maxValue:number;
    minValue:number;
    incorrectMessage:boolean;
    enterMessage:boolean;
    setError:(value:boolean)=>void;
    error:boolean;
}
export const Counter2 = (props:Counter2PropsType) => {


    let [value, setValue] = useState<number>(props.minValue);
    //hook gets value from local storage on refresh page
    useEffect(() => {
        localStorage.setItem('counterValue', value.toString());
    }, [value]);

    useEffect(() => {
        const savedValue = localStorage.getItem('counterValue');
        if (savedValue) {
            setValue(JSON.parse(savedValue));
        }
    }, [localStorage.getItem('counterValue')]);

    useEffect(() => {
        if (value < props.minValue || value > props.maxValue) {
            setValue(props.minValue);
        }
    }, [value, props.minValue, props.maxValue]);


    useEffect(()=>{
        if (value===props.maxValue){
            props.setError(true);
        }

    },[value])

    function IncHandler() {
        if (props.incorrectMessage) {
            return;
        }
        if (props.enterMessage) {
            return;
        }
        if (value < props.maxValue) {
            setValue(value + 1);
        }
    }
    const Ekran = () => {
        if (props.incorrectMessage) {
            return <div style={{color:'red'}}>Incorrect value!</div>;
        } if (props.enterMessage) {
            return <div style={{fontSize: 15}}>enter values and press 'set'</div>;
        }


        else {
            return <div>{value}</div>;
        }
    }

    const ResetHandler = () => {
        setValue(props.minValue);
        props.setError(false)
    }

    return (
        <div className={s.container}>
            <div className={props.error? s.innerRectangleERROR : s.innerRectangle} >{Ekran()}</div>
            <div className={s.buttonRectangle}>
                <Container fixed>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <SuperButton onClickHandler={IncHandler}  disabledBut ={false} text={"INC"} />
                        </Grid>
                        <Grid item xs={6}>
                            <SuperButton onClickHandler={ResetHandler} disabledBut ={false} text={"RESET"} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
