import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap-container',
  templateUrl: './roadmap-container.component.html',
  styleUrls: ['./roadmap-container.component.scss']
})
export class RoadmapContainerComponent implements OnInit {

  oRoadmap: any = [
    {
      "mainTitle": 'User Experience',
      "index": 0,
      listComponent: [
        {
          title: 'DApp SDK',
          paragraph: 'The DApp SDK is a set of tools to integrate RCN in any DApp, including the ability to lend and request loans.',
          iconBlock: [
            {href: 'https://github.com/ripio/rcn.loans', class: 'fab fa-github'},
          ],
          teamBlock: [
            {href: 'https://github.com/ignacioperezroca', src: 'https://avatars3.githubusercontent.com/u/12101846?s=460&v=4', member: 'Ignacio Perez Roca' }
          ]
        },
        {
          title: 'RCN Node',
          paragraph: 'The RCN Node is a fully decentralized micro-service to read data of the RCN Network, this tool will create an easy way to read all the information of the loans and request using a simple REST API',
          iconBlock: [
            {href: 'https://github.com/ripio/rcn-api', class: 'fab fa-github'},
          ],
          teamBlock: [
            {href: 'https://github.com/fernandezgonzalo', src: 'https://avatars1.githubusercontent.com/u/350436?s=460&v=4', member: 'Gonzalo Fernandez' }
          ]
        },
        {
          title: 'Python SDK',
          paragraph: 'The SDKs for Python/JAVA will facilitate the interaction between backends and mobile apps with an RCN Node',
          teamBlock: [
            {href: 'https://github.com/fernandezgonzalo', src: 'https://avatars1.githubusercontent.com/u/350436?s=460&v=4', member: 'Gonzalo Fernandez' }
          ]
        },
        {
          title: 'Java SDK',
          paragraph: '--',
        }
      ]
    },
    {
      "mainTitle": 'RCN V3',
      "index": 1,
      listComponent: [
        {
          title: 'Claim Registry ERC939',
          paragraph: 'The ERC939 is our aproach to Identity and Scoring in the RCN Network. Agents will be making claims about the borrowers or cosigners, and those claims could be verified by possible lenders. https://github.com/ethereum/EIPs/issues/939',
          teamBlock: [
            {href: 'https://github.com/Agusx1211', src: 'https://avatars0.githubusercontent.com/u/12701942?s=460&v=4', member: 'Agustin Aguilar' }
          ]
        },
        {
          title: ' RCN Installments',
          paragraph: 'Installments loans are the most common type of loan, we are working on create the LoanEngine V3, this Engine will support bullet-loans like the NanoLoanEngine, but will also feature Installments loans.',
          iconBlock: [
            {href: 'https://github.com/ripio/rcn-network', class: 'fab fa-github'},
          ],
          teamBlock: [
            {href: 'https://github.com/Agusx1211', src: 'https://avatars0.githubusercontent.com/u/12701942?s=460&v=4', member: 'Agustin Aguilar' }
          ]
        },
        {
          title: 'Loans Building Matrix',
          paragraph: 'Loans usually have negociation, a possible lender could propose diferent terms to lend the money, or a diferent Oracle. Flexible loans will be developed on a second layer, this layer will allow borrowers to request loans, listen for offers and accept the best one.',
          teamBlock: [
            {href: 'https://github.com/Agusx1211', src: 'https://avatars0.githubusercontent.com/u/12701942?s=460&v=4', member: 'Agustin Aguilar' }
          ]
        }
      ]
    },
    {
      "mainTitle": 'Protocol addons',
      "index": 2,
      listComponent: [
        {
          title: 'Token Gateways',
          subtitle: '(Onraps / Oframps)',
          paragraph: 'This contracts will allow borrowers and lenders to use any Token or Ether to lend and pay loans in RCN, witout any extra steps.',
          iconBlock: [
            {href: 'https://github.com/ripio/rcn-ramps', class: 'fab fa-github'},
          ],
          teamBlock: [
            {href: 'https://github.com/rotcivegaf', src: 'https://avatars0.githubusercontent.com/u/7088778?s=460&v=4', member: 'Victor Fage' }
          ]
        }
      ]
    },
    {
      "index": 3,
      listComponent: [
        {
          title: 'Collateral Crypto Loans',
          paragraph: 'Collateral crypto loans will enable any address on Ethereum to request a loan. This loan could be backed using any crypto asset, this could be an ERC-20 Token / ERC-721 Token or Ether',
          iconBlock: [
            {href: 'https://github.com/ripio/rcn-ramps', class: 'fab fa-github'},
          ],
          teamBlock: [
            {href: 'https://github.com/rotcivegaf', src: 'https://avatars0.githubusercontent.com/u/7088778?s=460&v=4', member: 'Victor Fage' }
          ]
        }
      ]
    },
    {
      "index": 4,
      listComponent: [
        {
          title: 'Cosigner Refinancing',
          paragraph: 'Create a working example on how to implement a cosigner that refinaciates a debt, only if there is a common agreement between the parts.',
          teamBlock: [
            {href: 'https://github.com/Agusx1211', src: 'https://avatars0.githubusercontent.com/u/12701942?s=460&v=4', member: 'Agustin Aguilar' }
          ]
        }
      ]
    },
    {
      "index": 5,
      listComponent: [
        {
          title: 'RCN Credit Lines',
          paragraph: 'Credit lines will allow lenders to offer money to borrowers or wallets. The lenders would be able to configure to who and how they want to lend, and the borrower could dispose of that tokens in any time',
          teamBlock: [
            {href: 'https://github.com/Agusx1211', src: 'https://avatars0.githubusercontent.com/u/12701942?s=460&v=4', member: 'Agustin Aguilar' }
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
