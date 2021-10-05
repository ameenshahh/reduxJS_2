//constants
const BUY_CAKE = 'BUY_CAKE'

//actions


//action creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

/* reducers accepts previous state and actions and returns the new state based on the action 
given */

const initialState = {
    numOfCakes : 10
}


const reducer =(state=initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state, //this is done to make sure that the other state ppts are not changed but only numOfCakes
            numOfCakes : state.numOfCakes - 1
        }

        default : return state
    }
}
