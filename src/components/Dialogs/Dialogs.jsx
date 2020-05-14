import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs =  [
        {id: 1, name:'Chamil'},
        {id: 2, name:'Raya'},
        {id: 3, name:'Elina'},
        {id: 4, name:'Deni'},
        {id: 5, name:'Mamzel'},
        {id: 6, name:'Padre'},
        ]

    let messages =  [
        {id: 1, message:'Hi'},
        {id: 2, message:'Yo'},
        {id: 3, message:'Allahu Akbar'},
        {id: 4, message:'What\'s up?'},
        {id: 5, message:'Mamzel'},
        {id: 6, message:'See you'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>,) /*Massive qui permet d'afficher tous les elements */
    let messagesElements = messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
            </div>

            <div className={s.messages}>
                {messagesElements}
              {/*  <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;