import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuBrain, LuCloud, LuCode2, LuDatabase, LuGraduationCap, LuWorkflow } from 'react-icons/lu';
import gdjkworkImg1 from '@/public/images/projects/gdjk_work_1.png';
import gdjkworkImg2 from '@/public/images/projects/gdjk_work_2.png';
import gdjkworkImg3 from '@/public/images/projects/gdjk_work_3.jpeg';
import scrabbleGameImg1 from '@/public/images/projects/scrabble_game_1.png';
import scrabbleGameImg2 from '@/public/images/projects/scrabble_game_2.png';
import emiratesDocumentIntelligenceImg1 from '@/public/images/projects/Emirates_document_intelligence_1.png';
import emiratesDocumentIntelligenceImg2 from '@/public/images/projects/Emirates_document_intelligence_2.png';

export const links = [
  {
    id: 'home',
    name: 'Home',
    hash: '#home',
  },
  {
    id: 'about',
    name: 'About',
    hash: '#about',
  },
  {
    id: 'experience',
    name: 'Experience',
    hash: '#experience',
  },
  {
    id: 'education',
    name: 'Education',
    hash: '#education',
  },
  {
    id: 'projects',
    name: 'Projects',
    hash: '#projects',
  },
  {
    id: 'skills',
    name: 'Skills',
    hash: '#skills',
  },
  // {
  //   id: 'photography',
  //   name: 'Photography',
  //   hash: '#photography',
  // },
  {
    id: 'contact',
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const educationData = [
  {
    id: 'education1',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '',
    status: '',
  },
  {
    id: 'education2',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '',
    status: '',
  },
  {
    id: 'education3',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '',
    status: '',
  },
] as const;

export const experiencesData = [
  {
    id: 'experience1',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: '',
  },
  {
    id: 'experience2',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: '',
  },
  {
    id: 'experience3',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: '',
  },
  {
    id: 'experience4',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: '',
  },
  {
    id: 'experience5',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: '',
  },
  {
    id: 'experience6',
    title: '',
    location: '',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: '',
  },
] as const;

export const projectsData = [
  {
    title: 'Enterprise Document Processing & Automation with Azure AI',
    date: '2025 NOV. - 2026 JAN.',
    sortOrder: 202601,
    association: 'Bamboo Technologies',
    projectUrl:
      'https://www.notion.so/Azure-AI-Content-Understanding-Formerly-known-as-Document-Intelligence-2c456bcfd52680e7b1f5dd410cf18a30?source=copy_link',
    description:
      'Designed and implemented an enterprise document processing solution using Azure AI Content Understanding to automate structured data extraction from application forms and invoices. The system supports both single-format pipelines and complex multi-format scenarios by training multiple extraction models and routing documents through classifier-based workflows. It exposes unified inference outputs as structured JSON for Power Automate, Dynamics 365, Power Apps, and other frontend systems.',
    skills: [
      'Azure AI Content Understanding',
      'Azure AI Foundry',
      'Microsoft Azure',
      'Power Automate',
      'Dynamics 365',
      'Power Apps',
      'Document Processing',
      'JSON APIs',
    ],
    images: [emiratesDocumentIntelligenceImg1, emiratesDocumentIntelligenceImg2],
  },
  {
    title: 'CGC Malaysia Chatbot Agent Solution',
    date: '2025 AUG. - 2025 DEC.',
    sortOrder: 202512,
    association: 'Bamboo Technologies',
    description:
      'An internal enterprise chatbot agent built for CGC Malaysia in my previous company environment. The solution connected Microsoft Copilot Studio with Azure AI Foundry and a RAG pipeline for secure knowledge retrieval, using Azure Blob Storage for document ingestion, Cosmos DB for chunk and metadata storage, PostgreSQL for RBAC/conversation data, and Azure AD for single sign-on. No public demo is available because the project was delivered inside the client and company environment.',
    skills: [
      'Copilot Studio',
      'Azure AI Foundry',
      'Azure Blob Storage',
      'Cosmos DB',
      'PostgreSQL',
      'Azure AD',
      'RAG',
      'RBAC',
    ],
    images: ['/images/projects/cgc_chatbot_agent_architecture.png'],
  },
  {
    title: 'Admin Software System (SASS) for Cargo Vessel Company',
    date: '2023 JUL. - 2024 MAY.',
    sortOrder: 202405,
    association: 'Guangdong Provincial Academy of Building Research Group Co.Ltd',
    description:
      'An administration software as service (SaaS) platform for a Cargo Vessel local government company. Develop plenty of CRUD operations for the services in need from client.',
    skills: ['Spring Boot', 'MyBatis', 'Vue.js', 'MySQL', 'ElementUI', 'RocketMQ'],
    images: [gdjkworkImg1, gdjkworkImg2],
  },
  {
    title: 'Guangzhou University Instrument Sharing Management System',
    date: '2023 JUL. - 2024 MAY.',
    sortOrder: 202404,
    association: 'Guangdong Provincial Academy of Building Research Group Co.Ltd',
    description:
      "Guangzhou University Instrument Sharing Management System, a web-based platform for managing the university's shared instruments and laboratory equipment.",
    skills: ['Spring Boot', 'MyBatis', 'Vue.js', 'MySQL', 'MongoDB', 'ElementUI'],
    images: [gdjkworkImg3],
  },
  {
    title: 'Scrabble Game',
    date: '2021 SEP. - 2021 OCT.',
    sortOrder: 202110,
    association: 'RMIT University',
    projectUrl: 'https://github.com/ChrisioGwaan/Scrabble-Game',
    description:
      'A 1v1 terminal-based Scrabble game built in C++ with Makefile support. The project uses linked-list node structures to manage tiles and gameplay state, validates player moves, tracks scores, and recreates the core word-building experience in a terminal environment.',
    skills: ['C++', 'Makefile', 'Linked List', 'Data Structures', 'WSL Ubuntu', 'Problem Solving'],
    images: [scrabbleGameImg1, scrabbleGameImg2],
  },
] as const;

export const skillCategoriesData = [
  {
    id: 'skillCategory1',
    icon: React.createElement(LuBrain),
    skills: [
      'Artificial Intelligence (AI)',
      'Copilot Studio',
      'Azure AI Foundry',
      'RAG',
      'Document Understanding',
      'Prompt Engineering',
    ],
  },
  {
    id: 'skillCategory2',
    icon: React.createElement(LuCloud),
    skills: [
      'Microsoft Azure',
      'Power Platform',
      'Dataverse',
      'Azure Blob Storage',
      'Cosmos DB',
      'SharePoint',
    ],
  },
  {
    id: 'skillCategory3',
    icon: React.createElement(LuCode2),
    skills: ['TypeScript', 'React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Startup Development'],
  },
  {
    id: 'skillCategory4',
    icon: React.createElement(LuDatabase),
    skills: ['Python', 'Node.js', 'Java', 'Spring Boot', 'Supabase', 'MySQL'],
  },
  {
    id: 'skillCategory5',
    icon: React.createElement(LuWorkflow),
    skills: ['Docker', 'Jenkins', 'REST APIs', 'CI/CD', 'Google Lighthouse', 'Code Review'],
  },
] as const;
