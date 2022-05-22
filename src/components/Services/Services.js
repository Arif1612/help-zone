import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./serviceData.JSON')
            .then(res => res.json())
            .then(data => setUsers(data));
    })

    console.log(users);

    return (
        <div>


            <div className='row row-cols-1 row-cols-md-3 g-4' >
                {
                    users.map(user => <ServiceDetails
                        user={user}
                    >
                    </ServiceDetails>)
                }
            </div>



        </div>
    );
};

export default Services;