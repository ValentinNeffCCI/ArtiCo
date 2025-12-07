import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./Visionneuse.module.css";
import defaultImage from "../../../assets/photos/Sora_Shimazaki/handshake.jpg";
import { useState } from "react";

const Visionneuse = ({ index = 0, galerie }) => {
  const [carouselIndex, setCarouselIndex] = useState(index);
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <div className={classes["galerie"]}>
      {showModal && (
        <div className={classes["zoom_modal"]} onClick={toggleModal}>
          <figure>
            <img
              src={galerie[carouselIndex]}
              alt={"réalisation de l'artisan"}
            />
          </figure>
        </div>
      )}
      <figure>
        <button
          style={{
            opacity: carouselIndex == 0 ? "0.3" : "1",
            pointerEvents: carouselIndex == 0 ? "none" : "auto",
          }}
          onClick={previousSlide}
        >
          <ChevronLeft size={30} />
        </button>
        <img
          src={
            typeof galerie[carouselIndex] == "string"
              ? galerie[carouselIndex]
              : defaultImage
          }
          alt="image"
          onClick={toggleModal}
        />
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
