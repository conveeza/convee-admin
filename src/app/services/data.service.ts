import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.dev'; 

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private apiUrl: string;

    httpOptions = {
        headers: new HttpHeaders({
            ContentType: 'application/json'
        })
    }

    constructor(private httpClient: HttpClient, private router: Router) {
        this.apiUrl = environment.apiUrl;
     }

    Login(emailaddress: string, password: string) {
        let user = { emailaddress, password };
        return this.httpClient.post(`${this.apiUrl}Authentication/Login`, user)
    }

}

