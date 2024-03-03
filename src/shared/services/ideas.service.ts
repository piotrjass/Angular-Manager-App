import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  gradients: string[] = [
    'bg-gradient-to-r from-green-100 to-blue-100',
    'bg-gradient-to-r from-purple-100 to-pink-100',
    'bg-gradient-to-r from-yellow-100 to-orange-100',
    'bg-gradient-to-r from-pink-100 to-red-100',
    'bg-gradient-to-r from-blue-100 to-cyan-100',
  ];
  ideas: any[] = [
    {
      title: 'Angular shop app',
      icon: 'tablerBrandAngular',
      desc: 'Using many concepts and modern Angular 17 syntax, develop simple minimalistic and useful shp app',
      color: 'bg-gradient-to-r from-cyan-100 to-blue-100',
    },
    {
      title: 'Typescript server',
      icon: 'tablerBrandTypescript',
      desc: 'Using experince from previous full stack project, set up new server based fully on typescript',
      color: 'bg-gradient-to-r from-fuchsia-100 to-rose-100',
    },
    {
      title: 'Bank app',
      icon: 'tablerCashBanknote',
      desc: 'For learning purposes, make a bank app using with many users and interactions between then. ',
      color: 'bg-gradient-to-r from-green-200 to-teal-200',
    },
  ];

  addIdea(newIdea: string, description: string) {
    const idea = {
      title: newIdea,
      desc: description,
      color: this.gradients[Math.floor(Math.random() * this.gradients.length)],
    };
    this.ideas.push(idea);
  }
  getIdeas() {
    return this.ideas;
  }
}
