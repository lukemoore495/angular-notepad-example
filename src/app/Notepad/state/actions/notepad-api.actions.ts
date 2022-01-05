import { createAction, props } from '@ngrx/store';
import { Note } from '../../note';

export const loadNotesSuccess = createAction(
  '[Note API] Load Success',
  props<{ notes: Note[] }>()
);

export const loadNotesFailure = createAction(
  '[Note API] Load Fail',
  props<{ error: string }>()
);

export const updateNoteSuccess = createAction(
  '[Note API] Update Note Success',
  props<{ note: Note }>()
);

export const updateNoteFailure = createAction(
  '[Note API] Update Note Fail',
  props<{ error: string }>()
);

export const createNoteSuccess = createAction(
  '[Note API] Create Note Success',
  props<{ note: Note }>()
);

export const createNoteFailure = createAction(
  '[Note API] Create Note Fail',
  props<{ error: string }>()
);

export const deleteNoteSuccess = createAction(
  '[Note API] Delete Note Success',
  props<{ id: number }>()
);

export const deleteNoteFailure = createAction(
  '[Note API] Delete Note Fail',
  props<{ error: string }>()
);