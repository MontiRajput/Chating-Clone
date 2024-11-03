import React from 'react';

function Details() {
    return ( 
        <div className='container m-5'>
            <div className='row'>
                <div className='col-5 text-center'>
                    <img src='media/images/contact.png' height="200px" style={{borderRadius:"50%"}}/>
                </div>
                <div className='col-7 p-4'>
                    <h1>@Username</h1>
                    <h3 className='p-3'>Name</h3>
                    <p className='p-3'>Bio here...</p>
                </div>
            </div>
        </div>
     );
}

export default Details;