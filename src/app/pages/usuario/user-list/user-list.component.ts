import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList: Usuario[] = [
    {
      nome: 'user1',
      doc: '111'
    },
    {
      nome: 'user2',
      doc: '222'
    },
    {
      nome: 'user3',
      doc: '333'
    },
    {
      nome: 'user4',
      doc: '444'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public showInfo(user: Usuario): void {
    console.log('Nome: ', user.nome)
    console.log('CPF: ', user.doc)
  }

}
