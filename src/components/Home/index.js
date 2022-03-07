import picture from "./images/picture.png"
import Nav from './../Nav/index';
import "./style.css"

const Home = () => {
  return (
    <div className="home__container">
      <Nav />
      <header>
        <img src={picture} alt="Samuel Adekoya" className="header__image" />
      </header>
    </div>
  )
}

export default Home