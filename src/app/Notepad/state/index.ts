import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NoteState } from "./notepad.reducer";

export interface State {
    notes: NoteState;
}

const getNoteFeatureState = createFeatureSelector<NoteState>('notes');

export const getCurrentNoteId = createSelector(
    getNoteFeatureState,
    state => state.currentNoteId
);

export const getCurrentNote = createSelector(
    getNoteFeatureState,
    getCurrentNoteId,
    (state, currentNoteId) => {
        if(currentNoteId === 0){
            return {
                id: 0,
                title: '',
                content: '',
            };
        } else {
            return currentNoteId ? state.notes.find(n => n.id == currentNoteId) : null;
        }
    }
);

export const getNotes = createSelector(
    getNoteFeatureState,
    state => state.notes
);

export const getError = createSelector(
    getNoteFeatureState,
    state => state.error
)