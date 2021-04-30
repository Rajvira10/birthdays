import { Link } from 'react-router-dom';

const People = ({peeps}) => {

    return (
        <div className="people-list">
            {/* <img src="" alt=""/> */}
            {peeps.map((peep)=>(
                <div className="name" key={peep.id}>
                    <Link to = {`/${peep.id}`}>
                        <h3>{peep.name}</h3>
                        <p>{peep.age} years</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default People
