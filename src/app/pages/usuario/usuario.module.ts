import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../../shared/user-form/user-form.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
