import { Hotel } from './Home';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const HotelList = ({ hotels }: { hotels: Hotel[] }) => {
    return (
        <div className='hotel-list'>
            {hotels.map((hotel) => (
                <div className="hotel-entity" key={hotel.id}>
                    <div className="hotel-image">
                        <Slide autoplay={false} duration={0}>
                            {hotel.images.map((image, index) => (
                                <div className="each-slide" key={index}>
                                    <img className='hotel-building-img' src={image.url} alt="" />
                                </div>
                            ))}
                        </Slide>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HotelList;
