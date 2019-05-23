import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Policy } from '../model/policy';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'    
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //PHP_API_SERVER = "http://localhost/otroapi/public/api/";
  //PHP_API_SERVER = "http://localhost/apirestp/public/api/";
  PHP_API_SERVER = "http://localhost:8080/";
  
  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]>{
    //return this.httpClient.get<Policy[]>(this.PHP_API_SERVER+"policies");
    return this.httpClient.get<Policy[]>(this.PHP_API_SERVER+"policy");
  }

  createPolicy(policy: Policy): Observable<Policy>{
    //return this.httpClient.post<Policy>(this.PHP_API_SERVER+"policies", policy);
    return this.httpClient.post<Policy>(this.PHP_API_SERVER+"policy", policy);
  }

  updatePolicy(policy: Policy): Observable<Policy>{
    console.log(policy.id);

    //return this.httpClient.put<Policy>(this.PHP_API_SERVER+"policies/"+policy.id, policy);
    return this.httpClient.put<Policy>(this.PHP_API_SERVER+"policy/"+policy.id, policy);
  }

  deletePolicy(id:number): Observable<Policy>{
    //return this.httpClient.delete<Policy>(this.PHP_API_SERVER+"policies/"+id);
    return this.httpClient.delete<Policy>(this.PHP_API_SERVER+"policy/"+id);
  }

}

