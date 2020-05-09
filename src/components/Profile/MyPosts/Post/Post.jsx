import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThuB5b0TO6F40mF3AZ0bvBXpCiwXuJLbTb9W2a_UPBBnh3A7mN&usqp=CAU' />
           { props.message}

        <div>
            <span>Like</span> {props.likesCount}
                
            </div>
        </div>
    )
}

export default Post;