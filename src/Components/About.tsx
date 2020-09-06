import React from 'react';

function About() {
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center', margin: '50px auto', color: '#ffffff' }}>About <span style={{ color: '#0693FB' }}>SpaceX</span></h2>
            <div className="row">
                <div className="col-md-6" style={{ textAlign: 'justify', color: '#ffffff' }}>
                    <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft.
                    The company was founded in 2002 to revolutionize space technology, with the
                    ultimate goal of enabling people to live on other planets.SpaceX is an open
                    source web application for viewing future and past SpaceX launches.This website is
                    design and develop by Muneeb Ur Rehman.
                </p>
                </div>
                <div className="col-md-6">
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Headquaters</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>Rocket Road, Hawthorne, California</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Founded</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>2002</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Founder / CEO / CTO</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>Elon Musk</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>COO</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>Gwynne Shotwell</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>CTO Propulsion</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>Tom Muelle</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Employees</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>7000</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                        <p style={{ marginBottom: '0', color: '#A7A9AC' }}>Valuation</p>
                        <p style={{ marginBottom: '0', color: '#ffffff' }}>$ 27,500,000,000</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                </div>
            </div>
        </div>
    )
}

export default About;