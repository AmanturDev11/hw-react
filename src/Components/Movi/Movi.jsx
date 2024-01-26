import { Button } from '../ul/button/Button';
// import './Movi.css';
import css from './Movi.module.css';
import {useState} from 'react';

export const Movi = ({name, photo, gh, id, onClick}) => {
  const [state, setState] = useState(undefined);

  return (
    <div className={css.container_car} key={id}>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{gh}</p>
      {/* <Button onClick={onClick} text='Delete'/> */}
    </div>
  )
}