import React from 'react';

function Home() {
    return (
        <div className="container" style={{ marginTop: '20vh', color: '#ffffff' }}>
            <h3 className="lead" style={{ marginBottom: '2rem' }}>NEXT LAUNCH</h3>
            <div className="row" style={{ backgroundColor: '#22272B', }}>
                <div className="col-md-7" style={{ paddingTop: '30px', paddingLeft: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Missions</p>
                        <p style={{ maxWidth: '500px' }}>Starlink-12 (v1.0)</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Launch Date</p>
                        <p style={{ maxWidth: '500px' }}>September 1st 2020, 5:00:00 am</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Launch Site</p>
                        <p style={{ maxWidth: '500px' }}>Cape Canaveral Air Force Station Space Launch Complex 40</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Rocket</p>
                        <p style={{ maxWidth: '500px' }}>Falcon 9</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" style={{ paddingRight: '40px' }}>
                    <h5 className="lead" style={{ color: '#0693FB', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'normal' }}>PAYLOADS</h5>
                    <div style={{ border: '1px solid #A7A9AC', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                            <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Payload #</p>
                            <p style={{ marginBottom: '0', color: '#ffffff' }}>1</p>
                        </div>
                        <hr style={{ backgroundColor: '#A7A9AC' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                            <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Orbit</p>
                            <p style={{ marginBottom: '0', color: '#ffffff' }}>VLEO</p>
                        </div>
                        <hr style={{ backgroundColor: '#A7A9AC' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                            <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Manufacturer</p>
                            <p style={{ marginBottom: '0', color: '#ffffff' }}>SpaceX</p>
                        </div>
                        <hr style={{ backgroundColor: '#A7A9AC' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                            <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Nationality</p>
                            <p style={{ marginBottom: '0', color: '#ffffff' }}>United States</p>
                        </div>
                        <hr style={{ backgroundColor: '#A7A9AC' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;