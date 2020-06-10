import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p =>  <Post message={p.message} likesCount={p.likeCount}/>)

    let newPostElement = React.createRef();

   /* Faire de cette facon*/
    let addPost = () => {
        //props.addpost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text)
       /* let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};*/
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button> {/*pas faire ceci () => {alert('chamil')}*/}
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
             {/*   <Post message={postData[0].message} likesCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likeCount}/>*/}
            </div>
        </div>
    )
}

export default MyPosts;