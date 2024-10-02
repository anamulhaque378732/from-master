

const ReusableForm = ({ formTitle, handleSubmit, SubmitBtnText = "Submit", children }) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        };
        handleSubmit(data)
    }


    return (
        <div>

            {
                children
            }
            <form onSubmit={handleLocalSubmit}>

                <input type="text" name="name" id="" /><br /><br />

                <input type="email" name="email" id="" /><br /><br />

                <input type="number" name="phone" id="" /><br /><br />

                <input type="submit" value={SubmitBtnText} /><br /><br />


            </form>
        </div>
    );
};

export default ReusableForm;