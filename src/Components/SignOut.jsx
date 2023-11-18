import React from 'react'
import { Button } from '@mui/material'
import { auth } from '../Components/firebase.jsx'
import { Call } from '@mui/icons-material'

const SignOut = () => {
    return (
        <div className="header">
            <Button style={{color: "white", fontSize: "15px"}} onClick={() => auth.signOut()}>サインアウト</Button>
            <h3>{auth.currentUser.displayName}</h3>
            <Call />
        </div>
    )
}

export default SignOut