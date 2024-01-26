import './Header.css';

export const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='paddcontainer'>
        <div className='content'>
          <ul>
            <h1>Добро пожаловать в кино</h1>
            <a href="https://etnomedia.kg/watch/20602">
            <img src="https://thumbs.dreamstime.com/b/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0-%D0%B8%D0%BB%D0%B8-%D1%81-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%BC-227135994.jpg" alt="Поиск" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}