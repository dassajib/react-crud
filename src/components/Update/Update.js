import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://63ea18e1e0ac9368d64a23ff.mockapi.io/react-crud/${id}`,{
            name : name,
            email : email,
        })
        .then(() => {
            history.push("/read");
        })
            
    }

    return (
        <>
            <h2 className="mt-4">Update your info</h2>
            <form className='mt-5'>
                <div className="mb-3 mx-5">
                    <label className="form-label">Name</label>
                    <input onChange={(e)=> setName(e.target.value)} type="text" value={name} className="form-control"/>
                </div>

                <div className="mb-3 mx-5">
                    <label className="form-label">Email address</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" value={email} className="form-control"/>
                </div>
                
                <button onClick={handleUpdate} type="submit" className="btn btn-primary">Update</button>
            </form>  
        </>
    );
};

export default Update;