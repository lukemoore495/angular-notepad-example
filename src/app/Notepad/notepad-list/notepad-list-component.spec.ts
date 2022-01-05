import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadListComponent } from './notepad-list-component';

describe('NotepadListComponent', () => {
  let component: NotepadListComponent;
  let fixture: ComponentFixture<NotepadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotepadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
