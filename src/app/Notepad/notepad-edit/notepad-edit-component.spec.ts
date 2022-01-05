import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadEditComponent } from './notepad-edit-component';

describe('NotepadEditComponent', () => {
  let component: NotepadEditComponent;
  let fixture: ComponentFixture<NotepadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotepadEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
