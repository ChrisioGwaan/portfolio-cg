'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMail, LuArrowDown, LuGithub, LuLinkedin, LuX } from 'react-icons/lu';
import { TbBrandWechat } from 'react-icons/tb';
import { Button } from '@heroui/react';
import { useSectionInView } from '@/lib/hooks';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../lib/i18n';

interface SocialLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, title, children }) => (
  <a
    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#43f0b3] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] focus:ring-offset-2 active:translate-y-0 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
    href={href}
    target="_blank"
    title={title}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

interface DownloadCVButtonProps {
  href: string;
  title: string;
  label: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ href, title, label }) => (
  <Button
    as="a"
    className="group min-h-11 rounded-full border border-black/10 bg-ink px-5 font-semibold text-white shadow-panel transition hover:-translate-y-0.5 hover:bg-[#152832] data-[hover=true]:opacity-100 dark:border-white/10 dark:bg-white dark:text-ink dark:hover:bg-[#f0fff9] sm:px-6"
    href={href}
    title={title}
    download
    radius="full"
  >
    {label} <LuArrowDown className="opacity-60 transition group-hover:translate-y-1" />
  </Button>
);

export default function Intro() {
  const { t } = useTranslation();
  const { ref } = useSectionInView('home');
  const [showWechat, setShowWechat] = useState(false);

  return (
    <>
      <section ref={ref} id="home" className="w-full max-w-6xl scroll-mt-[100rem]">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-8 pb-10 pt-8 md:grid-cols-[minmax(0,1fr)_19rem] md:pb-14">
          <motion.div
            className="order-1 min-w-0 text-center md:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-balance break-words font-display text-4xl font-semibold leading-[0.98] text-ink dark:text-white sm:text-6xl md:text-7xl">
              {t('homeTitle')}
            </h1>

            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e] dark:text-[#43f0b3] sm:text-sm">
              {t('homeCareerTitle')}
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:mx-0 sm:text-lg">
              {t('homeSubTitle1')}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <DownloadCVButton
                  href="/CV-EN.pdf"
                  title={t('homeCVDownload')}
                  label={t('homeCV-EN')}
                />
                {i18next.language !== 'en' && (
                  <DownloadCVButton
                    href="/CV-CN.pdf"
                    title={t('homeCVDownload')}
                    label={t('homeCV-CN')}
                  />
                )}
              </div>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <SocialLink href="https://www.linkedin.com/in/weixi-guan" title={t('homeLinkedin')}>
                  <LuLinkedin />
                </SocialLink>

                <SocialLink href="https://github.com/ChrisioGwaan" title={t('homeGitHub')}>
                  <LuGithub />
                </SocialLink>

                <button
                  onClick={() => setShowWechat(true)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#43f0b3] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] focus:ring-offset-2 active:translate-y-0 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                  title={t('homeWeChat')}
                >
                  <TbBrandWechat />
                </button>

                <SocialLink href="mailto:chris322322@gmail.com" title={t('homeEmailContact')}>
                  <LuMail />
                </SocialLink>
              </div>
            </div>

            <div className="mt-10 grid gap-3 text-left sm:max-w-lg sm:grid-cols-2">
              {[
                ['02+', 'years professional engineering'],
                ['AU', 'Melbourne-based builder'],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="border-l border-ink/20 bg-white/45 px-4 py-3 backdrop-blur dark:border-white/15 dark:bg-white/[0.04]"
                >
                  <div className="font-display text-2xl font-semibold text-ink dark:text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-2 mx-auto w-full max-w-[14.5rem] sm:max-w-[18rem]"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute inset-4 translate-x-4 translate-y-4 border border-[#43f0b3]/55 dark:border-[#58d7ff]/45" />
              <div className="relative overflow-hidden rounded-[8px] border border-black/10 bg-ink p-2 shadow-panel dark:border-white/10 dark:bg-white/10 dark:shadow-panel-dark">
                <Image
                  src="/images/avatar2.jpg"
                  alt="Weixi Guan"
                  width={440}
                  height={520}
                  priority
                  className="aspect-[4/5] w-full rounded-[6px] object-cover grayscale-[12%]"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-[6px] border border-white/10 bg-[#071016]/82 p-3 text-left text-white backdrop-blur">
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#43f0b3]">
                    Portfolio signal
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">{t('realname')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showWechat && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWechat(false)}
          >
            <motion.div
              className="relative w-full max-w-xs rounded-[8px] border border-white/10 bg-white p-6 text-center shadow-panel dark:bg-[#0b1820]"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowWechat(false)}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-ink transition hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-[#43f0b3] dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-ink"
                aria-label="Close WeChat dialog"
              >
                <LuX size={20} />
              </button>
              <h4 className="font-display text-lg font-semibold text-ink dark:text-white">WeChat ID</h4>
              <p className="mt-2 font-mono text-sm text-[var(--muted)]">chrisiogwaan</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
