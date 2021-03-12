import styles from '../styles/components/Cabecario.module.css'

export function Cabecario(){
    return(
        <div className={styles.cabecarioContainer}>
            <img width="160px" height="50px" src="icons/logo_tascom.png" alt="logo"/>
        </div>
    );
}