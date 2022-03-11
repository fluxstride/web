import Header from '../Header';
import Nav from './../Nav/index'
import Me from './../Me/index';
import TechStack from './../TechStack/index'
import Works from './../Works/index'


const Home = () => {
  return (
    <div className="home__container">
      <Nav />
      <Header />
      <Me />
      <TechStack/>
      <Works/>
    </div>
  )
}

export default Home
