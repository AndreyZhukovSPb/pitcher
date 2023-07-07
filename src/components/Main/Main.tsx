import React, { useState, useEffect } from "react";
import { CarouselBox } from "../Carousel/Carousel";
import Stores from "../Stores/Stores";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import SectionLine from "../SectionLine/SectionLine";
import Header from "../Header/Header";
import { MyTypeMainPhoto, MyTypeInstaPhoto } from "../SharedTypes/SharedTypes";
import Api from "../../utils/MainApi";

const Main: React.FC = () => {
  const [mainPictures, setMainPictures] = React.useState<
    Array<MyTypeMainPhoto>
  >([]);

  const [mainPicturesMobile, setMainPicturesMobile] = React.useState<
    Array<MyTypeMainPhoto>
  >([]);

  const [instaPhoto, setInstaPhoto] = React.useState<Array<MyTypeInstaPhoto>>(
    []
  );

  useEffect(() => {
    Api.getMainPhoto().then((res) => {
      setMainPictures(res.desctopPhoto);
      setMainPicturesMobile(res.mobilePhoto);
      setInstaPhoto(res.istaPhoto.data);
    });
  }, []);

  return (
    <>
      <CarouselBox
        mainPictures={mainPictures}
        mainPicturesMobile={mainPicturesMobile}
      />
      <Stores />
      <About />
      <Portfolio instaPhoto={instaPhoto} />
      <SectionLine isMain={true} />
    </>
  );
};

export default Main;
