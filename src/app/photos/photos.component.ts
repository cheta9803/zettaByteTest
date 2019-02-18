import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  param_id: number;
  photosList: any;
  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) { 
  }

  ngOnInit() {
    this.param_id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getServiceCall('photos', `?albumId=${this.param_id}`);
  }

  getServiceCall(url, params) {
    this.api.getServiceCall(url, params).subscribe(
      res => {
        this.photosList = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  // go back for previous route
  goBack() {
    this._location.back();
  }

}
