export interface HackathonItem {
  event: string;
  achievement: string;
  year: string;
  featured?: boolean;
  url?: string;
}

export const hackathons: HackathonItem[] = [
  {
    event: 'Eth.org Translatathon',
    achievement: '1st Place, Global',
    year: '2024',
    featured: true,
  },
  {
    event: 'ETHDam III',
    achievement: 'Finalist & Best AI Project',
    year: '2025',
    url: 'https://taikai.network/cryptocanal/hackathons/ethdam2025/projects/cmaix7zwt01hli8o9fr4ycpub/idea',
  },
  {
    event: 'ETHGlobal Cannes',
    achievement: '',
    year: '2025',
    url: 'https://ethglobal.com/showcase/borch-1fa3d',
  },
  {
    event: 'ETHGlobal Brussels',
    achievement: 'Avail DA 2nd Place & Best use of Blockscout',
    year: '2024',
    url: 'https://ethglobal.com/showcase/l3s-zo5ct',
  },
  {
    event: 'ETHGlobal Scaling',
    achievement: 'Arbitrum — Pool Prize',
    year: '2024',
    url: 'https://ethglobal.com/showcase/concordia-44uec',
  },
  {
    event: 'ETHGlobal Bangkok',
    achievement: 'Avail — Pool Prize',
    year: '2024',
    url: 'https://ethglobal.com/showcase/librenews-pdsxu',
  },
  {
    event: 'ETHBerlin',
    achievement: '',
    year: '2024',
    url: 'https://projects.ethberlin.org/submissions/373/',
  },
];
