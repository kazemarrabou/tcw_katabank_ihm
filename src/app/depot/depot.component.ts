import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { AccountAction } from '../model/account-action';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TypeAction } from '../model/type-action';
import { UserAccount } from '../model/user-account';
import { AccountStoreService } from '../services/account-store.service';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  actionDepot : AccountAction;
  depotForm: FormGroup;

  constructor(
    private operationService : OperationService,
    private formBuilder : FormBuilder,
    private store : AccountStoreService<UserAccount>
  ) { }

  ngOnInit() {
    this.depotForm = this.formBuilder.group({
      amount: ['', Validators.required],
      libelle: ['', Validators.required],
  });

  }

  deposit(){
    if (this.depotForm.invalid) {

        return;
    }
    this.actionDepot.amount = this.depotForm.value.name;
    this.actionDepot.libelle = this.depotForm.value.name;
    this.actionDepot.typeAction = TypeAction.DEPOSIT;
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
