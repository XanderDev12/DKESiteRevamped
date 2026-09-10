import type { LinkAction } from '@/lib/content';

export type ContactArea = 'general' | 'recruitment' | 'events' | 'alumni';

export interface ChapterContact {
  action: LinkAction;
  areas?: readonly ContactArea[];
  description?: string;
  id: string;
  memberName?: string;
  role: string;
}
