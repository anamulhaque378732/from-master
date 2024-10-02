import { useContext } from "react";
import { MoneyContext } from "../Dada/Dada";


const Brother = () => {
    const [money] = useContext(MoneyContext);

    return (
        <div>
            <p>Money : {money}</p>
            <h5>My  brother</h5>

        </div>
    );
};

export default Brother;