import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { AccountAction } from '../model/account-action';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TypeAction } from '../model/type-action';
import { UserAccount } from '../model/user-account';
import { MatSnackBar } from '@angular/material';
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
    private snackBar : MatSnackBar,
    private store : AccountStoreService<UserAccount>
  ) { }

  ngOnInit() {
    this.depotForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.maxLength(3)]],
      libelle: ['', [Validators.required, Validators.maxLength(100)]],
  });

  }

  deposit(){
            // stop here if form is invalid
    if (this.depotForm.invalid) {
        return;
    }
    this.actionDepot.amount = this.depotForm.controls['amount'].value.name;
    this.actionDepot.libelle = this.depotForm.controls['label'].value.name;
    this.actionDepot.typeAction = TypeAction.DEPOSIT;
    this.operationService.setAccountAction(this.actionDepot).subscribe(
      (user : UserAccount) => {
        this.store.data = user;
        this.displaySnackbar("depot effectué avec succees");
      }
    );
  }

 displaySnackbar( msg : string) {
   this.snackBar.open(msg, "Fermer", {duration : 60000})
 }

}
