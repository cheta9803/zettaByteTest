import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'https://jsonplaceholder.typicode.com';

  constructor() { }
}
