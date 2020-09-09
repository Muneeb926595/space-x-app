import React from 'react';
import { useLaunchInfoQuery } from '../../../generated/graphql';
import LaunchDetails from './LaunchDetails';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';

const LaunchDetailsContainer = () => {
    const { id } = useParams();
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: `${id}` } });

    if (loading) { return <Loading /> }

    if (error) { return <h1>Error.. Something went wrong while requesting data</h1> }

    return (
        <LaunchDetails data={data} />
    )
}

export default LaunchDetailsContainer;