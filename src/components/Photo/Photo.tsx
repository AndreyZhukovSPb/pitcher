import "./Photo.css";

interface photoProps {
  image: string;
  type: string;
  key: string;
  videoImage?: string;
  permalink: string;
}

const Photo: React.FC<photoProps> = ({
  image,
  type,
  permalink,
  videoImage,
}) => {
  function onClick(link: string) {
    console.log(link);
    window.open(link, "_blank");
  }

  if (type === "IMAGE" || type === "CAROUSEL_ALBUM") {
    return (
      <img
        src={image}
        alt="foto from insta"
        className="photo"
        onClick={() => {
          onClick(permalink);
        }}
      />
    );
  } else if (type === "VIDEO") {
    return (
      <img
        src={videoImage}
        alt="foto from insta"
        className="photo"
        onClick={() => {
          onClick(permalink);
        }}
      />
    );
  } else {
    return <div></div>;
  }
};

export default Photo;
