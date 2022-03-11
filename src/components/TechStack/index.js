import './style.css'
import stacks from './stacks.png'
  const TechStack = () => {
   return (
    <div className="tech__stack">
      <h1 className="me__title left">
        Tech Stack
        </h1>
        <div className="stack__right"> 
       <p className="stacks__text">
            I have experience working with the following technologies.
          </p>
          <img src={stacks} alt="stacks" className="stacks"/>
        </div>
      </div>
   )
  }
 
 export default TechStack
