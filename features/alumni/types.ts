import type { LinkAction } from '@/lib/content';

export interface AlumniResource {
  action?: LinkAction;
  description?: string;
  id: string;
  title: string;
}

export interface AlumniBoardMember {
  biography?: string;
  classYear?: string;
  id: string;
  name: string;
  role: string;
  term?: string;
}
