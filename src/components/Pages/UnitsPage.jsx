import React from "react";
import UnitCard from "../UnitCard/UnitCard";

const UnitsPage = () => {
    //Acho que esse cara tem que ser o responsavel por pegar as coisas dele
    //Vai causar o pequeno lag, talvez tenha que adicionar um loading
    return (
        <div className="UnitsPage">
            <UnitCard/>
            <UnitCard/>
        </div>
    )
}

export default UnitsPage