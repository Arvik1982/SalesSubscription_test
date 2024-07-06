import imgActionFilm from "../../public/rembo-pervaya-krov-silvestr.jpg";
import imgFantasyFilm from "../../public/fonstola.jpg";
import imgComedyFilm from "../../public/comedy.jpg";
import imgDetectiveFilm from "../../public/detective.jpg";
export const films = [
  {
    id: 1,
    title: "Фэнтези",
    name: "fantasy",
    description: [
      "Жанр фэнтези известен наличием волшебства.",
      "Одной из главных особенностей фэнтези является возможность создания новых миров.",
    ],
    img: imgFantasyFilm,
    rating: 30,
  },
  {
    id: 2,
    title: "Боевики",
    name: "action",
    description: [
      "Боевик — это жанр, в котором основное предпочтение отдается не сюжету, а захватывающим погоням, дракам, перестрелкам и другим экшн-действиям.",
    ],
    img: imgActionFilm,
    rating: 90,
  },
  {
    id: 3,
    title: "Комедии",
    name: "comedy",
    description: [
      "Жанр художественного произведения, характеризующийся юмористическим или сатирическим подходами.",
    ],
    img: imgComedyFilm,
    rating: 50,
  },
  {
    id: 4,
    title: "Детективы",
    name: "detective",
    description: [
      "Детектив — жанр остросюжетной литературы, который повествует о расследовании загадочного случая, чаще всего преступления.",
    ],
    img: imgDetectiveFilm,
    rating: 100,
  },
];
