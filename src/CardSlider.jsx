import Card from './Card'
import { cardsData } from './cardsData'

function CardSlider() {
    return (
        <div className='container'>
            <div className='row'>
               {
                cardsData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                    />
                ))
               }
            </div>
        </div>
    )
}

export default CardSlider
