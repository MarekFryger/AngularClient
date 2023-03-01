import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_TEST_URL = 'http://localhost:8080/api/test/';
const SERVER_URL = 'http://localhost:8080/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_TEST_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_TEST_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_TEST_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_TEST_URL + 'admin', { responseType: 'text' });
  }
  getUserInfo(id: string): Observable<any> {
    return this.http.get(SERVER_URL + 'info/' + id, { responseType: 'text' })
  }
  getListAll(): Observable<any> {
    return this.http.get(SERVER_URL + 'listAll', { responseType: 'text' })
  }
  changeUserActivity(id: string): Observable<any> {
    const params = {
      id: id
    }
    return this.http.get(SERVER_URL + 'changeUserActivity', { params, responseType: 'text' })
  }
}
