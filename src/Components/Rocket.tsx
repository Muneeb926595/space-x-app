import React from 'react';
import Rocketimg from '../Rocket.png';

function Rocket() {
    return (
        <div className="container" style={{ height: '50vh', marginBottom: '4rem', marginTop: '20px' }}>
            <div className="row">
                <div className="col-md-4 mt-3">
                    <div style={{ backgroundColor: 'red', height: '59vh', marginTop: '10px' }}></div>
                </div>
                <div className="col-md-8 mt-4">
                    <h2 style={{ color: '#0693FB' }}>Falcon 1</h2>
                    <div className="d-flex">
                        <p style={{ color: '#0693FB' }}>DESCRIPTION </p> |
                        <p style={{ color: '#A7A9AC' }}>OVERVIEW </p> |
                        <p style={{ color: '#A7A9AC' }}>ENGINES</p>
                    </div>
                    <p style={{ color: '#ffffff' }}>The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during
                    2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch
                    vehicle to go into orbit around the Earth.
                    </p>
                    <div className="d-flex mt-5" style={{ justifyContent: 'space-between' }}>
                        <p style={{ color: '#A7A9AC', marginBottom: '0' }}>First Flight</p>
                        <p style={{ color: '#ffffff', marginBottom: '0' }}>March 24th, 2006</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div className="d-flex mt-1" style={{ justifyContent: 'space-between' }}>
                        <p style={{ color: '#A7A9AC', marginBottom: '0' }}>Cost Per Launch</p>
                        <p style={{ color: '#ffffff', marginBottom: '0' }}>25000000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rocket;