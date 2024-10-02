import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h5>Cousin</h5>
            <p>{name}</p>
            <section>

                {
                    asset && <Special asset={asset}></Special>
                }
                {
                    name === 'sumi' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;