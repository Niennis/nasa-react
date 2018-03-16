import React from 'react';


export const DayResult = ({ img, title, date, description }) => (
    <div className="container">
        <h1 className="display-4 text-center titleday">Image of the day</h1>
        <img src={img} alt="imgDay" className="img-responsive mx-auto imgDay" />
        <hr className="my-4" />
        <h3 className="display-5">{title}</h3>
        <h4 className="display-6">{date}</h4>
        <p>{description}</p>
    </div>
)