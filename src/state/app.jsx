const initialState = {
  isMobileMode: false,
  isOpen: true
}

const TOGGLE_MOBILEMODE = "responsive"//responsive
const TOGGLE_ISOPEN = "clickTrigger"//clickTrigger

export const toggleMobilekMode = (payload, type) => ({
  type: type,
  payload: payload
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILEMODE:
      return { ...state, isMobileMode: action.payload }
    case TOGGLE_ISOPEN:
      return { ...state, isOpen: action.payload }
    default:
      return state
  }
};