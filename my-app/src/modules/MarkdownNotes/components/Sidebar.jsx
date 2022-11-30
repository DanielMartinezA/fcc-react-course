import styles from '../MarkdownNotesApp.module.css';

const firstLineRegex = /\n/

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => {
        const newLineIndex = note.body.search(firstLineRegex)
        return (
            <div key={note.id}>
                <div
                    className={`${styles.title} ${
                        note.id === props.currentNote.id ? styles.selectedNote : ""
                    }`}
                    onClick={() => props.setCurrentNoteId(note.id)}
                >
                    <h4 className={styles.textSnippet}>{
                        newLineIndex === -1 ? note.body : note.body.slice(0, newLineIndex)
                    }</h4>
                    <button
                        className={styles.deleteBtn}
                        onClick={(event) => props.deleteNote(event, note.id)}
                    >
                        <i className={`${styles.ggTrash} ${styles.trashIcon}`}></i>
                    </button>
                </div>
            </div>
    )})

    return (
        <section className={`${styles.pane} ${styles.sidebar}`}>
            <div className={styles.sidebarHeader}>
                <h3>Notes</h3>
                <button className={styles.newNote} onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
