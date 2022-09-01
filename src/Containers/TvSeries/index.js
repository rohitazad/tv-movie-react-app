import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleCardItem from "../../Components/SingleCard";
import PaginationComponent from "../../Components/Pagination";
import TagListComponent from "../../Components/TagsList";
import useGenres from "../../hooks/useGenres";

const TvSeries = ()=>{
    const API_KEY = process.env.REACT_APP_API_KEY
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1);
    const [paginationno, setPaginationno] = useState(0)

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres)
    
    const GetMoviesData = async ()=>{
        
        const API_URL  = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&page=${pageno}&with_genres=${genreforURL}`;
        const {data} = await axios.get(`${API_URL} `)
        setContent(data.results);
        setPaginationno(data.total_pages)
        console.log('data', data.total_pages)
    }

    
    useEffect(()=>{
        GetMoviesData();
        //eslint-disable-next-line
    }, [])

    useEffect(()=>{
        GetMoviesData();
        //eslint-disable-next-line
    }, [pageno, genreforURL])

    const handleClick = (number)=>{
        setPageno(number);
    }
    
    const moviesCardCreated  = (data)=>{
        let moviesHtmlContent = [];
        data.map((item)=>{
            return moviesHtmlContent.push(<SingleCardItem key={item.id} itemData={item} type="Tv" />)
        })
        return (
            <>
                <div className="trending">{moviesHtmlContent}</div> 
                {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
                
            </>
        );
    }
    return(
        <>
        <h1 className="topheading1">DISCOVER SERIES </h1>
        <TagListComponent selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} type="tv" setPage={setPageno} />
        {
            content && content.length > 0 ? moviesCardCreated(content) : ''
        }
            
        </>
    )
}


export default TvSeries;