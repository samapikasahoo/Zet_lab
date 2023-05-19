const initialState=0

const updateNumber=(state=0,action)=>{
    switch(action.type){
        case "INC":return state + 5;
        default:return state
    }
}
export default updateNumber
