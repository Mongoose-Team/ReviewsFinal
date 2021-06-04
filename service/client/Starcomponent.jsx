import React from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
function Starcomponent(props) {
    return (
        <div>
             <ReactStarsRating className="cursor-not-allowed w-15" value={props.value} />
        </div>
    );
}

export default Starcomponent;