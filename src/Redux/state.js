import {rerenderEntireTree} from "../render";

let state = {
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

}

window.state = state; /*pour afficher les changement sur le navigateur dans la console *!/*/

 export let addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

     state.profilePage.posts.push(newPost);
     state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
 state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}

export default state