import { createContext, useState } from "react";


const AppContext = createContext({})


export const AppContextProvider =({children})=>{

    const [signInModal, setSignInModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)
    return (
    <AppContext.Provider  value={{ signInModal, setSignInModal, signUpModal, setSignUpModal }}>
        {children}
    </AppContext.Provider>)
}