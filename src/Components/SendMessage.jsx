import React, { useState } from 'react'
import { db, auth } from './firebase.jsx';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const SendMessage = () => {
    const [message, setMessage] = useState("");
    function sendMessage(e) {
        e.preventDefault(); //エンターを押すとレンダリングされる使用を防ぐ

        //auth機能で現在ログインしているユーザからuid,photoURLを取得する。
        const { uid, photoURL } = auth.currentUser;

        //"message"データベースにtextのmessageを追加する
        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(), //firebaseをインポートしてその時刻を取得する
        })
        setMessage("");
    }

    return (
        <div>
            <form onSubmit={sendMessage}>  {/*フォームのエンターキーを押したらonSubmitの{}が行われる*/}
                <div className="sendMsg">
                    <Input
                        style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                        placeholder='メッセージを入力してください。'
                        type='text'
                        onChange={(e) => setMessage(e.target.value)} //要素内で入力を行ったときに発生するイベント
                        value={message}
                    />
                    <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
                </div>
            </form>
        </div>
    )
}

export default SendMessage