import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.scss";

const News = () => {
  // Define a state variable 'news' and a function 'setNews' to update it
  const [news, setNews] = useState([]);

  // useEffect hook is used to fetch data from the server when the component mounts
  useEffect(() => {
    // Define the URL from which to fetch news data
    const url = "http://localhost:4000/news";

    // Define an async function 'getData' to make the API request
    const getData = async () => {
      try {
        // Use axios to make a GET request to the specified URL
        const result = await axios.get(url);

        // Log the result of the API request to the console
        console.log(result);

        // Update the 'news' state with the data received from the API
        setNews(result.data);
      } catch (err) {
        // Handle errors that occur during the API request
        console.error(err);
      }
    };

    // Call the 'getData' function when the component mounts
    getData();
  }, [setNews]); // The useEffect hook will run whenever 'setNews' changes

  return (
    // Render the fetched news data as a list of news cards
    <div className="newsCards">
      {/* Map through the 'news' array and create a news card for each item */}
      {news.slice(-3).map((data) => (
        <figure className="newsCard" key={data.id}>
          {/* Display the news image with the image filename from the API */}
          <img src={`http://localhost:4000/images/${data.image.filename}`} alt="img_news" />
          {/* Display the news title */}
          <h2>{data.title}</h2>
          {/* Display a summary of the news */}
          <p>{data.teaser}</p>
        </figure>
      ))}
    </div>
  );
};

export default News;
