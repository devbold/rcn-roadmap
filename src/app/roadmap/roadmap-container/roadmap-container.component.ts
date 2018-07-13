import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-container',
  templateUrl: './roadmap-container.component.html',
  styleUrls: ['./roadmap-container.component.scss']
})
export class RoadmapContainerComponent implements OnInit {

  oRoadmap: any = [
    {
      "mainTitle": 'RCN ROADMAP',
      "index": 1,
      listComponent: [
        {
          title: 'DApp SDK',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam.',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'RCN Node',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'Python SDK',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'Java SDK',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'RCN V3',
      "index": 2,
      listComponent: [
        {
          title: 'RClaim Registry ERC 939',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam.',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'Installments',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'Loans Building Matrix',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'Gateways',
      "index": 3,
      listComponent: [
        {
          title: 'Gateways',
          subtitle: '(Onraps / Oframps)',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam.',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'Installments',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        },
        {
          title: 'Loans Building Matrix',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf',href: 'www'},
            {name: 'github',href: 'www'}
          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.oRoadmap);
  }

}
