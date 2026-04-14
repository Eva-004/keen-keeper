import React, { createContext, useState } from 'react';


export const FriendsContext = createContext();
const FriendsContextProvider = ({children}) => {
     const [timeLines,setTimeLines] = useState([]);
     const data ={
        timeLines,
        setTimeLines
     }
    return (
       <FriendsContext.Provider value={data}>
        {children}
       </FriendsContext.Provider>
    );
};

export default FriendsContextProvider;