import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-container',
  templateUrl: './roadmap-container.component.html',
  styleUrls: ['./roadmap-container.component.scss']
})
export class RoadmapContainerComponent implements OnInit {

  // roadmap: any[] = [
  //   {obj: 'This is an object of array[0]'},
  //   {obj: 'This is an object of array[1]'},
  //   {obj: 'This is an object of array[2]'},
  // ];

  oRoadmap: any = [
    {
      "timelineComponent": [
        {
          "mainTitle": 'DApp SDK 1', "unabled": true,
          "timeLine": true,
          "title": 'DApp SDK'
        }
      ]
    },
    {
      "timelineComponent": [
        {
          "mainTitle": 'DApp SDK 2', "unabled": true,
          "timeLine": true,
          "title": 'DApp SDK'
        }
      ]
    }
  ]
  
  example = this.oRoadmap;

  constructor() { }

  ngOnInit() {
    console.log(this.oRoadmap);
    console.log(this.oRoadmap[0].timelineComponent[0]);
    console.log(this.example);
  }

}
