import React from 'react';
import PropTypes from 'prop-types';

export const ImgResult = ({ img, description }) => (
    <div className="col col-lg-3 col-xs-12" >
        <div className="img-thumbnail imgdiv" >
            <img src={img} alt="planets" className="imgSearch imgNews img-fluid" />
            <div className="text-center" >
                <p className="caption">{description}</p>
            </div>
        </div>
    </div>

)

ImgResult.propTypes = {
    img: PropTypes.string,
    description: PropTypes.string,
}
