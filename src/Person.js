import React from 'react'
import useFetch from './useFetch'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Person = () => {
    const { id } = useParams();
    const {data:peeps} = useFetch('http://localhost:8000/peeps/' + id);
    console.log(peeps.name);
    return (
        <div>
            { peeps &&(
                <div className="person">
                    <h1>{peeps.name}</h1>
                    <h2>Department:  {peeps.dept}</h2>
                    <h3>Birthday:  {peeps.birthday}</h3>
                </div>
            )}
            <Link to="/">
            <div className='butt'> 
                <button className="btn"> GO BACK </button>
            </div>   
            </Link>
        </div>
    );
}

export default Person
