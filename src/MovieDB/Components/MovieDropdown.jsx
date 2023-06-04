import { Dropdown } from "react-bootstrap";
import { useState } from "react";

const MovieDropdown = ({ onSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (eventKey) => {
    if (eventKey === "28") {
      setSelectedGenre("Action");
    } else if (eventKey === "35") {
      setSelectedGenre("Comedy");
    } else {
      setSelectedGenre("Drama");
    }
    onSelect(eventKey);
  };

  return (
    <Dropdown
      onSelect={handleGenreChange}
      className="mb-3 d-flex justify-content-center align-items-center"
    >
      <Dropdown.Toggle
        variant="primary"
        id="genreDropdown"
        className=" d-flex justify-content-center align-items-center w-100"
      >
        {selectedGenre ? selectedGenre : "Select Genre"}
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-100">
        <Dropdown.Item
          eventKey="28"
          className="d-flex justify-content-center align-items-center"
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="35"
          className="d-flex justify-content-center align-items-center"
        >
          Comedy
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="18"
          className="d-flex justify-content-center align-items-center"
        >
          Drama
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MovieDropdown;
