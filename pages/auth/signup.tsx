import { useRouter } from 'next/router'
import { MouseEvent,useEffect,useState } from 'react'
import { useAuth } from '../../providers/AuthContext'

const SignUp = ()=>{
    const [email,setEmail] = useState< string | number | readonly string[] | undefined >('')
    const [password,setPassword] = useState< string | number | readonly string[] | undefined >('')
    const {signup,user} = useAuth()

    useEffect(()=>{
        console.log(user);
        
    },[])
    const router = useRouter()
    const handleSignUp = async (e:MouseEvent)=>{
        e.preventDefault()

        try {
            await signup(email,password)
            console.log(user);
            router.replace('/auth/dashbord')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="page">
            <div>
                <h1>sign up</h1>
                <br />
                <form>
                    <input placeholder="Your Gmail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                
                    <button onClick={handleSignUp}>
                        send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp