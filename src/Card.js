import React from 'react';
import People from './People';
import useFetch from './useFetch';


const Card = () => {
    const {data: peeps} = useFetch('http://localhost:8000/peeps')
    return (
        <div className="card">
            <h1>0 birthdays today</h1>
            <div className="people">
                {peeps && <People peeps={peeps} />}
            </div>
        </div>
    )
}

export default Card     