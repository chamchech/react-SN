import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";
import {setUserProfile as props} from "../../../Redux/profile-reducer";


const ProfileInfo = () => {
    if (!props.profile ) {

        return <Preloader/>
    }
    return (<div>
        <div className={s.imgProfile}>
            <img src='https://chamsdigital.fr/wp-content/uploads/2019/07/RKman-3.png' alt='logo chams'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            ava + description
  </div>
    </div>
    )
}

export default ProfileInfo;