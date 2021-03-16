import '../styles/global.css'

import {DesafioProvider} from '../contexts/DesafioContext';
 
function MyApp({ Component, pageProps }) {
  return (
    <DesafioProvider>
      <Component {...pageProps} />
      </DesafioProvider>
           
  )
}  
export default MyApp
