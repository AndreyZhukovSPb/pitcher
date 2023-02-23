import image_1 from '../images/sell-picture-new.jpg';
import image_2 from '../images/sell-photo.png';
import image_3 from '../images/sell-picture-new.jpg';

const sellPictures = [
  {
    pictureId: 1,
    image: image_1,
    text: "продающий текст для ПЕРВОГО слайда, тут что-то хорошее написано",
    color: "blue",
  },
  {
    pictureId: 2,
    image: image_2,
    text: "продающий текст для ВТОРОГО слайда, тут что-то хорошее написано",
    color: "black",
  },
  {
    pictureId: 3,
    image: image_3,
    text: "продающий текст для ТРЕТЬЕГО слайда, тут что-то хорошее написано",
    color: "white",
  },
];

export { sellPictures };

/* 
        {sellPictures.map((item) => (
          <div key={item.pictureId}>
            <CarouselItem color={item.color}>{item.text}</CarouselItem>
          </div>
        ))}

<CarouselItem color="blue">певрый</CarouselItem>
      <CarouselItem color="black">второй</CarouselItem>
      <CarouselItem color="white">третий</CarouselItem>    
      
      
 

*/
