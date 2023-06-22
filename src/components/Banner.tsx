import '../styles/banner.css';

interface BannerProps {
    roomImage: string | { url: string }[] | null;
}

const Banner = ({ roomImage }: BannerProps) => {
    return (
        <div className="banner-content">
            <div className="banner">
                <div className="banner-image">
                    {roomImage && typeof roomImage !== 'string' ? (
                        (roomImage as { url: string }[]).map((image, index) => (
                            <img
                                key={index}
                                className="selected-room-image"
                                src={image.url}
                                alt="Selected Room"
                            />
                        ))
                    ) : (
                        <img className="selected-room-image" src={roomImage as string} alt="Selected Room" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;