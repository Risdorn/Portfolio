import avatar from '../assets/images/avatar.jpg';
import resume from '../assets/resume/IISc_Rishabh Indoria_MLAI_v2.pdf'
// import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://rishabh-indoria.netlify.app/',
    avatar: {
        src: avatar,
        alt: 'Rishabh Indoria'
    },
    title: 'Rishabh Indoria',
    subtitle: 'Building End-to-End AI Systems for Real-World Applications',
    description: 'ML/AI Engineer working on agentic systems, vision models, and production-grade machine learning pipelines.',
    image: {
        src: '/preview.jpg',
        alt: 'Rishabh Indoria - Portfolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Experience',
            href: '/experiences'
        },
        {
            text: 'Education',
            href: '/education'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Resume',
            href: resume,
            target: '_blank'
        }
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/rishabh-indoria-687929205/'
        },
        {
            text: 'Github',
            href: 'https://github.com/Risdorn'
        },
    ],
    hero: {
        title: 'Hi There!',
        text: "I'm **Rishabh Indoria**, an ML/AI Engineer passionate about building **end-to-end AI systems** for real-world applications.\nI specialize in designing, training, and deploying machine learning models, from data preprocessing and model optimization to production-ready pipelines.\nI enjoy experimenting with deep learning architectures, NLP, computer vision, and scalable AI solutions.\n\nFeel free to explore some of my AI projects on [GitHub](https://github.com/Risdorn) or connect with me on [LinkedIn](https://www.linkedin.com/in/rishabh-indoria-687929205/).",
        actions: [
            {
                text: 'Download Resume',
                href: resume,
                target: "_blank"
            },
            {
                text: 'Get in Touch',
                href: '/contact'
            },
        ]
    },
    // subscribe: {
    //     enabled: true,
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     form: {
    //         action: '#'
    //     }
    // },
    // postsPerPage: 8,
    projectsPerPage: 8,
};

export default siteConfig;
