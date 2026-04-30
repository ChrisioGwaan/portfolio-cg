'use client';

import React from 'react';
import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu';
import { TbBrandWechat } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 bg-gray-50 px-4 py-8 pb-24 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 sm:pb-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3">
        <div className="grid w-full max-w-md grid-cols-1 gap-2 text-sm sm:max-w-none sm:grid-cols-2 lg:flex lg:items-center lg:justify-center lg:gap-3">
          <span className="flex min-w-0 items-center justify-center gap-1 hover:text-[#8cfa9e] transition">
            <a className="truncate" href="mailto:chris322322@gmail.com" title="Email">
              <LuMail className="inline-block shrink-0" /> chris322322@gmail.com
            </a>
          </span>

          <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>

          <span className="flex min-w-0 items-center justify-center gap-1">
            <TbBrandWechat className="inline-block" /> WeChat:{' '}
            <span className="font-mono truncate">chrisiogwaan</span>
          </span>

          <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>

          <span className="flex min-w-0 items-center justify-center gap-1">
            <LuPhone className="inline-block" /> AU:{' '}
            <span className="font-mono whitespace-nowrap">+61&nbsp;411&nbsp;146&nbsp;832</span>
          </span>

          <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>

          <span className="flex min-w-0 items-center justify-center gap-1">
            <LuPhone className="inline-block" /> CN:{' '}
            <span className="font-mono whitespace-nowrap">+86&nbsp;150&nbsp;1186&nbsp;7647</span>
          </span>
        </div>

        <div className="flex gap-4 mt-1">
          <a
            href="https://github.com/ChrisioGwaan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8cfa9e] transition"
            title="GitHub"
          >
            <LuGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/weixi-guan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8cfa9e] transition"
            title="LinkedIn"
          >
            <LuLinkedin size={22} />
          </a>
        </div>

        <small className="mt-2 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {t('footerCopyright')}
        </small>

        <div className="text-xs text-gray-400 mt-1">
          Made with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#8cfa9e]"
          >
            Next.js
          </a>
        </div>
      </div>
    </footer>
  );
}
