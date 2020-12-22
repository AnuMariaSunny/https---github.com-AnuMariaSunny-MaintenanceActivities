import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ActivityComponent } from './activity/activity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowActivityComponent } from './activity/show-activity/show-activity.component';

import { AddEditActivityComponent } from './add-edit-activity/add-edit-activity.component'

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ShowActivityComponent,
    
    AddEditActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
