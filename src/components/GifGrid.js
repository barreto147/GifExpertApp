//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid animate__animated animate__zoomInUp ">
        {loading && <p>Loading</p>}
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
