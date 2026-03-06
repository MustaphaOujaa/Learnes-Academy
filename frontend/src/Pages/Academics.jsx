import WhatStudentsLearn from "../Components/AcademicComponents/WhatStudentsLearn";
import RoomsGallery from "../Components/RoomsGallery/RoomsGallery";
import SpecialFeatures from "../Components/SpecialFeatures/SpecialFeatures";
import Welcome from "../Components/Welcome/Welcome"



const Academics=()=>{
    return(
        <>
        <Welcome btn='Academics' welcome='Nurturing Young Minds for Success' text='Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten schools academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.'/>
        <SpecialFeatures/>
        <WhatStudentsLearn/>
        <RoomsGallery/>
        

        </>
    )
}
export default Academics;