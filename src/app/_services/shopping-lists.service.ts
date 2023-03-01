import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"




const URL = 'http://localhost:8080/shoppinglist/';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  constructor(private http: HttpClient) { }

  allForUser(userId : number): Observable<any> {
   let  params = {
      userId: userId,
    }
    return this.http.get(URL + 'allForUser', { 
      params: params,
      responseType: 'text'
    });
  }
}
