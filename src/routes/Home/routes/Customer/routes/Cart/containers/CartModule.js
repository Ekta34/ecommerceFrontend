
export const NAME = 'cart'

const ACTION_HANDLERS = {
}

const initialState = {
}


export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
  }
  