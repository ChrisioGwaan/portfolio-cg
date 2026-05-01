import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuBrain, LuCloud, LuCode2, LuDatabase, LuGraduationCap, LuWorkflow } from 'react-icons/lu';
import gdjkworkImg1 from '@/public/images/projects/gdjk_work_1.png';
import gdjkworkImg2 from '@/public/images/projects/gdjk_work_2.png';
import gdjkworkImg3 from '@/public/images/projects/gdjk_work_3.jpeg';

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
  {
    id: 'photography',
    name: 'Photography',
    hash: '#photography',
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
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
    title: 'Admin Software System (SASS) for Cargo Vessel Company',
    description:
      'An administration software as service (SaaS) platform for a Cargo Vessel local government company. Develop plenty of CRUD operations for the services in need from client.',
    skills: ['Spring Boot', 'MyBatis', 'Vue.js', 'MySQL', 'ElementUI', 'RocketMQ'],
    images: [gdjkworkImg1, gdjkworkImg2],
  },
  {
    title: 'Guangzhou University Instrument Sharing Management System',
    description:
      "Guangzhou University Instrument Sharing Management System, a web-based platform for managing the university's shared instruments and laboratory equipment.",
    skills: ['Spring Boot', 'MyBatis', 'Vue.js', 'MySQL', 'MongoDB', 'ElementUI'],
    images: [gdjkworkImg3],
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
