import { useEffect, useState } from "react";
import { images } from "./images/imagesURL";

export default function Carousel() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="carouselContainer" >
        <div className="carouselImageContainer">
          <img
            onLoad={() => setLoaded(true)}
            className={`carouselImage ${loaded && "loaded"} `}
            src={`./${selectedImage}`}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
}
