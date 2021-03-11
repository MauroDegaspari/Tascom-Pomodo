import styles from '../styles/components/Tempo.module.css'

export function Tempo(){
    return(
        <div className={styles.tempoContainer}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
        </div>
    );
}