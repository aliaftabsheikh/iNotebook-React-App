import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = (props) => {
    const context = useContext(noteContext);
    let history = useHistory()
    const { notes, getNotes, editNote } = context;

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }else{
           history.push("/login")
        }
        // eslint-disable-next-line
    }, [])
    const refClose = useRef(null)

    const [note, setNote] = useState({id : "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        // ref.current.click();
        setNote({id : currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        

        // setNote(currentNote)
        console.log("Modal Clicked");

    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        console.log("Updating the Note...", note)
        props.showAlert("Updated Successfully", "success")
        // setNote({etitle: "", edescription: "", etag: ""})
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />


            {/* <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button> */}


            <div>
                <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle}  minLength={5} required />
                                        {/* minLength={5} required  value={note.title}/> */}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription}  minLength={5} required />
                                        {/* value={note.description}  minLength={5} required /> */}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag}  minLength={5} required /> 

                                        {/* value={note.tag}  minLength={5} required />*/}
                                    </div>


                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button"  className="btn btn-primary" onClick={handleClick}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h1>Your Notes</h1>
                <div className = "container mx-2">
                {notes.length === 0 && "No Notes to Display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes;