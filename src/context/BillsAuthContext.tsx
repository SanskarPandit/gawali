import React,{ useState,useContext,ReactNode,createContext } from "react";

interface Bills{
    billedDetails:any[];
    totalOutstanding:number;
    unBilledDetails:any[];
}

interface BillsContextProps{
    bills:Bills,
    setBills:React.Dispatch<React.SetStateAction<Bills>>
}

const defaultBills:Bills={
    billedDetails:[],
    totalOutstanding:0,
    unBilledDetails:[]
}

const BillsContext = createContext<BillsContextProps|undefined>(undefined);

const useBills=()=>{
    const context = useContext(BillsContext);
    if (!context) {
        throw new Error('usePlanContext must be used within a PlanContextProvider');
      }
      return context;
}
const BillsProvider : React.FC<{children:ReactNode}> = ({children})=>{
    const [bills,setBills] = useState<Bills>(defaultBills);
    return(
        <BillsContext.Provider value={{bills,setBills}}>
            {children}
            </BillsContext.Provider>
    )
}
export{BillsProvider,useBills}