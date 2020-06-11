import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

   /* Faire de cette facon*/
    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button> {/*pas faire ceci () => {alert('chamil')}*/}
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