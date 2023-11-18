import React, { useEffect, useState } from 'react'
import SignOut from './SignOut.jsx'
import { db, auth } from './firebase.jsx'
import SendMessage from './SendMessage.jsx';

const Line = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    })
  }, []) //第二引数に空の配列を置くと、マウント時の一回だけuseEffectを実行する。

  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            {/*三項間演算子の真か偽かでクラスの切り替えができる（レイアウトを変える）*/}
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line