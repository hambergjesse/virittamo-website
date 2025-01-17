// Importing necessary modules and components
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LoadingSlides } from "../../../Home/Carousel/SubComponents/Loading/LoadingSlides";
import { SlideIndicator } from "../../../../components/SlideIndicator/SlideIndicator";

// Returns the number of visible slides based on the width of the viewport
export const getNumVisibleSlides = (slides, width) => {
  switch (true) {
    case width <= 1080:
      return 1;
    case width <= 1440:
      return 2;
    default:
      return Math.min(slides.length, 3);
  }
};

// A helper component that renders the active slides
const Slide = ({ component: Component, ...props }) => {
  return <Component {...props} />;
};

Slide.propTypes = {
  component: PropTypes.elementType.isRequired,
};

// The main component that renders the project carousel
export const ProjectCarousel = ({ text = {}, slides = [] }) => {
  // State variables to keep track of the active slide index and the number of visible slides
  const [activeIndex, setActiveIndex] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(
    getNumVisibleSlides(slides, window.innerWidth)
  );

  // Handler function for the previous arrow button
  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Handler function for the next arrow button
  const handleNextClick = () => {
    setActiveIndex(activeIndex + 1);
  };

  // Function that returns an array of active slide components
  const renderActiveItems = () => {
    let activeItems = slides
      .slice(activeIndex, activeIndex + numVisibleSlides)
      .filter(Boolean);

    // If the last slide is active, set the active index to the previous slide
    if (activeIndex === slides.length) {
      setActiveIndex(activeIndex - 1);
      activeItems = slides
        .slice(activeIndex - 1, activeIndex - 1 + numVisibleSlides)
        .filter(Boolean);
    }

    // Render the active slides
    return activeItems.map((activeItem, index) => {
      return <Slide key={index} {...activeItem} />;
    });
  };

  // Ensure that the active index and the number of visible slides are within valid ranges
  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(0);
    } else if (activeIndex + numVisibleSlides > slides.length) {
      setActiveIndex(slides.length - numVisibleSlides);
    }
  }, [activeIndex, numVisibleSlides, slides]);

  // Update the number of visible slides on window resize
  useEffect(() => {
    const handleResize = () => {
      setNumVisibleSlides(getNumVisibleSlides(slides, window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [slides]);

  // Extract text data from the props
  const { title = "", description = "", contact = "" } = text;

  return (
    <div className="projectPage__teams--container-item">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {contact && <p>{contact}</p>}
      <SlideIndicator numSlides={slides.length} activeIndex={activeIndex} />
      <div className="projectPage__teams--carousel">
        <button
          className="arrow-button"
          onClick={handlePrevClick}
          disabled={activeIndex === 0}
        >
          <SlArrowLeft className="arrow-button--icon" />
        </button>
        <div className="projectPage__teams--carousel-list">
          {slides.length > 0 ? renderActiveItems() : <LoadingSlides />}
        </div>
        <button
          className="arrow-button"
          onClick={handleNextClick}
          disabled={activeIndex >= slides.length - numVisibleSlides}
        >
          <SlArrowRight className="arrow-button--icon" />
        </button>
      </div>
    </div>
  );
};

ProjectCarousel.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    contact: PropTypes.string,
  }),
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType.isRequired,
      img_src: PropTypes.string.isRequired,
      client_name: PropTypes.string.isRequired,
      project_title: PropTypes.string.isRequired,
      completion_year: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
