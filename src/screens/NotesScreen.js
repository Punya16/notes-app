import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import Note from '../components/Note';

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addNote = () => {
    if (newNote.trim() !== '') {
      if (editIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = newNote;
        setNotes(updatedNotes);
        setNewNote('');
        setEditIndex(null);
      } else {
        setNotes([...notes, newNote]);
        setNewNote('');
      }
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditIndex(index);
  };


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a note..."
        value={newNote}
        onChangeText={(text) => setNewNote(text)}
      />
      <Button title={editIndex !== null ? 'Update' : 'Add'} onPress={addNote} />
      <ScrollView style={styles.notesContainer}>
        {notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            onDelete={() => deleteNote(index)}
            onEdit={() => editNote(index)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  notesContainer: {
    marginTop: 10,
  },
});

export default NotesScreen;
