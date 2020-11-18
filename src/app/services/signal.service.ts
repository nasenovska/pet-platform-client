import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {Signal} from "../model/model.signal";

@Injectable()
export class SignalService {

  constructor(public http: Http) {
  }

  getAllSignals() {
    return this.http.get(AppComponent.API_URL + '/api/v1/account/signals')
      .map(resp => resp.json());
  }

  createSignal(signal: Signal) {
    return this.http.post(AppComponent.API_URL + '/api/v1/account/signals', signal)
      .map(resp => resp.json());
  }

  updateSignal(signal: Signal) {
    return this.http.patch(AppComponent.API_URL + `/api/v1/account/signals/${signal.id}`, signal)
      .map(resp => resp.json());
  }

  deleteSignal(id: String) {
    return this.http.delete(AppComponent.API_URL + `/api/v1/account/signals/${id}`)
      .map(resp => resp.json());
  }
}
