'use client';

import React from 'react';
import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu';
import { TbBrandWechat } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-4 mt-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3">
        <div className="flex gap-3 items-center">
          <span className="flex items-center gap-1 hover:text-[#8cfa9e] transition">
            <a href="mailto:chris322322@gmail.com" title="Email">
              <LuMail className="inline-block" /> chris322322@gmail.com
            </a>
          </span>

          <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>

          <span className="flex items-center gap-1">
            <TbBrandWechat className="inline-block" /> WeChat:{' '}
            <span className="font-mono">chrisiogwaan</span>
          </span>

          <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>

          <span className="flex items-center gap-1">
            <LuPhone className="inline-block" /> AU:{' '}
            <span className="font-mono">+61&nbsp;411&nbsp;146&nbsp;832</span>
          </span>

          <span className="hidden sm:inline mx-2 text-gray-300 dark:text-gray-600">|</span>

          <span className="flex items-center gap-1">
            <LuPhone className="inline-block" /> CN:{' '}
            <span className="font-mono">+86&nbsp;150&nbsp;1186&nbsp;7647</span>
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

        <small className="mt-2 text-xs text-gray-500">
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
