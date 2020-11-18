import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {Grantor} from "../model/model.grantor";

@Injectable()
export class GrantorService {

  constructor(public http: Http) {
  }

  getAllGrantors() {
    return this.http.get(AppComponent.API_URL + '/api/v1/account/grantors')
      .map(resp => resp.json());
  }

  createGrantor(grantor: Grantor) {
    return this.http.post(AppComponent.API_URL + '/api/v1/account/grantors', grantor)
      .map(resp => resp.json());
  }

  updateGrantor(grantor: Grantor) {
    return this.http.patch(AppComponent.API_URL + `/api/v1/account/grantors/${grantor.id}`, grantor)
      .map(resp => resp.json());
  }

  deleteGrantor(id: String) {
    return this.http.delete(AppComponent.API_URL + `/api/v1/account/grantors/${id}`)
      .map(resp => resp.json());
  }
}
