import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountAction } from '../model/account-action';
import { Observable } from 'rxjs/Observable';
import { UserAccount } from '../model/user-account';
import { RetraitComponent } from '../retrait/retrait.component';

@Injectable()
export class OperationService {

  baseUrl = 'http://localhost:8081/tcw_katabank_ws';
  actionUrl = '/action';
  constructor( private httpClient : HttpClient) { }

  ngOnInit(){}

  getUserAccount() : Observable<UserAccount> {
   return this.httpClient.get<UserAccount>(this.baseUrl+'/user');
  };

  setAccountAction(action : AccountAction): Observable<UserAccount>{
    return this.httpClient.post<UserAccount>(`${this.baseUrl}${this.actionUrl}`, action);
  }

}
