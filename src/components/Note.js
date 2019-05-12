import React, { Component } from 'react';

class Note extends Component {
  onSubmit(e) {
    e.preventDefault();
    const formData = {
      title: this.title.value,
      body: this.body.value
    };
    this.props.submitNote(formData, this.props.note.id);
  }

  render() {
    const { note } = this.props;
    return(
      <div className="note-container">
        <h2>Create a new Note just to remember how important some life questions are</h2>
        <form
          className="note-form"
          onSubmit={(e) => this.onSubmit(e)}
        >
          <div className="note-title">
            <input
              className="note-title-input"
              type="text"
              placeholder="Note Title..."
              defaultValue={note.title}
              ref={(input) => this.title = input}
            />
          </div>
          <div className="note-textarea-container">
            <textarea
              className="note-textarea"
              placeholder="Type Here..."
              defaultValue={note.body}
              ref={(input) => this.body = input}
            />
          </div>
          <input className="note-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Note;
