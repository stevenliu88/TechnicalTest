import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { CustomerService } from '../shared/service/customer.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private customerService: CustomerService)
  {}
  ngOnInit(){
    this.dataSource = new DataTableDataSource(this.paginator, this.sort, this.customerService);
  }
  ngAfterViewInit() {
    // this.dataSource = new DataTableDataSource(this.paginator, this.sort);
  }
}
