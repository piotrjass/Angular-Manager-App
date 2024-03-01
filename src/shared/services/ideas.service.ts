import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  ideas: any[] = [
    {
      title: 'Angular shop app',
      color: 'bg-yellow-200',
    },
    {
      title: 'Typescript server',
      color: 'bg-blue-200',
    },
    {
      title: 'Blog app',
      color: 'bg-green-200',
    },
  ];

  getIdeas() {
    return this.ideas;
  }
}
