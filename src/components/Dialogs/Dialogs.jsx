import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>,) /*Massive qui permet d'afficher tous les elements */
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <h3>Posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button> {/*pas faire ceci () => {alert('chamil')}*/}
                    </div>
                </div>
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