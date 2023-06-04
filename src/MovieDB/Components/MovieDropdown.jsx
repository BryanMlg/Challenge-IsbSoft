import { Dropdown } from "react-bootstrap";
import { useState } from "react";

const MovieDropdown = ({ onSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  
  const handleGenreChange = (eventKey) => {
    if(eventKey === "28"){
      setSelectedGenre("Action");
    }else if(eventKey === "35"){
      setSelectedGenre("Comedy")
    }else{
      setSelectedGenre("Drama")
    }
    onSelect(eventKey);
  };

  return (
    <Dropdown onSelect={handleGenreChange} className="mb-3">
      <Dropdown.Toggle variant="primary" id="genreDropdown">
        {selectedGenre ? selectedGenre : "Select Genre"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="28">Action</Dropdown.Item>
        <Dropdown.Item eventKey="35">Comedy</Dropdown.Item>
        <Dropdown.Item eventKey="18">Drama</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MovieDropdown;

