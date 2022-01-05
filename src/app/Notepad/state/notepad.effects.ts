import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { NotepadService } from "../notepad-service";
import { NotePageActions, NoteApiActions } from './actions';


@Injectable()
export class NoteEffects{
    constructor(private actions$: Actions, private notepadService: NotepadService){ }

    loadNotes$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(NotePageActions.loadNotes),
                mergeMap(() => this.notepadService.getNotes()
                    .pipe(
                        map(notes => NoteApiActions.loadNotesSuccess({notes})),
                        catchError(error => of(NoteApiActions.loadNotesFailure({error})))
                    )
                )
            );
    });

    updateNote$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(NotePageActions.updateNote),
                switchMap(action => this.notepadService.updateNote(action.Note)
                    .pipe(
                        map(note => NoteApiActions.updateNoteSuccess({note})),
                        catchError(error => of(NoteApiActions.updateNoteFailure({error})))
                    ))
            )
    });

    createNote$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(NotePageActions.createNote),
                concatMap(action => this.notepadService.createNote(action.Note)
                    .pipe(
                        map(note => NoteApiActions.createNoteSuccess({ note })),
                        catchError(error => of(NoteApiActions.createNoteFailure({ error })))
                    ))
            )
    });

    deleteNote$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(NotePageActions.deleteNote),
                mergeMap(action => this.notepadService.deleteNote(action.NoteId)
                    .pipe(
                        map(note => NoteApiActions.deleteNoteSuccess({ id: action.NoteId })),
                        catchError(error => of(NoteApiActions.deleteNoteFailure({ error })))
                    ))
            )
    });
}