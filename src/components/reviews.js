import React from 'react';


export const Reviews = ({name , body, time}) => {

return (
<div className="reviews">
    <div id="reviews_add"className="reviews_add">
        <div>
            <div className="reviews_item">
                <p className="reviews_item_author">
                    <span>{name}</span>
                    <span className="reviews_item_date">{time}</span>
                </p>
                <p className="reviews_item_text" >{body}</p>
            </div>
        </div>
    </div>
</div>
)
}

export default Reviews;