import { createContext, ReactNode, useState } from 'react';


// dados que seram retonados dentro do context
interface DesadioContextData{
    level: number;
    subirDeLevel: () => void;
    barraDeLevel: number;
    desafioConcluido: number;
    comecoDesafio: () => void;
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
     
    function subirDeLevel(){
        setLevel(level + 1);
    }

    function comecoDesafio(){
        return(
            console.log('novo desafio!!')
        );
    }
    return(
        <DesafioContexts.Provider 
            value={{level,
                    subirDeLevel, 
                    barraDeLevel,
                    desafioConcluido,
                    comecoDesafio }}>
            { children}
        </DesafioContexts.Provider>
    )
}