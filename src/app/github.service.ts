import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  getRepositoryJoao(){
    return this.http.get (
      'https://api.github.com/users/jpcd12/repos'
    )
  }

  getRepositoryRicardo(){
    return this.http.get (
      'https://api.github.com/users/RicardoOliveira99/repos'
    )
  }

  constructor( private http: HttpClient ) { }

}