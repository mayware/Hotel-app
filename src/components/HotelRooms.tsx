import useFetch from "../useFetch";
import "../styles/rooms.css";
import { FilterBoxProps } from "./FilterBox";

interface HotelRooms {
    hotelId: number;
    setSelectedRoomImage: (images: string | { url: string }[]) => void;
}

export interface Rooms {
    id: number;
    name: string;
    rooms: Room[];
}

export interface Room {
    id: number;
    name: string;
    images: { url: string }[];
    longDescription: string;
    occupancy: Occupancy;
}

export interface Occupancy {
    maxAdults: number;
    maxChildren: number;
}

const HotelRooms = ({
    hotelId,
    setSelectedRoomImage,
    selectedAdults,
    selectedChildren,
}: HotelRooms & FilterBoxProps) => {

    const { data: rooms } = useFetch(
        `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`
    );

    const filteredRooms = rooms
        ? (rooms as Rooms).rooms.filter((room) => {
            const occupancy = room.occupancy;
            return (
                occupancy.maxAdults >= selectedAdults &&
                occupancy.maxChildren >= selectedChildren &&
                occupancy.maxAdults + occupancy.maxChildren >=
                selectedAdults + selectedChildren
            );
        })
        : [];

    return (
        <div className="hotel-rooms">
            <div className="rooms-list">
                {filteredRooms && filteredRooms.length > 0 ? (
                    filteredRooms.map((room: Room) => (
                        <button
                            className="hotel-room-btn"
                            key={room.id}
                            onClick={() => setSelectedRoomImage(room.images)}
                        >
                            <div className="room-brief-info">
                                <div className="room-name">
                                    <span className="room-name-title">{room.name}</span>
                                </div>
                                <div className="room-capacity">
                                    <span className="capacity-info">
                                        Adults: {room.occupancy.maxAdults}
                                    </span>
                                    <span className="capacity-info">
                                        Children: {room.occupancy.maxChildren}
                                    </span>
                                </div>
                            </div>
                            <div className="room-description">
                                <span className="room-desc-text">{room.longDescription}</span>
                            </div>
                        </button>
                    ))
                ) : (
                    <span className="rooms-error-msg">No available rooms</span>
                )}
            </div>
        </div>
    );
};

export default HotelRooms;
