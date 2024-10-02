import useInputState from "../../hooks/useInputState";



const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni');
    const emailState = useInputState('xdv@fghdjh')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('from data', emailState.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /><br /><br /> */}
                <input {...emailState} type="email" name="email" id="" /><br /><br />
                <input type="password" name="password" id="" /><br /><br />

                <input type="submit" value="Submit" /><br /><br />


            </form>



        </div>
    );
};

export default HookForm;