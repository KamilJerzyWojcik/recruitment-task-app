import React from "react";
import FactorialForm from "../components/factorial/FactorialForm";
import FactorialHistory from "../components/factorial/FactrotialHistory";

const Factorial = () => {
    return <div>
        <h1>Oblicz siłę</h1>
        <FactorialForm />
        <FactorialHistory />
    </div>
};

export default Factorial;