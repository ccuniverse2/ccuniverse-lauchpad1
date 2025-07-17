import Image from 'next/image';
import Carousel from 'nuka-carousel';

import Bull from '../images/Bull.png';
import HeroCC from '../images/heroCC.png';
import HeroImg from '../images/heroImg.jpg';

const Carouselslider = () => {
  return (
    <Carousel
      autoplay
      wrapAround
      withoutControls={true}
      dragThreshold={0.25}
      style={{ borderRadius: "10px"}}
    >
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",
          height: "100%",

          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroCC}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",

          borderRadius: "10px",
        }}
      />
      <Image
        src={Bull}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",

          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </Carousel>
  );
};
export default Carouselslider;
