export default (state , action) =>{
    switch (action.type) {
      case 'AddTransaction' :
      return {
        ...state , 
        transactions:[action.payload , ...state.transactions]
      }
        default:
            return state;
            
    }
}