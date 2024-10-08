import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of personal details
interface PersonalDetails {
  name: string,
  email:string;
  role:string;
    routeName:string;
    address:string;
    area_pin_code:string;
    deliveryInstructions:string;
    phoneNumber:number;
}

interface PersonalDetailsContextProps {
  personalDetails: PersonalDetails;
  setPersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetails>>;
}

const defaultPersonalDetails: PersonalDetails = {
  name: '',
  email:'',
  role:'',
    routeName:'',
    address:'',
    area_pin_code:'',
    deliveryInstructions:'',
    phoneNumber:0
  // Add more fields as necessary
};
// Create the context with an undefined initial value
const PersonalDetailsContext = createContext<PersonalDetailsContextProps | undefined>(undefined);
const PersonalDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(defaultPersonalDetails);

  return (
    <PersonalDetailsContext.Provider value={{ personalDetails, setPersonalDetails }}>
      {children}
    </PersonalDetailsContext.Provider>
  );
};

 const usePersonalDetails = () => {
  const context = useContext(PersonalDetailsContext);
  if (!context) {
    throw new Error('usePersonalDetails must be used within a PersonalDetailsProvider');
  }
  return context;
};
export { PersonalDetailsProvider, usePersonalDetails };