import { useContext } from 'react';
import { DesafioContexts } from '../contexts/DesafioContext';
import styles from '../styles/components/Bar.module.css'

export function Bar(){
    const {barraDeLevel, proximoNivel} = useContext(DesafioContexts);

    const proximoNivelBar = Math.round((barraDeLevel * 100))/ proximoNivel;
    return(
        <header className={styles.Bar}>
            <span>0 xp</span>
            <div>
                <div style={{ width:`${proximoNivelBar}%`}} />
                <span className={styles.porcentagemXp} style={{left: `${proximoNivelBar}%`}}> {barraDeLevel} xp</span>
            </div>
            <span>{proximoNivel} xp</span>
        </header>
    );
}