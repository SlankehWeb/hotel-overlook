import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:4000/news/${id}`;

    const getData = async () => {
      try {
        const result = await axios.get(url);

        console.log(result);

        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [id, setData]);

  return (
    <div className="newsCards" key={data.id}>
      <figure className="newsCard">
      <img src={`http://localhost:4000/images/${data.image.filename}`} alt="img_news" />

        <h2>{data.title}</h2>

        <p>{data.teaser}</p>
      </figure>
    </div>
  );
};

export default NewsDetail;