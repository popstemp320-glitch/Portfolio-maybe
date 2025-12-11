import { Tool, Certification, Project, Writeup } from './types';

export const TOOLS: Tool[] = [
  {
    id: 't1',
    name: 'PacketSniffer.js',
    description: 'A lightweight browser-based packet analyzer for learning purposes.',
    category: 'Networking',
    status: 'ONLINE',
    link: '#'
  },
  {
    id: 't2',
    name: 'SubDomaintor',
    description: 'Automated subdomain enumeration script visualized.',
    category: 'Security',
    status: 'ONLINE',
    link: '#'
  },
  {
    id: 't3',
    name: 'KeyLogger Detector',
    description: 'Heuristic analysis tool to detect hook-based keyloggers.',
    category: 'Security',
    status: 'OFFLINE',
    link: '#'
  },
  {
    id: 't4',
    name: 'AutoSSH',
    description: 'Automation wrapper for managing persistent SSH tunnels.',
    category: 'Automation',
    status: 'ONLINE',
    link: '#'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'Offensive Security Certified Professional',
    issuer: 'OffSec',
    date: '2024-01-15',
    credentialId: 'OSCP-88421',
    level: 'Expert'
  },
  {
    id: 'c2',
    title: 'Certified Ethical Hacker (Master)',
    issuer: 'EC-Council',
    date: '2023-11-20',
    credentialId: 'ECC-2023-99',
    level: 'Professional'
  },
  {
    id: 'c3',
    title: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    date: '2023-05-10',
    credentialId: 'AWS-SEC-992',
    level: 'Specialist'
  },
  {
    id: 'c4',
    title: 'CompTIA PenTest+',
    issuer: 'CompTIA',
    date: '2022-08-14',
    credentialId: 'COMP-PT-11',
    level: 'Associate'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'ShadowGrid',
    description: 'A decentralized C2 framework proof-of-concept using blockchain transactions for command propagation.',
    tags: ['Security', 'Blockchain', 'Golang'],
    repoLink: 'https://github.com',
    demoLink: '#',
    imageUrl: 'https://picsum.photos/600/400'
  },
  {
    id: 'p2',
    title: 'NetGraph',
    description: 'Real-time network topology visualizer using SNMP and React Flow.',
    tags: ['Networking', 'React', 'D3.js'],
    repoLink: 'https://github.com',
    demoLink: '#',
    imageUrl: 'https://picsum.photos/600/401'
  },
  {
    id: 'p3',
    title: 'VaultKeeper',
    description: 'Zero-knowledge encryption password manager CLI tool.',
    tags: ['Cryptography', 'Rust', 'CLI'],
    repoLink: 'https://github.com',
    imageUrl: 'https://picsum.photos/600/402'
  }
];

export const WRITEUPS: Writeup[] = [
  {
    id: 'w1',
    platform: 'HackTheBox',
    title: 'Machine: Intelligence',
    difficulty: 'Hard',
    category: 'Active Directory',
    excerpt: 'Cracking Kerberos tickets and pivoting through a forest trust using a legacy printer service exploit.',
    date: '2025-02-14'
  },
  {
    id: 'w2',
    platform: 'TryHackMe',
    title: 'Room: CyberLens',
    difficulty: 'Medium',
    category: 'Web Exploitation',
    excerpt: 'Exploiting an IDOR vulnerability in an image processing API to dump the user database.',
    date: '2025-01-20'
  },
  {
    id: 'w3',
    platform: 'CTFTime',
    title: 'DefCon Quals 2024',
    difficulty: 'Insane',
    category: 'Reverse Engineering',
    excerpt: 'Decompiling a custom VM bytecode to find the hidden flag generation algorithm.',
    date: '2024-12-05'
  }
];

export const SKILLS_MARQUEE = [
  "NETWORK SECURITY", "PENETRATION TESTING", "REACT", "TYPESCRIPT", "PYTHON", "GOLANG", "RUST", "AWS", "KUBERNETES", "MALWARE ANALYSIS", "CRYPTOGRAPHY", "OSINT", "DIGITAL FORENSICS", "RED TEAMING"
];