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
                {roomImage && typeof roomImage !== 'string' ? (
                    roomImage.length > 0 ? (
                        <Slide autoplay={false} duration={0} transitionDuration={0}>
                            {(roomImage as { url: string }[]).map((image, index) => (
                                <div className="selected-slide" key={index}>
                                    <img
                                        className="selected-room-image"
                                        src={image.url}
                                        alt="Selected Room"
                                    />
                                </div>
                            ))}
                        </Slide>
                    ) : (
                        <div className="content-error">No room image available</div>
                    )
                ) : (
                    <div className="content-error">No room image available</div>
                )}
            </div>
        </div>
    );
};

export default Banner;
