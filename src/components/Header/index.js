import picture from "./images/picture.png"
import './style.css'

const Header = () => {
  return (
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
  )
}

export default Header