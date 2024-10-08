import React, { createContext, useState, ReactNode,useContext } from 'react';

interface Requests{
    milkQuantityRequests:any[],
    milkQualityComplaints:any[],
    paymentComplaints:any[],
}

interface RequestsContextProps{
    requests:Requests;
    setRequests:React.Dispatch<React.SetStateAction<Requests>>;   
}
const defaultRequest: Requests = {
   milkQuantityRequests:[],
    milkQualityComplaints:[],
    paymentComplaints:[],
  };
  const RequestContext = createContext<RequestsContextProps|undefined>(undefined);

  const useRequests = () => {
    const context = useContext(RequestContext);
    if (!context) {
      throw new Error('RequestContext must be used within a RequestProvider');
    }
    return context;
  };

  const RequestProvider :  React.FC<{ children: ReactNode }> = ({children})=>{
    const [requests,setRequests] = useState<Requests>(defaultRequest);
    return(
        <RequestContext.Provider value={{requests,setRequests}}>
            {children}
            </RequestContext.Provider>
    )
  }
  export {useRequests,RequestProvider}