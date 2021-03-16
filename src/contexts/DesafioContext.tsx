import { createContext, ReactNode, useState } from 'react';
import desafios from '../../desafio.json';

//Object com iformações dento dele
interface Desafio{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

// dados que seram retonados dentro do context
interface DesadioContextData{
    level: number;
    subirDeLevel: () => void;
    barraDeLevel: number;
    desafioConcluido: number;
    comecoDesafio: () => void;
    ativaDesafio: Desafio; // object do tipo interface criado referente ao arquico desafio.json
}

// boa pratica é fazer uma tipagem da 'children'
interface DesafioProviderProps{
    children: ReactNode; // elemento 'reactNode' aceita qualquer elemento  filho como children 
}

export const DesafioContexts = createContext({} as DesadioContextData);

export function DesafioProvider({ children }: DesafioProviderProps){
    const[level, setLevel] = useState(1);
    const[barraDeLevel, setBarraDeLevel] = useState(0);
    const[desafioConcluido, serDesafioConcluido] = useState(0);

    const[ativaDesafio, setAtivaDesafio] = useState(null);
     
    function subirDeLevel(){
        setLevel(level + 1);
    }

    function comecoDesafio(){
       
            const desafioRandow = Math.floor(Math.random() * desafios.length);
            const desafio = desafios[desafioRandow];

            setAtivaDesafio(desafio);
        
    }
    return(
        <DesafioContexts.Provider 
            value={{level,
                    ativaDesafio,
                    subirDeLevel, 
                    barraDeLevel,
                    desafioConcluido,
                    comecoDesafio }}>
            { children}
        </DesafioContexts.Provider>
    )
}