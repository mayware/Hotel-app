import useFetch from "../useFetch";
import HotelList from "./HotelList";
import Banner from "./Banner";
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

    const { data: hotels, error, isPending } = useFetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
    return (
        <div className="content">
            <Banner />
            {hotels && <HotelList hotels={hotels as Hotel[]} />}
        </div>
    );
}

export default Home;
