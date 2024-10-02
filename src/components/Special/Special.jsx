import { useContext } from "react";
import { AssetContext } from "../Dada/Dada";


const Special = ({ name, asset }) => {
    const gift = useContext(AssetContext)


    return (
        <div>
            <h4>Special</h4>
            <p>{name}</p>
            <p> Has :{asset}</p>
            <p>Also has : {gift}</p>
        </div>
    );
};

export default Special;