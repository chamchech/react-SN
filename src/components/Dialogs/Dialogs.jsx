import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Chamil
                </div>
                <div className={s.dialog}>
                    Raya
                </div>
                <div className={s.dialog}>
                    Elina
                </div>
                <div className={s.dialog}>
                    Deni
                </div>
                <div className={s.dialog}>
                    Mamzel
                </div>
                <div className={s.dialog}>
                    Padre
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )

}

export default Dialogs;