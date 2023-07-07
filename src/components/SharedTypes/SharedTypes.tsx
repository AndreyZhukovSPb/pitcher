interface MyTypeImage {
  image: string;
  cols: number;
  rows: number;
}

interface MyTypeTeam {
  id: number;
  image: string;
  name: string;
  role: string;
  about: string;
  about_mobile: string;
  begining?: string
}

interface MyTypeMainPhoto {
  pictureId: number;
  image: string;
  text_1: string;
  text_2: string;
  text_3: string;
  number: string;
}

interface MyTypeInstaPhoto {
  id: string;
    media_type: string;
    media_url: string;
    caption: string;
    timestamp: string;
    permalink: string;
    thumbnail_url?: string;
}

export type { 
  MyTypeImage, 
  MyTypeTeam, 
  MyTypeMainPhoto,
  MyTypeInstaPhoto
}

