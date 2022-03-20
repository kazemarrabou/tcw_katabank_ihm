import { Component, OnInit, Input } from '@angular/core';
import { AccountOperation } from '../model/account-operation';

@Component({
  selector: 'app-mes-operation',
  templateUrl: './mes-operation.component.html',
  styleUrls: ['./mes-operation.component.css']
})
export class MesOperationComponent implements OnInit {

  @Input() operations : AccountOperation;
  constructor() { }

  ngOnInit() {

  }

}
