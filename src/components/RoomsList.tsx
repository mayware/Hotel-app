import { Rooms } from './HotelRooms'
import '../styles/rooms.css'

const RoomsLists = ({ rooms }: { rooms: Rooms }) => {
    return (
        <div className="rooms-list">
            {rooms.rooms.map((room) => (
                <div className="hotel-room" key={room.id}>
                    <div className="room-brief-info">
                        <div className="room-name">
                            <span className="room-name-title">
                                {room.name}
                            </span>
                        </div>
                        <div className="room-capacity">
                            <span className="capacity-info">Adults: {room.occupancy.maxAdults}</span>
                            <span className="capacity-info">Children: {room.occupancy.maxChildren}</span>
                        </div>
                    </div>
                    <div className="room-description">
                        <span className="room-desc-text">
                            {room.longDescription}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RoomsLists;