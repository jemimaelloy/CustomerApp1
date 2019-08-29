import { Component, OnInit } from '@angular/core';
import { CustomerdetailsService } from '../customerdetails.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
public customers=[ ];
  constructor( private customerdetailsservice:CustomerdetailsService) { }

  ngOnInit()  {
    this.customerdetailsservice.getCustomersDetails().subscribe(
      result=>{this.customers=result
        console.log(result)}
    )
  }

}
