import React from 'react';
import ItemDetails, { Record } from './item-details.js';
import { connect } from 'react-redux';


const DatasetDetails = (props) => {

    let { itemId } = props;

    return(
        <ItemDetails resource="datasets" itemId = {itemId}>
            <Record field="id" label="Id" />
            <Record field="name" label="Навание" />
        </ItemDetails>
    );
};

const mapStateToProps = ({ datasetList: { datasets, selectedDatasetItem } }) => {
    return { selectedDatasetItem, datasets };
};

export default connect(mapStateToProps)(DatasetDetails);
