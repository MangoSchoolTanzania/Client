import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  errorMessage(message:string){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }

  successMessage(message:string){
    Swal.fire({
      icon: "success",
      title: "Great...",
      text: message,
    });
  }

  loading(isLoading:boolean){
    if(isLoading){
      Swal.fire({
        icon: "info",
        title: "Loading...",
      });
      return;
    }

    if(!isLoading){
      Swal.close();
    }
    
  }

  infoMessage(message:string){
    Swal.fire({
      icon: "info",
      title: "Attention...",
      text: message,
    });
  }
}
