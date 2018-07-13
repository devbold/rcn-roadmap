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
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'RCN Node',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Python SDK',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Java SDK',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
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
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Installments',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Loans Building Matrix',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
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
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Installments',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Loans Building Matrix',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: 'https://github.com/ripio/rcn.loans', class: 'fas fa-search'},
            {name: 'file', href: 'https://github.com/ripio/rcn.loans', class: 'far fa-file-code'}
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
