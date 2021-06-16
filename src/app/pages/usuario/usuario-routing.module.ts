import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from '../../shared/user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const usuarioRoutes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
