import React from 'react';
import LaunchDetails from '../LaunchDetails/index';

interface Props {
    data: any;
}

const LaunchesList: React.FC<Props> = ({ data }) => {

    return (
        <div className="col-md-3" style={{ backgroundColor: 'white', height: '85vh', overflowX: 'hidden', overflowY: 'auto', marginTop: '14px' }}>
            <ol className="mt-3 container-fluid" style={{ padding: '0', margin: '0' }}>
                {data.launches.map((launch: any) => {
                    return (
                        <a className="btn btn-outline-primary d-flex" key={launch.flight_number}>{launch.mission_name}</a>
                    )
                })}
            </ol>
        </div>
    )
}

export default LaunchesList;