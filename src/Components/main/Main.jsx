

import { Card } from '../ul/Cards/Cards';
import { Button } from '../ul/button/Button';
import {useState} from 'react';
import './Main.css';

const data = [
  {
    name: 'ABATAP',
    photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/600x900',
    nameG: 'Фантастика',
  },
  {
    name: 'Игра в кальмара',
    photo: 'https://static.hdrezka.ac/i/2021/10/1/tbdb8a34f6dc6mx41e64f.png',
    nameG: 'Фантастика',
  },
  {
    name: 'Мстители',
    photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/600x900',
    nameG: 'Фантастика',
  },
  {
    name: 'Случайный доступ',
    photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/08b96a11-5373-4caf-bc9b-6f4eec9f08e4/600x900',
    nameG: 'Фантастика',
  },
  {
    name: 'халк',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/f/fa/%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_%D0%A5%D0%B0%D0%BB%D0%BA.jpg',
    nameG: 'Фантастика',
  },
  {
    name: 'Человек паук',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/1/1f/Spiderman2.jpg',
    nameG: 'Фантастика',
  },
  {
    name: 'КОШУНАЛАР',
    photo: 'https://otv.server-img.lfstrm.tv/images/etnomedia/titles/20376/poster.jpg?width=300&height=450&quality=93',
    nameG: 'Сериал КИНО',
  },
  {
    name: 'Кухня',
    photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/42a6b95f-8852-481a-905c-120431e21de7/600x900',
    nameG: 'Сериал КИНО',
  },
  {
    name: 'Султан',
    photo: 'https://www.tvoytrip.ru/wp-content/uploads/2014/04/images_2DlyaStatey_jseri.jpg',
    nameG: 'Сериал КИНО',
  },
  {
    name: 'Любовь сквозь время',
    photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f65897ce-d9d6-4aa8-bd2c-fec7ec3cf19c/600x900',
    nameG: 'Любовь',
  },
  {
    name: 'Любовь как искупление',
    photo: 'https://www.kino-teatr.ru/movie/posters/big/4/151524.jpg',
    nameG: 'Любовь',
  },
  {
    name: 'чёрная любовь',
    photo: 'https://static.kinoafisha.info/k/series_posters/480/upload/series/posters/6/0/4/1406/367589541595442922.jpg',
    nameG: 'Любовь',
  },
]

const Main = () => {
  const [stateResult1, setStateResult1] = useState(data);
  const [stateresult, setStateResult] = useState("");
  function getCards (stateresult) {
    const result = stateResult1.filter((item) => item.nameG === stateresult);
    setStateResult1(result);
    console.log(result);
  }
  function resultGet (e) {
    setStateResult(e.target.innerText);
    getCards(e.target.innerText);
  }
  return (
    <div>
      <div>
        <div>
          <Button text='Фантастика' style='button1' onClick={resultGet}/>
          <Button text='Любовь' style='button1'onClick={resultGet}/>
          <Button text='Сериал КИНО' style='button1' onClick={resultGet}/>
        </div>
        <div className='cards'>
          <Card start={stateresult} data={stateResult1}/>
        </div>
      </div>
    </div>
  )
}

export default Main