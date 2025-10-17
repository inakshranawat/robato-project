import { AppContext } from "./AppContext";
import { useState } from "react";


export const AppContextProvider  = ({children})=>{


        const [demoOpen, setDemoOpen] = useState(false); 
    const value  = {
          demoOpen, setDemoOpen
    }
     
     return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
     )
}