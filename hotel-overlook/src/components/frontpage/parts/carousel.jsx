import React, { useEffect, useState } from "react";

function Carousel() { 
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("http://localhost:4000/imagelist")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>

    </>
  );
}

export default Carousel;