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

  infoMessage(message:string){
    Swal.fire({
      icon: "info",
      title: "Attention...",
      text: message,
    });
  }
}
