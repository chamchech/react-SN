import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts =  [
        {id: 1, message:'Hi, how are you?', likeCount:12},
        {id: 2, message:'It\'s my first post', likeCount: 20},
    ]

    let postsElement = posts.map(p =>  <Post message={p.message} likesCount={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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