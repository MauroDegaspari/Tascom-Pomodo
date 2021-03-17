import { useContext } from 'react';
import { DesafioContexts } from '../contexts/DesafioContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const {level} = useContext(DesafioContexts);

    return(
        <div className={ styles.profileContainer}>
            <img src="http://github.com/maurodegaspari.png" alt=""/>
        <div>
            <strong>Mauro Degaspari</strong>
            <p>
            <img src='icons/up-arrow.svg'/>
            level {level}
            </p>

        </div>
        </div>
    );
}