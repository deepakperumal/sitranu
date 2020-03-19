import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { EventComponent } from './event.component'
import { HistoryComponent } from './history.component'
import { ContactComponent } from './contact.component'
import { SharedModuleModule } from '../../shared/module/shared-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EventComponent,
    HistoryComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    NgbModule
  ]
})
export class ClientViewModuleModule { }
