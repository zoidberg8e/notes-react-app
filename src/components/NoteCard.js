import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    const { note, deleteNote } = this.props;
    return(
      <div className="note-card-container">
        <div className="note-card-title">
          {note.title}
        </div>
        <div className="note-card-content">
          {note.body}
        </div>
        <span className="note-card-delete" onClick={() => deleteNote(note.id)}>
          <i className="material-icons">close</i>
        </span>
        <span className="note-card-edit" onClick={() => deleteNote(note.id)}>
          <i className="material-icons">trash</i>
        </span>
      </div>
    );
  }
}

export default NoteCard;
