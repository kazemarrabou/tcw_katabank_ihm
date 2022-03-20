import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { UserAccount } from '../model/user-account';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {

  monCompte : UserAccount;
  constructor(
    private operation : OperationService 
  ) { }

  ngOnInit() {
    this.getAccountUser();
  }
  getAccountUser(){
    this.operation.getUserAccount().subscribe ( 
      user  => this.monCompte = user);
  }

}
