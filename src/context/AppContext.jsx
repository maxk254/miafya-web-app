import { createContext } from "react";
import { doctors } from "../assets/assets";
import axios from "axios";
export const AppContext = createContext()

const AppContextprovider = (props) => {

const backendUrl = import.meta.env.VITE_BACKEND_URL

const value ={
  doctors
}

return(
  <AppContext.Provider value={value}>
    {props.children}
  </AppContext.Provider>
  )

}

export default AppContextprovider