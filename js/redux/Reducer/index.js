/**
 * Created by dp-ptcstd-34 on 10/4/2016.
 */

import { combineReducers } from 'redux'

let gridRecords = [
        {firstName: "John", lastName: "Doe", active: false, id: 1},
        {firstName: "Mary", lastName: "Moe", active: false, id: 2},
        {firstName: "Peter", lastName: "Noname", active: true, id: 3}
    ],
    detailsRecords = [{
        id:1,
        name:"John Doe",
        about:"Nice guy",
        hobby:"Likes drinking wine",
        skills:["html", "javascript", "redux"]
    },{
        id:2,
        name:"Mary Moe",
        about:"Cute girl",
        hobby:"Likes playing xbox whole days long",
        skills:["Fortran", "Lua", "R#"]
    }];


export const rootReducer = combineReducers({
    details,
    grid
});

export function grid(state = gridRecords, action){
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            let newState = [...state];
            newState[action.value].active = !newState[action.value].active;
            return newState;
        case "FILTER":
        //Filter will be implemented later
        default:
            return state
    }
}

export function details(state = detailsRecords, action){
    switch (action.type) {
        default:
            return state
    }
}