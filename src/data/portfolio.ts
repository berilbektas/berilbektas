export interface PortfolioItem {
  title: string;
  source: string;
  description: string;
  category: 'article' | 'video' | 'newsletter' | 'commentary';
  metric?: string;
  url?: string;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Why Do Tokens Die?',
    source: 'Fintables Kripto',
    description: 'Data-driven breakdown of why 3.6M out of 7M tokens launched since 2021 are no longer trading — market makers, tokenomics, and exchange listings.',
    category: 'article',
    metric: '~50K views',
    url: 'https://x.com/FintablesKripto/status/1989399978230366623',
    featured: true,
  },
  {
    title: 'Are ICOs the New Airdrops?',
    source: 'Fintables Kripto',
    description: 'Analysis of the shift from airdrop farming to ICO-based token distribution, using MegaETH and Monad as case studies.',
    category: 'article',
    url: 'https://x.com/FintablesKripto/status/1988314914390155689',
  },
  {
    title: 'How the Trump Family Made $800M From Crypto in 2025',
    source: 'Fintables Kripto',
    description: 'A breakdown of the four moves behind the number: WLFI, Alt5 Sigma, TRUMP memecoin fees, and USD1 stablecoin yield.',
    category: 'article',
    url: 'https://x.com/FintablesKripto/status/1986132519666803100',
  },
  {
    title: 'Weekly Stablecoin Report',
    source: 'Fintables Kripto',
    description: 'Regular market analysis covering stablecoin flows, adoption trends, and market dynamics.',
    category: 'article',
    url: 'https://x.com/FintablesKripto/status/1984679552241529230',
  },
  {
    title: 'Why Is Everyone Buying ETH?',
    source: 'Fintables Kripto',
    description: 'On the shift of Bitcoin-focused institutional players into Ethereum restaking, staking ETF expectations, and supply dynamics.',
    category: 'article',
    url: 'https://x.com/FintablesKripto/status/1946283652184457242',
  },
  {
    title: 'EIP-7251 Explainer',
    source: 'ITU Blockchain',
    description: "Technical explainer on Ethereum's validator consolidation upgrade, produced for a general audience.",
    category: 'video',
    url: 'https://www.youtube.com/watch?v=q88XAnwvdJQ',
  },
  {
    title: 'Genesis News Newsletter',
    source: 'ITU Blockchain',
    description: 'Weekly Web3 newsletter covering protocol updates, ecosystem narratives, and Ethereum developments.',
    category: 'newsletter',
    metric: '~3,000 subscribers',
    url: 'https://substack.com/@genesisnews',
  },
  {
    title: 'Devcon Bangkok Coverage',
    source: 'Personal',
    description: 'Live coverage and onboarding content for first-time Ethereum event attendees across multiple threads.',
    category: 'commentary',
    url: 'https://x.com/0xberil_/status/1855216378791567370',
  },
];
