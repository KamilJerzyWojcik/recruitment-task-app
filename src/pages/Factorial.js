import React from "react";
import FactorialForm from "../components/factorial/FactorialForm";
import FactorialHistory from "../components/factorial/FactrotialHistory";

const Factorial = () => {
    const addToHistoryHandler = (num) => {
        console.log(num)
    };

    return <div>
        <h1>Oblicz siłę</h1>
        <FactorialForm onAddToHistory={addToHistoryHandler}/>
        <FactorialHistory />
    </div>
};

export default Factorial;