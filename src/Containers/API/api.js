const page = 1;
const media_type = 'all';
const id = 12;
const type = 'all';
const genreforURL = 'test';
const searchText = 'allvideo'

<div >
            Trending - <br />
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            <br /><br />
            Discover Movie - <br />
            https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
            <br /><br />
            Discover TV Series-<br />
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`

            <br /><br />
            Search - <br />
            https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            <br /><br />
            Genres - <br />
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            <br /><br />
            Modal - <br />
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`


            <br /><br />
            Youtube Video - <br />
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

            <br /><br />
            Carousel - <br />
            `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`


            <br /><br /><br /><br /><br /><br /><br />
            https://entertainmenthub.netlify.app/movies
            <br />
            https://react-bootstrap.netlify.app/components/cards/
        </div>