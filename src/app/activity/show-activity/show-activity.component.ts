import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-show-activity',
  templateUrl: './show-activity.component.html',
  styleUrls: ['./show-activity.component.css']
})
export class ShowActivityComponent implements OnInit {

  constructor(private service:ApiService, private router:Router) { }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  Activity:any=[];

  ngOnInit(): void {
    this.refreshActivityList();
    
  }
  deleteClick(item: { activityId: any; }){
    if(confirm('Are you sure?')){
      this.service.deleteActivity(item.activityId).subscribe(data=>{
        alert(data.toString());
        this.refreshActivityList();
      })
    }
  }

  refreshActivityList(){
    this.service.getActivityList().subscribe(data=>{
      this.Activity = data;
  });
  }
  
}