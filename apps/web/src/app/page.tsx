/* 
  author: Yagnik Poshiya
  github: https://github.com/neuroworklabs/Neurons
*/

import Link from 'next/link';

import { NeuronsLogo } from '@/components/brand/neurons-logo';
import { safeGetUser } from '@/lib/auth/safe-get-user';

export default async function HomePage() {
  const auth = await safeGetUser();
  const isLoggedIn = Boolean(auth.user);
  const companyLogos = [
    '/users/colorful/1.svg',
    '/users/colorful/2.svg',
    '/users/colorful/3.svg',
    '/users/colorful/4.svg',
    '/users/colorful/5.svg',
    '/users/colorful/6.svg',
    '/users/colorful/7.svg',
    '/users/colorful/8.svg',
  ];

  return (
    <main className="relative h-screen overflow-hidden text-neutral-950">
      <div aria-hidden className="home-page-bg pointer-events-none absolute inset-0" />
      <div className="gradient-orbit" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-60 [background-image:radial-gradient(circle,_rgba(6,95,70,0.08)_1px,_transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />

      <header className="absolute left-1/2 top-4 z-20 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-emerald-900/10 bg-white/70 px-5 py-3 text-sm font-medium font-plus-jakarta-sans shadow-[0_8px_32px_rgba(6,95,70,0.08)] backdrop-blur-md sm:w-[calc(100%-3rem)] sm:px-6">
        <div className="flex items-center gap-2">
          <NeuronsLogo className="h-[24px] w-12" />
          <div className="font-plus-jakarta-sans text-lg font-semibold tracking-tight sm:text-2xl">
            Neurons
          </div>
        </div>

        <Link
          href={isLoggedIn ? '/dashboard' : '/auth/signup'}
          className="home-cta-gradient inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2 text-sm font-semibold tracking-tight text-white font-plus-jakarta-sans shadow-[0_4px_14px_rgba(6,95,70,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(6,95,70,0.45)] sm:text-base"
        >
          {isLoggedIn ? 'Dashboard' : 'Get Started'}
        </Link>
      </header>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-4 pt-24 font-plus-jakarta-sans sm:px-6 lg:px-8">
        <section className="flex flex-1 flex-col items-center justify-center gap-10 py-4">
          <div className="max-w-4xl text-center leading-tight">
            <p className="mb-5 inline-flex items-center rounded-full border border-emerald-900/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur-sm">
              AI agent marketplace
            </p>
            <h1 className="font-plus-jakarta-sans text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              <span className="block">Ready-to-deploy agents</span>
              <span className="mt-4 block">
                built by{' '}
                <span className="home-hero-gradient font-bold">Neurons</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              A single-vendor AI agent marketplace from where anyone from anywhere in the
              world can integrate agents in web applications or websites.
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <p className="mb-5 text-center text-xl font-semibold text-neutral-700 sm:text-2xl">
              Used by
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className="marquee-track flex w-max items-center gap-10">
                {[...companyLogos, ...companyLogos].map((logoPath, index) => (
                  <img
                    key={`${logoPath}-${index}`}
                    src={logoPath}
                    alt="Company logo"
                    className="h-14 w-auto object-contain opacity-90 sm:h-16 md:h-20"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-2 flex justify-center text-base text-neutral-500 sm:text-base">
          <p className="tracking-tight">
            ©2026 Neurowork Labs. All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
