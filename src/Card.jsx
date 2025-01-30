function Card({ imageSrc, title, description, buttonText }) {
    return (
        <div className='col-md-4' style={{padding:'10px', paddingTop:'40px', paddingBottom:'40px'}}>
            <div className='card' style={{ border: '1px solid black', borderRadius: '10px', padding: '30px' }}>
                <img src={imageSrc} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className='card-text'>{description}</p>
                    <button className='btn btn-success'>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;