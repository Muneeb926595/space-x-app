import React from 'react';
import { useLaunchesQueryQuery } from '../../../generated/graphql';
import LaunchesList from './LaunchesList';

const LaunchContainer = () => {
    const { data, error, loading } = useLaunchesQueryQuery();

    if (loading) { return <h1>Loading ....</h1> }

    if (error) { return <h1>Error.. Something went wrong while requesting data</h1> }

    return (
        <LaunchesList data={data} />
    )

}

export default LaunchContainer;