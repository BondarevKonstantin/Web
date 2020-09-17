import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
    filterModelData,
    filterDatasetData,
} from '../../actions';

class SearchPanel extends Component {

    onChange = (event) => {
        const target = event.target.value
        switch (this.props.filter) {
            case 'models':
                this.props.filterModelData(this.props.models, target)
                break
            case 'datasets':
                this.props.filterDatasetData(this.props.datasets, target)
        }

    };

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Введите значение для поиска"
                    onChange={ this.onChange }/>
        );
    };
}

const mapStateToProps = ({
    modelList: { models },
    datasetList: { datasets }}) => {
return { models, datasets };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filterModelData: filterModelData,
        filterDatasetData: filterDatasetData,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
