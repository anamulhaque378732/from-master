import { useContext } from "react";
import Cousin from "../Cuasin/Cousin";
import { MoneyContext } from "../Dada/Dada";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <p>Aunty</p>
            <section className="flex">
                <Cousin name={'Anamul'}></Cousin>
                <Cousin name={'sumi'}></Cousin>

            </section>
            <p>Money : {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk </button>
        </div>
    );
};

export default Aunty;