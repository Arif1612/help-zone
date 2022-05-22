import React, { useEffect, useState } from 'react';
import BooksDetails from '../BooksDetails/BooksDetails';

const Books = (props) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./bookData.JSON')
            .then(res => res.json())
            .then(data => setUsers(data));
    })

    console.log(users);
    return (
        <div>

            <div className='row row-cols-1 row-cols-md-3 g-4' >
                {
                    users.map(user => <BooksDetails
                        user={user}
                    >
                    </BooksDetails>)
                }
            </div>
        </div>
    );
};

export default Books;