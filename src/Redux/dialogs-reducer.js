const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Allahu Akbar'},
        {id: 4, message: 'What\'s up?'},
        {id: 5, message: 'Mamzel'},
        {id: 6, message: 'See you'},
    ],
    dialogs: [
        {id: 1, name: 'Chamil'},
        {id: 2, name: 'Raya'},
        {id: 3, name: 'Elina'},
        {id: 4, name: 'Deni'},
        {id: 5, name: 'Mamzel'},
        {id: 6, name: 'Padre'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, //spread copy
                newMessageBody: action.body
                //messages:[...state.messages] on ne modifier pas le text du coup pas la peine de copier
            };
        case SEND_MESSAGE:
            let body  = state.newMessageBody;
            return {
                ...state,//spread copy
                newMessageBody: '',
                messages:[...state.messages,{id: 7, message: body}] // par contre ici on modifie
            };
        default:
            return state;
    }
       /* this._callSubscriber(this._state);*/
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;