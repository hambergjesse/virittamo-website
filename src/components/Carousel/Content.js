import Article from "./SubComponents/Article";
import Video from "./SubComponents/Video";
import Image from "./SubComponents/Image";

import Mock_Video from "../../pages/Home/assets/carousel/mock-video.mp4";

export const slides = [
  {
    component: Article,
    title: "Lorem ipsum dolor sit, amet consectetureeeeeee",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit et obcaecati voluptatum eaque ipsam rerum quia possimus quidem saepe? Amet iste accusamus pariatur voluptatibus ad? Voluptate voluptatibus illum iure aliquam numquam quibusdam dignissimos assumenda autem pariatur itaque, accusamus asperiores ratione reprehenderit consequatur dolores sapiente deserunt sunt ducimus aliquid qui deleniti! Explicabo labore ipsum ducimus error vel alias libero repudiandae modi suscipit, iure officia, sint sapiente officiis cumque, minus ipsa aut? Vitae nulla similique pariatur beatae inventore blanditiis, omnis accusantium rem tempora ex fuga illo, suscipit totam culpa tempore odio non? Quaerat reiciendis tempora amet a nobis non, saepe aliquid.",
    bg_image:
      "https://stadinao.fi/app/uploads/2022/10/FF22Viritta%CC%88mo%CC%88_Teemu_Turunen_1-1050x696.jpg",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Video,
    src: Mock_Video,
    alt: "placeholder video",
  },
  {
    component: Image,
    src: "https://images.pexels.com/photos/2567959/pexels-photo-2567959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Placeholder image",
  },
];
