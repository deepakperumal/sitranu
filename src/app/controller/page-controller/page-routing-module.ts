import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component'
import { EventComponent } from './event.component'
import { HistoryComponent } from './history.component'
import { ContactComponent } from './contact.component'


export const routes: Routes = [
        {path:'',component: HomeComponent},
        {path:'about',component: AboutComponent},
        {path:'history',component: HistoryComponent},
        {path:'contact',component: ContactComponent},
        {path:'event',component: EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
