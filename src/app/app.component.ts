import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'explenderAppv2';



  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}




// =======================================

// Public Key:
// BJDOJtzWNAaK801fAXKcMbL1-xp1QPDYRpSuzS-TPKvyCyxc2tLUoFNoQiG_umb4xw0YFd40VTdjjENpJPKl460

// Private Key:
// jLa8n8JQqoJxetv_Ht367H0D_1qoFh9kY12u101HAzA

// =======================================
