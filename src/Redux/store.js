import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post', likeCount: 20},
                {id: 3, message: 'What you want bro?', likeCount: 10},
                {id: 4, message: 'Here I am', likeCount: 6},
            ],
            newPostText: 'chamsdigital.fr'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'I like React'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'I like cakes'},
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
        },
        sidebar: {}

    }, // _ = private
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer le pattern (publisher-subscriber)
    },
    dispatch(action) {

//j'ai du utiliser la fonction reducer pour refactoriser le code car le .dispatch a mon avis sera enorme
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state); //notifaction des inscriptions

        /*  if (action.type === 'ADD-POST') {
              let newPost = {
                  id: 5,
                  message: this._state.profilePage.newPostText,
                  likesCount: 0
              };
              this._state.profilePage.posts.push(newPost);
              this._state.profilePage.newPostText = '';
              this._callSubscriber(this._state);
          } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
              this._state.profilePage.newPostText = action.newText;
              this._callSubscriber(this._state);
          } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
              this._state.dialogsPage.newMessageBody = action.body;
              this._callSubscriber(this._state);
          } else if (action.type === 'SEND_MESSAGE') {
              let body = this._state.dialogsPage.newMessageBody;
              this._state.dialogsPage.newMessageBody = '';
              this._state.dialogsPage.messages.push({id: 7, message: body});
              this._callSubscriber(this._state);
          }*/
    }
}

/* addPost() {
     let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0
     };

     this._state.profilePage.posts.push(newPost);
     this._state.profilePage.newPostText = '';
     this._callSubscriber(this._state);
 },
 updateNewPostText(newText){

     this._state.profilePage.newPostText = newText;
     this._callSubscriber(this._state);

 },*/

/*export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}*/

export default store
window.store = store; /*pour afficher les changement sur le navigateur dans la console *!/*/