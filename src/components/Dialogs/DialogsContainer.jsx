import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            /*let state = store.getState().dialogsPage;*/
            /*let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>,) /!*Massive qui permet d'afficher tous les elements *!/
              let messagesElements = state.messages.map(m => <Message message={m.message}/>);
              let newMessageBody = state.newMessageBody;
              /*let newPostElement = React.createRef();*/

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                // let body = e.target.value;
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer;