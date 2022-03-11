import './style.css'
const Me = () => {
  return (
    <div className="me">
      <h1 className="me__title left">
        Me
      </h1>
      <div className="right">
        <p className="me__text">
          My name is Adekoya Samuel and i am
          a software developer with proficient
          knowledge in Web Development.
        </p>
        <div className="right__bottom">
          <p>{"Know more  ->"}</p>
          <div className="sph"></div>
        </div>
      </div>
    </div>
  )
}

export default Me
