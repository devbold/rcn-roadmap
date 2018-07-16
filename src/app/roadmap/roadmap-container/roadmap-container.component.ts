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
      "index": 0,
      listComponent: [
        {
          title: 'DApp SDK',
          paragraph: 'The DApp SDK is a set of tools to integrate RCN in any DApp, including the ability to lend and request loans.',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'RCN Node',
          paragraph: 'The RCN Node is a fully decentralized micro-service to read data of the RCN Network, this tool will create an easy way to read all the information of the loans and request using a simple REST API',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn-api', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Python SDK',
          paragraph: 'The SDKs for Python/JAVA will facilitate the interaction between backends and mobile apps with an RCN Node',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: '#', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Java SDK',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi, consequuntur culpa distinctio error nostrum odio. Repellendus eveniet sapiente perspiciatis qui, odit praesentium neque blanditiis, non quos voluptates minima hic nobis, aut dicta beatae cum a nesciunt quidem veniam vel corporis voluptatibus quam sequi. Excepturi earum incidunt sed modi numquam',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: '#', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'RCN V3',
      "index": 1,
      listComponent: [
        {
          title: 'RClaim Registry ERC 939',
          paragraph: 'The ERC939 is our aproach to Identity and Scoring in the RCN Network. Agents will be making claims about the borrowers or cosigners, and those claims could be verified by possible lenders. https://github.com/ethereum/EIPs/issues/939',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: '#', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Installments',
          paragraph: 'Installments loans are the most common type of loan, we are working on create the LoanEngine V3, this Engine will support bullet-loans like the NanoLoanEngine, but will also feature Installments loans.',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn-network', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        },
        {
          title: 'Loans Building Matrix',
          paragraph: 'Loans usually have negociation, a possible lender could propose diferent terms to lend the money, or a diferent Oracle. Flexible loans will be developed on a second layer, this layer will allow borrowers to request loans, listen for offers and accept the best one.',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: '#', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'Gateways',
      "index": 2,
      listComponent: [
        {
          title: 'Gateways',
          subtitle: '(Onraps / Oframps)',
          paragraph: 'This contracts will allow borrowers and lenders to use any Token or Ether to lend and pay loans in RCN, witout any extra steps.',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn-ramps', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'Collateral partial Loans',
      "index": 3,
      listComponent: [
        {
          title: 'Collateral partial Loans with Crypto',
          paragraph: 'Collateral crypto loans will enable any address on Ethereum to request a loan. This loan could be backed using any crypto asset, this could be an ERC-20 Token / ERC-721 Token or Ether',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: 'https://github.com/ripio/rcn-pawn', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'Cosigner refinancing Borrower',
      "index": 4,
      listComponent: [
        {
          title: 'Cosigner refinancing Borrower',
          subtitle: " 'On chain' ",
          paragraph: 'Create a working example on how to implement a cosigner that refinaciates a debt, only if there is a common agreement between the parts.',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: '#', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
          ]
        }
      ]
    },
    {
      "mainTitle": 'Credit lines',
      "index": 5,
      listComponent: [
        {
          title: 'Credit lines',
          paragraph: 'Credit lines will allow lenders to offer money to borrowers or wallets. The lenders would be able to configure to who and how they want to lend, and the borrower could dispose of that tokens in any time',
          iconBlock: [
            {name: 'pdf', href: '#', class: 'far fa-file-pdf'},
            {name: 'github', href: '#', class: 'fab fa-github'},
            {name: 'search', href: '#', class: 'fas fa-search'},
            {name: 'file', href: '#', class: 'far fa-file-code'}
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
