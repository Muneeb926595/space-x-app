import React from 'react';
interface Props {
    data: any;
}

const LaunchesList: React.FC<Props> = ({ data }) => {

    return (
        <div className="col-md-3" style={{ backgroundColor: '#ffffff' }}>
            <ol className="mt-3 container-fluid">
                {data.launches.map((launch: any) => {
                    return (
                        <a className="btn btn-outline-primary d-flex px-5">{launch.mission_name}</a>
                    )
                })}
            </ol>
        </div>
    )
}

export default LaunchesList;