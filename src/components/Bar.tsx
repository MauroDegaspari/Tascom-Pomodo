import styles from '../styles/components/Bar.module.css'

export function Bar(){
    return(
        <header className={styles.Bar}>
            <span>0 xp</span>
            <div>
                <div style={{ width:'50%'}} />
                <span className={styles.porcentagemXp} style={{left: '50%'}}> 300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}