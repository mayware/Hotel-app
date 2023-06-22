import { Rooms } from './HotelRooms'

const RoomsLists = ({ rooms }: { rooms: Rooms }) => {
    return (
        <div className="rooms-list">
            {rooms.rooms.map((room) => (
                <div className="hotel-room" key={room.id}>
                    {room.name}
                </div>
            ))}
        </div>
    );
}

export default RoomsLists;