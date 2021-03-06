import React from 'react';
import Rocket from './Rocket';

interface Props {
    data: any;
}

const Rockets: React.FC<Props> = ({ data }) => {
    return (
        data.rockets.map((rocket: any) => {
            return (
                <Rocket data={rocket} key={rocket.rocket_name} />
            )
        })
    )
}

export default Rockets;