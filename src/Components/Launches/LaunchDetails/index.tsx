import React from 'react';
import { useLaunchInfoQuery } from '../../../generated/graphql';
import LaunchDetails from './LaunchDetails';

const LaunchDetailsContainer = () => {
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: '15' } });

    if (loading) { return <h1>Loading ....</h1> }

    if (error) { return <h1>Error.. Something went wrong while requesting data</h1> }

    return (
        <LaunchDetails data={data} />
    )
}

export default LaunchDetailsContainer;