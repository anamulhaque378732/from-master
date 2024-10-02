import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Dada.css'
import { createContext, useState } from "react";

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Dada = () => {
    const asset = 'Diamond';
    const [money, setMoney] = useState(1000)
    return (
        <div className="dada">
            <h2>Grandpa</h2>
            <p>Net money : {money}</p>
            < MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Gold">
                    <section className=" flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div >
    );
};

export default Dada;

/**
 * 1. create a context export it
 * 2. add provider for the context with a value , value could be anything
 * 3. use context to access value in the context api
 */