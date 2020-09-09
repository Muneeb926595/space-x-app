import React from 'react';
import { useRocketsQueryQuery } from '../../generated/graphql';
import Rockets from './Rockets';
import Loading from '../Loading';

const RocketsContainer = () => {
    const { data, error, loading } = useRocketsQueryQuery();

    if (loading) { return <Loading /> }

    if (error) { return <h1>Error.. Something went wrong while requesting data</h1> }

    return (
        <Rockets data={data} />
    )

}

export default RocketsContainer;