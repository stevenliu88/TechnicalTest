import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-data-source';

import { CustomerService } from '@shared/service/customer.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  public displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender'];
  public dataSource = new DataTableDataSource();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.customerService.getCustomers().subscribe((data) => {
      const newDataSource = new DataTableDataSource();
      newDataSource.data = data;
      newDataSource.sort = this.dataSource.sort;
      newDataSource.paginator = this.dataSource.paginator;
      this.dataSource = newDataSource;
    });
  }
}
