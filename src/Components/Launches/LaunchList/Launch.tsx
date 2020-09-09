import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    launch: any
}

const Launch: React.FC<Props> = ({ launch }) => {
    return (
        <div className="col-md-3 mx-4 mt-4" style={{ height: '40vh', backgroundColor: '#1a202c', borderRadius: '5px', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2px', marginTop: '16px' }}>
                <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Mission Name</p>
                <p style={{ marginBottom: '0', color: '#ffffff' }}>{launch.mission_name}</p>
            </div>
            <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0.5rem', marginTop: '0.5rem' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2px' }}>
                <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Launch Year</p>
                <p style={{ marginBottom: '0', color: '#ffffff' }}>{launch.launch_year}</p>
            </div>
            <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0.5rem', marginTop: '0.5rem' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2px' }}>
                <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Flight Number</p>
                <p style={{ marginBottom: '0', color: '#ffffff' }}>{launch.flight_number}</p>
            </div>
            <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0.5rem', marginTop: '0.5rem' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 2px' }}>
                <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Status</p>
                <p style={{ marginBottom: '0', color: '#ffffff' }}>{JSON.stringify(launch.launch_success)}</p>
            </div>
            <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0.5rem', marginTop: '0.5rem' }} />
            <Link to={`/launches/${launch?.flight_number}`}><button className="btn btn-dark mt-2">Read More</button></Link>
        </div>
    )
}

export default Launch;