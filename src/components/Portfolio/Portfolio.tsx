import "./Portfolio.css";
import InstaApi from "../../utils/InstaApi";
import React, { useState, useEffect } from "react";
import Photo from "../Photo/Photo";
import { useMediaQuery } from "react-responsive";

interface ProfileProps {}

const Portfolio: React.FC<ProfileProps> = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  const [itemsToShow, setItemsToShow] = React.useState<number>();

  const [allPhoto, setallPhoto] = React.useState<
    Array<{
      id: string;
      media_type: string;
      media_url: string;
      caption: string;
      timestamp: string;
      permalink: string;
      thumbnail_url?: string;
    }>
  >([]);

  useEffect(() => {
    if (!isMobile) {
      setItemsToShow(16);
    } else {
      setItemsToShow(9);
    }
  }, [isMobile]);

  useEffect(() => {
    InstaApi.getPhoto()
      .then((res) => {
        setallPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
