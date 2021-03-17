import { createContext, ReactNode } from "react";

interface TempoContextData{

}

interface TempoProviderProps{
    children:ReactNode; 
}

const TempoContext = createContext({} as TempoContextData);

export function TempoContextProvider({ children }:TempoProviderProps){
    return(
        <TempoContext.Provider 
        value={
            {}
            }>
            {children}
        </TempoContext.Provider>
    );
}