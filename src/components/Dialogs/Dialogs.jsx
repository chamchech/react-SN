import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";


const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>,) /*Massive qui permet d'afficher tous les elements */
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    /*let newPostElement = React.createRef();*/

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <h3>Posts</h3>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' value={newMessageBody}
                                  onChange={onNewMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                        {/*pas faire ceci () => {alert('chamil')}*/}
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