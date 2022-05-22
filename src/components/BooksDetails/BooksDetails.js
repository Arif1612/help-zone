import React from 'react';

const BooksDetails = (props) => {
    const { name, img, Class } = props.user;
    return (
        <div>
            <div>
                <div class="col serviceDetails">
                    <div class="card cardimg ">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-title"> {name}</h1>
                            <h5>CLass: {Class}</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;