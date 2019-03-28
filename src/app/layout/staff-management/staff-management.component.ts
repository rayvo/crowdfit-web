import { Component } from '@angular/core';
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

export interface WaitList {
  name: string;
  phone: string;
}
const WAIT_DATA: WaitList[] = [
  { name: 'Person A', phone: '0101111AAAA' },
  { name: 'Person B', phone: '0102222BBBB' },
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
  { name: 'Person C', department: 'Cdept', position: 'Third', phone: '0103333CCCC', approvedBy: 'Habced', approvedDate: 'Jan 1' },
  { name: 'Person D', department: 'Ddept', position: 'Fourth', phone: '0104444DDDD', approvedBy: 'Habced', approvedDate: 'March20' },
];

export interface EvictedList {
  name: string;
  department: string;
  position: string;
  phone: string;
  evictedDate: string;
  reason: string;

}
const EVICTED_DATA: EvictedList[] = [
  { name: 'Person E', department: 'Edept', position: 'Fifth', phone: '0105555EEEE', evictedDate: 'Jan 4', reason: 'Did Not Work' },
  { name: 'Person F', department: 'Fdept', position: 'Sixth', phone: '0106666FFFF', evictedDate: 'March 23', reason: 'Slept At Work' },
];


@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent {
  displayedColumns1: string[] = ['name', 'phone', ];
  dataSource1 = WAIT_DATA;

  displayedColumns2: string[] = ['name', 'department', 'position', 'phone', 'approvedBy', 'approvedDate' ];
  dataSource2 = APPROVED_DATA;

  displayedColumns3: string[] = ['name', 'department', 'position', 'phone', 'evictedDate', 'reason' ];
  dataSource3 = EVICTED_DATA;


  /*
  applyFilter(filterValue: string) {
    this.dataSource.values.filter = filterValue.trim().toLowerCase();
  }*/

  constructor() { }

}
