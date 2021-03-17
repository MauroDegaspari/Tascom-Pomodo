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
    proximoNivel: number;
    subirDeLevel: () => void;
    barraDeLevel: number;
    desafioConcluido: number;
    comecoDesafio: () => void;
    restartDesafio: () => void;
    completadoDesafio: () => void;

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
    const[desafioConcluido, setDesafioConcluido] = useState(0);

    const[ativaDesafio, setAtivaDesafio] = useState(null);
    
    // formula para calcular experiencia do ususario
    const proximoNivel = Math.pow((level + 1) * 4, 2);

    
     
    function subirDeLevel(){
        setLevel(level + 1);
    }

    function restartDesafio(){
        setAtivaDesafio(null);
    }

    function completadoDesafio(){
if (!ativaDesafio){
    return;
}   
    const {amount} = ativaDesafio;
    let exFinal =  barraDeLevel + amount; // variavel let para poder receber outro valor no futuro
    
    if ( exFinal >= proximoNivel){
            exFinal = exFinal - proximoNivel;
        subirDeLevel();

        setBarraDeLevel(exFinal);
        setAtivaDesafio(null);
        setDesafioConcluido(desafioConcluido + 1);
    }

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
                    restartDesafio,
                    subirDeLevel, 
                    barraDeLevel,
                    proximoNivel,
                    completadoDesafio,
                    desafioConcluido,
                    comecoDesafio }}>
            { children}
        </DesafioContexts.Provider>
    )
}