

const SimpleFrom = () => {

    const handleSubmit = e => {
        e.preventDefault();
        
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
      

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" id="" /><br /><br />
                <input type="email" name="email" id="" /><br /><br />
                <input type="number" name="phone" id="" /><br /><br />

                <input type="submit" value="Submit"   /><br /><br />


            </form>
        </div>
    );
};

export default SimpleFrom;