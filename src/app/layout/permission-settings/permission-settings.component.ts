import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hyddddd', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}, /*
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},*/
];


export interface ApprovedList {
  name: string;
  department: string;
  position: string;
  phone: string;
  approvedBy: string;
  approvedDate: string;

}
const APPROVED_DATA: ApprovedList[] = [
  { name: 'Person C Elijah', department: 'Cdept', position: 'Third', phone: '0103333CCCC', approvedBy: 'Habced', approvedDate: 'Jan 1' },
  { name: 'Person D Alyssa', department: 'Ddept', position: 'Fourth', phone: '0104444DDDD', approvedBy: 'Habced', approvedDate: 'March20' },

];


@Component({
  selector: 'app-permission-settings',
  templateUrl: './permission-settings.component.html',
  styleUrls: ['./permission-settings.component.css']
})
export class PermissionSettingsComponent  {



  displayedColumns2: string[] = ['name', 'department', 'position', 'phone', 'approvedBy', 'approvedDate' ];
  dataSource2 = new MatTableDataSource(APPROVED_DATA);


  constructor() { }

  applyFilter(filterValue: string) {

    this.dataSource2.filter = filterValue.trim().toLowerCase();

  }


}
