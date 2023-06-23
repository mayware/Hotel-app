import '../styles/filter.css'

const FilterBox = () => {
    return (
        <div className="filter-content">
            <div className="filter-box">
                <div className="stars-box">
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
                    </button>
                    <button className="star-btn">
                        <i className="fa-regular fa-star filter-stars"></i>
                    </button>
                </div>
                <div className="guests-control">
                    <div className="guests-box adults-number">
                        <button className="decrement-btn">
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <button className="increment-btn">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <span className="guest-type">Adults</span>
                    </div>
                    <div className="guests-box children-number">
                        <button className="decrement-btn">
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <button className="increment-btn">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <span className="guest-type">Children</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterBox;