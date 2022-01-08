import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private confirmButtonColor = '#709a7d';
  private cancelButtonColor = '#DC5960';

  private subject = new Subject<any>();

  constructor() { }

  info(message: string, title: string): void {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: 'Ok',
      confirmButtonColor: this.confirmButtonColor,
      cancelButtonColor: this.cancelButtonColor,
    })
    // Swal.fire({
    //   type: 'info',
    // });
  }

  success(message: string, title: string): void {
    Swal.fire({
      title: title,
      text: message,
      confirmButtonText: 'Ok',
      confirmButtonColor: this.confirmButtonColor,
      cancelButtonColor: this.cancelButtonColor
    });
    // type: 'success',
  }

  error(message: string, title: string): void {
    Swal.fire({
      title: title,
      text: message,
      // type: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: this.confirmButtonColor,
      cancelButtonColor: this.cancelButtonColor
    });
  }

  warning(message: string, title: string): void {
    Swal.fire({
      title: title,
      text: message,
      // type: 'warning',
      confirmButtonText: 'Ok',
      confirmButtonColor: this.confirmButtonColor,
      cancelButtonColor: this.cancelButtonColor
    });
  }

  confirm(message: string, title: string, confirmCallback: () => any, cancelCallback?: () => any): void {
    Swal.fire({
      title: title,
      html: message,
      // type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: false,
      confirmButtonColor: this.confirmButtonColor,
      cancelButtonColor: this.cancelButtonColor
    }).then((result) => {
      if (result.value) {
        confirmCallback();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // cancelCallback();
      }
    });
  }

  alert(message: string, title: string, callback: () => any): void {
    Swal.fire({
      title: title,
      text: message,
      // type: 'success',
      confirmButtonText: 'Yes',
      reverseButtons: false,
      allowOutsideClick: false,
      confirmButtonColor: this.confirmButtonColor,
    }).then((result) => {
      callback();
    });
  }

  notify(msg: string): void {

    const data: Array<any> = [];
    data.push({
      'title': 'i-Card!',
      'alertContent': msg
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
