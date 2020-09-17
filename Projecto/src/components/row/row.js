import React from 'react';

import './row.sass'

const Row = ({left, right}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6 details">
                { right }
            </div>
        </div>
    );
};

export default Row;
