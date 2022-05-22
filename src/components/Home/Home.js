import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./homedata.JSON')
            .then(res => res.json())
            .then(data => setUsers(data));
    })
    // console.log(users);


    return (

        < div >

            {
                users.map(user => <HomeDetails
                    user={user}
                >

                </HomeDetails>)
            }



        </div >
    );
};

export default Home;