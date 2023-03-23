import { useState } from "react";
import { Container } from "./Styles.js";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function StarRating ({resize=20,numStars=0, ...rest}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <Container>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
                {/* {index <= (hover || rating)? < AiFillStar size={resize}/> : <AiOutlineStar size={resize}/>} */}
                {index <= numStars? < AiFillStar size={resize}/> : <AiOutlineStar size={resize}/>}
            </button>
          );
        })}
      </Container>
    );
};
