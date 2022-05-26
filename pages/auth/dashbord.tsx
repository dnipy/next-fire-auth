import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "../../providers/AuthContext"



const DashBord = ()=>{
    const {user} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if (!user){
            router.replace('/auth/login')
        }
    },[user])
    return(
        <div className="page">
            <div>
                {user? 'dashbord' : 'redirecting...'}
            </div>
        </div>
    )
}

export default DashBord