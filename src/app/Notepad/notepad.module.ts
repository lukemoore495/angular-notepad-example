import { NgModule } from '@angular/core';
import { NotepadEditComponent } from './notepad-edit/notepad-edit-component';
import { NotepadListComponent } from './notepad-list/notepad-list-component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { notepadReducer } from './state/notepad.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './state/notepad.effects';


@NgModule({
  declarations: [    
    NotepadEditComponent,
    NotepadListComponent],
  imports:[
    SharedModule,
    StoreModule.forFeature('notes', notepadReducer),
    EffectsModule.forFeature([NoteEffects])
  ],
  exports:[
    NotepadEditComponent,
    NotepadListComponent
  ]
})
export class NotepadModule { }
