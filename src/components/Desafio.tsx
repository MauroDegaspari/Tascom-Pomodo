import { useContext } from 'react';
import { DesafioContexts } from '../contexts/DesafioContext';
import { TempoContext } from '../contexts/TempoContext';
import styles from '../styles/components/Desafio.module.css'

export function Desafio(){

    //contexts
    const {ativaDesafio, restartDesafio, completadoDesafio} = useContext(DesafioContexts);
    const {Restart} = useContext(TempoContext);

    function acaoConseguir(){
        completadoDesafio();
        Restart();
    }
    function acaoNaoConseguir(){
        restartDesafio();
        Restart();
    }

    return(
        <div className={styles.desafioContainer}>                       
           { ativaDesafio ? (
               <div className={styles.desafioAtivo}>
                   <header>Ganhe {ativaDesafio.amount} XP</header>

                   <main>
                       <img src={`icons/${ativaDesafio.type}.svg`} ></img>
                       <strong>Novo desafio</strong>
                       <p> {ativaDesafio.description} </p>
                   </main>  

                   <footer>
                       <button type="button" className={styles.buttonFalha} onClick={acaoNaoConseguir} >Falhei</button>
                       <button type="button" className={styles.buttonCompletei} onClick={acaoConseguir} >Completei</button>
                   </footer>
               </div>
                ) : (
                <div className={styles.desafioNotAtivo}>
                    <strong> Finalize um desafios para serem completados </strong>
            

                     <p><img src="icons/up-arrow.svg" width="80px" alt="levelUp"></img>
                        Avance de levels completando os desafios.        
                    </p>
                </div>
                             
                )
           
            }
           
        </div>
    )
}