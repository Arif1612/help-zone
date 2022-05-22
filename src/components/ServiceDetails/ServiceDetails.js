import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const { name, img, courseLength, totalClass } = props.user;
    return (
        <div>
            <div>
                <div class="col serviceDetails">
                    <div class="card cardimg ">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-title"> {name}</h1>
                            <h5>Course Length: {courseLength}</h5>
                            <h5>Total Class: {totalClass}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;