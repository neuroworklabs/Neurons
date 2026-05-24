/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { SITE_OG_IMAGE_ALT } from '@/lib/site/site-config';

export const homeOpenGraphImageSize = {
  width: 1200,
  height: 630,
} as const;

export const homeOpenGraphImageContentType = 'image/png';

export const homeOpenGraphImageAlt = SITE_OG_IMAGE_ALT;

export const HOME_OG_COMPANY_LOGO_COUNT = 8;

export type OgImageFonts = {
  regular: Buffer;
  semibold: Buffer;
};

export type OgImageAssets = {
  fonts: OgImageFonts;
  companyLogos: string[];
};

const PLUS_JAKARTA_SANS_REGULAR_URL =
  'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NSg.ttf';
const PLUS_JAKARTA_SANS_SEMIBOLD_URL =
  'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNSg.ttf';

export const HOME_OG_FONT_FAMILY = 'Plus Jakarta Sans';

async function loadPlusJakartaSansFonts(): Promise<OgImageFonts> {
  const [regularResponse, semiboldResponse] = await Promise.all([
    fetch(PLUS_JAKARTA_SANS_REGULAR_URL),
    fetch(PLUS_JAKARTA_SANS_SEMIBOLD_URL),
  ]);

  if (!regularResponse.ok || !semiboldResponse.ok) {
    throw new Error('Failed to load Plus Jakarta Sans fonts for Open Graph image.');
  }

  const [regular, semibold] = await Promise.all([
    regularResponse.arrayBuffer(),
    semiboldResponse.arrayBuffer(),
  ]);

  return {
    regular: Buffer.from(regular),
    semibold: Buffer.from(semibold),
  };
}

function isOgCompatibleSvg(svg: string): boolean {
  return !/<image[\s>]|<filter[\s>]|<mask[\s>]/i.test(svg);
}

async function loadCompanyLogoDataUrls(): Promise<string[]> {
  const logoDir = join(process.cwd(), 'public/users/colorful');
  const logoFiles = Array.from(
    { length: HOME_OG_COMPANY_LOGO_COUNT },
    (_, index) => join(logoDir, `${index + 1}.svg`),
  );

  const logoContents = await Promise.all(
    logoFiles.map((filePath) => readFile(filePath, 'utf8')),
  );

  return logoContents
    .filter(isOgCompatibleSvg)
    .map((svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`);
}

export async function loadHomeOpenGraphImageAssets(): Promise<OgImageAssets> {
  const [fonts, companyLogos] = await Promise.all([
    loadPlusJakartaSansFonts(),
    loadCompanyLogoDataUrls(),
  ]);

  return { fonts, companyLogos };
}
