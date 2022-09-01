import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.style.scss';
import axios from 'axios';
import {img_300, noPicture} from "../../config";

const handleDragStart = (e) => e.preventDefault();


const Carousel = ({media_type, id}) => {
    const [credits , setCredits] = useState();
    const API_KEY = process.env.REACT_APP_API_KEY
    const items = credits?.map((item)=>{
        return(
            <div className="carouselItem">
                <img onDragStart={handleDragStart}  src={item.profile_path ? `${img_300}/${item.profile_path}`:noPicture} 
                alt={item.name} title={item.name} />
            <b className="carouselItemText">{item.name}</b>
        </div>
       ) 
    })
    const fetchCaouselData = async () =>{
        try{
            // https://api.themoviedb.org/3/movie/361743/credits?api_key=26ba5e77849587dbd7df199727859189&language=en-US
          const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`);
          setCredits(data.cast);
          //console.log('sdata',  data);
        }catch(error){
          console.error(error)
        }
    }
    useEffect(()=>{
        fetchCaouselData();
        //eslint-disable-next-line
    },[])
    const responsive = {
        0: {
            items: 4,
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
export default Carousel;