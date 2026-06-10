import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./Visionneuse.module.css";
import defaultImage from "../../../assets/photos/Sora_Shimazaki/handshake.jpg";
import { useState } from "react";
import useAPI from "../../../hooks/useAPI";

const VISIBLE_THUMBS = 3;

const Visionneuse = ({ index = 0, galerie = [] }) => {
  const [activeIndex, setActiveIndex] = useState(index);
  const [thumbStart, setThumbStart] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { url } = useAPI();

  const buildSrc = (path) => {
    return typeof path == "string"
      ? path.startsWith("http")
        ? path
        : url + "/" + path
      : defaultImage;
  };

  const toggleModal = () => setShowModal((prev) => !prev);

  const hasThumbs = galerie.length > 1;
  const canScroll = galerie.length > VISIBLE_THUMBS;
  const maxStart = Math.max(0, galerie.length - VISIBLE_THUMBS);

  const previousThumbs = () => setThumbStart((start) => Math.max(0, start - 1));
  const nextThumbs = () => setThumbStart((start) => Math.min(maxStart, start + 1));

  const visibleThumbs = galerie.slice(thumbStart, thumbStart + VISIBLE_THUMBS);

  return (
    <div className={classes["viewer"]}>
      {showModal && (
        <div className={classes["zoom_modal"]} onClick={toggleModal}>
          <figure>
            <img
              src={buildSrc(galerie[activeIndex])}
              alt={"réalisation de l'artisan"}
            />
          </figure>
        </div>
      )}

      <figure className={classes["main"]} onClick={toggleModal}>
        <img
          src={buildSrc(galerie[activeIndex])}
          alt={"réalisation de l'artisan"}
        />
      </figure>

      {hasThumbs && (
        <div className={classes["thumbs"]}>
          {canScroll && (
            <button
              type="button"
              onClick={previousThumbs}
              disabled={thumbStart == 0}
              aria-label="Miniatures précédentes"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div className={classes["thumbs-window"]}>
            {visibleThumbs.map((photo, i) => {
              const realIndex = thumbStart + i;
              return (
                <button
                  key={realIndex}
                  type="button"
                  className={realIndex == activeIndex ? classes["active"] : ""}
                  onClick={() => setActiveIndex(realIndex)}
                  aria-label={`Voir l'image ${realIndex + 1}`}
                >
                  <img src={buildSrc(photo)} alt="miniature" />
                </button>
              );
            })}
          </div>
          {canScroll && (
            <button
              type="button"
              onClick={nextThumbs}
              disabled={thumbStart >= maxStart}
              aria-label="Miniatures suivantes"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Visionneuse;
