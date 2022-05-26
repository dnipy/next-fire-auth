import { useRouter } from 'next/router'
import { useState,MouseEvent, useEffect } from 'react'
import { useAuth } from '../../providers/AuthContext'


const Login = ()=>{
    const [email,setEmail] = useState< string | number | readonly string[] | undefined >('')
    const [password,setPassword] = useState< string | number | readonly string[] | undefined >('')
    const router = useRouter()

    const {login,user} = useAuth()

    useEffect(()=>{
        if(user){
            router.replace('/auth/dashbord')
        }
    },[])

    const handleSignUp = async (e:MouseEvent)=>{
        e.preventDefault()

        try {
            await login(email,password)
            console.log(user);
            router.replace('/auth/dashbord')

            
        } catch (error) {
            alert(error)
        }
    }
    return(
        <div className="page">
            <div>
                <h1>sign in</h1>
                <br />
                <form>
                    <input placeholder="Your Gmail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                
                    <button onClick={handleSignUp}>
                        send
                    </button>
                </form>
                <br />
                <a href="/auth/signup">creat-account?</a>
            </div>
        </div>
    )
}

export default Login