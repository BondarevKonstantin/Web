import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { withApiService } from '../hoc'

import ModelList from '../model-list'

import Row from '../row';
import { ModelDetails } from '../details';
import PopupDataset from "../popup-dataset";

const ModelPage = (props) => {

    let { history, match } = props
    const { id } = match.params

    const [popupVisibility, onToggleVisibility] = useState('invisible')

    return (
        <div className="model-page">
            <Row
                left={<ModelList
                    userId={props.userId}
                    onItemSelected={(id) => history.push(id)}
                />}

                right={<ModelDetails
                    itemId = {id}
                    onUseItem={() => onToggleVisibility('visible')}/>}
            />
            {/*<PopupDataset popupVisibility={popupVisibility} onToggleVisibility={onToggleVisibility}/>*/}
        </div>
    );
};

export default withApiService()(withRouter(ModelPage));
