import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ShowActivityComponent } from './activity/show-activity/show-activity.component';

import {AddEditActivityComponent} from '../app/add-edit-activity/add-edit-activity.component';

const routes: Routes = [
  {path:'activity',component:ActivityComponent},
  {path:'show-activity',component:ShowActivityComponent},
  
  {path:'add-edit-activity',component:AddEditActivityComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
