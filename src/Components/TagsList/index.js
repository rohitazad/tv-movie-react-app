import React, {useEffect} from "react";
import './TagsList.style.scss';
import axios from 'axios';

const TagListComponent = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
    })=>{

    console.log('selectedGenres', selectedGenres)
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const GetTagListData = async ()=>{
        // movie
        const API_URL = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`;
        const {data} = await axios.get(`${API_URL}`)
        console.log('taglist',  data)
        setGenres(data.genres)
    }

    useEffect(()=>{
        GetTagListData();
        return ()=>{
            setGenres({});
        }
        //eslint-disable-next-line
    }, [])
    const handleAdd = (genre)=>{
        setSelectedGenres([...selectedGenres, genre])
        //console.log('oldSelectedGenres', selectedGenres)
        setGenres(genres.filter((g)=>{ return g.id !== genre.id}));
        return setPage(1)
    }
    const handleRemove = (genre)=>{
        setSelectedGenres(
            selectedGenres.filter((g)=>{ 
                return g.id !== genre.id
            })
        )
        //console.log('oldSelectedGenres', selectedGenres)
        setGenres([...genres,genre]);
        return setPage(1)
    }
   

    return (
        <>
            {
                selectedGenres && selectedGenres.map((genre)=>{
                    return <span className="tag selected" onClick={()=>{return handleRemove(genre)}} key={`${genre.id}newtag`}>{genre.name} <i>Close</i></span>
                })
            }
            {
                genres && genres.length > 0 ? genres.map((genre)=>{
                    return <span className="tag" onClick={()=>{return handleAdd(genre)}} key={genre.id}>{genre.name}</span>
                }) : ''
            }
        </>
    )
}

export default TagListComponent;