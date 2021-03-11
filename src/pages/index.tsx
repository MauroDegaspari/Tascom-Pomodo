import { Bar } from "../components/Bar";
import { DesafioCompletos } from "../components/DesafioCompletos";
import { Profile } from '../components/Profile';
import { Tempo } from "../components/Tempo";

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
  <div className={styles.Container}>
    <Bar/>
     <section>
       <div>
          <Profile/>
         <DesafioCompletos/>
         <Tempo/>
       </div>

       <div>

       </div>
     </section>
  </div>
  )
}
