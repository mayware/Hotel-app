import useFetch from "../useFetch";
import HotelList from "./HotelList";
import Banner from "./Banner";
import FilterBox from "./FilterBox";
import { useState } from 'react';
import '../styles/hotel.css'

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
    const { data: hotels } = useFetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG');

    return (
        <div className="content">
            {selectedRoomImage && <Banner roomImage={selectedRoomImage} />}
            <FilterBox />
            {hotels && <HotelList hotels={hotels as Hotel[]} setSelectedRoomImage={setSelectedRoomImage} />}
        </div>
    );
}

export default Home;
