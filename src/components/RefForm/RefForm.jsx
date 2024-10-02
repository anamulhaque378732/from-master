import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null)
    useEffect(() => {
        nameRef.current.focus()
    }, [])


    const handleSubmit = e => {
        e.preventDefault();

        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);

    };






    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input ref={nameRef} type="text" defaultValue={'rojoni'} name="name" id="" /><br /><br />
                <input ref={emailRef} type="email" defaultValue={'rojoni@sojoni'} name="email" id="" /><br /><br />
                <input ref={phoneRef} type="number" name="phone" id="" /><br /><br />

                <input type="submit" value="Submit" /><br /><br />


            </form>
        </div>
    );
};

export default RefForm;