import { Button } from '@mui/material'
import React from 'react'
import firebase from 'firebase/compat/app';
import {auth} from './firebase.jsx'

const SignIn = () => {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider(); //グーグルの認証のプロバイダーが使えるようになる
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <Button onClick={signInWithGoogle}>
                グーグルでログインする
            </Button>
        </div>
    )
}

export default SignIn