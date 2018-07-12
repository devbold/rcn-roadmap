import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-container',
  templateUrl: './roadmap-container.component.html',
  styleUrls: ['./roadmap-container.component.scss']
})
export class RoadmapContainerComponent implements OnInit {

  roadmap: any[] = [
    {obj: 'This is an object of array[0]'},
    {obj: 'This is an object of array[1]'},
    {obj: 'This is an object of array[2]'},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.roadmap);
  }

}
