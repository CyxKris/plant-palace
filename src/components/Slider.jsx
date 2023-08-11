/* eslint-disable react/prop-types */

import "./Slider.css";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import Autoplay from 'embla-carousel-autoplay/components/Autoplay';

const Slider = (props) => {

    const { image1, image2, image3 } = props;

    // const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div
            className="embla"
            ref={emblaRef}
        >
            <div className="embla__container">
                <div className="embla__slide"><img src={image1} alt="" /></div>
                <div className="embla__slide"><img src={image2} alt="" /></div>
                <div className="embla__slide"><img src={image3} alt="" /></div>
            </div>
        </div>
    );
};
export default Slider;
