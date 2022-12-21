import { useCallback, useEffect, useRef } from "react";



const Image = ({item, imagesRef}) => {
  return (
    <div className="img-div">
     <img ref={imagesRef}  className="img" alt={`pageno-${item}`} data-src={`/${item}.png`}
     />
   </div>
  )
}

export default Image;
