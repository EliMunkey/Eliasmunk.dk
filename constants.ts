import { Job, Skill, Education, ContactInfo, Post } from './types';

export const CONTACT: ContactInfo = {
  phone: "+45 52 39 78 80",
  email: "elias.munk@gmail.com",
  linkedin: "www.linkedin.com/in/eliasmunk",
  location: "Vesterbro, Denmark"
};

export const ABOUT_TEXT = `I work at the intersection of AI, product, and go-to-market (GTM). 
At Danske Bank, I lead GenAI strategy and product work that helps teams turn “AI hype” into real outcomes: higher efficiency, better decisions, and more engaged employees. 
My background is unusual: I spent a decade as a creative product manager and actor leading complex creative productions. That trained me to lead under pressure, communicate clearly to any audience, and keep projects moving even when things are messy. I now use that same skillset to bring structure, clarity, and pace to AI initiatives in a large, regulated enterprise.`;

export const JOBS: Job[] = [
  {
    company: "Danske Bank",
    role: "Lead GenAI Strategist",
    period: "Jun 2025 - Present",
    location: "Copenhagen",
    description: "Leading efforts to bring AI and GenAI into how we think, plan, and operate – both in Group Strategic Steering and across the bank.",
    highlights: [
      "Focus on using AI and strategic insights to solve real problems.",
      "Supporting smarter decisions and organizational readiness."
    ]
  },
  {
    company: "Danske Bank",
    role: "AI Adoption Lead / Senior AI Adoption Lead",
    period: "May 2024 - Jun 2025",
    location: "Copenhagen",
    description: "Leading a small AI task force to enable transformation to over 900 employees in Group Risk Management.",
    highlights: [
      "Achieved 91% active usage in key groups across 900+ risk specialists.",
      "Delivered 30–80% efficiency gains on critical workflows.",
      "Driving cultural change by inspiring and educating teams on GenAI potential.",
      "Owning the AWS Sandbox environment to enable experimentation."
    ]
  },
  {
    company: "Diabetesforeningen",
    role: "Board Member",
    period: "May 2025 - Present",
    location: "Denmark",
    description: "Serving as a Board Member and diabetes ambassador, helping push for better health outcomes through technology and community."
  },
  {
    company: "Freelance",
    role: "AI Consultant & Business Development",
    period: "Sep 2023 - May 2024",
    location: "Hybrid",
    description: "Optimizing administrative and PR departments for clients using AI from A-Z.",
    highlights: [
      "Increased sales and reduced time spent on repetitive tasks by over 50%.",
      "Achieved a 300% increase in social media presence."
    ]
  },
  {
    company: "Freelance",
    role: "Creative Product Manager / Producer | Actor",
    period: "Jan 2011 - Jan 2024",
    location: "International",
    description: "Led end-to-end product development for 20+ creative productions - from idea & funding to delivery & launch.",
    highlights: [
      "Directed cross-functional teams of 40+ people.",
      "Produced one of the most-watched productions in Denmark.",
      "Negotiated funding, partnerships, and pitched concepts to investors."
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Strategy & Leadership",
    items: ["AI Strategy", "Business Transformation", "Innovation Management", "Stakeholder Management"]
  },
  {
    category: "Technical & Operations",
    items: ["GenAI Adoption", "Prompt Engineering", "AWS Sandbox Ownership", "Workflow Optimization"]
  },
  {
    category: "Creative",
    items: ["Product Discovery", "Storytelling", "Public Speaking", "Creative Production"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Copenhagen Business Academy",
    degree: "Project Management (Agile & Economy)",
    year: "2024"
  }
];

export const POSTS: Post[] = [
  {
    title: "Succeeding with AI",
    date: "Recent",
    content: `Friendly reminder: whatever model drops this week, and whatever the quality (looking at you Gemini 3!), a few things don’t change if your company wants to succeed with AI. You still need:

- Buy-in from the top (actually more like a big push)
- A strong culture that embraces change and feels safe
- Excellent talent that will challenge norms and be ready to pivot and tackle hard problems

- and most importantly: Agency.
The ability to take action, show initiative, and bring boldness to the table, without letting bureaucracy or other slow processes get in the way.`
  },
  {
    title: "The Agent Timeline",
    date: "Recent",
    content: `Think of a task that takes a human expert 1 hour. 
Now imagine an AI agent doing the same task roughly 90% faster and 90-96% cheaper. Let me explain:
 
Two fresh papers point in that direction:

- METR shows that the “time horizon” of frontier models – the length of tasks they can complete with a 50% success rate – has been doubling about every 7 months since 2019.

Today it sits over 2 hours of human work, and on that trajectory it reaches week-long software tasks within ~2 years.

- Wang et al. (Carnegie Mellon & Stanford) compare agents and professionals on 16 realistic computer tasks covering about 70% of daily activities in 287 occupations.

Humans still win on quality by a wide margin, but agents are on average 88% faster and over 90% cheaper on the same tasks.

🧭 Put together, this suggests a simple timeline:

- 2025: agents are fast but flawed, but useful as copilots.
- 2026–2027: for clearly specified, programmable work that fits in a few hours, agent quality likely becomes “good enough” that the speed and cost savings outweigh the messiness.
- 2028 and beyond: week-long projects start to be agent-first, human-supervised in parts of the business where the risk is acceptable.

The practical question for me is not “will agents replace jobs?”

 It is:

Which tasks in our workflows are already programmable enough that a fast, cheap, 80–90% solution is better than our current 100% human one - and how do we design the guardrails so we keep trust and control?`
  }
];