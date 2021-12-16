import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "home4",
    title: "From us for you ♡",
    desc: "Festive holidays with our Shellac colors",
    link: "/left-sidebar/collection ",
  },
  {
    img: "home3",
    title: "Christmas Sale!",
    desc: "Now from CHF 50.- 10% off EVERYTHING and from CHF 0.- a free gift! - Code-> merrynails",
    link: "/left-sidebar/collection ",
  },

];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
