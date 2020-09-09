import React from 'react';

interface Props {
    data: any;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div className="col-12 mt-3" style={{ height: '80vh' }}>
            <div className="row">
                <div className="col-md-6" style={{ paddingLeft: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Mission ID</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.mission_id}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Mission Name</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.mission_name}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Rocket Name</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.rocket.rocket_name}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Launch Year</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.launch_year}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Launch Sucess</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.launch_success ? <p style={{ color: 'green' }}>Sucess</p> : <p style={{ color: 'red' }}>Failed</p>}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Launch Site</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.launch_site.site_name_long}</p>
                    </div>
                    <hr style={{ backgroundColor: '#A7A9AC', marginBottom: '0px' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
                        <p style={{ color: '#A7A9AC' }}>Launch Date</p>
                        <p style={{ maxWidth: '500px', color: '#ffffff' }}>{data.launch.launch_date_local}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ width: '100%', height: '80vh', borderRadius: '5px' }} src={data.launch.links.flickr_images[0]} alt="rocket_image" />
                </div>
            </div>
        </div>
    )
}

export default LaunchDetails;