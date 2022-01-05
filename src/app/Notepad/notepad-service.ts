import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from "rxjs";
import { tap } from "rxjs";
import { Note } from "./note";

@Injectable({
    providedIn: 'root',
  })
  export class NotepadService {
    private notepadUrl = 'api/notes/';

    constructor(private http: HttpClient) { }

    getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.notepadUrl)
          .pipe(
            catchError(this.handleError)
          );
      }
    
    createNote(note: Note): Observable<Note>{
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      const newNote = {...note, id: null}
      return this.http.post<Note>(this.notepadUrl, newNote, {headers})
        .pipe(
          catchError(this.handleError)
        );
    }

    deleteNote(id: number): Observable<Note>{
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      const url = `${this.notepadUrl}/${id}`
      return this.http.delete<Note>(url, {headers})
        .pipe(
          catchError(this.handleError)
        );
    }

    updateNote(note: Note): Observable<Note>{
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      const url = `${this.notepadUrl}/${note.id}`
      return this.http.put<Note>(url, note, {headers})
        .pipe(
          map(() => note),
          catchError(this.handleError)
        );
    }

    private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => new Error(err));
    }
      
  }