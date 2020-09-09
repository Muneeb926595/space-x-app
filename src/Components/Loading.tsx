import React from 'react';
import loading from '../loading.gif';

function Loading() {
    return (
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <img style={{ alignSelf: "center", display: 'block' }} src={loading} alt="laoding" />
        </div>
    )
}

export default Loading;