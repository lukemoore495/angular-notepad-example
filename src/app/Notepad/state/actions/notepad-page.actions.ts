import { createAction, props } from '@ngrx/store';
import { Note } from '../../note';

export const setCurrentNote = createAction(
  '[Note Page] Set Current Note',
  props<{ currentNoteId: number }>()
);

export const clearCurrentNote = createAction(
  '[Note Page] Clear Current Note'
);

export const initializeCurrentNote = createAction(
  '[Note Page] Initialize Current Note'
);

export const loadNotes = createAction(
  '[Note Page] Load'
);

export const updateNote = createAction(
  '[Note Page] Update Note',
  props<{ Note: Note }>()
);

export const createNote = createAction(
  '[Note Page] Create Note',
  props<{ Note: Note }>()
);

export const deleteNote = createAction(
  '[Note Page] Delete Note',
  props<{ NoteId: number }>()
);