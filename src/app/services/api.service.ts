import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from '../model/policy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //PHP_API_SERVER = "http://localhost/apirestp/public/api/";
  PHP_API_SERVER = "http://localhost:8080/";
  
  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(this.PHP_API_SERVER+"policies");
  }

  createPolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.post<Policy>(this.PHP_API_SERVER+"policies", policy);
  }

  updatePolicy(policy: Policy): Observable<Policy>{
    console.log(policy.id);

    return this.httpClient.put<Policy>(this.PHP_API_SERVER+"policies/"+policy.id, policy);
  }

  deletePolicy(id:number){
    return this.httpClient.delete<Policy>(this.PHP_API_SERVER+"policies/"+id);
  }

}

