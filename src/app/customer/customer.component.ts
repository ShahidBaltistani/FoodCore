import { Component, OnInit } from '@angular/core';
import { PageSettingsModel,EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { CustomerService } from '../service/customers/customer.service';
import { Customer } from '../shared/models/customers/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private customer : CustomerService) { }
  public data: any;
  public editSettings!: EditSettingsModel;
  public pageSettings: PageSettingsModel = {pageSize:5  };
  ngOnInit(): void {
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'};
   this.data = this.customer.getAll()
   .subscribe((data) => {
      debugger
      this.data = data;
      console.log(data)
    });
  }

}
