import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { ToastrService } from 'ngx-toastr';
import { ApiRestService } from './api-rest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'explenderAppv2';
  public readonly VAPID_PUBLIC_KEY = "BJDOJtzWNAaK801fAXKcMbL1-xp1QPDYRpSuzS-TPKvyCyxc2tLUoFNoQiG_umb4xw0YFd40VTdjjENpJPKl460";

  constructor(private swPush: SwPush,private apiRest:ApiRestService) {
    this.subscribeToNotifications();
  }

  subscribeToNotifications(): void {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      const token = sub;
      console.log('---------------- bien leído', token);


      //Aca tiene que estar el servicio

      console.log('abajo mio comienza el servicio del back')

      this.apiRest.saveToken(token).subscribe((res:object) =>{
        console.log(res);
      } )


    }).catch(err => {
      console.error('Error al suscribirse a las notificaciones: culpa tuya leio', err);
    });
  }
}



// showSuccess() {
//   this.toastr.success('Hello world!', 'Toastr fun!');
// }


// =======================================

// Public Key:
// BJDOJtzWNAaK801fAXKcMbL1-xp1QPDYRpSuzS-TPKvyCyxc2tLUoFNoQiG_umb4xw0YFd40VTdjjENpJPKl460

// Private Key:
// jLa8n8JQqoJxetv_Ht367H0D_1qoFh9kY12u101HAzA

// =======================================
