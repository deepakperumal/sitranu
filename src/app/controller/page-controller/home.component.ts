import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: '../../views/home/home.component.html'
})
export class HomeComponent {

  constructor() { }
  ngOnInit() {
    $(document).ready(function() {
     $('.cui-justify-left').click(function(e){

      $('#navbarTogglerDemo01').toggle()

     })
    });
 }

}
