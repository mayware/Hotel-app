import '../styles/filter.css'
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

const FilterBox = () => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [starHotel, setStarHotel] = useState(0);

    function addAdults() {
        if (adults < 10) {
            setAdults(adults + 1);
        }
    }
    function addChildren() {
        if (children < 10) {
            setChildren(children + 1);
        }
    }
    function subAdults() {
        if (adults > 1) {
            setAdults(adults - 1);
        }
    }
    function subChildren() {
        if (children > 0) {
            setChildren(children - 1);
        }
    }

    return (
        <div className="filter-content">
            <div className="filter-box">
                <div className="stars-box">
                    <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                    /* Available Props */
                    />
                    {/* <button className="star-btn">
                        <i className="fa-regular fa-star filter-stars"></i>
                    </button>
                    <button className="star-btn">
                        <i className="fa-regular fa-star filter-stars"></i>
                    </button>
                    <button className="star-btn">
                        <i className="fa-regular fa-star filter-stars"></i>
                    </button>
                    <button className="star-btn">
                        <i className="fa-regular fa-star filter-stars"></i>
                    </button>
                    <button className="star-btn">
                        <i className="fa-regular fa-star filter-stars"></i>
                    </button> */}
                </div>
                <div className="guests-control">
                    <div className="guests-box adults-number">
                        <button className="decrement-btn" onClick={subAdults}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <button className="increment-btn" onClick={addAdults}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <span className="guest-type">Adults</span>
                        <div className="guests-number">
                            <span className='guest-number-counter'>{adults}</span>
                        </div>
                    </div>
                    <div className="guests-box children-number">
                        <button className="decrement-btn" onClick={subChildren}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <button className="increment-btn" onClick={addChildren}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <span className="guest-type">Children</span>
                        <div className="guests-number">
                            <span className='guest-number-counter'>{children}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterBox;