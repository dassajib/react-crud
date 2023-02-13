import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();

    const header = {"Access-Control-Allow-Origin" : "*"}

    const handleClick = (e) => {
        e.preventDefault();
        console.log("happy coding");
        axios.post(
            "https://63ea18e1e0ac9368d64a23ff.mockapi.io/react-crud",{
            name : name,
            email : email,
            header
        })
        .then(() => {
            history.push("/read");
        })
    }

    return (
        <>
            <h4 className="mt-4">Put your name & email to register yourself.</h4>
            <form className='mt-5'>
                <div className="mb-3 mx-5">
                    <label className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3 mx-5">
                    <label className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
                </div>
                
                <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
            </form>  
        </>
    );
};

export default Create;