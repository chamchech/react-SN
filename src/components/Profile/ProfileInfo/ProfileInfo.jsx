import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";


const ProfileInfo = () => {
    return <div>
        <div className={s.imgProfile}>
            <img src='https://chamsdigital.fr/wp-content/uploads/2019/07/RKman-3.png'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
  </div>
    </div>
}

export default ProfileInfo;