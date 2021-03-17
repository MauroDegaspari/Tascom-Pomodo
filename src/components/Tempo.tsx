import { useContext } from 'react';
import { TempoContext } from '../contexts/TempoContext';
 
import styles from '../styles/components/Tempo.module.css'




export function Tempo(){

    const {minutos, segundos,isAtivo, hasTermino, Restart, Start } = useContext(TempoContext);

    
    const [minutoLeft, minutoRight] = String(minutos).padStart(2, '0').split('');
    const [segundoLeft, segundoRight] = String(segundos).padStart(2, '0').split('');

    

    

    return(
    <div>
        <div className={styles.tempoContainer}>
            <div>
                <span>{minutoLeft}</span>
                <span>{minutoRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{segundoLeft}</span>
                <span>{segundoRight}</span>
            </div>
        </div>

        { hasTermino ? (
        <button disabled className={styles.tempoButton} >
            
               Ciclo concluido
         </button> 
    ) :
        (
            <>
                  { isAtivo ? (
                <button type="button" className={`${styles.tempoButton} ${styles.tempoButtonAtivo}`} onClick={Restart}>
                Abandonar ciclo
                </button> )
                :
                (<button type="button" className={styles.tempoButton} onClick={Start}>
                Iniciar ciclo
              </button>)
            }
            </>
        )
    } 
        

               

    </div>
    );
}