import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { environments } from '../../../environments/environments';
import { Observable, of } from 'rxjs';
import { AuthStatus, User } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environments.baseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>( null );
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  constructor() { }

  login( email: string, password: string ): Observable<boolean> {
    
    return of(true);
  }
}