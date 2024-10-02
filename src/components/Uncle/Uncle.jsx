import Cousin from "../Cuasin/Cousin";


const Uncle = ({ asset }) => {
    return (
        <div>
            <h5>Uncle</h5>
            <section className="flex">
                <Cousin name={'rafshan'}></Cousin>
                <Cousin asset={asset} name={'sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;