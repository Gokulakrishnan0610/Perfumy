import one from '../asserts/images/one.jpg'
import two from '../asserts/images/two.jpg'
import three from '../asserts/images/three.jpg'

function Container() {
    return (
        <div className='images'>

            <div className='image__container'>
                <img src={one} alt='one'></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>

            <div className='image__container'>
                <img src={two} alt='two'></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>

            <div className='image__container'>
                <img src={three} alt='three'></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

        </div>
    )
}

export default Container