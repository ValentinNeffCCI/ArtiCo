import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./Visionneuse.module.css";
import defaultImage from "../../../assets/photos/Sora_Shimazaki/handshake.jpg";
import { useState } from "react";
import useAPI from "../../../hooks/useAPI";

const Visionneuse = ({ index = 0, galerie }) => {
  const [carouselIndex, setCarouselIndex] = useState(index);
  const [showModal, setShowModal] = useState(false);

  const { url } = useAPI();

  const nextSlide = () => {
    setCarouselIndex((prev) => {
      if (galerie[carouselIndex + 1]) {
        return prev + 1;
      }
    });
  };

  const previousSlide = () => {
    setCarouselIndex((prev) => {
      if (galerie[carouselIndex - 1]) {
        return prev - 1;
      }
    });
  };

  const buildSrc = (path) => {
    return typeof path == "string"
      ? path.startsWith("http")
        ? path
        : url + "/" + path
      : defaultImage;
  };

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <div className={classes["galerie"]}>
      {showModal && (
        <div className={classes["zoom_modal"]} onClick={toggleModal}>
          <figure>
            <img
              src={buildSrc(galerie[carouselIndex])}
              alt={"réalisation de l'artisan"}
            />
          </figure>
        </div>
      )}
      <figure className={classes["carroussel"]}>
        <button
          style={{
            opacity: carouselIndex == 0 ? "0.3" : "1",
            pointerEvents: carouselIndex == 0 ? "none" : "auto",
          }}
          onClick={previousSlide}
        >
          <ChevronLeft size={30} />
        </button>
        <div className={classes["carroussel-container"]}>
          {galerie.map((g, index) => (
            <img
              src={buildSrc(g)}
              alt="image"
              onClick={toggleModal}
              style={{
                "--carroussel-index": carouselIndex,
              }}
            />
          ))}
        </div>
        <button
          style={{
            opacity: carouselIndex == galerie.length - 1 ? "0.3" : "1",
            pointerEvents:
              carouselIndex == galerie.length - 1 ? "none" : "auto",
          }}
          onClick={nextSlide}
        >
          <ChevronRight size={30} />
        </button>
      </figure>
    </div>
  );
};

export default Visionneuse;
