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

async function loadOutfitFonts(): Promise<OgImageFonts> {
  const fontDir = join(process.cwd(), 'public/fonts/Outfit/static');
  const [regular, semibold] = await Promise.all([
    readFile(join(fontDir, 'Outfit-Regular.ttf')),
    readFile(join(fontDir, 'Outfit-SemiBold.ttf')),
  ]);

  return { regular, semibold };
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

  return logoContents.map(
    (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`,
  );
}

export async function loadHomeOpenGraphImageAssets(): Promise<OgImageAssets> {
  const [fonts, companyLogos] = await Promise.all([
    loadOutfitFonts(),
    loadCompanyLogoDataUrls(),
  ]);

  return { fonts, companyLogos };
}
