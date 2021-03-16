import { useContext } from 'react';
import { DesafioContexts } from '../contexts/DesafioContext';
import styles from '../styles/components/DesafioCompleto.module.css'

export function DesafioCompletos(){
  const {desafioConcluido} = useContext(DesafioContexts);

    return(
        <div className={styles.DesafioCompletoConteiner }>
            <span>Desafios completos</span>
            <span> {desafioConcluido} </span>
        </div>
    );
}