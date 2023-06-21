import useFetch from "../useFetch";
import HotelList from "./HotelList";
import '../styles/hotel.css'

export interface Hotel {
    id: number;
    name: string;
    starRating: string;
    images: { url: string }[];
}

const Home = () => {

    const { data: hotels, error, isPending } = useFetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
    return (
        <div className="content">
            {hotels && <HotelList hotels={hotels as Hotel[]} />}
        </div>
    );
}

export default Home;
