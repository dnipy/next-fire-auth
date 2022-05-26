import { useState } from "react"

const AuthForm = ()=>{
   
    const submitSend = ()=>{

    }

    return(
        <form>
            <input placeholder="Your Gmail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
        
            <button>
                send
            </button>
        </form>
    )
}


export default AuthForm