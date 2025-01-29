import React from 'react';

function Head() {
    return (
        <div className='container'>
            <div className='row align-items-center' style={{paddingTop:'75px'}}>
                <div className='col-md-6'>
                    <h1 style={{ fontSize: '50px', fontFamily: 'sans-serif', fontWeight: 'bold', paddingTop: '20px' }}>No More <span style={{ color: '#15986b', fontSize: '90px' }}>Food Waste</span></h1>
                    <p style={{fontSize:'25px', fontFamily:'sans-serif'}}>Food waste is a major global issue, leading to environmental damage and resource loss. By planning meals, storing food properly, and sharing excess with those in need, we can reduce waste and promote sustainability. Every small effort counts—let’s save food, save money, and protect our planet! </p>


                </div>
                <div className='col-md-6'>
                    <img src='src/earth.png' alt='earth' style={{ width: '100%', height: 'auto', maxWidth: '600px', display: 'block', margin: '10px auto' }} />


                </div>

            </div>

        </div>
    )
}

export default Head;