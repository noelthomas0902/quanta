import { useCallback, useEffect, useRef } from "react";
import Image from "./Image";


function App() {
  let array = new Array(77);
  for (let index = 3; index < array.length; index++) {
    array[index] = index;
    
  }
  const imagesRef = useRef(null);
    const imgObserver = useCallback(node => {
    const intObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
        const currentImg = en.target;
        const newImgSrc = currentImg.dataset.src;
        console.log(newImgSrc);
		console.log(en.isIntersecting)
        // only swap out the image source if the new url exists
        if (!newImgSrc) {
          console.error('Image source is invalid');
        } else {
          currentImg.src = newImgSrc;
        }
        intObs.unobserve(node); // detach the observer when done
      }
    });
  })
  intObs.observe(node);
}, []);
useEffect(() => {
  imagesRef.current = document.querySelectorAll('.img');
  if (imagesRef.current) {
    imagesRef.current.forEach(img => imgObserver(img));
  }
}, [imgObserver, imagesRef]);
  return (
    <div className="App">
      <div className="img-div"><img className="img" src="/0.png" alt="" /></div>
      <div className="img-div"><img className="img" src="/1.png" alt="" /></div>
      <div className="img-div"><img className="img" src="/2.png" alt="" /></div>
      {array.map((item) => (
        <>
          <Image item={item} imagesRef={imagesRef} />
        </>
      ))}
    </div>
  )
}

export default App
