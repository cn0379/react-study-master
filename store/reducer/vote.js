import * as TYPE from '../action-type'

export default function vote(state = { n = 0, m = 0 }, action) {
  switch (action.type) {
    case TYPE.VOTE_SUPPORT:
      state = { ...state.state, m: state.m + 1 }
      break;
    case TYPE.VOTE_AGAINST:
      state = { ...state.state, n : state.n + 1 }

  }
  return state
}