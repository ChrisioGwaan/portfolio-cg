import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import gdjkworkImg from '@/public/gdjk_work_1.jpg';
import rmtdevImg from '@/public/gdjk_work_3.jpeg';

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

export const experiencesData = [
  {
    id: 'experience1',
    title: 'Software Development Intern',
    location: 'Total Game Development',
    description:
      'Develop new features for the open source game War Of Salvation in C++. Fix sereral bugs in pointers and memory leaks for the Ship units.',
    icon: React.createElement(CgWorkAlt),
    date: '2024 DEC - 2025 MAR',
  },
  {
    id: 'experience2',
    title: 'Bachelor of Software Engineering',
    location: 'Royal Melbourne Institute of Technology (RMIT) University',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2024 (Graduated)',
  },
  {
    id: 'experience3',
    title: 'Back End Developer',
    location: 'ABC Academy of Music',
    description:
      'Engineered Java-based microservices architecture using Spring Boot and JPA to improve backend modularity and scalability. Established Jenkins CI/CD pipelines, streamlining deployments and reducing downtime significantly. Resolved over 30 functional, logical, and security issues through Agile sprints, ensuring robust application performance.',
    icon: React.createElement(CgWorkAlt),
    date: '2024 JUL - 2024 NOV',
  },
  {
    id: 'experience4',
    title: 'Software Engineer Intern',
    location: 'Guangdong Provincial Academy of Building Research Group Co.Ltd',
    description:
      'Developed Customer Relationship Management (CRM) software system using Spring Boot backend and Vue.js frontend, providing customers with a platform to effectively manage data, interactions, and activities, resulting in enhanced customer service.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 JUL - 2024 MAY',
  },
  {
    id: 'experience5',
    title: 'Foundation Study in Science Engineering and Health',
    location: 'Royal Melbourne Institute of Technology (RMIT) University',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2021 (Graduated)',
  },
] as const;

export const projectsData = [
  {
    title: 'Admin Software System (SASS) for Cargo Vessel Company',
    description: '',
    tags: ['Spring Boot', 'MyBatis', 'Vue.js', 'MySQL', 'ElementUI', 'RocketMQ'],
    imageUrl: gdjkworkImg,
  },
  {
    title: 'Guangzhou University Instrument Sharing Management System',
    description: '',
    tags: ['Spring Boot', 'MyBatis', 'Vue.js', 'MySQL', 'MongoDB', 'ElementUI'],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  'Java',
  'C/C++',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Spring Boot',
  'MyBatis',
  'Vue.js',
  'React.js',
  'Next.js',
  'Express.js',
  'Node.js',
  'Flask',
  'Django',
  'AWS',
  'Docker',
  'Jenkins',
] as const;
