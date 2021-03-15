import '../styles/global.css'

import {DesafioContexts} from '../contexts/DesafioContexts';
 
function MyApp({ Component, pageProps }) {
  return (
    <DesafioContexts.Provider value='teste'>
      <Component {...pageProps} />
          </DesafioContexts.Provider>
          
  )
}  
export default MyApp
