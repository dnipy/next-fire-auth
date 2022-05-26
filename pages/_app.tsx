import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthContextProvider from '../providers/AuthContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthContextProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </AuthContextProvider>
  ) 
}

export default MyApp
