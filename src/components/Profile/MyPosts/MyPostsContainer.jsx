import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                    let state = store.getState();
                    /* Faire de cette facon*/
                    let addPost = () => {
                        //props.addpost();
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        // let text = newPostElement.current.value;
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                        //props.updateNewPostText(text)
                        /* let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};*/
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;