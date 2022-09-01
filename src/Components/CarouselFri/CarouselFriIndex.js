import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './CarouselFriStyle.scss';


const handleDragStart = (e) => e.preventDefault();
const  credits = [
{
    profile_path:'/assets/img/fri/fri_7.jpeg',
    name:'Jai Shree Ganesh'
},
{
    profile_path:'/assets/img/fri/fri_8.jpeg',
    name:'Economictimes Times ET UI TEAM'
},
{
    profile_path:'/assets/img/fri/fri_9.jpeg',
    name:'Economictimes Times ET UI TEAM'
},

{
    profile_path:'/assets/img/fri/fri_1.jpeg',
    name:'Rohit / Rahber /Amit Yadav'
},
{
    profile_path:'/assets/img/fri/fri_2.jpeg',
    name:'Amit / Rahber / Amit'
},
{
    profile_path:'/assets/img/fri/fri_3.jpeg',
    name:'ET-UI_TEAM'
},
{
    profile_path:'/assets/img/fri/fri_4.jpeg',
    name:'Economictimes Times ET UI TEAM'
},
{
    profile_path:'/assets/img/fri/fri_5.jpeg',
    name:'Economictimes Times ET UI TEAM'
},
{
    profile_path:'/assets/img/fri/fri_6.jpeg',
    name:'Rohit / PB / Amit'
},
]

const CarouselFri = () => {
    const items = credits?.map((item)=>{
        return(
            <div className="carouselItem">
                <img onDragStart={handleDragStart}  src={item.profile_path} 
                alt={item.name} title={item.name} />
            <b className="carouselItemText">{item.name}</b>
        </div>
       ) 
    })
    
    
    const responsive = {
        0: {
            items: 1,
        },
        645:{
            items:3
        },
        1024: {
            items: 4
        }
      }
  return (
    <AliceCarousel 
        responsive={responsive}
        autoPlay={true}
        autoPlayInterval={5000}
        infinite={true}
        disableButtonsControls
        disableDotsControls
        mouseTracking 
        items={items} />
  );
}
export default CarouselFri;