import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleCardItem from "../../Components/SingleCard";
import PaginationComponent from "../../Components/Pagination";

export default function Trending(){
    // https://api.themoviedb.org/3/movie/550?api_key=c82efe36f886f9f4ee17e977df32ddfe
    // https://www.themoviedb.org/settings/api/stats
    // https://app.netlify.com/user/settings

    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1)
    const [paginationno, setPaginationno] = useState(0)
    const API_KEY = process.env.REACT_APP_API_KEY
    const GetDataTrendingAPI = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        //console.log('data', data);
        setContent(data.results);
        setPaginationno(data.total_pages)
    }

    useEffect(()=>{
        console.log('Trending Component did mount');
        GetDataTrendingAPI();
        //eslint-disable-next-line
    }, [])

    useEffect(()=>{
        console.log('Trending Component didupdate mount');
        GetDataTrendingAPI();
        //eslint-disable-next-line
    }, [pageno])

    const handleClick = (number)=>{
        setPageno(number);
        //console.log('handleChangeChildToParent', number)
    }
    const moviesCardCreated  = (data)=>{
        let moviesHtmlContent = [];
        data.map((item)=>{
            return moviesHtmlContent.push(<SingleCardItem key={item.id} itemData={item} />)
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
    //console.log('_____')
    return(
        <>
        <h1 className="topheading1">Top Trending Movies and Tv Series </h1>
        {
            content && content.length > 0 ? moviesCardCreated(content) : ''
        }
            
        </>
    )
}