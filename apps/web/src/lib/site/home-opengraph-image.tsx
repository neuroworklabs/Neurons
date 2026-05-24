/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { SITE_DESCRIPTION, SITE_OG_IMAGE_ALT } from '@/lib/site/site-config';

export const homeOpenGraphImageSize = {
  width: 1200,
  height: 630,
} as const;

export const homeOpenGraphImageContentType = 'image/png';

async function loadOutfitFonts() {
  const fontDir = join(process.cwd(), 'public/fonts/Outfit/static');
  const [regular, semibold] = await Promise.all([
    readFile(join(fontDir, 'Outfit-Regular.ttf')),
    readFile(join(fontDir, 'Outfit-SemiBold.ttf')),
  ]);

  return { regular, semibold };
}

export async function createHomeOpenGraphImage() {
  const { regular, semibold } = await loadOutfitFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(165deg, #f5f3ff 0%, #fcfcfd 45%, #f8f4ff 100%)',
          fontFamily: 'Outfit',
          padding: '56px 72px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.34) 0%, rgba(139,92,246,0) 72%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -60,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(96,165,250,0.28) 0%, rgba(96,165,250,0) 72%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 22px',
            borderRadius: 999,
            border: '1px solid rgba(99,102,241,0.18)',
            background: 'rgba(255,255,255,0.78)',
            alignSelf: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', position: 'relative', width: 72, height: 36 }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                width: 36,
                height: 36,
                borderRadius: 18,
                background: '#047857',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 18,
                width: 36,
                height: 36,
                borderRadius: 18,
                background: '#065f46',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 36,
                width: 36,
                height: 36,
                borderRadius: 18,
                background: '#022c22',
              }}
            />
          </div>
          <span style={{ fontSize: 34, fontWeight: 600, color: '#171717' }}>Neurons</span>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '8px 18px',
              borderRadius: 999,
              border: '1px solid rgba(6,95,70,0.18)',
              background: 'rgba(255,255,255,0.72)',
              color: '#065f46',
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 28,
            }}
          >
            AI agent marketplace
          </div>

          <div style={{ fontSize: 58, fontWeight: 600, color: '#171717', lineHeight: 1.12 }}>
            Ready-to-deploy agents
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.12,
              marginTop: 14,
              color: '#171717',
              display: 'flex',
            }}
          >
            <span>built by </span>
            <span style={{ color: '#047857' }}>Neurons</span>
          </div>

          <p
            style={{
              marginTop: 28,
              maxWidth: 920,
              fontSize: 24,
              lineHeight: 1.45,
              color: '#525252',
            }}
          >
            {SITE_DESCRIPTION}
          </p>
        </div>

        <div style={{ fontSize: 18, color: '#737373', textAlign: 'center' }}>
          ©2026 Neurowork Labs. All rights reserved
        </div>
      </div>
    ),
    {
      ...homeOpenGraphImageSize,
      fonts: [
        {
          name: 'Outfit',
          data: regular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Outfit',
          data: semibold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
}

export { SITE_OG_IMAGE_ALT as homeOpenGraphImageAlt };
