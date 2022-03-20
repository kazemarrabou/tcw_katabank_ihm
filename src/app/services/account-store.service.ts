import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountStoreService<T> {
  private _data = new BehaviorSubject<T>(null);
  readonly data$ = this._data.asObservable();

  get data() : T {
    return this._data.getValue();
  }

  set data(val : T) {
    this._data.next(val);
  }

}
