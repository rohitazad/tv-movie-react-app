import React from "react";
import Card from 'react-bootstrap/Card';
import {img_300, unavailable} from '../../config';
import './SingleCardStyle.scss';
import ContentModal from "../ContentModal/ContentModal";

export default function SingleCardItem(data){
    console.log('daa',data)
    const title = data.itemData.original_title || data.itemData.name;
    const id = data.itemData.id;
   // const desciption = data.itemData.overview || '';
    const imageUrl =  data.itemData.poster_path ? img_300 + data.itemData.poster_path : unavailable;
    // unavailable
    const media_type = data.itemData.media_type  || data.type;
    const release_date =  data.itemData.release_date || data.itemData.first_air_date;
    const vote_average = data.itemData.vote_average;
    return (
        <>
            <ContentModal media_type={media_type} id={id}>
            <Card>
                <span className={`${vote_average > 6 ? 'imgCount' : 'imgCount denger'}`}>
                Rating :-<i>  {vote_average}</i>
                </span>
                <Card.Img variant="top" src={imageUrl}>
                </Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <span className="showTitle">{media_type}</span>
                        <span className="showDate">{release_date}</span>
                    </Card.Subtitle>
                    {/* <Card.Text>{desciption}</Card.Text> */}
                </Card.Body>
            </Card>
            </ContentModal>
        </>
    )
}