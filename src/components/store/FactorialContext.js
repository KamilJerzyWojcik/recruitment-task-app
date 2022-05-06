import {createContext} from "react";

const FactorialContext = createContext({
    numbers: [],
    addNumber: number => {}
});

export default FactorialContext;