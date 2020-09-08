import React from 'react';
import LaunchDetailsContainer from './Launches/LaunchDetails/index';
import LaunchContainer from './Launches/LaunchList/index';

function Launches() {
    return (
        <div className="container-fluid">
            <div className="row">
                <LaunchContainer />
                <LaunchDetailsContainer />
            </div>
        </div>
    )
}

export default Launches;