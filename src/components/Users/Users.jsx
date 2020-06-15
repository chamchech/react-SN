import React from "react";
import s from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers([

            {
                id: 1,
                photoUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.nautiljon.com%2Fimages%2Fjeuxvideo_persos%2F00%2F30%2Fkratos_3203.jpg&sp=1592232818T2a9d84a290fea471cc34e1e2d08a75886b700f6338b62d947a737b41b5f1b38d',
                followed: false,
                fullName: 'Chamil',
                status: 'La illaha illah Allah',
                location: {city: 'Grozny', country: 'Chechnya'}
            },
            {
                id: 2,
                photoUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.nautiljon.com%2Fimages%2Fjeuxvideo_persos%2F00%2F30%2Fkratos_3203.jpg&sp=1592232818T2a9d84a290fea471cc34e1e2d08a75886b700f6338b62d947a737b41b5f1b38d',
                followed: true,
                fullName: 'Deni',
                status: 'I love Roblox',
                location: {city: 'Toulouse', country: 'Chechnya'}
            },
            {
                id: 3,
                photoUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.nautiljon.com%2Fimages%2Fjeuxvideo_persos%2F00%2F30%2Fkratos_3203.jpg&sp=1592232818T2a9d84a290fea471cc34e1e2d08a75886b700f6338b62d947a737b41b5f1b38d',
                followed: false,
                fullName: 'Raya',
                status: 'Je veux les chips',
                location: {city: 'Strasbourg', country: 'France'}
            },
            {
                id: 4,
                photoUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.nautiljon.com%2Fimages%2Fjeuxvideo_persos%2F00%2F30%2Fkratos_3203.jpg&sp=1592232818T2a9d84a290fea471cc34e1e2d08a75886b700f6338b62d947a737b41b5f1b38d',
                followed: true,
                fullName: 'Elina',
                status: 'Je suis une batanik',
                location: {city: 'Kalouga', country: 'Russia'}
            },
        ]
    )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto} alt={'kratos'}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;