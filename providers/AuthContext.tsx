import React, {createContext,useContext, useEffect, useState} from 'react'
import { onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "firebase/auth"
import { auth } from '../conf/firebase'


const AuthContext = createContext<any>({})



function AuthContextProvider({children} : {children: React.ReactNode}) {
  const [user,setUser] = useState<any>(null)
  const [loading,setloading] =useState(true)

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      
      user ? 
      setUser({
        uid : user.uid,
        email : user.email,
        displayName : user.displayName
      }) : 
      setUser(null)
      

      setloading(false)
    })

    return () => unSub()
  },[])


  const login = (email:string,password : string)=>{
    const signin =  signInWithEmailAndPassword(auth,email,password)
    return signin
  }
  const signup = (email:string,password : string)=>{
    const signup =  createUserWithEmailAndPassword(auth,email,password)
    return signup
  }
  const logOut =async ()=>{
    const signin = await signOut(auth)
    return signin
  }

  return (
    <AuthContext.Provider value={{auth,signup,login,logOut,user}}>
      {loading ? <h1 style={{textAlign:'center'}}>loading ...!</h1> :children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
export const useAuth =()=> useContext(AuthContext) 