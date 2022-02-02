import { v4 as uuidv4 } from 'uuid'
import ProjectImg from '../images/projectImg.png'
import UTrackerImg from '../images/utracker.jpg'
import GreenCtgImg from '../images/greenctg.jpg'
import CoinTrackerImg from '../images/cointracker.jpg'
import CavinImg from '../images/cavinimg.jpg'

const projects = [
  {
    id: uuidv4(),
    name: 'Desentupimento de vaso sanitário',
    desc:
      'Realizando desentupimento de vasos sanitários de comércios e residências.',
    img: "https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png",
  },
  {
    id: uuidv4(),
    name: 'Desentupimento de ralo',
    desc:
      'Realizando desentupimento de ralos de comércios e residências.',
    img: "https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png",
  },
  {
    id: uuidv4(),
    name: 'Desentupimento de pia',
    desc:
      'Realizando desentupimento de pia de comércios e residências.',
    img: "https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png",
  },
  {
    id: uuidv4(),
    name: "Desentupimento de esgotos",
    desc:
      'Realizando desentupimento de de esgotos de comércios e residências.',
    img: "https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png",
  },
  {
    id: uuidv4(),
    name: 'Desentupimento de cano',
    desc:
      'Realizando desentupimento de cano de comércios e residências.',
    img: "https://cdn.icon-icons.com/icons2/1993/PNG/512/frame_gallery_image_images_photo_picture_pictures_icon_123209.png",
  },
];

export default projects;
