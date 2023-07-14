import React, { useState, useEffect } from "react";
import { CarouselBox } from "../Carousel/Carousel";
import Stores from "../Stores/Stores";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import SectionLine from "../SectionLine/SectionLine";
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

  const [storesPictures, setStoresPictures] = React.useState<Array<string>>([]);
  
  const [aboutTexts, setAboutTexts] = React.useState<{}>({});

  useEffect(() => {
    Api.getMainPhoto().then((res) => {
      console.log(res)
      setMainPictures(res.sellPictures.desctopPhoto);
      setMainPicturesMobile(res.sellPictures.mobilePhoto);
      setInstaPhoto(res.instaPhoto.data);
      setStoresPictures(res.storesPictures);
      setAboutTexts(res.aboutTexts)
    });
  }, []);

  return (
    <>
      <CarouselBox
        mainPictures={mainPictures}
        mainPicturesMobile={mainPicturesMobile}
      />
      <Stores 
        storesPictures={storesPictures}
      />
      <About 
        aboutTexts={aboutTexts}
      />
      <Portfolio instaPhoto={instaPhoto} />
      <SectionLine isMain={true} />
    </>
  );
};

export default Main;
