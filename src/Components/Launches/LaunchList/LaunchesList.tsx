import React from 'react';
import { useLaunchesQueryQuery } from '../../../generated/graphql';

function LaunchesList() {
    const { data, loading, error } = useLaunchesQueryQuery();

    if (error) return (<h2>Something went Wrong</h2>)

    if (loading) return (<h2>Loading</h2>)

    return (
        <div className="col-md-3" style={{ height: '91vh', backgroundColor: '#ffffff' }}>

        </div>
    )
}

export default LaunchesList;