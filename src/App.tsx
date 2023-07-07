import React, {useState} from 'react';
import s from './App.module.css';
import { Counter1 } from "./Counter1";
import { Counter2 } from "./Counter2";
import { Container, Grid, Paper } from "@mui/material";

function App() {
    let [maxValue, setMaxValue] = useState<number>(5);
    let [minValue, setMinValue] = useState<number>(0);

    const handleMaxValueChange = (value:number) => {
        setMaxValue(value);
    };

    const handleMinValueChange = (value:number) => {
        setMinValue(value)
    };

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
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper style={{ padding: '50px', background: "#383232" }}>
                            <Counter2
                                maxValue={maxValue}
                                minValue={minValue}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;