import { useState, useEffect } from 'react';
import styles from '../styles/components/Tempo.module.css'


let paraTempo: NodeJS.Timeout;

export function Tempo(){

    /* Javascript do timer */
    const [time, setTime] = useState(0.1 * 60);
    const [isAtivo, setIsAtivo] = useState(false);
    const [hasTermino, setHastermino] = useState(false);

    const minutos = Math.floor(time / 60);
    const segundo = time % 60;

    const [minutoLeft, minutoRight] = String(minutos).padStart(2, '0').split('');
    const [segundoLeft, segundoRight] = String(segundo).padStart(2, '0').split('');

    

    /* Funções de ações para o botão */
    function Start(){
        setIsAtivo(true);
    }

    function Restart(){
        clearTimeout(paraTempo);
        setIsAtivo(false);
        setTime(25 * 60);
    }

    useEffect( () => {
        if (isAtivo && time > 0 ){
           paraTempo = setTimeout(() => {
                setTime(time -1)
            }, 1000)
        } else if(setIsAtivo && time === 0){
            setHastermino(true);
            setIsAtivo(false);
        }

    }, [isAtivo, time]) 

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
                Inicio ciclo
              </button>)
            }
            </>
        )
    } 
        

               

    </div>
    );
}