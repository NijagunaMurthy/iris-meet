import UserStoreConstants from '../constants/user-constants';
/*
Format of this reducer's part of state tree:
{
  userName,
  routingId,
  roomName,
  accessToken,
  decodedToken
}
*/

const UserReducer = (state = {}, action) => {
  console.log('Received action: ')
  console.log(action);
  switch(action.type) {
      case UserStoreConstants.USER_LOGIN:
        if (action.data && action.data.userName &&
            action.data.routingId && action.data.roomName &&
            action.data.accessToken && action.data.decodedToken) {
            return {
              userName: action.data.userName,
              routingId: action.data.routingId,
              roomName: action.data.roomName,
              accessToken: action.data.accessToken,
              decodedToken: action.data.decodedToken
            }
        }
        else {
          return state
        }

      case UserStoreConstants.USER_LEAVE_ROOM:
        return {
          userName: null,
          routingId: null,
          roomName: null,
          accessToken: null,
          decodedToken: null
      }

      default:
        return state
  }
}

export default UserReducer
