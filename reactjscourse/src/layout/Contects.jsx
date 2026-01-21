import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export default function Contects() {
    const [value, setValue] = useState('Hello, World!');

    return (
        <MyContext.Provider value={value}>
            <ChildComponent />
        </MyContext.Provider>
    );
}

function ChildComponent() {
    const contextValue = useContext(MyContext);
    return <h1>{contextValue}</h1>;
}