import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://63ea18e1e0ac9368d64a23ff.mockapi.io/react-crud")
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    }

    const handleDelete = (id) => {
        axios.delete(`https://63ea18e1e0ac9368d64a23ff.mockapi.io/react-crud/${id}`)
            .then(() => {
                getData();
            })
    }

    const saveToLocalStorage = (id, email, name) => {
        localStorage.setItem("id", id);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
    }


    useEffect(() => {
        getData();
    },[])


    return (
        <div>
            <h2 className="mt-4">Stored Data's</h2>
            <table className="table m-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map(eachData => {
                        return(
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button
                                                    onClick={()=> 
                                                        {saveToLocalStorage(eachData.id,eachData.email,eachData.name)}
                                                    }
                                                    className="btn btn-success mx-1">Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => {handleDelete(eachData.id)}}
                                                className="btn btn-danger mx-1">Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        );
                    })
                }
            </table>
        </div>
    );
};

export default Read