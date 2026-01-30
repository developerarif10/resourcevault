// Comprehensive resource data for ResourceVault - Updated with comprehensive free developer resources
export const RESOURCES_DATA = [
  // Cloud Providers
  { title: "Google Cloud Platform", url: "https://cloud.google.com/free", description: "App Engine, Firestore, Compute Engine, Cloud Storage, BigQuery with generous free tier limits.", category: "Cloud Providers" },
  { title: "Amazon Web Services (AWS)", url: "https://aws.amazon.com/free/", description: "EC2, S3, RDS, DynamoDB, Lambda with 12-month free tier and always-free options.", category: "Cloud Providers" },
  { title: "Microsoft Azure", url: "https://azure.microsoft.com/free/", description: "Virtual Machines, SQL Database, Blob Storage, Cosmos DB with 12-month free tier.", category: "Cloud Providers" },
  { title: "Oracle Cloud", url: "https://www.oracle.com/cloud/free/", description: "Always free: 2 Compute VMs, 20GB Object Storage, 2 Autonomous Databases, 10TB outbound data.", category: "Cloud Providers" },
  { title: "IBM Cloud", url: "https://www.ibm.com/cloud/free/", description: "Cloudant database (1GB), Db2 (100MB), API Connect, Log Analysis with monthly limits.", category: "Cloud Providers" },
  { title: "Cloudflare", url: "https://www.cloudflare.com/", description: "Free DNS, CDN, SSL, DDoS protection, Workers (100k req/day), Pages, Zero Trust for 50 users.", category: "Cloud Providers" },
  { title: "Zoho", url: "https://www.zoho.com/", description: "Free suite: Email (5 users), Assist (remote support), Projects, Vault password manager.", category: "Cloud Providers" },
  
  // Cloud Management
  { title: "Brainboard", url: "https://brainboard.co", description: "Visually build and manage cloud infrastructures collaboratively end-to-end.", category: "Cloud Management Solutions" },
  { title: "Cloud 66", url: "https://www.cloud66.com", description: "Free for personal projects: one deployment server and one static site.", category: "Cloud Management Solutions" },
  { title: "deployment.io", url: "https://deployment.io", description: "Deploy unlimited static sites and web services on AWS with 10 free job executions/month.", category: "Cloud Management Solutions" },
  { title: "Pulumi", url: "https://www.pulumi.com", description: "Infrastructure as code for building and deploying cloud infrastructure using familiar languages.", category: "Cloud Management Solutions" },
  { title: "Scalr", url: "https://www.scalr.com", description: "Terraform automation and collaboration platform; free for up to 50 runs per month.", category: "Cloud Management Solutions" },
  
  // Source Code Repos
  { title: "Bitbucket", url: "https://bitbucket.org", description: "Unlimited public/private Git repos for up to 5 users with CI/CD pipelines.", category: "Source Code Repos" },
  { title: "Codeberg", url: "https://codeberg.org", description: "Unlimited public/private Git repos for free and open-source projects.", category: "Source Code Repos" },
  { title: "Framagit", url: "https://framagit.org", description: "GitLab-based software forge with CI, static pages, and issue tracking.", category: "Source Code Repos" },
  { title: "GitGud", url: "https://gitgud.io", description: "Unlimited private and public repositories powered by GitLab.", category: "Source Code Repos" },
  { title: "GitHub", url: "https://github.com", description: "Unlimited public/private repos with CI/CD, project management, and hosting.", category: "Source Code Repos" },
  { title: "GitLab", url: "https://gitlab.com", description: "Unlimited public/private Git repos with up to 5 collaborators and CI/CD.", category: "Source Code Repos" },
  { title: "Heptapod", url: "https://heptapod.net", description: "Friendly fork of GitLab providing support for Mercurial version control.", category: "Source Code Repos" },
  { title: "Pagure.io", url: "https://pagure.io", description: "Free and open-source code collaboration platform for FOSS-licensed projects.", category: "Source Code Repos" },
  { title: "Pijul", url: "https://pijul.com", description: "Unlimited free distributed version control system based on patch theory.", category: "Source Code Repos" },
  { title: "ProjectLocker", url: "https://projectlocker.com", description: "One free private project (Git and Subversion) with 50 MB of space.", category: "Source Code Repos" },
  { title: "RocketGit", url: "https://rocketgit.com", description: "Unlimited public and private repositories based on Git.", category: "Source Code Repos" },
  { title: "Savannah GNU", url: "https://savannah.gnu.org", description: "Collaborative software development management system for free GNU projects.", category: "Source Code Repos" },
  
  // APIs, Data, ML (first 50)
  { title: "Abstract API", url: "https://www.abstractapi.com", description: "API suite for IP geolocation, email validation, and utilities.", category: "APIs, Data, and ML" },
  { title: "Apify", url: "https://apify.com", description: "Web scraping/automation platform with $5 free platform credits monthly.", category: "APIs, Data, and ML" },
  { title: "APITemplate.io", url: "https://apitemplate.io", description: "Auto-generate images/PDFs; free plan includes 50 images/month.", category: "APIs, Data, and ML" },
  { title: "Arize AI", url: "https://arize.com", description: "ML observability for model monitoring; free up to two models.", category: "APIs, Data, and ML" },
  { title: "Beeceptor", url: "https://beeceptor.com", description: "Mock/debug APIs; free plan includes 50 requests per day.", category: "APIs, Data, and ML" },
  { title: "BigDataCloud", url: "https://www.bigdatacloud.com", description: "APIs for IP geolocation, reverse geocoding, client info with free limits.", category: "APIs, Data, and ML" },
  { title: "Browse AI", url: "https://browse.ai", description: "Extract/monitor web data; 1k credits per month free.", category: "APIs, Data, and ML" },
  { title: "BrowserCat", url: "https://browsercat.com", description: "Headless browser API for automation/scraping; 1k requests/month free.", category: "APIs, Data, and ML" },
  { title: "Calendarific", url: "https://calendarific.com", description: "Public holiday API for 200+ countries; 500 free calls/month.", category: "APIs, Data, and ML" },
  { title: "Canopy", url: "https://canopyapi.co", description: "GraphQL API for Amazon.com product data; 100 free calls/month.", category: "APIs, Data, and ML" },
  { title: "CarAPI.dev", url: "https://carapi.dev", description: "Automotive data API with VIN decoding; 100 requests/month free.", category: "APIs, Data, and ML" },
  { title: "Cloudmersive", url: "https://cloudmersive.com", description: "API library for document conversion/virus scanning; 600 calls/month free.", category: "APIs, Data, and ML" },
  { title: "Colaboratory", url: "https://colab.research.google.com", description: "Free web-based Python notebook with GPU access.", category: "APIs, Data, and ML" },
  { title: "CometML", url: "https://comet.com", description: "MLOps platform for experiment tracking/model management; free for individuals.", category: "APIs, Data, and ML" },
  { title: "Commerce Layer", url: "https://commercelayer.io", description: "Composable commerce API; 100 orders/month and 1,000 SKUs free.", category: "APIs, Data, and ML" },
  { title: "Composio", url: "https://composio.dev", description: "Integration platform for AI Agents/LLMs with 200+ tools.", category: "APIs, Data, and ML" },
  { title: "Conversion Tools", url: "https://conversiontools.io", description: "Online file converter API; limited to 30 conversions per day.", category: "APIs, Data, and ML" },
  { title: "Country-State-City API", url: "https://countrystatecity.in", description: "Countries, regions, cities data; 100 requests per day free.", category: "APIs, Data, and ML" },
  { title: "Coupler", url: "https://www.coupler.io", description: "Data integration tool syncing apps; free for one user and connection.", category: "APIs, Data, and ML" },
  { title: "CraftMyPDF", url: "https://craftmypdf.com", description: "Auto-generate PDFs from templates; 100 PDFs/month free.", category: "APIs, Data, and ML" },
  
  // Continue with more APIs...
  { title: "Postman", url: "https://www.postman.com", description: "API collaboration platform; free forever with certain limits.", category: "APIs, Data, and ML" },
  { title: "Hoppscotch", url: "https://hoppscotch.io", description: "Free, fast, and beautiful API request builder.", category: "APIs, Data, and ML" },
  { title: "Insomnia", url: "https://insomnia.rest", description: "Open-source API client for REST/GraphQL APIs.", category: "APIs, Data, and ML" },
  { title: "Hugging Face", url: "https://huggingface.co", description: "Build, train, deploy NLP models; free up to 30k characters/mo.", category: "APIs, Data, and ML" },
  { title: "News API", url: "https://newsapi.org", description: "Search news on web; 100 queries free per day.", category: "APIs, Data, and ML" },
  { title: "SerpApi", url: "https://serpapi.com", description: "Real-time search engine scraping API; 100 free calls/month.", category: "APIs, Data, and ML" },
  { title: "Svix", url: "https://svix.com", description: "Webhooks as a Service; 50,000 messages/month free.", category: "APIs, Data, and ML" },
  { title: "Tavily AI", url: "https://tavily.com", description: "Search API for research agents; 1000 requests/month free.", category: "APIs, Data, and ML" },
  { title: "Zuplo", url: "https://zuplo.com", description: "API Management; 1M monthly requests and 10GB egress free.", category: "APIs, Data, and ML" },
  
  // CMS
  { title: "Contentful", url: "https://contentful.com", description: "Headless CMS; free space for 5 users and 25k records.", category: "CMS" },
  { title: "Cosmic", url: "https://cosmicjs.com", description: "Headless CMS and API toolkit; free personal plans.", category: "CMS" },
  { title: "Crystallize", url: "https://crystallize.com", description: "Headless PIM with ecommerce; unlimited users and 1000 items.", category: "CMS" },
  { title: "DatoCMS", url: "https://www.datocms.com", description: "GraphQL-based CMS; free tier includes 100k calls/month.", category: "CMS" },
  { title: "Hygraph", url: "https://hygraph.com", description: "GraphQL native Headless CMS; free tier for small projects.", category: "CMS" },
  { title: "Prismic", url: "https://prismic.io", description: "Headless CMS with unlimited API calls for one user.", category: "CMS" },
  { title: "Sanity.io", url: "https://www.sanity.io", description: "Structured content platform; generous free tier with unlimited projects.", category: "CMS" },
  { title: "Storyblok", url: "https://www.storyblok.com", description: "Headless CMS with visual editor; free Community tier.", category: "CMS" },
  
  // Code Quality
  { title: "Codacy", url: "https://www.codacy.com", description: "Automated code reviews; free for unlimited public/private repos.", category: "Code Quality" },
  { title: "CodeFactor", url: "https://www.codefactor.io", description: "Automated Code Review; free for unlimited users and one private repo.", category: "Code Quality" },
  { title: "SonarCloud", url: "https://sonarcloud.io", description: "Automated source code analysis; free for open source.", category: "Code Quality" },
  { title: "Codecov", url: "https://about.codecov.io", description: "Code coverage tool; free for open source and one private repo.", category: "Code Quality" },
  
  // CI/CD
  { title: "CircleCI", url: "https://circleci.com", description: "CI/CD service; free for 6000 minutes/month.", category: "CI and CD" },
  { title: "GitHub Actions", url: "https://github.com/features/actions", description: "3000 free CI/CD minutes per month.", category: "CI and CD" },
  { title: "Cirrus CI", url: "https://cirrus-ci.org", description: "CI pipeline; free for public GitHub repositories.", category: "CI and CD" },
  { title: "AppVeyor", url: "https://www.appveyor.com", description: "CD service for Windows; free for open source.", category: "CI and CD" },
  
  // Testing
  { title: "Cypress", url: "https://www.cypress.io", description: "Browser testing framework; free and open source.", category: "Testing" },
  { title: "Checkly", url: "https://checklyhq.com", description: "Synthetic monitoring; 10k check runs free per month.", category: "Testing" },
  { title: "Requestly", url: "https://requestly.io", description: "Intercept/mock HTTP requests; 10 rules free.", category: "Testing" },
  { title: "Katalon", url: "https://katalon.com", description: "Testing platform; free tier for Katalon Studio.", category: "Testing" },
  
  // Authentication
  { title: "Auth0", url: "https://auth0.com", description: "Hosted SSO; free plan includes 25,000 MAUs.", category: "Authentication, Authorization, and User Management" },
  { title: "Clerk", url: "https://clerk.com", description: "User management/auth; free up to 10,000 monthly active users.", category: "Authentication, Authorization, and User Management" },
  { title: "Stytch", url: "https://stytch.com", description: "Auth platform; 10,000 monthly active users free.", category: "Authentication, Authorization, and User Management" },
  { title: "SuperTokens", url: "https://supertokens.com", description: "Open source user auth; free for up to 5000 MAUs.", category: "Authentication, Authorization, and User Management" },
  { title: "Okta", url: "https://okta.com", description: "User management/auth; free for up to 100 MAUs.", category: "Authentication, Authorization, and User Management" },
  
  // Tools for Teams
  { title: "Discord", url: "https://discord.com", description: "Chat, voice, video for communities; free for unlimited users.", category: "Tools for Teams and Collaboration" },
  { title: "Slack", url: "https://slack.com", description: "Team collaboration; free for unlimited users with history limits.", category: "Tools for Teams and Collaboration" },
  { title: "Jitsi Meet", url: "https://meet.jit.si", description: "One-click free video conversations and screen sharing.", category: "Tools for Teams and Collaboration" },
  { title: "Notion", url: "https://notion.so", description: "All-in-one workspace for notes/projects; free for individuals.", category: "Tools for Teams and Collaboration" },
  { title: "Miro", url: "https://miro.com", description: "Collaborative whiteboard; free plan with limited boards.", category: "Tools for Teams and Collaboration" },
  
  // Databases
  { title: "MongoDB Atlas", url: "https://mongodb.com/cloud/atlas", description: "Free MongoDB database with 512MB storage.", category: "Managed Data Services" },
  { title: "Supabase", url: "https://supabase.com", description: "Free PostgreSQL database with realtime API.", category: "Managed Data Services" },
  
  // Hosting
  { title: "Vercel", url: "https://vercel.com", description: "Free Next.js and static site hosting.", category: "Web Hosting" },
  { title: "Netlify", url: "https://netlify.com", description: "Free static site hosting with 300 credits/month.", category: "Web Hosting" },
  { title: "GitHub Pages", url: "https://pages.github.com", description: "Free static site hosting for documentation.", category: "Web Hosting" },
  
  // Monitoring
  { title: "Datadog", url: "https://datadoghq.com", description: "Cloud monitoring; free for up to 5 nodes.", category: "Monitoring" },
  { title: "Grafana Cloud", url: "https://grafana.com", description: "Observability; free tier includes 10k metrics series.", category: "Monitoring" },
  { title: "New Relic", url: "https://newrelic.com", description: "Observability; 100GB/month data ingest free.", category: "Monitoring" },
  { title: "Instatus", url: "https://instatus.com", description: "Status page; free forever with unlimited subscribers.", category: "Monitoring" },
  { title: "Better Stack", url: "https://betterstack.com", description: "Uptime monitoring; 10 monitors free.", category: "Monitoring" },
  
  // Security
  { title: "Let's Encrypt", url: "https://letsencrypt.org", description: "Free SSL Certificate Authority.", category: "Security and PKI" },
  { title: "GitGuardian", url: "https://gitguardian.com", description: "Automated secrets detection; free for teams of 25 or less.", category: "Security and PKI" },
  { title: "Doppler", url: "https://doppler.com", description: "Universal Secrets Manager; free for 5 users.", category: "Security and PKI" },
  
  // Code Snippets & Search
  { title: "GitHub Gist", url: "https://gist.github.com", description: "Free code snippet sharing.", category: "Code Search and Browsing" },
  { title: "CodeKeep", url: "https://codekeep.io", description: "Organize/share code snippets with screenshot tool.", category: "Code Search and Browsing" },
  
  // Additional Essential Tools
  { title: "Figma", url: "https://figma.com", description: "Free design tool with unlimited files.", category: "Design and UI" },
  { title: "Google Fonts", url: "https://fonts.google.com", description: "1000+ free open-source fonts.", category: "Design and UI" },
  { title: "Cloudinary", url: "https://cloudinary.com", description: "Free image upload/optimization service.", category: "Storage and Media Processing" },
  { title: "Formspree", url: "https://formspree.io", description: "50 free form submissions per month.", category: "Forms" },
  { title: "Algolia", url: "https://algolia.com", description: "1M free records and 10k searches/month.", category: "Search" },
  { title: "FreeCodeCamp", url: "https://freecodecamp.org", description: "Free coding bootcamp with certifications.", category: "Education and Career Development" },
  { title: "The Odin Project", url: "https://theodinproject.com", description: "Free open-source web development curriculum.", category: "Education and Career Development" },
  { title: "LogRocket", url: "https://logrocket.com", description: "1k free session replays per month.", category: "Log Management" }
];
