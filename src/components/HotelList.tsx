import { Hotel } from './Home';
import HotelRooms from './HotelRooms';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface HotelListProps {
    setSelectedRoomImage: (images: string | { url: string }[]) => void;
    hotels: Hotel[];
    selectedAdults: number;
    selectedChildren: number;
    setSelectedStarRating: (rating: number) => void;
    setSelectedAdults: (rating: number) => void;
    setSelectedChildren: (rating: number) => void;
}

const HotelList = ({
    setSelectedRoomImage,
    hotels,
    selectedAdults,
    selectedChildren,
    setSelectedStarRating,
    setSelectedAdults,
    setSelectedChildren,
}: HotelListProps) => {
    function printStars(hotelRating: string) {
        const starsNumber = parseInt(hotelRating);
        const stars = [];
        for (let i = 0; i < starsNumber; i++) {
            stars.push(<i key={i} className="fa-solid fa-star hotel-star-icon"></i>);
        }
        return stars;
    }
    const sortedHotels = hotels.slice().sort((a, b) => parseInt(a.starRating) - parseInt(b.starRating));

    return (
        <div className="hotel-list">
            {sortedHotels.map((hotel: Hotel) => (
                <div className="hotel-card" key={hotel.id}>
                    <div className="hotel-card-top">
                        <div className="hotel-image">
                            <Slide autoplay={false} duration={0} transitionDuration={0}>
                                {hotel.images.map((image: { url: string }, index: number) => (
                                    <div className="each-slide" key={index}>
                                        <img className="hotel-building-img" src={image.url} alt="" />
                                    </div>
                                ))}
                            </Slide>
                        </div>
                        <div className="hotel-info">
                            <div className="hotel-name-address">
                                <span className="hotel-name">{hotel.name}</span>
                                <span className="hotel-address">{hotel.address1}</span>
                                <span className="hotel-address">{hotel.address2}</span>
                            </div>
                            <div className="hotel-stars">{printStars(hotel.starRating)}</div>
                        </div>
                    </div>
                    <div className="hotel-rooms-list">
                        <HotelRooms
                            hotelId={hotel.id}
                            setSelectedRoomImage={setSelectedRoomImage}
                            selectedAdults={selectedAdults}
                            selectedChildren={selectedChildren}
                            setSelectedStarRating={setSelectedStarRating}
                            setSelectedAdults={setSelectedAdults}
                            setSelectedChildren={setSelectedChildren}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HotelList;
