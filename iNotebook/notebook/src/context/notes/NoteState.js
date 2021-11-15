import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  //Get All Note

  const getNotes = async () => {

    // Todo Api Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  }




  //Add a Note

  const addNote = async (title, description, tag) => {

    // Todo Api Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'auth-token':localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({ title, description, tag })
    });
    
    const note = await response.json();
    setNotes(notes.concat(note))
}



//Delete a Note
const deleteNote = async (id) => {
  // Todo Api Call
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    },

  });
  const json = await response.json();
  console.log(json);

  //Logic to Delete in client
  console.log("Deleting The Note With id" + id);
  const newNotes = notes.filter((note) => { return note._id !== id })
  setNotes(newNotes)
}
//Edit a Note
const editNote = async (id, title, description, tag) => {
  // Todo Api Call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    },

    body: JSON.stringify({ title, description, tag })
  });
  const json = await response.json();
  console.log(json);




  let newNotes = JSON.parse(JSON.stringify(notes))
  //Logic to Edit in client

  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];

    if (element._id === id) {
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tag = tag;
      break;
    }
  }
  setNotes(newNotes)
}

return (
  <noteContext.Provider value={{ addNote, notes, deleteNote, editNote, getNotes }}>
    {props.children}
  </noteContext.Provider>
)
}

export default NoteState;