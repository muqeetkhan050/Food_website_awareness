import React, { useState } from 'react';

function Question() {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className='container' style={{
            color:'#109d6c', 
            fontFamily:'sans-serif', 
            border:'1px solid black', 
            borderRadius:'10px', 
            display:'block',
            margin: '20px auto'
        }}>
            <div className='row' style={{paddingTop:'20px'}}>
                <div className='col-md-11' >
                    <p style={{ fontSize: '30px', fontWeight: 'bold' , width:'80%'}}>
                        How much food is wasted in the world?
                    </p>
                </div>
                <div className='col-md-1'>
                    <button 
                        className='btn btn-lg' 
                        onClick={() => setShowAnswer(!showAnswer)}
                        style={{ transform: showAnswer ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
                    >
                        +
                    </button>
                </div>
            </div>
            {showAnswer && (
                <div className='row' style={{ padding: '20px 20px 40px 20px' }}>
                    <div className='col-12' style={{
                        backgroundColor: '#e8f5e9',
                        padding: '15px',
                        borderRadius: '8px',
                        color: '#2e7d32',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0 }}>
                            Approximately 1.3 billion tonnes of food is wasted globally each year, which amounts to about one-third of all food produced for human consumption.
                        </p>
                    </div>
                </div>
            )}
            <br/>
        </div>
    );
}

export default Question;