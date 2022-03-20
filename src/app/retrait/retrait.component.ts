import { Component, OnInit } from '@angular/core';
import {  OperationService } from '../services/operation.service';
import { AccountAction } from '../model/account-action';
import { FormControl } from '@angular/forms';
import { TypeAction } from '../model/type-action';

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
    private operationService : OperationService
  ) { }

  ngOnInit(){};
  
  deposit(){
    this.actionDepot.amount = this.amount.value;
    this.actionDepot.libelle = this.label.value;
    this.actionDepot.typeAction = TypeAction.RETRIEVE;
    this.operationService.setAccountAction(this.actionDepot);
  }

}
