const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE';

//State est vide quand la initialisation se fait la premiere fois par redux on lui precise de partir d'un objet initiale
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
        {id: 3, message: 'What you want bro?', likeCount: 10},
        {id: 4, message: 'Here I am', likeCount: 6},
    ],
    newPostText: 'chamsdigital.fr',
    profile:null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 11
            };
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            //return Object.assign({}, state,{newMessageBody: action.body})
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile:action.profile}
        }

        default :
            return state;
        /* this._callSubscriber(this._state);*/
    }
}
//Si notre function retourne juste quelque chose on peux la factoriser ainsi
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;