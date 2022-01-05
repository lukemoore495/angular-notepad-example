import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class NoteData implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      notes: [
        {
            id: 1,
            title: "Title",
            content: "Malls are great places to shop; I can find everything I need under one roof. When she didn’t like a guy who was trying to pick her up, she started using sign language. The paintbrush was angry at the color the artist chose to use."
          },
          {
            id: 2,
            title: "My Title",
            content: "Dan ate the clouds like cotton candy. He picked up trash in his spare time to dump in his neighbor's yard."
          },
          {
            id: 5,
            title: "Some notes",
            content: "Best friends are like old tomatoes and shoelaces. After fighting off the alligator, Brian still had to face the anaconda. Jason lived his life by the motto, Anything worth doing is worth doing poorly."
          },
          {
            id: 8,
            title: "Random Sentences",
            content: "Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon."
          },
          {
            id: 10,
            title: "Important Note",
            content: "Potato"
          }
      ]
    };
  }
}