export interface AdminCourse {
  id: string;
  name: string;
  study: string;
  language: string;
  type: string;
  university: string;
  status: string;
  "university-logo-url": string;
  "edit-stage": null;
  "edit-steps": null;
  statics: Statics;
}

export interface Statics {
  applications: number;
  sales: number;
  payments: number;
  "promo-clicks": number;
}

export type AdminCourseLIst = AdminCourse[];
