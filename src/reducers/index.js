const reducer = (state, action) => {
    switch(action.type) {
        case 'WIDTHDRAWL':
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload.amount
            }
        default:
            return state
    }
}

export default reducer