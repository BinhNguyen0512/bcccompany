import { NavLinkType } from "@/types/global";

export const dataNavLinks: NavLinkType[] = [
    {
        title: 'Services',
        subLinks: [
            {
                srcIcon: 'assets/services1-layout.svg',
                name: 'Company incorporation',
                description:  'Register your business with digital first solutions and industry expertise' 
            },
            {
                srcIcon: 'assets/services2-layout.svg',
                name: 'Open bank account',
                description:  'We can help connect your  business with local banks and other digital-based alternatives' 
            },
            {
                srcIcon: 'assets/services3-layout.svg',
                name: 'Accounting, auditing & tax filing',
                description:  'Fulfill annual reporting requirements with outsourced accounting and auditing activities' 
            },
            {
                srcIcon: 'assets/services4-layout.svg',
                name: 'Company secretary',
                description:  'Integrated entity management services; we organize and manage  your compliance obligations' 
            },
            {
                srcIcon: 'assets/services5-layout.svg',
                name: 'Merchant account consulting',
                description:  'Reach more customers and convert  more sales with your own merchant account' 
            },
        ]
    },
    {
        title: 'Resources',
        subLinks: [
           { 
                srcIcon: 'assets/resources1-layout.svg',
                name: 'Articles',
                description: 'Make informed decisions with news and insights'
            },
            { 
                srcIcon: 'assets/resources2-layout.svg',
                name: 'News',
                description: 'Catch up on the latest business news'
            },
            { 
                srcIcon: 'assets/resources3-layout.svg',
                name: 'Announcements',
                description: 'Get updated information about us'
            },
            { 
                srcIcon: 'assets/resources4-layout.svg',
                name: 'Guide & tool',
                description: 'Access insightful resources on company formation and more'
            },
        ]
    }
]