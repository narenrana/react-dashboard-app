import React, { PropTypes } from 'react';
import image from './../../service_data/images/loading_ring_2.gif';
import CircularProgress from 'material-ui/CircularProgress';

let material = true;
const Loading = ({loading}) => {
    return (
        <div>
            {loading ?
                <div className="loading-image">
                    {material ?
                        <CircularProgress size={200} thickness={20} />
                        :
                        <img src={image} alt="Loading..." />
                    }
                </div>
                : null}
        </div>
    );
};

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loading;
