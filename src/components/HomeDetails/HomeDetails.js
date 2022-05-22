import React from 'react';
import './HomeDetails.css'

const HomeDetails = (props) => {
    const { name, img, courseLength, totalClass } = props.user;
    return (
        <div>
            <div class="col paddingNeed">
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
    );
};

export default HomeDetails;