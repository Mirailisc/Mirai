export const workContents: IWorkContents[] = [
  {
    header: 'Intern Front-end Developer',
    companyName: 'Datability',
    companyUrl: 'https://www.datability.info/',
    workDate: 'Jul 2021 - Oct 2021',
    workDetails: [
      'My job is to develop a CRM website for 3 Small and Medium-sized Enterprise companies with seniors in the company',
      'I work with a few technologies like React, TypeScript, GraphQL, and SASS.',
    ],
  },
  {
    header: 'Web Developer',
    companyName: 'NUD Channel',
    companyUrl: 'https://nudchannel.com/',
    workDate: 'June 2021 - Present',
    workDetails: [
      'My job is to develop and maintain every front-end application',
      'I also teach my junior about basic web development and JavaScript',
    ],
  },
]

export interface IWorkContents {
  header: string
  companyName: string
  companyUrl: string
  workDate: string
  workDetails: string[]
}
