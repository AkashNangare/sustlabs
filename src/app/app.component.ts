import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  dataArr = [];

  // Getting Dependecy of Service Class
  constructor(public dataSer:DataService){

  }

  ngOnInit(): void {
    // Intialinlizing Array with JSON Data
    this.dataArr = this.dataSer.data;    
  }

  public calOpacity(record_count):string{
    let max_count = 1000
    let Opacity = record_count / max_count * 100
    if(Opacity==0){
      Opacity=100;
    }
    return Opacity+"%";
  }
}
