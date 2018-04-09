export const CHANGE_RANGE1_REQUESTED = 'range/CHANGE_RANGE1_REQUESTED';
export const CHANGE_RANGE2_REQUESTED = 'range/CHANGE_RANGE2_REQUESTED';
export const CHANGE_RANGE3_REQUESTED = 'range/CHANGE_RANGE3_REQUESTED';
export const CHANGE_RANGE4_REQUESTED = 'range/CHANGE_RANGE4_REQUESTED';
export const CHANGE_RANGE5_REQUESTED = 'range/CHANGE_RANGE5_REQUESTED';
export const CHANGE_EQUALIZER_TYPE = 'range/CHANGE_EQUALIZER_TYPE';
export const TOGGLE_BTN_GROUP = 'range/TOGGLE_BTN_GROUP';

const initialState = {
  range1 : 0,
  range2 : 0,
  range3 : 0,
  range4 : 0,
  range5 : 0,
  isEqOpen : false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RANGE1_REQUESTED: {
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
    case CHANGE_EQUALIZER_TYPE: {
      return {
        ...state,
        range1: action.value.range1,
        range2: action.value.range2,
        range3: action.value.range3,
        range4: action.value.range4,
        range5: action.value.range5,
      }
    }
    case TOGGLE_BTN_GROUP: {
      return {
        ...state,
        isEqOpen : action.value,
      }
    }

    default:
      return state
  }
}

export const onMusicEqualizerTypeChanged = (event,isopen) => {
  return dispatch => {
    let value = {};
    switch (event.target.value) {
      case 'pop': {
        value.range1 = 0;
        value.range2 = 2;
        value.range3 = 2;
        value.range4 = 1;
        value.range5 = 0;
        dispatch({
          type: CHANGE_EQUALIZER_TYPE,
          value
        });
        break;
      }
      case 'rock': {
        value.range1 = 6;
        value.range2 = 0;
        value.range3 = -2;
        value.range4 = 2;
        value.range5 = 1;
        dispatch({
          type: CHANGE_EQUALIZER_TYPE,
          value
        });
        break;
      }
      case 'jazz': {
        value.range1 = 1;
        value.range2 = 4;
        value.range3 = 0;
        value.range4 = 0;
        value.range5 = -8;
        dispatch({
          type: CHANGE_EQUALIZER_TYPE,
          value
        });
        break;
      }
      case 'classical': {
        value.range1 = -3;
        value.range2 = 2;
        value.range3 = -1;
        value.range4 = 8;
        value.range5 = -4;
        dispatch({
          type: CHANGE_EQUALIZER_TYPE,
          value
        });
        break;
      }
      default: {
        value.range1 = 0;
        value.range2 = 0;
        value.range3 = 0;
        value.range4 = 0;
        value.range5 = 0;
        dispatch({
          type: TOGGLE_BTN_GROUP,
          value: !isopen
        });
        dispatch({
          type: CHANGE_EQUALIZER_TYPE,
          value
        });
        break;
      }

    }
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