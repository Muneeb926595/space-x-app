import React from 'react';
import Launch from './Launch';

interface Props {
    data: any;
}

const LaunchesList: React.FC<Props> = ({ data }) => {

    return (
        <React.Fragment>
            {data.launches.map((launch: any) => {
                if (launch.flight_number > 12) {
                    return (
                        <Launch key={launch.flight_number} launch={launch} />
                    )
                }
                else return false;
            })}
        </React.Fragment>
    )
}

export default LaunchesList;