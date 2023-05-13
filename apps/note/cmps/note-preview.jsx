const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { NoteTxt } from "../cmps/note-txt.jsx"
import { NoteImg } from "../cmps/note-img.jsx"
import { NoteVideo } from "../cmps/note-video.jsx"
import { NoteTodos } from "../cmps/note-todos.jsx"
import { ColorInput } from "./dynamic-inputs/color-input.jsx"
import { NoteEdit } from "../cmps/note-edit.jsx"


export function NotePreview({ note, onRemoveNote }) {
    const [cmpType, setCmpType] = useState('color')
    const [noteStyle, setNoteStyle] = useState({ backgroundColor: 'pink', })
    const [activatedEdit, setActivatedEdit] = useState(false)


    function onSetNoteStyle(newStyle) {
        setNoteStyle((prevStyle) => ({ ...prevStyle, ...newStyle }))
    }


    function handleClick(ev) {
        onRemoveNote(note.id)
    }

    function onPinNote(noteId) {

    }

    return (
        <section style={note.style} className="note-container" >
            <article className="note-card" style={{ backgroundColor: 'note.style.backgroundColor' }}>
                {!!note.info && <h1>{note.info.title}</h1>}
                {!!note.info && <p>{note.info.txt}</p>}
                <button className="note-pin" onClick={() => onPinNote(note.id)} ><img src="./assets/img/imgs-notes/pin.svg" alt="Pin Note" /></button>
                <ul>
                    <li className="flex row">
                        <button className="edit-note" onClick={() => setActivatedEdit(false)} ><img src="./assets/img/imgs-notes/edit.svg" alt="Edit-Note" /></button>
                        {!!activatedEdit && <NoteEdit id={note.id} setActivatedEdit={setActivatedEdit} />}
                        <button className="mail-send" onClick={() => onPinNote(note.id)} ><img src="./assets/img/imgs-gmail/mail.svg" alt="Mail" /></button>
                        <button className="palette-color" onClick={() => onPinNote(note.id)} ><img src="./assets/img/imgs-notes/color-palette.svg" alt="Color Palette" /></button>
                        <button className="note-trash" onClick={(ev) => handleClick(ev)} ><img src="./assets/img/imgs-notes/trash.svg" alt="Trash" /></button>
                    </li>
                </ul>

            </article>
            {/* <NoteTxt />
            <NoteImg />
            <NoteVideo />
            <NoteTodos /> */}
            {/* <DynamicCmp cmpType={cmpType} name="Muki" onSetNoteStyle={onSetNoteStyle} /> */}
        </section>
    )
}
