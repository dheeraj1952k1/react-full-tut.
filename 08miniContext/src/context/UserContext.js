import React from "react";


const UserContextP = React.createContext()


export default UserContextP;


/*
1. createContext is a method just like useState()
2. context give a major thing: Provider  i.e it provide a variable
3. we use that Provider as a rapper
like 
<UserContext>
     <Login/>
     <Card>
         <Data/>
     </Card>
<UserContext/>


after rapping it becomes a provider::i.e  koi bhi ho ab jitne hai sbko above global context i.e UserContextP se access 
mil jayeaga
 */

