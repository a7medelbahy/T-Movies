import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../../api";
import "./details.css";
import MainDetails from "./MainDetails";
import Cast from "./Cast";
import Trailer from "./Trailer";
import Similar from "./Smiliar";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const params = useParams();
  const id = params.id;
  const type = params.type;
  const [content, setContent] = useState([]);
  const [cast, setCast] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [similar, setSimilar] = useState([]);

  const getContent = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}${type}/${id}?api_key=${apiConfig.apiKey}&language=en-US`
    );
    setContent(data);
  };
  const getCast = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}${type}/${id}/credits?api_key=${apiConfig.apiKey}&language=en-US`
    );
    setCast(data.cast?.slice(0, 5));
  };
  const getTrailers = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}${type}/${id}/videos?api_key=${apiConfig.apiKey}&language=en-US`
    );
    setTrailers(data.results.slice(0, 3));
  };
  const geSimilar = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}${type}/${id}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`
    );
    setSimilar(data.results);
  };
  useEffect(() => {
    getContent();
    getCast();
    getTrailers();
    geSimilar();
  }, [id]);

  return (
    <div className="details position-relative">
      <Helmet>
        <title>{content.original_title || content.original_name}</title>
        <meta name="description" content={content.overview} />
        <link rel="canonical" href="/details/:id/:type" />
      </Helmet>
      <div className="details-background position-absolute top-0 w-100">
        <img
          src={
            content.backdrop_path
              ? apiConfig.originalImage(content.backdrop_path)
              : apiConfig.noFound
          }
          className="img-fluid w-100 h-100 d-block"
          alt="background"
        />
      </div>
      <div className="container">
        <div className="details-container d-flex flex-column gap-5">
          <MainDetails content={content} />
          <Cast cast={cast} />
          <Trailer trailers={trailers} />
          <Similar type={type} similar={similar} />
        </div>
      </div>
    </div>
  );
};

export default Details;
