export type  AppStateType = {
    maxValue:number,
    minValue:number,
    incorrectMessage:boolean,
    enterMessage:boolean,
    error:boolean
}
type ActionType =setMinValueACType | setMaxValueACType | incorrectMessageChangerACType | enterMessageChangerACType |errorACType;
const initialState:AppStateType  = {
    maxValue: 5,
    minValue: 0,
    incorrectMessage:false,
    enterMessage:false,
    error:false

};

export const  AppStateReducer = (state:AppStateType=initialState, action:ActionType)=>{
    switch (action.type) {
        case "SET-MIN-VALUE" :
            return {...state, minValue: action.payload.minvalue};
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.payload.maxvalue};
        case "CHANGE-INCORRECT-MESSAGE":
            return {...state, incorrectMessage: action.payload.incorrectMessage};
        case "CHANGE-ENTER-MESSAGE":
            return {...state, enterMessage:action.payload.enterMessage}
        case "CHANGE-ERROR-STATE":
            return {...state,error:action.payload.error};
        default:
            return state;
    }
}
export type setMinValueACType = ReturnType<typeof setMinValueAC>
export const  setMinValueAC = (minvalue:number)=>{
    return {
        type: "SET-MIN-VALUE",
        payload :{
            minvalue
        }
    }as const
}
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const  setMaxValueAC = (maxvalue:number)=>{
    return {
        type: "SET-MAX-VALUE",
        payload :{
            maxvalue
        }
    }as const
}

export type incorrectMessageChangerACType = ReturnType<typeof incorrectMessageChangerAC>
export const incorrectMessageChangerAC = (incorrectMessage:boolean)=>{
    return {
        type : "CHANGE-INCORRECT-MESSAGE",
        payload:{
            incorrectMessage
        }
    }as const
}
export type  enterMessageChangerACType = ReturnType<typeof enterMessageChangerAC>
export const enterMessageChangerAC = (enterMessage:boolean)=>{
    return {
        type : "CHANGE-ENTER-MESSAGE",
        payload:{
            enterMessage
        }
    }as const
}
export type  errorACType = ReturnType<typeof errorAC>
export const errorAC = (error:boolean)=>{
    return {
        type : "CHANGE-ERROR-STATE",
        payload:{
            error
        }
    }as const
}