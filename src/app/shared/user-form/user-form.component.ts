import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('Nome: ', this.usuario.nome)
    console.log('CPF: ', this.usuario.doc)
  }

}
