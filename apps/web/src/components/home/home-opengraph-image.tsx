/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

import { ImageResponse } from 'next/og';

import {
  homeOpenGraphImageSize,
  loadHomeOpenGraphImageAssets,
  type OgImageAssets,
} from '@/lib/site/opengraph-image-config';
import { SITE_DESCRIPTION } from '@/lib/site/site-config';

type HomeOpenGraphImageMarkupProps = {
  companyLogos: string[];
};

function HomeOpenGraphImageMarkup({ companyLogos }: HomeOpenGraphImageMarkupProps) {
  return (
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
        padding: '36px 48px 28px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.09) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: 40,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.38) 0%, rgba(139,92,246,0) 72%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: -40,
          width: 380,
          height: 380,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(96,165,250,0.3) 0%, rgba(96,165,250,0) 72%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 980,
          margin: '0 auto',
          padding: '14px 24px',
          borderRadius: 999,
          border: '1px solid rgba(99,102,241,0.18)',
          background: 'rgba(255,255,255,0.75)',
          boxShadow: '0 8px 32px rgba(99,102,241,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', position: 'relative', width: 64, height: 32 }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                width: 32,
                height: 32,
                borderRadius: 16,
                background: '#047857',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 16,
                width: 32,
                height: 32,
                borderRadius: 16,
                background: '#065f46',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 32,
                width: 32,
                height: 32,
                borderRadius: 16,
                background: '#022c22',
              }}
            />
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, color: '#171717' }}>Neurons</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 22px',
            borderRadius: 999,
            background: '#065F46',
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 600,
            boxShadow: '0 4px 14px rgba(6,95,70,0.35)',
          }}
        >
          Get Started
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 18,
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '7px 16px',
            borderRadius: 999,
            border: '1px solid rgba(6,95,70,0.12)',
            background: 'rgba(255,255,255,0.65)',
            color: '#065f46',
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 18,
          }}
        >
          AI agent marketplace
        </div>

        <div style={{ fontSize: 46, fontWeight: 600, color: '#171717', lineHeight: 1.12 }}>
          Ready-to-deploy agents
        </div>
        <div
          style={{
            fontSize: 46,
            fontWeight: 600,
            lineHeight: 1.12,
            marginTop: 10,
            color: '#171717',
            display: 'flex',
          }}
        >
          <span>built by </span>
          <span style={{ color: '#047857', fontWeight: 700 }}>Neurons</span>
        </div>

        <p
          style={{
            marginTop: 18,
            maxWidth: 860,
            fontSize: 19,
            lineHeight: 1.45,
            color: '#525252',
          }}
        >
          {SITE_DESCRIPTION}
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 22,
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: '#404040',
              marginBottom: 12,
            }}
          >
            Used by
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 28,
            }}
          >
            {companyLogos.map((logoSrc, index) => (
              <img
                key={`company-logo-${index}`}
                src={logoSrc}
                alt=""
                width={52}
                height={52}
                style={{ objectFit: 'contain', opacity: 0.92 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: 15,
          color: '#737373',
          textAlign: 'center',
        }}
      >
        ©2026 Neurowork Labs. All rights reserved
      </div>
    </div>
  );
}

function buildImageResponse({ fonts, companyLogos }: OgImageAssets) {
  return new ImageResponse(
    <HomeOpenGraphImageMarkup companyLogos={companyLogos} />,
    {
      ...homeOpenGraphImageSize,
      fonts: [
        {
          name: 'Outfit',
          data: fonts.regular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Outfit',
          data: fonts.semibold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
}

export async function createHomeOpenGraphImage() {
  const assets = await loadHomeOpenGraphImageAssets();
  return buildImageResponse(assets);
}
