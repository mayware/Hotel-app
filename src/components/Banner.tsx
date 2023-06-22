import '../styles/banner.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface BannerProps {
    roomImage: string | { url: string }[] | null;
}

const Banner = ({ roomImage }: BannerProps) => {
    return (
        <div className="banner-content">
            <div className="banner">
                <Slide autoplay={false} duration={0} transitionDuration={0}>
                    {roomImage && typeof roomImage !== 'string' ? (
                        (roomImage as { url: string }[]).map((image, index) => (
                            <div className="banner-image">
                                <img
                                    key={index}
                                    className="selected-room-image"
                                    src={image.url}
                                    alt="Selected Room"
                                />
                            </div>
                        ))
                    ) : (
                        <img className="selected-room-image" src={roomImage as string} alt="Selected Room" />
                    )}
                </Slide>

            </div>
        </div>
    );
};

export default Banner;