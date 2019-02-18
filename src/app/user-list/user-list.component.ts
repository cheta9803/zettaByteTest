import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'username'];
  dataSource = [
  ];
  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getServiceCall('users', '');
  }

  getServiceCall(url, params) {
    this.api.getServiceCall(url, params).subscribe(
      res => {
        this.dataSource = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  // call albums route
  getAlbum(row) {
    this.router.navigate(['/albums', row.id]);
  }

}
