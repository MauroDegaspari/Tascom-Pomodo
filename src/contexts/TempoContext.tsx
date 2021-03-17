import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { DesafioContexts } from "./DesafioContext";

interface TempoContextData{
    minutos: number;
    segundos: number;
    isAtivo: boolean;
    hasTermino:boolean;
    Restart: () => void;
    Start: () => void;
}

interface TempoProviderProps{

    children:ReactNode; 
}

export const TempoContext = createContext({} as TempoContextData);

let paraTempo: NodeJS.Timeout;

export function TempoContextProvider({ children }:TempoProviderProps){
    
    const { comecoDesafio } = useContext(DesafioContexts);

    /* Javascript do timer */
    const [time, setTime] = useState(0.1 * 60);
    const [isAtivo, setIsAtivo] = useState(false);
    const [hasTermino, setHastermino] = useState(false);

    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    /* Funções de ações para o botão */
    function Start(){
        setIsAtivo(true);
    }

    function Restart(){
        clearTimeout(paraTempo);
        setIsAtivo(false);
        setTime(0.1 * 60);
        setHastermino(false);
    }

    useEffect( () => {
        if (isAtivo && time > 0 ){
           paraTempo = setTimeout(() => {
                setTime(time -1)
            }, 1000)
        } else if(setIsAtivo && time === 0){
            setHastermino(true);
            setIsAtivo(false);
            comecoDesafio();
            
        }

    }, [isAtivo, time]) 


    return(
        <TempoContext.Provider 
        value={
            {
            minutos,
            segundos,
            isAtivo,
            hasTermino,
            Restart,
            Start
            }
            }>
            {children}
        </TempoContext.Provider>
    );
}