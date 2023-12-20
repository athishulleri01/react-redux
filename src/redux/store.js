import {createStore} from 'redux'

const initialValue={
    value:0
}

function appReducer(prevState=initialValue,action){
    return prevState.value
}
const store = createStore(appReducer)



export default store
