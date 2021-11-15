// import React, {useState, useContext} from 'react'
// import noteContext from '../context/notes/noteContext'
// import NoteItem from './NoteItem';

// const Modal = () => {
//     const context = useContext(noteContext);
//     const { notes } = context;

//     const updateNote = (currentNote) => {
//        setNote(currentNote)
//         console.log("Modal Clicked");

//     }

//     const [note, setNote] = useState({title: "", description: "", tag: ""})

//     const handleClick = (e)=>{
//         e.preventDefault();
//         // setNote({title: "", description: "", tag: ""})
//     }

//     const onChange = (e)=>{
//         setNote({...note, [e.target.name]: e.target.value})
//     }

//     return (
//         <>
//         <div>
//             <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form className="my-3">
//                                 <div className="mb-3">
//                                     <label htmlFor="title" className="form-label">Title</label>
//                                     <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.title}/>
//                                     {/* minLength={5} required  value={note.title}/> */}
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="description" className="form-label">Description</label>
//                                     <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.description}/>
//                                     {/* value={note.description}  minLength={5} required /> */}
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="tag" className="form-label">Tag</label>
//                                     <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.tag}/>

//                                     {/* value={note.tag}  minLength={5} required />*/}
//                                 </div>  

                               
//                                       </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary">Update Note</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 

//         <div className="row my-3">
//                 <h1>Your Notes</h1>
//                 {notes.map((note) => {
//                     return <NoteItem key={note._id} updateNote={updateNote} note={note} />
//                 })}
//             </div>

//         </>
//     )
// }

// export default Modal
