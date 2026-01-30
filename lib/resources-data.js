// Clean, simplified resource data for ResourceVault
export const RESOURCES_DATA = [
  // Major Cloud Providers
  {
    title: "Google Cloud Platform",
    url: "https://cloud.google.com/free",
    description: "Free compute, storage, database, and ML services.",
    category: "Major Cloud Providers",
  },
  {
    title: "Amazon Web Services",
    url: "https://aws.amazon.com/free/",
    description: "EC2, S3, Lambda, RDS, and more with 12-month free tier.",
    category: "Major Cloud Providers",
  },
  {
    title: "Microsoft Azure",
    url: "https://azure.microsoft.com/free/",
    description:
      "Virtual machines, databases, and functions with $200 free credits.",
    category: "Major Cloud Providers",
  },
  {
    title: "Oracle Cloud",
    url: "https://www.oracle.com/cloud/free/",
    description: "Always-free compute, storage, and database services.",
    category: "Major Cloud Providers",
  },

  // Source Code Repos
  {
    title: "GitHub",
    url: "https://github.com",
    description: "Unlimited free public and private repositories.",
    category: "Source Code Repos",
  },
  {
    title: "GitLab",
    url: "https://gitlab.com",
    description: "Free repos with CI/CD pipelines and container registry.",
    category: "Source Code Repos",
  },
  {
    title: "Bitbucket",
    url: "https://bitbucket.org",
    description: "Unlimited repos for up to 5 users with CI/CD.",
    category: "Source Code Repos",
  },

  // APIs, Data, and ML
  {
    title: "Hugging Face",
    url: "https://huggingface.co",
    description: "Build and deploy NLP models for free.",
    category: "APIs, Data, and ML",
  },
  {
    title: "OpenAI API",
    url: "https://openai.com/api",
    description: "Access GPT models with free trial credits.",
    category: "APIs, Data, and ML",
  },

  // Design and UI
  {
    title: "Figma",
    url: "https://figma.com",
    description: "Free design tool with unlimited files.",
    category: "Design and UI",
  },
  {
    title: "Google Fonts",
    url: "https://fonts.google.com",
    description: "1000+ free open-source fonts.",
    category: "Font",
  },

  // Development Tools
  {
    title: "VS Code",
    url: "https://code.visualstudio.com",
    description: "Free lightweight code editor.",
    category: "IDE and Code Editing",
  },
  {
    title: "Postman",
    url: "https://postman.com",
    description: "Free API testing and development platform.",
    category: "APIs, Data, and ML",
  },

  // Authentication
  {
    title: "Auth0",
    url: "https://auth0.com",
    description: "Free SSO for 25k users per month.",
    category: "Authentication, Authorization, and User Management",
  },
  {
    title: "Clerk",
    url: "https://clerk.com",
    description: "Free authentication for 10k monthly active users.",
    category: "Authentication, Authorization, and User Management",
  },

  // Payment Processing
  {
    title: "Stripe",
    url: "https://stripe.com",
    description: "Payment processing with no monthly fees.",
    category: "Payment and Billing Integration",
  },

  // Email Services
  {
    title: "Brevo",
    url: "https://brevo.com",
    description: "9k free emails per month.",
    category: "Email",
  },
  {
    title: "Resend",
    url: "https://resend.com",
    description: "3k free transactional emails monthly.",
    category: "Email",
  },

  // Monitoring and Analytics
  {
    title: "Datadog",
    url: "https://datadoghq.com",
    description: "Free monitoring for up to 5 nodes.",
    category: "Monitoring",
  },
  {
    title: "Google Analytics",
    url: "https://analytics.google.com",
    description: "Free website traffic and user analytics.",
    category: "Analytics, Events and Statistics",
  },

  // Databases
  {
    title: "MongoDB Atlas",
    url: "https://mongodb.com/cloud/atlas",
    description: "Free MongoDB database with 512MB storage.",
    category: "Managed Data Services",
  },
  {
    title: "Supabase",
    url: "https://supabase.com",
    description: "Free PostgreSQL database with realtime API.",
    category: "Managed Data Services",
  },

  // Hosting
  {
    title: "Vercel",
    url: "https://vercel.com",
    description: "Free Next.js and static site hosting.",
    category: "Web Hosting",
  },
  {
    title: "Netlify",
    url: "https://netlify.com",
    description: "Free static site hosting with 300 credits/month.",
    category: "Web Hosting",
  },

  // CDN and Protection
  {
    title: "Cloudflare",
    url: "https://cloudflare.com",
    description: "Free CDN, DNS, and DDoS protection.",
    category: "CDN and Protection",
  },

  // Testing
  {
    title: "Cypress",
    url: "https://cypress.io",
    description: "Free end-to-end testing framework.",
    category: "Testing",
  },

  // Project Management
  {
    title: "Trello",
    url: "https://trello.com",
    description: "Free unlimited personal project boards.",
    category: "Issue Tracking and Project Management",
  },
  {
    title: "Jira",
    url: "https://atlassian.com/software/jira",
    description: "Free project management for up to 10 users.",
    category: "Issue Tracking and Project Management",
  },

  // Collaboration
  {
    title: "Slack",
    url: "https://slack.com",
    description: "Team chat with limited free message history.",
    category: "Tools for Teams and Collaboration",
  },
  {
    title: "Discord",
    url: "https://discord.com",
    description: "Free unlimited voice and text chat.",
    category: "Tools for Teams and Collaboration",
  },

  // CMS
  {
    title: "Sanity",
    url: "https://sanity.io",
    description: "Headless CMS with 500k API calls/month free.",
    category: "CMS",
  },
  {
    title: "Contentful",
    url: "https://contentful.com",
    description: "Headless CMS with free tier.",
    category: "CMS",
  },

  // Learning
  {
    title: "FreeCodeCamp",
    url: "https://freecodecamp.org",
    description: "Free coding bootcamp with certifications.",
    category: "Education and Career Development",
  },
  {
    title: "The Odin Project",
    url: "https://theodinproject.com",
    description: "Free open-source web development curriculum.",
    category: "Education and Career Development",
  },

  // Documentation
  {
    title: "GitHub Pages",
    url: "https://pages.github.com",
    description: "Free static site hosting for documentation.",
    category: "Web Hosting",
  },

  // Image Processing
  {
    title: "Cloudinary",
    url: "https://cloudinary.com",
    description: "Free image upload and optimization service.",
    category: "Storage and Media Processing",
  },

  // Logging
  {
    title: "LogRocket",
    url: "https://logrocket.com",
    description: "1k free session replays per month.",
    category: "Log Management",
  },

  // Security
  {
    title: "Let's Encrypt",
    url: "https://letsencrypt.org",
    description: "Free SSL/TLS certificates.",
    category: "Security and PKI",
  },

  // Deployment and CI/CD
  {
    title: "GitHub Actions",
    url: "https://github.com/features/actions",
    description: "3000 free CI/CD minutes per month.",
    category: "CI and CD",
  },
  {
    title: "CircleCI",
    url: "https://circleci.com",
    description: "6000 free CI/CD minutes monthly.",
    category: "CI and CD",
  },

  // Code Quality
  {
    title: "SonarCloud",
    url: "https://sonarcloud.io",
    description: "Free code quality analysis for open-source.",
    category: "Code Quality",
  },

  // Search
  {
    title: "Algolia",
    url: "https://algolia.com",
    description: "1M free records and 10k searches/month.",
    category: "Search",
  },

  // Storage
  {
    title: "AWS S3",
    url: "https://aws.amazon.com/s3/",
    description: "5GB free cloud storage.",
    category: "Storage and Media Processing",
  },

  // Forms
  {
    title: "Formspree",
    url: "https://formspree.io",
    description: "50 free form submissions per month.",
    category: "Forms",
  },

  // Code Snippets
  {
    title: "GitHub Gist",
    url: "https://gist.github.com",
    description: "Free code snippet sharing.",
    category: "Code Search and Browsing",
  },
];
