import { createContext , useState } from "react";

export const AppContext = createContext(); // createContext() creates a new context object that will be used to share state across multiple components.

  const AppContextProvider = (props)=>{
    const [user,setUser] = useState(true);

    const [showLogin , setShowLogin] = useState(false);

    const value = {
        user , setUser , showLogin ,setShowLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;