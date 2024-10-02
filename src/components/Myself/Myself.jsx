import Special from "../Special/Special";


const Myself = ({ asset }) => {
    return (
        <div>
            <h5>Myself</h5>
            <Special asset={asset} name={'Sumona'}></Special>
        </div>
    );
};

export default Myself;