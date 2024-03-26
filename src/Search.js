import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function displayCity(event) {
    event.preventDefault();
    setMessage(`It is current 20°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={displayCity}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
