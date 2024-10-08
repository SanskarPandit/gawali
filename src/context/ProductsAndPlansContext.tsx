import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ProductsAndPlans{
    products: any[];
    plans: any[];
  }

  interface ProductsAndPlansContextProps {
   productsAndPlans: ProductsAndPlans;
    setProductsAndPlans: React.Dispatch<React.SetStateAction<ProductsAndPlans>>;
  }
  const defaultProductAndPlans: ProductsAndPlans = {
    products:[],
    plans:[]
  };

  
const ProductsAndPlansContext = createContext<ProductsAndPlansContextProps|undefined>(undefined);

  const  ProductsAndPlansProvider: React.FC<{ children: ReactNode }>  =({children})=>{
    const [productsAndPlans, setProductsAndPlans] = useState<ProductsAndPlans>(defaultProductAndPlans);
    return(
      <ProductsAndPlansContext.Provider value={{productsAndPlans,setProductsAndPlans}}>
        {children}
      </ProductsAndPlansContext.Provider>
    )
  }

  const useProductsAndPlans = () => {
    const context = useContext(ProductsAndPlansContext);
    if (!context) {
      throw new Error('usePersonalDetails must be used within a PersonalDetailsProvider');
    }
    return context;
  };
export {ProductsAndPlansProvider,useProductsAndPlans}