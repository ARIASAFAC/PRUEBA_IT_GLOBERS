import {createStore } from "redux";

const initiaState = {
    glober: []
}

const Reducer = (state = initiaState, action) => {
    return state
}

export default createStore(Reducer)