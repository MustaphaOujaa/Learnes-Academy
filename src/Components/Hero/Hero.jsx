import './Hero.css';
import heroImg from '../../assets/image.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-image-side">

          <div className="main-image-wrapper">
             <img src={heroImg} alt="Children playing" />
             <div className="dots-decoration"></div> 
          </div>
        </div>
        
        <div className="hero-text-side">
          <span className="hero-badge">Welcome to Little Learners</span>
          <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h1>
          <p>Our curriculum is carefully designed to foster a love for learning, curiosity, and creativity in every child.</p>
          
          <div className="stats-box">
             <div className="stat-item"><h3>+7000</h3><p>Children Transformed</p></div>
             <div className="stat-item"><h3>+37</h3><p>Years Experience</p></div>
             <div className="stat-item"><h3>+15</h3><p>Qualified Teachers</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;