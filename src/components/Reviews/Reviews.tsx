import React from "react";
import './Reviews.css'

interface reviewsProps {

}

const Reviews: React.FC<reviewsProps> = () => {
  return (
    <div className="reviews">
      <iframe 
        src="https://yandex.ru/sprav/widget/rating-badge/1342893163?type=rating" 
        width="150" 
        height="50" 
        // frameborder="0" 
        title="frame yandex"
      >  
      </iframe>
      <div className="reviews__rating">
        <iframe 
          title='review' 
          className="reviews__iframe" 
          src="https://yandex.ru/maps-reviews-widget/1342893163?comments">
        </iframe>
        
      </div>
    </div>
  )
}

export default Reviews