import { userActionTypes } from './user.types'

export const setCurrentUSer = user => ({
    type : userActionTypes.SET_CURRENT_USER,
    payload : user
})