import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 
  login(email : string, password : string){
    localStorage.setItem('userDetails', JSON.stringify({email, password}))
    return {success: true, message: 'You are logged in'}
   
  }
}
