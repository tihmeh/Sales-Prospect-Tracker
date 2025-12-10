export interface Prospect {
  id: string;
  company: string;
  dealSize: number; // in thousands
  probability: number; // 0-100
  daysInPipeline: number;
  stage: 'Lead' | 'Qualified' | 'Proposal' | 'Negotiation';
  industry: string;
  contact: string;
  size: 'small' | 'medium' | 'large';
}

export const prospects: Prospect[] = [
  {
    id: '16',
    company: 'Pinellas County School District',
    dealSize: 150,
    probability: 30,
    daysInPipeline: 10,
    stage: 'Lead',
    industry: 'Government',
    contact: 'Sarah Johnson - sjohnson@pcsb.org',
    size: 'large'
  },
  {
    id: '17',
    company: 'City of Dunedin',
    dealSize: 85,
    probability: 25,
    daysInPipeline: 7,
    stage: 'Lead',
    industry: 'Government',
    contact: 'Michael Torres - mtorres@dunedinfl.gov',
    size: 'medium'
  },
  {
    id: '18',
    company: 'City of St. Petersburg',
    dealSize: 200,
    probability: 35,
    daysInPipeline: 12,
    stage: 'Lead',
    industry: 'Government',
    contact: 'Jennifer Martinez - jmartinez@stpete.org',
    size: 'large'
  }
];
