import "./Portfolio.css";
import InstaApi from "../../utils/InstaApi";
import React, { useState, useEffect } from "react";
import Photo from "../Photo/Photo";
import { useMediaQuery } from "react-responsive";
import { MyTypeInstaPhoto } from "../SharedTypes/SharedTypes";

interface PortfolioProps {
  instaPhoto: Array<MyTypeInstaPhoto>
}

const Portfolio: React.FC<PortfolioProps> = ({instaPhoto}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  const [itemsToShow, setItemsToShow] = React.useState<number>();

  const [allPhoto, setallPhoto] = React.useState<
    Array<MyTypeInstaPhoto>
  >([]);

  useEffect(() => {
    if (!isMobile) {
      setItemsToShow(16);
    } else {
      setItemsToShow(9);
    }
  }, [isMobile]);

  /*
  useEffect(() => {
    InstaApi.getPhoto()
      .then((res) => {
        setallPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  */

  useEffect(() => {
      setallPhoto(instaPhoto);
  }, [instaPhoto]);

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Последние новости из жизни Picther</h2>
      <div className="portfolio__photoContainer">
        {allPhoto.slice(0, itemsToShow).map((item) => (
          <Photo
            key={item.id}
            image={item.media_url}
            type={item.media_type}
            videoImage={item.thumbnail_url}
            permalink={item.permalink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
