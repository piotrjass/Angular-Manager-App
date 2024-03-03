import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
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

  getIdeas() {
    return this.ideas;
  }
}
