import React from 'react';

interface Props {
    data: any;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div className="col-md-9 mt-3">
            <h1 style={{ color: '#ffffff' }}>{data.launch.mission_id}</h1>
            <h1 style={{ color: '#ffffff' }}>{data.launch.mission_name}</h1>
            <h1 style={{ color: '#ffffff' }}>{data.launch.rocket.rocket_name}</h1>
            <h1 style={{ color: '#ffffff' }}>{data.launch.launch_year}</h1>
            <h1 style={{ color: '#ffffff' }}>{data.launch.launch_success}</h1>
            <h1 style={{ color: '#ffffff' }}>{data.launch.launch_site.site_name_long}</h1>
            <h1 style={{ color: '#ffffff' }}>{data.launch.launch_date_local}</h1>
            <img style={{ width: '25%', height: '50vh' }} src={data.launch.links.flickr_images[0]} alt="rocket_image" />
        </div>
    )
}

export default LaunchDetails;