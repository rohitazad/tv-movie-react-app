import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ContentModal.style.scss';
import axios from 'axios';
import {img_500, unavailableLandscape, unavailable} from "../../config";
import Carousel from "../Carousel/Carousel";


const ContentModal = ({children, media_type, id}) => {
    console.log('_____ContentModal___', media_type, id)
    const _media_type = media_type && media_type !== '' ? media_type.toLowerCase() : '';
    const [show, setShow] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const API_KEY = process.env.REACT_APP_API_KEY
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchData = async () =>{
        try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${API_KEY}&language=en-US`);
          setContent(data);
          console.log('sdata',  data);
        }catch(error){
          console.error(error)
        }
    }
    const fetchVideo = async () =>{
        try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`);
          setVideo(data.results[0]?.key);
          console.log('sdata, fetchVideo',  data);
        }catch(error){
          console.error(error)
        }
    }
    useEffect(()=>{
        fetchData();
        fetchVideo();
        //eslint-disable-next-line
    }, [])
    const ModalContentGen = ()=>{
        return(
            <>
                <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>
                        
                                {content && content.name &&  (content.name || content) && content.title &&  content.title}(
                                    {(content.first_air_date || content.release_date || "----").substring(0,4)}
                                )
                                {
                                    content && content.tagline && (<i className="small"> {content.tagline}</i>)
                                }
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="customCard">
                                <img className="contentPoster" src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable} alt={content.title || content.name} title={content.title || content.name} />

                                <img className="contentPoster_landscape" src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape} alt={content.title || content.name} title={content.title || content.name} />
                                <div className="showText">
                                    {content.overview}
                                </div>
                                <div className="customeCrouseWrap">
                                    <Carousel media_type={_media_type} id={id}/>
                                </div>
                                <a target="_blank" rel="noreferrer" className="btn btn-primary customeBtn" href={`https://www.youtube.com/watch?v=${video}`}>
                                    Watch  the Trailer
                                </a>

                            </div>
                        </Modal.Body>
                        </Modal>
            </>
        )
    }
    return (
      <>
        <Button variant="primary" className="contentMediaWrap" onClick={handleShow}>
          {children}
        </Button>
        {
            content ?  ModalContentGen()  : ''
        }
        
      </>
    );
  }

  export default ContentModal;