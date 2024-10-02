import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [name, setName] = useState('rojoni with sojoni')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 c or longer')
        } else {
            setError('')
            console.log(email, password, name);
        }


    };
    const handleEmailChange = e => {

        setEmail(e.target.value)
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    };
    const handleNameChange = e => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                < input value={name} onChange={handleNameChange} type="text" name="name" id="" /><br /><br />

                <input onChange={handleEmailChange}  

                    type="email" name="email" id="" /><br /><br />

                <input onChange={handlePasswordChange} type="password" name="password" id="" required /><br /><br />

                <input type="submit" value="Submit" /><br /><br />
                {
                    error && <p>{error}</p>
                }
            </form>

        </div>
    );
};

export default StatefulForm;