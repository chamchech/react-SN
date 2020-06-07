let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message:'Hi, how are you?', likeCount:12},
                {id: 2, message:'It\'s my first post', likeCount: 20},
                {id: 3, message:'What you want bro?', likeCount: 10},
                {id: 4, message:'Here I am', likeCount: 6},
            ],
            newPostText: 'chamsdigital.fr'

        },
        dialogsPage:{
            messages: [
                {id: 1, message:'Hi'},
                {id: 2, message:'Yo'},
                {id: 3, message:'Allahu Akbar'},
                {id: 4, message:'What\'s up?'},
                {id: 5, message:'Mamzel'},
                {id: 6, message:'See you'},
            ],
            dialogs: [
                {id: 1, name:'Chamil'},
                {id: 2, name:'Raya'},
                {id: 3, name:'Elina'},
                {id: 4, name:'Deni'},
                {id: 5, name:'Mamzel'},
                {id: 6, name:'Padre'},
            ],
        }

    }, // _ = private
    _callSubscriber () {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; // observer le pattern (publisher-subscriber)
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
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

}

export default store
window.store = store; /*pour afficher les changement sur le navigateur dans la console *!/*/