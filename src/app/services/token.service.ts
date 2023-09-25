import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token:string = '';
  constructor() {  }

  addToLocalStorage(token:string){
    localStorage.setItem('jwtKey',token)
  }

  getFromLocalsotrage(){
    return localStorage.getItem('jwtKey')
  }


}
