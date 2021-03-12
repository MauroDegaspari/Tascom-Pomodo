import { Bar } from "../components/Bar";
import { DesafioCompletos } from "../components/DesafioCompletos";
import { Profile } from '../components/Profile';
import { Tempo } from "../components/Tempo";

import styles from '../styles/pages/Home.module.css';

import Head from 'next/head'
import { Desafio } from "../components/Desafio";
import { Cabecario } from "../components/Cabecario";


export default function Home() {
  return (
  <div className={styles.Container}>
    <head>
      <title>Tascom | Pomodoro</title>
    </head>
    <Cabecario/>
    <Bar/>
     <section>
       <div>
         <Profile/>
         <DesafioCompletos/>
         <Tempo/>
       </div>

       <div>
         <Desafio/>

       </div>
     </section>
  </div>
  )
}
