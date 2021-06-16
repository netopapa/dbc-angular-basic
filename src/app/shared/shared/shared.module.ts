import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from '../user-form/user-form.component';



@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserFormComponent]
})
export class SharedModule { }
