import React from 'react';
import s from './App.module.css';
import { Counter1 } from "./Counter1";
import { Counter2 } from "./Counter2";
import { Container, Grid, Paper } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {

    enterMessageChangerAC, errorAC,
    incorrectMessageChangerAC,
    setMaxValueAC,
    setMinValueAC
} from "./State/AppStateReducer";
import {AppRootStateType} from "./State/store";


function App() {
    // let [maxValue, setMaxValue] = useState<number>(5);
    // let [minValue, setMinValue] = useState<number>(0);
    // let[incorrectMessage, SetIncorrect] = useState<boolean>(false)
    // let [enterMessage, setEnterMessage] = useState<boolean>(false)
    // let [error,setError]=useState<boolean>(false)
    const maxValue = useSelector<AppRootStateType,number >(state=>state.AppState.maxValue);
    const minValue = useSelector<AppRootStateType,number >(state=>state.AppState.minValue);
    const incorrectMessage = useSelector<AppRootStateType,boolean >(state=>state.AppState.incorrectMessage);
    const enterMessage = useSelector<AppRootStateType,boolean >(state=>state.AppState.enterMessage);
    const error = useSelector<AppRootStateType,boolean>(state=>state.AppState.error);

    const dispatch=useDispatch()

    const handleMaxValueChange = (value:number) => {
        dispatch(setMaxValueAC(value));
    };

    const handleMinValueChange = (value:number) => {
        dispatch(setMinValueAC(value));
    };
    const SetIncorrect = (value:boolean)=>{
        dispatch(incorrectMessageChangerAC(value))
    }
    const setEnterMessage=(value:boolean)=>{
        dispatch(enterMessageChangerAC(value))
    }
    const setError=(value:boolean)=>{
        dispatch(errorAC(value))
    }
    return (
        <div className={s.App}>
            <Container fixed>
                <Grid container spacing={10}>
                    <Grid item xs={5}>
                        <Paper style={{ padding: '50px', background: "#383232" }}>
                            <Counter1
                                maxValue={maxValue}
                                minValue={minValue}
                                onMaxValueChange={handleMaxValueChange}
                                onMinValueChange={handleMinValueChange}

                                SetIncorrect={SetIncorrect}
                                incorrectMessage={incorrectMessage}
                                setEnterMessage={setEnterMessage}

                                setError={setError}


                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper style={{ padding: '50px', background: "#383232" }}>
                            <Counter2
                                maxValue={maxValue}
                                minValue={minValue}
                                incorrectMessage={incorrectMessage}
                                enterMessage={enterMessage}
                                setError={setError}
                                error={error}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;