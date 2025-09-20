import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
private urlGetUser = 'https://api.github.com/users/';

constructor( private http: HttpClient){}

getUser(username: string): Observable<any>{
  return this.http.get(`${this.urlGetUser}${username}`)
}

getRepos(username: string): Observable<any>{
  return this.http.get(`${this.urlGetUser}${username}/repos`)
}
}
