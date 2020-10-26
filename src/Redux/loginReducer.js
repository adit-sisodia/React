const SHOW_LIST = 'SHOW_LIST';

const initialState = {
    details: ''
}

export const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case SHOW_LIST: return {
            ...state,
            details: [{
                "id":1,
                "name":"test1",
                "age" : "11",
                "gender":"male",
                "email" : "test1@gmail.com",
                "phoneNo" : "9415346313"
                },
                {
                    "id" : 2,
                    "name":"test2",
                    "age" : "12",
                    "gender":"male",
                    "email" : "test2@gmail.com",
                    "phoneNo" : "9415346314"
                    }]
        }
        default: return state
    }
}

export default loginReducer;