
import React, { Children, createContext, useContext, useState } from "react";

const Choice = createContext();

export const useChoice = () => useContext(Choice);

export const ChoiceProvider = ({ children }) => {
    const [aiHelp, setAiHelp] = useState(null);

    return (
        <Choice.Provider value={{ aiHelp, setAiHelp }}>
            {children}
        </Choice.Provider>
    )
}

