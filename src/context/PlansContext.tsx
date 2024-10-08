import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Plan{
    activePlans:string;
    availablePlans:any[];
}

interface PlansContextProps{
   plan :Plan,
   setPlan:React.Dispatch<React.SetStateAction<Plan>>; 
}
const defaultPlan : Plan={
    activePlans:'',
    availablePlans:[],
}
const PlanContext = createContext<PlansContextProps|undefined>(undefined);

const PlanProvider : React.FC<{children:ReactNode}> = ({children})=>{
    const [plan,setPlan] = useState<Plan>(defaultPlan);
    return(
        <PlanContext.Provider value={{plan,setPlan}}>
            {children}
        </PlanContext.Provider>
    )
}

const usePlan = ()=>{
    const context = useContext(PlanContext);
    if (!context) {
        throw new Error('usePlanContext must be used within a PlanContextProvider');
      }
      return context;
}

export{PlanProvider,usePlan}