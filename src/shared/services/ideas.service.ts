import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  ideas: any[] = [
    {
      title: 'Angular shop app',
      color: 'bg-yellow-100',
    },
    {
      title: 'Typescript server',
      color: 'bg-blue-100',
    },
    {
      title: 'Blog app',
      color: 'bg-green-100',
    },
  ];

  getIdeas() {
    return this.ideas;
  }
}
