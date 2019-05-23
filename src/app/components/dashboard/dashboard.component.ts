import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Policy } from 'src/app/model/policy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  policies: Policy[];
  selectedPolicy: Policy = {id: null, number: null, amount: null};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readPolicies().subscribe((policies: Policy[]) =>{
      this.policies = policies;
      console.log(this.policies);
    })
  }

  createOrUpdatePolicy(form){
    if(this.selectedPolicy && this.selectedPolicy.id){
      console.log(this.selectedPolicy);
      console.log(this.selectedPolicy.id);
      form.value.id = this.selectedPolicy.id;
      console.log(form.value);
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy) => {
        console.log("Policy updated", policy);
      });

    }else{
      this.apiService.createPolicy(form.value).subscribe((policy: Policy) => {
        this.policies.push(policy);
        console.log('Policy created, ', policy);
      });
    }
  }

  selectPolicy(policy:Policy){
    this.selectedPolicy = policy;
    console.log(this.selectedPolicy);
  }

  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy:Policy) =>{
      console.log("Policy deleted, ", policy);
    });
  }

}
