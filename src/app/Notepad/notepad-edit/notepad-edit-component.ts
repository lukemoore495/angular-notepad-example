import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { Note } from '../note';
import { getCurrentNote, getError, State } from '../state';
import { deleteNote, updateNote } from '../state/actions/notepad-page.actions';
import { notepadReducer } from '../state/notepad.reducer';

@Component({
  selector: 'notepad-edit',
  templateUrl: './notepad-edit-component.html',
  styleUrls: ['./notepad-edit-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotepadEditComponent implements OnInit {
  selectedNote$?: Observable<Note | null | undefined>;
  errorMessage$?: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.selectedNote$ = this.store.select(getCurrentNote);
    this.errorMessage$ = this.store.select(getError);
  }

  
  onDelete(noteId: number | null){
    if(noteId === null){
      throwError(() => "Note could not be deleted");
      return;
    }
    this.store.dispatch(deleteNote({NoteId: noteId}));
  }

  onChangeContent(note: Note, newContent: string){
    this.store.dispatch(updateNote({Note: {...note, content: newContent}}));
  }

  onChangeTitle(note: Note, newTitle: string){
    this.store.dispatch(updateNote({Note: {...note, title: newTitle}}));
  }

}
