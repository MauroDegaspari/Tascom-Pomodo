import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={ styles.profileContainer}>
            <img src="http://github.com/maurodegaspari.png" alt=""/>
        <div>
            <strong>Mauro Degaspari</strong>
            <p>leval 1</p>

        </div>
        </div>
    );
}