import React from 'react';
import { withRouter } from 'react-router-dom';

import DatasetList from '../dataset-list'
import Row from '../row';
import { DatasetDetails } from '../details';

const DatasetPage = (props) => {

    let { history, match } = props
    const { id } = match.params

    return (
        <Row
            left={<DatasetList
                    userId={props.userId}
                    onItemSelected={(id) => history.push(id)}
            />}
            right={<DatasetDetails itemId={id} />}
        />
    );
};

export default withRouter(DatasetPage);
