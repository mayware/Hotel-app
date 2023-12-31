import useFetch from "../useFetch";
import HotelList from "./HotelList";
import Banner from "./Banner";
import FilterBox from "./FilterBox";
import { useState, useEffect } from 'react';
import '../styles/hotel.css';

export interface Hotel {
    id: number;
    name: string;
    starRating: string;
    images: { url: string }[];
    address1: string;
    address2: string;
}

const Home = () => {
    const [selectedRoomImage, setSelectedRoomImage] = useState<string | { url: string }[] | null>(null);
    const [selectedStarRating, setSelectedStarRating] = useState<number>(0);
    const [selectedAdults, setSelectedAdults] = useState<number>(1);
    const [selectedChildren, setSelectedChildren] = useState<number>(0);
    const { data, error } = useFetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG');
    const hotels = data as Hotel[] | null;
    const filteredHotels = hotels?.filter((hotel: Hotel) => Number(hotel.starRating) >= selectedStarRating);

    useEffect(() => {
        setSelectedRoomImage(null);
    }, [selectedStarRating]);

    function starRatingChange(rating: number) {
        setSelectedStarRating(rating);
    };

    function adultsChange(count: number) {
        setSelectedAdults(count);
    };

    function childrenChange(count: number) {
        setSelectedChildren(count);
    };

    return (
        <div className="content">
            {selectedRoomImage && <Banner roomImage={selectedRoomImage} />}
            <FilterBox
                setSelectedStarRating={starRatingChange}
                selectedAdults={selectedAdults}
                setSelectedAdults={adultsChange}
                selectedChildren={selectedChildren}
                setSelectedChildren={childrenChange}
            />
            {error && <p>Error loading hotels</p>}
            {filteredHotels ? (
                <HotelList
                    hotels={filteredHotels}
                    setSelectedRoomImage={setSelectedRoomImage}
                    selectedAdults={selectedAdults}
                    selectedChildren={selectedChildren}
                    setSelectedStarRating={starRatingChange}
                    setSelectedAdults={adultsChange}
                    setSelectedChildren={childrenChange}
                />
            ) : (
                <p>Loading hotels...</p>
            )}
        </div>
    );
}

export default Home;
