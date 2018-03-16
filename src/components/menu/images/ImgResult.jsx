import React from 'react';

export const ImgResult = ({ img, description }) => (
    <div className="col col-lg-3" >
        <div className="img-thumbnail imgdiv" >
            <img src={img} alt="planets" className="imgSearch imgNews img-responsive" />
            <div className="text-center" >
                <p className="caption">{description}</p>
            </div>
        </div>
    </div>
   
)