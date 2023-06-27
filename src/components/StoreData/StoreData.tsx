import React from "react";
import "./StoreData.css";
import { useMediaQuery } from "react-responsive";

interface MyStoreDataProps {
  map: string;
  map_tablet: string;
  map_mobile: string;
  title: string;
  shcedule: string;
  shcedule_tablet: string;
  teamPhoto: string;
}

interface StoreDataProps {
  data: MyStoreDataProps;
  isPark?: boolean;
  isMayak?: boolean;
}

const StoreData: React.FC<StoreDataProps> = ({ data, isMayak, isPark }) => {
  const isTablet = useMediaQuery({
    query: `(max-width: 899px) and (min-width: 768px)`,
  });
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const isSmallMobile = useMediaQuery({ query: `(max-width: 599px)` });
  console.log(isSmallMobile);

  return (
    <div className="storeData">
      <div className="storeData__info">
        <p className="storeData__title">{data.title}</p>
        <p className="storeData__title">{data.shcedule_tablet}</p>
      </div>
      <div className="storeData__container">
        <div
          className={`storeData__image ${
            isPark
              ? "storeData__image_type_park"
              : isMayak
              ? "storeData__image_type_mayak"
              : ""
          } `}
        ></div>
        <div className="storeData__map">
          <iframe
            className="storeData__iframe"
            src={
              isSmallMobile
                ? data.map_mobile
                : data.map
            }
            title="3"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreData;

/* 
src={
            isTablet
              ? data.map_tablet
              : isSmallMobile
              ? data.map_mobile
              : data.map
          }
*/
