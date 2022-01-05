import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Note } from '../note';
import { getCurrentNote, getError, getNotes, State } from '../state';
import { NotePageActions } from '../state/actions';

@Component({
  selector: 'notepad-list',
  templateUrl: './notepad-list-component.html',
  styleUrls: ['./notepad-list-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotepadListComponent implements OnInit{
  selectedNote$?: Observable<Note | null | undefined>;
  notes$?: Observable<Note[]>;
  errorMessage$?: Observable<string>;
  searchTerm = "";

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.notes$ = this.store.select(getNotes);
    this.errorMessage$ = this.store.select(getError);
    this.selectedNote$ = this.store.select(getCurrentNote)
    .pipe(
      tap(note => console.log(JSON.stringify(note)))
    );
    this.store.dispatch(NotePageActions.loadNotes());
  }

  onChange(note: Note){
    if(note.id !== null){
      this.store.dispatch(NotePageActions.setCurrentNote({currentNoteId: note.id}));
    } else { 
      this.store.dispatch(NotePageActions.clearCurrentNote());
    }
  }

  searchChanged(searchTerm: string){
    this.searchTerm = searchTerm;
  }

  createNote(){
    this.store.dispatch(
      NotePageActions.createNote(
        {Note: {content: "", title: "Untitled Note", id: null}}
      ));
  }
}
