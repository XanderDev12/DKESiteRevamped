export const leadershipOfficeDefinitions = [
  { id: 'president', title: 'President' },
  { id: 'vice-president', title: 'Vice President' },
  { id: 'recruitment-chair', title: 'Recruitment Chair' },
  { id: 'social-chair', title: 'Social Chair' },
  { id: 'philanthropy-chair', title: 'Philanthropy Chair' },
  { id: 'treasurer', title: 'Treasurer' },
  { id: 'health-and-safety-chair', title: 'Health and Safety Chair' },
  { id: 'alumni-relations-chair', title: 'Alumni Relations Chair' },
  { id: 'marketing-chair', title: 'Marketing Chair' },
] as const;

export type LeadershipOfficeId =
  (typeof leadershipOfficeDefinitions)[number]['id'];

export type LeadershipOfficeTitle =
  (typeof leadershipOfficeDefinitions)[number]['title'];
