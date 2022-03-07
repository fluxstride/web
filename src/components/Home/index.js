import picture from "./images/picture.png"
import Nav from './../Nav/index';
import "./style.css"

const Home = () => {
  return (
    <div className="home__container">
      <Nav />
      <header>
        <img src={picture} alt="Samuel Adekoya" className="header__image" />
        <div className="header__texts">
          <p className="p1 b">I build</p>
          <p className="p2 b">amazing</p>
          <p className="p3 b">websites & webapps</p>
          <button>
            Talk to me
          </button>
        </div>
      </header>
    </div>
  )
}

export default Home