import { Bar } from "../components/Bar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
  <div className={styles.Container}>
    <Bar/>
     <section>
       <div>
          <Profile/>
       </div>

       <div>

       </div>
     </section>
  </div>
  )
}
