import {typeMovieReducer} from '../../redux/interfaces/interfaces'
export const loadState=()=>{
    console.log("LOAD")
    try {
        const serializedState= localStorage.getItem("state");
        if(serializedState===null){
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.log("ERROR DE LOADSTATE", error)
        return undefined;
    }
}

export const saveState = ( state:typeMovieReducer)=>{
    console.log("EL ESTADO ES", state)
    try {
        const serializedState= JSON.stringify(state);
        localStorage.setItem("state", serializedState)
    } catch (error) {
        console.log(error)
    }
}