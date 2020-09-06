import React from 'react';
import LaunchDetails from './Launches/LaunchDetails/LaunchDetails';
import LaunchesList from './Launches/LaunchList/LaunchesList';

function Launches() {
    return (
        <div className="container-fluid">
            <div className="row">
                <LaunchesList />
                <LaunchDetails />
            </div>
        </div>
    )
}

export default Launches;