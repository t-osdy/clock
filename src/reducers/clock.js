import { SYNC_DATE } from "../actions/clock"
import { parseTime } from "../utils/dates"

const initialState = parseTime(new Date())

export const clock = (state = initialState, action) => {
  console.log(`-------------------------${action}`)
 switch ( action.type ){
   case SYNC_DATE:
    const { hour, minutes, seconds } = action
    return Object.assign({}, state, {
      hour, minutes, seconds
    })
   default:
    return state
 }
} 