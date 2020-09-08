import React from 'react';

interface Props {
    data: any;
}

const Rocket: React.FC<Props> = ({ data }) => {
    return (
        <div className="container" style={{ height: '60vh', marginBottom: '4rem', marginTop: '40px', boxShadow: '1px 1px 10px ', borderRadius: '10px' }}>
            <div className="row">
                <div className="col-md-4 py-4">
                    <img className="col-12" src={data.flickr_images[0]} alt="rocket_img" style={{ height: '52vh', borderRadius: '10px' }} />
                </div>
                <div className="col-md-8 mt-4">
                    <h2 style={{ color: '#0693FB' }}>{data.rocket_name}</h2>
                    <div className="d-flex">
                        <p style={{ color: '#0693FB' }}>DESCRIPTION </p> |
                        <p style={{ color: '#A7A9AC' }}>OVERVIEW </p> |
                        <p style={{ color: '#A7A9AC' }}>ENGINES</p>
                    </div>
                    <p style={{ color: '#ffffff' }}>{data.description}
                    </p>
                    <div className="d-flex mt-5" style={{ justifyContent: 'space-between' }}>
                        <p style={{ color: '#A7A9AC', marginBottom: '0' }}>First Flight</p>
                        <p style={{ color: '#ffffff', marginBottom: '0' }}>{data.first_flight}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC' }} />
                    <div className="d-flex mt-1" style={{ justifyContent: 'space-between' }}>
                        <p style={{ color: '#A7A9AC', marginBottom: '0' }}>Cost Per Launch</p>
                        <p style={{ color: '#ffffff', marginBottom: '0' }}>{data.cost_per_launch}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rocket;