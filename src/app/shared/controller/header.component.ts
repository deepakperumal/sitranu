import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: '../views/header.component.html'
})
export class HeaderComponent {

  constructor(private router : Router) { }
  ngOnInit() {

  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }
}
 