import React from "react";

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

export type { MyTypeImage, MyTypeTeam }

