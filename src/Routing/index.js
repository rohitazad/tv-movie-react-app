import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Trending from "../Containers/Trending";
import Movies from "../Containers/Movies";
import TvSeries from "../Containers/TvSeries";
import SearchPage from "../Containers/SearchPage";
import HomePage from "../Containers/Home";
import HeaderIndex from "../Components/Header";
export default function RoutingIndex(){
    return(
        <>
        <Router>
            <HeaderIndex />
            <div className="wrapContaine container">
                <Routes>
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/movies" element={<Movies />} /> 
                    <Route path="/tv-series" element={<TvSeries />} />
                    <Route path="/search-item" element={<SearchPage />} />
                    <Route path="/" exact element={<HomePage />} />
                </Routes>
            </div>
        </Router>
        </>
    )
}