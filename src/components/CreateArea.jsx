import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  let [expand, setExpand] = useState(false);

  function showElem() {
    setExpand(true);
  }

  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  function trackNote(event) {
    let { value, name } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" onClick={showElem}>
        {expand && (
          <input
            onChange={trackNote}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={trackNote}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand && true}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
