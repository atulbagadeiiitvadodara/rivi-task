const initialState = [
    {
        "id": '799889173',
        "text": "Dubai"
    },{
        "id": '818298148',
        "text": "Venice"
    },{
        "id": '127155548',
        "text": "Prague"
    }
]

const tagsReducer = (state = initialState, action) => {
    // console.log("action", action)
    switch(action.type){
        case 'addTag': 
            return [...state, action.payload];
        case 'deleteTag':
            console.log("deleting tag")
            return state.filter((tag, index) => index !== action.payload); 
        default: return state
    }
}

export default tagsReducer