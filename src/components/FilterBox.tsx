import '../styles/filter.css'
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

export interface FilterBoxProps {
    setSelectedStarRating: (rating: number) => void;
    setSelectedAdults: (rating: number) => void;
    setSelectedChildren: (rating: number) => void;
    selectedAdults: number;
    selectedChildren: number;
}

const FilterBox: React.FC<FilterBoxProps> = ({ setSelectedStarRating, setSelectedAdults, setSelectedChildren, selectedAdults, selectedChildren }) => {
    const [adults, setAdults] = useState<number>(1);
    const [children, setChildren] = useState<number>(0);
    const [initValue, setInitValue] = useState<number>(3);
    const controlRating = (rate: number) => {
        setSelectedStarRating(rate);
    };

    function addAdults() {
        if (adults < 6) {
            setAdults(adults + 1);
            setSelectedAdults(selectedAdults + 1);
        }
    }

    function addChildren() {
        if (children < 4) {
            setChildren(children + 1);
            setSelectedChildren(selectedChildren + 1);
        }
    }

    function subAdults() {
        if (adults > 1) {
            setAdults(adults - 1);
            setSelectedAdults(selectedAdults - 1);
        }
    }

    function subChildren() {
        if (children > 0) {
            setChildren(children - 1);
            setSelectedChildren(selectedChildren - 1);
        }
    }


    return (
        <div className="filter-content">
            <div className="filter-box">
                <div className="stars-box">
                    <Rating
                        onClick={controlRating}
                        initialValue={initValue}
                        size={30}
                    />
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