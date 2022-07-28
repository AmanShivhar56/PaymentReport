const initialState = { 
    report:{},
   
}

export default function RootReducer(state=initialState,action)
{
    switch(action.type)
    {
        case 'ADD_REPORT':
            state.report[action.payload[0]]=action.payload[1]
            console.log(state.report)
            return ({report:state.report})

      case 'EDIT_REPORT':
             state.report[action.payload[0]]=action.payload[1]
             console.log(state.report)
            return ({report:state.report})

   

            
        default:
            return ({report:state.report})

    }
}