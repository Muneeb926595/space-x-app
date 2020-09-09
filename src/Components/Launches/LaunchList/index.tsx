import React from 'react';
import { useLaunchesQueryQuery } from '../../../generated/graphql';
import LaunchesList from './LaunchesList';
import Loading from '../../Loading';

const LaunchContainer = () => {
    const { data, error, loading } = useLaunchesQueryQuery();

    if (loading) { return <Loading /> }

    if (error) { return <h1>Error.. Something went wrong while requesting data</h1> }

    return (
        <LaunchesList data={data} />
    )

}

export default LaunchContainer;