'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMail, LuArrowDown, LuGithub, LuLinkedin, LuX } from 'react-icons/lu';
import { TbBrandWechat } from 'react-icons/tb';
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
    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-[#8cfa9e] focus:ring-offset-2 active:translate-y-0 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
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
  <a
    className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm outline-none transition hover:-translate-y-0.5 hover:bg-gray-800 focus:ring-2 focus:ring-[#8cfa9e] focus:ring-offset-2 active:translate-y-0 dark:border-white/10 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 sm:px-6"
    href={href}
    title={title}
    download
  >
    {label} <LuArrowDown className="opacity-60 group-hover:translate-y-1 transition" />
  </a>
);

export default function Intro() {
  const { t } = useTranslation();
  const { ref } = useSectionInView('home');
  const [showWechat, setShowWechat] = useState(false);

  return (
    <>
      <section ref={ref} id="home" className="mb-24 w-full max-w-5xl scroll-mt-[100rem] sm:mb-0">
        <div className="grid items-center gap-8 text-center md:grid-cols-[15rem_1fr] md:text-left">
          <motion.div
            className="mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/avatar2.jpg"
              alt="Weixi Guan"
              width={360}
              height={360}
              quality={95}
              priority
              className="h-36 w-36 rounded-2xl border border-black/10 object-cover shadow-xl dark:border-white/10 sm:h-44 sm:w-44 md:h-56 md:w-56"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 inline-flex rounded-full border border-[#8cfa9e]/60 bg-[#8cfa9e]/15 px-4 py-1.5 text-sm font-semibold text-[#0f7f18] dark:border-[#8cfa9e]/30 dark:bg-[#8cfa9e]/10 dark:text-[#8cfa9e]">
              {t('homeCareerTitle')}
            </p>

            <h1 className="text-balance text-3xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-4xl md:text-5xl">
              {t('homeTitle')}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-700 dark:text-white/70 md:mx-0 sm:text-lg">
              {t('homeSubTitle1')}
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-[#8cfa9e] focus:ring-offset-2 active:translate-y-0 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                  title={t('homeWeChat')}
                >
                  <TbBrandWechat />
                </button>

                <SocialLink href="mailto:chris322322@gmail.com" title={t('homeEmailContact')}>
                  <LuMail />
                </SocialLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showWechat && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWechat(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 relative max-w-xs w-full text-center shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowWechat(false)}
                className="
                  absolute top-2 right-2
                  w-8 h-8 flex items-center justify-center
                  bg-gray-600 bg-opacity-40 text-white text-xl
                  rounded-full focus:outline-none
                  hover:bg-white hover:bg-opacity-60 hover:text-black
                  transition-colors duration-200
                "
              >
                <LuX size={20} />
              </button>
              <h4 className="text-lg font-semibold mb-2">WeChat ID</h4>
              <p className="text-gray-800 dark:text-gray-200 font-mono">chrisiogwaan</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
