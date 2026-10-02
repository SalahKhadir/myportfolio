import * as en from './content.en';
import * as fr from './content.fr';

export const content = { en, fr };
export type Language = 'en' | 'fr';

// Legacy exports for backward compatibility during transition
export const systemConfig = en.systemConfig;
export const profile = en.profile;
export const architectures = en.architectures;
export const services = en.services;
export const faqs = en.faqs;
export const experience = en.experience;
export const certifications = en.certifications;
export const education = en.education;
export const cvTechStackData = en.cvTechStackData;
export const ui = en.ui;
