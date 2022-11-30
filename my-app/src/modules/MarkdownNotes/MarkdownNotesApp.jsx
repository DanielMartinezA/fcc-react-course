import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import data from "./assets/data"
import Split from "react-split"
import {nanoid} from "nanoid"
import { useState, useEffect } from "react"
import styles from './MarkdownNotesApp.module.css';

export default function MarkdownNotesApp() {
    const notesLocalStorageKey = "notesLS"

    const [notes, setNotes] = useState(
        // Passing the initial value logic as a function ensures it's run only once
        () => { return JSON.parse(localStorage.getItem(notesLocalStorageKey)) || [] }
    )
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    )
    
    useEffect(() => {
        localStorage.setItem(notesLocalStorageKey, JSON.stringify(notes))
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // Puts the modified note at the top of the list
        setNotes(oldNotes => {
            // const currentNoteIndex = oldNotes.findIndex(elem => elem.id === currentNoteId)
            // if (currentNoteIndex !== -1) {
            //     return [
            //         {...oldNotes[currentNoteIndex], body: text},
            //         ...oldNotes.slice(0,currentNoteIndex),
            //         ...oldNotes.slice(currentNoteIndex+1,)
            //     ]
            // } else {
            //     return oldNotes
            // }
            const newArray = []
            oldNotes.forEach(oldNote => {
                if (oldNote.id === currentNoteId) {
                    newArray.unshift({...oldNote, body: text})
                } else {
                    newArray.push(oldNote)
                }
            })
            return newArray
        })
    }
    
    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main className={styles.mainSection}>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className={styles.split}
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className={styles.noNotes}>
                <h1>You have no notes</h1>
                <button 
                    className={styles.firstNote}
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
