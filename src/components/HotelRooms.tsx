import useFetch from "../useFetch";
import RoomsLists from "./RoomsList";

interface HotelRooms {
    hotelId: number;
}

export interface Rooms {
    id: number;
    name: string;
    rooms: Room[];
}

export interface Room {
    id: number;
    name: string;
    longDescription: string;
    occupancy: Occupancy;
}

export interface Occupancy {
    maxAdults: number;
    maxChildren: number;
}

const HotelRooms = ({ hotelId }: HotelRooms) => {
    console.log(hotelId);
    const { data: rooms, error, isPending } = useFetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`)

    return (
        <div className="hotel-rooms">
            {rooms && <RoomsLists rooms={rooms as Rooms} />}
        </div>
    );
}

export default HotelRooms;