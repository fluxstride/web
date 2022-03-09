import Header from '../Header';
import Nav from './../Nav/index'
import Me from './../Me/index';

const Home = () => {
  return (
    <div className="home__container">
      <Nav />
      <Header />
      <Me />
    </div>
  )
}

export default Home