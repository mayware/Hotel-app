import { Hotel } from './Home';
import HotelRooms from './HotelRooms';
import { Slide } from 'react-slideshow-image';
import { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';

const HotelList = ({ hotels }: { hotels: Hotel[] }) => {

    function printStars(hotelRating: string) {
        const starsNumber = parseInt(hotelRating);
        const stars = [];
        for (let i = 0; i < starsNumber; i++) {
            stars.push(<i key={i} className="fa-solid fa-star hotel-star-icon"></i>);
        }
        return stars;
    };
    return (
        <div className="hotel-list">
            {hotels.map((hotel) => (
                <div className="hotel-card" key={hotel.id}>
                    <div className="hotel-card-top">
                        <div className="hotel-image">
                            <Slide autoplay={false} duration={0} transitionDuration={0}>
                                {hotel.images.map((image, index) => (
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
                        <HotelRooms hotelId={hotel.id} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HotelList;
