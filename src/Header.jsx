import React from 'react';

function Header(){
    return(
        <div className='container-fluid' style={{position:'fixed', backgroundColor:'#109d6c', zIndex:1000, left:0, right:0, top:0, padding:'5px 0', width:'100%'}}>
            <div className='row'>
                <div className='col-md-12' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='header-links' style={{ display: 'flex', gap: '65px', paddingTop: '10px' }}>
                        <a style={{ textDecoration: 'none', color: 'white', fontSize: '29px' }} href='https://www.google.co.uk/'>Home</a>

                        <a style={{ textDecoration: 'none', color: 'white', fontSize: '29px' }} href='https://www.youtube.com/'>Career</a>


                        <a style={{ textDecoration: 'none', color: 'white', fontSize: '29px' }} href='https://www.google.co.uk/'>Blogs</a>
                        <a style={{ textDecoration: 'none', color: 'white', fontSize: '29px' }} href='https://www.google.co.uk/'>About</a>

                        <a style={{ textDecoration: 'none', color: 'white', fontSize: '29px' }} href='https://www.google.co.uk/'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;