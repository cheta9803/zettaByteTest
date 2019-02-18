import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title'];
  dataSource = [
  ];
  param_id: number;
  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.param_id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getServiceCall('albums', `?userId=${this.param_id}`);
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

  // call photos route
  getPhotos(row) {
    this.router.navigate(['/photos', row.id]);
  }

  // go back for previous route
  goBack() {
    this._location.back();
  }

}
