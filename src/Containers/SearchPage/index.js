import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './SearchPage.style.scss';

import SingleCardItem from "../../Components/SingleCard";
import PaginationComponent from "../../Components/Pagination";


const SearchPage = ()=>{
    //const [validated, setValidated] = useState(false);
    const [typeValue, setTypeValue] = useState('movie');
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('all');
    const [content, setContent] = useState([]);
    const [numofPages, setNumofPages] = useState();

    const API_KEY = process.env.REACT_APP_API_KEY
    
      const fetchSearch = async () =>{
          try{
            const {data} = await axios.get(`https://api.themoviedb.org/3/search/${typeValue}?api_key=${API_KEY}&language=en-US&query=${searchText !== '' ? searchText : 'all'}&page=${page}&include_adult=false`);
            setContent(data.results);
            setNumofPages(data.total_pages);
            console.log('sdata',  data);
          }catch(error){
            console.error(error)
          }
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearch();
      };
      useEffect(()=>{
          window.scroll(0,0);
          fetchSearch();
          // eslint-disable-next-line
      }, [typeValue,page])
      const handleClick = (number)=>{
        setPage(number);
            //console.log('handleChangeChildToParent', number)
        }
      const moviesCardCreated  = (data)=>{
        let moviesHtmlContent = [];
        data.map((item)=>{
            return moviesHtmlContent.push(<SingleCardItem key={item.id} itemData={item} type={typeValue} />)
        })
        return (
            <>
                <div className="trending">{moviesHtmlContent}</div> 
                {
                    numofPages && numofPages > 1 ? <PaginationComponent maxnum={numofPages} activenum={page} handleClick={handleClick}/> : ''
                }
            </>
        );
    }
    const tabHandleClick = (e)=>{
        console.log(e);
        setTypeValue(e)
    }
    return(
        <>
            <h1 className="topheading1">Search Series and Movies </h1>
            <Form noValidate  onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="10" controlId="formSearchText">
                        <Form.Label>Enter text</Form.Label>
                        <Form.Control value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} type="text" placeholder="Seach any movies and series" />
                          
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formSubmitBtn" className="searchBtn">
                        <Button variant="primary" type="submit">
                            Search
                        </Button> 
                    </Form.Group>
                </Row>
                <Tabs
                    defaultActiveKey="movie"
                    id="justify-tab-example"
                    className="mb-3"
                    onClick={(e)=>{tabHandleClick(e.target.dataset.rrUiEventKey)}}
                    justify
                    >
                        <Tab eventKey="movie" title="Search Movies">
                            {
                                content && content.length > 0 ? moviesCardCreated(content) : ''
                            }
                        </Tab>
                        <Tab eventKey="tv" title="Search TV Series">
                            {
                                content && content.length > 0 ? moviesCardCreated(content) : ''
                            }
                        </Tab>
                    </Tabs>
                
            </Form>
            
        </>
    )
}

export default SearchPage;