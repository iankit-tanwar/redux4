

// Action are js object which must have type property

const { A } = require("../constant")


// Action Creator are function that return actions


let loginActionCreator = ()=>{
    return {
        type:A,
        username:''
    }
}
let registerActionCreator = ()=>{
    return {
        type:'Register',
        fname:'',
        lname:'',
        mobno:''
    }
}

module.exports = {loginActionCreator,registerActionCreator}