import { Note } from "../note";
import { createReducer, on } from '@ngrx/store';
import { NoteApiActions, NotePageActions } from "./actions";


export interface NoteState{
    currentNoteId: number | null;
    notes: Note[];
    error: string;
}

const initialState: NoteState ={
    currentNoteId: null,
    notes: [],
    error: ''
}

export const notepadReducer = createReducer<NoteState>(
    initialState,
    on(NotePageActions.setCurrentNote, (state, action): NoteState => {
        return{
            ...state,
            currentNoteId: action.currentNoteId
        }
    }),
    on(NotePageActions.clearCurrentNote, (state, action): NoteState => {
        return {
            ...state,
            currentNoteId: null
        }
    }),
    on(NotePageActions.initializeCurrentNote, (state, action): NoteState => {
        return {
            ...state,
            currentNoteId: 0
        }
    }),
    on(NoteApiActions.loadNotesSuccess, (state, action) : NoteState => {
        return{
            ...state,
            notes: action.notes,
            currentNoteId: action.notes[0].id,
            error: ''
        }
    }),
    on(NoteApiActions.loadNotesFailure, (state, action): NoteState => {
        return {
            ...state,
            notes: [],
            error: action.error
        }
    }),
    on(NoteApiActions.updateNoteSuccess, (state, action): NoteState => {
        const updatedNotes = state.notes.map(
            note => note.id == action.note.id ? action.note : note);
        return{
            ...state,
            notes: updatedNotes,
            currentNoteId: action.note.id,
            error: ''
        }
    }),
    on(NoteApiActions.updateNoteFailure, (state, action): NoteState => {
        return{
            ...state,
            error: action.error
        }
    }),
    on(NoteApiActions.createNoteSuccess, (state, action): NoteState => {
        return{
            ...state,
            currentNoteId: action.note.id,
            notes: [...state.notes, action.note],
            error: ''
        }
    }),
    on(NoteApiActions.createNoteFailure, (state, action): NoteState => {
        return{
            ...state,
            error: action.error
        }
    }),
    on(NoteApiActions.deleteNoteSuccess, (state, action): NoteState => {
        return{
            ...state,
            currentNoteId: null,
            notes: state.notes.filter(note => note.id !== action.id),
            error: ''
        }
    }),
    on(NoteApiActions.deleteNoteFailure, (state, action): NoteState => {
        return{
            ...state,
            error: action.error
        }
    })
);