import {AppStateReducer, AppStateType, setMaxValueAC, setMinValueAC} from "./AppStateReducer";

test ("MinValue should be set",()=>{
    const startState : AppStateType = {

        maxValue: 5,
        minValue: 0,
        incorrectMessage:false,
        enterMessage:false,
        error:false

    };
    const endState = AppStateReducer (startState, setMinValueAC(10))
    expect(endState.minValue).toBe(10)
} );
test ("MaxValue should be set",()=>{
    const startState = {
        maxValue: 5,
        minValue: 0,
        incorrectMessage:false,
        enterMessage:false,
        error:false
    };
    const endState = AppStateReducer (startState, setMaxValueAC(12))
    expect(endState.maxValue).toBe(12)
} )