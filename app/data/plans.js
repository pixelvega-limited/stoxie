export const plans = [
    {
        name: 'Essentials',
        price: '$29.99',
        period: '/mo',
        features: [
            'Stock insights',
            'Fund & ETF tools',
            'Watchlist creation',
            'Basic alerts',
            '24/7 Support & More!',
        ],
        popular: false,
    },
    {
        name: 'Premium',
        price: '$49.99',
        period: '/mo',
        features: [
            'Everything in Essentials',
            'Premium alerts',
            'Patricia (AI Chat)',
            'Priority support',
            '24/7 Support & More!',
        ],
        popular: true,
    },
];

export const planTableData = [
    {
        feature: 'Free Trial',
        preview: '30-day free trial (Premium features)',
    },
    {
        feature: 'Lens (Stock Insights)',
        preview: '3/day, short verdict',
        essentials: 'Unlimited, full rationale + confidence meter',
        premium: 'Unlimited, full rationale + confidence meter',
    },
    {
        feature: 'Fundamental Analysis',
        essentials: 'Full + downloadable PDF reports',
        premium: 'Full + downloadable PDF reports',
    },
    {
        feature: 'Peer Analysis',
        essentials: 'Unlimited peers + peer-relative recommendations',
        premium: 'Unlimited peers + peer-relative recommendations',
    },
    {
        feature: 'Technical Analysis',
        essentials: 'Full technicals & advanced indicators',
        premium: 'Full technicals & advanced indicators',
    },
    {
        feature: 'Earnings Digest',
        essentials: 'Full transcript digest & KPI table',
        premium: 'Full transcript digest & KPI table',
    },
    {
        feature: 'News + Sentiment',
        preview: 'Top headline/day',
        essentials: 'Real-time feed & sentiment scoring',
        premium: 'Real-time feed & sentiment scoring',
    },
    {
        feature: 'ESG Analysis',
        essentials: 'Historical ESG trends & pillar breakdown',
        premium: 'Historical ESG trends & pillar breakdown',
    },
    {
        feature: 'Vault (Funds & ETFs)',
        essentials: 'Full fund comparator & allocation analysis',
        premium: 'Full fund comparator & allocation analysis',
    },
    {
        feature: 'Pulse (Themes)',
        preview: '1 starter theme',
        essentials: 'Custom themes & thematic screening',
        premium: 'Custom themes & thematic screening',
    },
    {
        feature: 'Portfolio Tagging',
        essentials: 'Full portfolio tagging & discovery',
        premium: 'Full portfolio tagging & discovery',
    },
    {
        feature: 'Watchlists',
        preview: '1 list, 5 tickers',
        essentials: 'Unlimited watchlists',
        premium: 'Unlimited + shared watchlists',
    },
    {
        feature: 'Exports & Reports',
        essentials: 'CSV/PDF exports',
        premium: 'CSV/PDF exports',
    },
    {
        feature: 'Support',
        preview: 'Email',
        essentials: 'Priority email support',
        premium: 'Priority email support',
    },
    {
        feature: 'Edge (Alerts)',
        essentials: 'Limited: up to 5-10 instruments',
        premium: 'Unlimited predictive alerts + SMS/email',
    },
    {
        feature: 'Patricia (Al Chat)',
        preview: '5 questions',
        premium: 'Unlimited, priority',
    },
];