import { Component, OnInit } from '@angular/core';
import {  OperationService } from '../services/operation.service';
import { AccountAction } from '../model/account-action';
import { FormControl } from '@angular/forms';
import { TypeAction } from '../model/type-action';
import { UserAccount } from '../model/user-account';
import { AccountStoreService } from '../services/account-store.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  actionDepot : AccountAction;
  amount = new FormControl('');
  label = new FormControl('');

  constructor(
    private operationService : OperationService,
    private store : AccountStoreService<UserAccount>
  ) { }

  ngOnInit(){};
  
  deposit(){
    this.actionDepot.amount = this.amount.value;
    this.actionDepot.libelle = this.label.value;
    this.actionDepot.typeAction = TypeAction.RETRIEVE;
    this.operationService.setAccountAction(this.actionDepot).subscribe(
      (user : UserAccount) => {
        this.store.data = user;
      },
      (error) => {
        alert("Une erreur c'est produit, merci de reessayer plutard.");
      }
     );
  }

}
