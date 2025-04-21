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
    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
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
    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
    href={href}
    title={title}
    download
  >
    {label} <LuArrowDown className="opacity-60 group-hover:translate-y-1 transition" />
  </a>
);

export default function Intro() {
  const { t } = useTranslation();
  const { ref } = useSectionInView('home', 0.5);
  const [showWechat, setShowWechat] = useState(false);

  return (
    <>
      <section
        ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="/images/avatar2.jpg"
              alt="Weixi_Guan"
              width={1920}
              height={1080}
              quality={95}
              priority
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-[#8cfa9e] shadow-xl"
            />
          </motion.div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">{t('homeTitle')}</span> {t('homeSubTitle1')}
          <span className="font-bold">{t('homeSubTitle2')}</span> {t('homeSubTitle3')}
          <span className="font-bold">{t('homeSubTitle4')}</span> {t('homeSubTitle5')}
          <span className="font-bold">{t('homeSubTitle6')}</span>{' '}
          <span className="underline">{t('homeSubTitle7')}</span>{' '}
        </motion.h1>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <DownloadCVButton href="/CV-EN.pdf" title={t('homeCVDownload')} label={t('homeCV-EN')} />
          {i18next.language !== 'en' && (
            <DownloadCVButton
              href="/CV-CN.pdf"
              title={t('homeCVDownload')}
              label={t('homeCV-CN')}
            />
          )}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SocialLink href="https://www.linkedin.com/in/weixi-guan" title={t('homeLinkedin')}>
            <LuLinkedin />
          </SocialLink>

          <SocialLink href="https://github.com/ChrisioGwaan" title={t('homeGitHub')}>
            <LuGithub />
          </SocialLink>

          <button
            onClick={() => setShowWechat(true)}
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            title={t('homeWeChat')}
          >
            <TbBrandWechat />
          </button>

          <SocialLink href="mailto:chris322322@gmail.com" title={t('homeEmailContact')}>
            <LuMail />
          </SocialLink>
        </motion.div>
      </section>

      <AnimatePresence>
        {showWechat && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
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
