export const CHANGE_RANGE1_REQUESTED = 'range/CHANGE_RANGE1_REQUESTED';
export const CHANGE_RANGE2_REQUESTED = 'range/CHANGE_RANGE2_REQUESTED';
export const CHANGE_RANGE3_REQUESTED = 'range/CHANGE_RANGE3_REQUESTED';
export const CHANGE_RANGE4_REQUESTED = 'range/CHANGE_RANGE4_REQUESTED';
export const CHANGE_RANGE5_REQUESTED = 'range/CHANGE_RANGE5_REQUESTED';

const initialState = {
  range1 : 0,
  range2 : 0,
  range3 : 0,
  range4 : 0,
  range5 : 0,
}

export default (state = initialState, action) => {
  debugger
  switch (action.type) {
    case CHANGE_RANGE1_REQUESTED: {
      debugger
      return {
        ...state,
        range1: action.value
      }
    }
    case CHANGE_RANGE2_REQUESTED: {
      return {
        ...state,
        range2: action.value
      }
    }
    case CHANGE_RANGE3_REQUESTED: {
      return {
        ...state,
        range3: action.value
      }
    }
    case CHANGE_RANGE4_REQUESTED: {
      return {
        ...state,
        range4: action.value
      }
    }
    case CHANGE_RANGE5_REQUESTED: {
      return {
        ...state,
        range5: action.value
      }
    }

    default:
      return state
  }
}

export const changeRange1 = (event) => {
  return dispatch => {
    dispatch({
      type: CHANGE_RANGE1_REQUESTED,
      value: event.target.value
    })
  }
}

export const changeRange2 = (event) => {
  return dispatch => {
    dispatch({
      type: CHANGE_RANGE2_REQUESTED,
      value: event.target.value
    })
  }
}

export const changeRange3 = (event) => {
  return dispatch => {
    dispatch({
      type: CHANGE_RANGE3_REQUESTED,
      value: event.target.value
    })
  }
}

export const changeRange4 = (event) => {
  return dispatch => {
    dispatch({
      type: CHANGE_RANGE4_REQUESTED,
      value: event.target.value
    })
  }
}

export const changeRange5 = (event) => {
  return dispatch => {
    dispatch({
      type: CHANGE_RANGE5_REQUESTED,
      value: event.target.value
    })
  }
}