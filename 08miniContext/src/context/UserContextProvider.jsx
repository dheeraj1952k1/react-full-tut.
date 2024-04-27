import React from "react";
import UserContextP from "./UserContext";

const UserContextProvider = ({children}) =>{

    const [user, setUser] = React.useState(null)
     return(
        <UserContextP.Provider value={{user, setUser}}>
            {children}

        </UserContextP.Provider>
     )
}  



export default UserContextProvider;