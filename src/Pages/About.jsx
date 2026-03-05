import Welcome from '../Components/Welcome/Welcome';
import Mission from '../Components/Mission/Mission';
import Awards from '../Components/Awards/Awards';
import History from '../Components/History/History';
import Team from '../Components/Team/Team'
const About = () =>{
    return (
        <>
            <Welcome btn='Overview' welcome='Welcome to Little Learners Academy' text='A leading kinder garden school dedicated to providing a nurturing and stimulating 
              environment for young learners. With a commitment to excellence in early education, 
              we believe in shaping curious minds and building a strong foundation for a lifelong 
              love of learning. Our holistic approach fosters intellectual, social, emotional, 
              and physical development, ensuring that each child reaches their full potential.'/>
            <Mission/>
            <Awards/>
            <History/>
            <Team/>
        </>
    )
}
export default About;