import * as actionTypes from '../redux/constants/constants';


export const toogleModal=()=>(dispatch:any)=>{
    dispatch({
        type:actionTypes.TOGGLE_MODAL
    })
}

export const delay = (time:number) =>
  new Promise((resolve) => setTimeout(resolve, time));