"use client";
import { useEffect, useRef, useState } from "react";

const Slider = ({ items: sliderItems }) => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef();
  const [isOnMobile, setIsOnMobile] = useState(false);

  useEffect(() => {
    const cardWidth = 304;

    let interval;

    if (carouselRef?.current) {
      interval = setInterval(() => {
        const currentScroll = carouselRef.current?.scrollLeft;
        let newScroll = currentScroll + cardWidth;

        carouselRef.current.scrollTo({
          left: newScroll,
          behavior: "smooth",
        });

        if (
          newScroll <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          setActiveIndex((prev) => prev + 1);
        }

        if (
          newScroll >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          setActiveIndex(1);
          carouselRef.current.scrollTo({
            left: isOnMobile ? 285 : 0,
            behavior: "smooth",
          });
        }
      }, 2000);
    }

    if (window.innerWidth <= 768) {
      setIsOnMobile(true);
    }

    return () => {
      interval && clearInterval(interval);
    };
  }, [carouselRef, isOnMobile]);

  useEffect(() => {
    if (isOnMobile && carouselRef?.current?.scrollLeft === 0) {
      carouselRef.current.scrollTo({
        left: 285,
        behavior: "smooth",
      });
    }
  }, [isOnMobile, carouselRef]);

  useEffect(() => {
    setItems([...sliderItems, ...sliderItems]);
  }, [sliderItems]);

  return (
    <div
      ref={carouselRef}
      className="w-full flex h-[340px] sm:-translate-y-12 -translate-y-6 items-center hide_scrollbar gap-6 overflow-auto"
    >
      {items?.map((icon, index) => (
        <div
          key={index}
          className={`${
            activeIndex === index
              ? "rotate-0 z-10 border-4 border-white btn-shadow min-w-[300px] max-w-[300px] h-[280px]"
              : "-rotate-12 z-0 opacity-30 min-w-[280px] max-w-[280px] h-[260px]"
          } smooth-transition overflow-hidden rounded-xl relative`}
        >
          <img src={icon.src} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default Slider;