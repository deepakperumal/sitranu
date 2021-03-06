import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { EventComponent } from './event.component'
import { HistoryComponent } from './history.component'
import {  ChildrenComponent} from './children.component'
import { ContactComponent } from './donate.component'
import { SharedModuleModule } from '../../shared/module/shared-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2OdometerModule } from 'ng2-odometer';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EventComponent,
    HistoryComponent,
    ContactComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    NgbModule,
    Ng2OdometerModule
    
  ]
})
export class ClientViewModuleModule { }
