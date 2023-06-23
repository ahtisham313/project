import { Carousel } from "@material-tailwind/react";

export default function Carousel1() {
  return (
    <Carousel className="w-full h-[20rem] mx-20">
      <img src="" alt=" 1" className="h-full w-full object-cover" />
      <img
        src="/picture/c2.jpg"
        alt=" 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/picture/c3.jpg"
        alt="3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
