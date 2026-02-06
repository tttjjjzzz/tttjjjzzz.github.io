// Site Configuration and Data
const SITE_CONFIG = {
    // Personal Information
    personal: {
        name: "Tiger Zhou",
        fullName: "Tiger Zhou",
        title: "An Integrated Engineering Student at UBC, Specializing in Electrical Engineering",
        tagline: "As an avid learner, I'm passionate about leveraging my knowledge to solve real world engineering challenges. ",
        expertise: "My experiences span areas including embedded systems, power electronics, hardware verification, and firmware development",
        websitePurpose: "This website aims to showcase concrete examples of my work across various engineering projects. Included are past/current projects from work experiences, extracurricular initiatives, personal projects, and academic courses."
    },

    // Education Information
    education: {
        university: "The University of British Columbia",
        degree: "Bachelor of Applied Science",
        program: "Integrated Engineering (IGEN)",
        graduation: "May 2026"
    },

    // Social Media Links
    social: {
        github: "https://github.com/tttjjjzzz",
        linkedin: "https://www.linkedin.com/in/tiger-zhou-746893257/", // Update with real LinkedIn URL
        email: "jzhou345@outlook.com"
    },
    
    // About Section Content
    about: {
        welcome: 'W E L C O M E !',
        greeting: 'Hi, I am Tiger Zhou 👋',
        subtitle: 'An Integrated Engineering Student at UBC, Specializing in Electrical Engineering',
        paragraphs: [
            "As an avid learner, I'm passionate about leveraging my knowledge to solve real world engineering challenges.",
            "While I am eager to explore various fields in the industry, I am most drawn to the robotics and embedded systems sector",
            "My experiences span areas including embedded systems, power electronics, hardware verification, and firmware development",
            "This website aims to showcase concrete examples of my work across various engineering projects. Included are past/current projects from work experiences, extracurricular initiatives, personal projects, and academic courses."
        ]
    },
    
    // Resume Section Content
    resume: {
        education: {
            university: 'University of British Columbia',
            program: 'Integrated Engineering (Electrical & Computer)',
            graduation: 'Expected 2027'
        },
        location: {
            lines: [
                'Vancouver, British Columbia, Canada',
                'Beijing, China'
            ]
        },
        contact: {
            email: 'jzhou345@outlook.com',
            phones: [
                { country: 'CA', number: '+1 (778) 389 1124' },
                { country: 'CN', number: '+86 183 1117 9925' }
            ]
        },
        links: [
            { name: 'GitHub', url: 'https://github.com/tttjjjzzz', icon: 'github' },
            { name: 'LinkedIn', url: '#', icon: 'linkedin' }
        ]
    },
    
    // Contact Section Content
    contact: {
        heading: 'Lets Work Together!',
        description: "I'm always open to discussing new projects, innovative ideas, or opportunities. Let's Connect."
    },

    // Navigation Items
    navigation: [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" }
    ],

    // Professional Experience
    experience: [
        {
            id: "ubc-thunderbots",
            role: "Electrical Team Member",
            company: "UBC Thunderbots",
            location: "University of British Columbia",
            period: "Sep 2024 – Present",
                logo: "photos/logos/ubc_thunderbots_logo.jpg",
            responsibilities: [
                "Designed a CAN 2.0B hardware module to enable reliable communication between Raspberry Pi and motor drivers.",
                "Spearheaded a major PCB layout overhaul for a BLDC motor driver, incorporating a new current sensing architecture and on-board CAN communication to elevate control precision and network capability.",
                "Debugged and validated motor driver, power, and UI hardware using laboratory equipment such as oscilloscopes, logic analyzers, and multimeters to identify and resolve hardware issues.",
                "Develop and debug SPI communication and BLDC motor control C firmware for STSPIN32F0251 motor drivers."
            ]
        },
        {
            id: "consen-hw-verification",
            role: "Hardware Verification Engineer - Intern",
            company: "Consen Automation",
            location: "Beijing, China",
            period: "May 2025 – Aug 2025",
                logo: "photos/logos/consen_automation_logo.jpg",
            responsibilities: [
                "Developed and executed hardware verification procedures for 5+ communication module PCBAs, testing power, clock signals, logic and status lines, reset, ripple/noise levels, and timing performance; researched component characteristics to create robust test plans.",
                "Collaborated on building and configuring test environments to support hardware verification procedures, including simulating real load conditions for accurate and reliable testing.",
                "Supported environmental compliance testing (thermal shock, temperature cycling, and ESD) for multiple in-house communication module PCBs."
            ]
        },
        {
            id: "consen-hw-engineer",
            role: "Hardware Engineer - Intern",
            company: "Consen Automation",
            location: "Beijing, China",
            period: "May 2024 – Aug 2024",
                logo: "photos/logos/consen_automation_logo.jpg",
            responsibilities: [
                "Designed CAN-to-fiber communication module schematic and PCB using Cadence Allegro/OrCAD for industrial safety systems.",
                "Performed hardware bring-up and debugging across CAN, RS485, SPI, USART, and fiber optic interfaces.",
                "Conducted design verification and collaborated across teams to ensure compliance with functional requirements."
            ]
        }
        
    ],

    // Projects
    projects: [
        {
            id: "can-fiber-module",
            title: "CAN Bus to Fibre Optic Conversion Module",
            tools: "Cadence Allegro, OrCAD, Circuit Design, PCB Design, CAN Protocol",
            description: "Using Cadence software, collaborated on circuit and PCB design based on the design specifications, and conducted hardware verifiction to optimize PCB.",
            link: "projects/project-can-fiber.html"
        },
        {
            id: "comm-verification",
            title: "Communication Module Verification Procedures",
            tools: "Oscilloscope, Logic Analyzer, SMD/THT Soldering, Cadence Allegro, OrCad",
            description: "Designed and conducted hardware verification procedures based on parametric specifications to test power, clock, logic and status, reset, ripple and noise, and timing signals on various communication PCB modules.",
            link: "projects/project-comm-verification.html"
        },
        {
            id: "stirling-fridge",
            title: "Stirling Refrigerator for Vaccine Storage",
            tools: "Altium Designer, Circuit Design, PCB Design, ESP-32, C++,Python Scripting, Sensor Integration, LabJack, SMD/THT Soldering",
            description: "Designed, configured, and implemented multiple hardware and software/firmware components for a Stirling Refridgeration system. Enter this page to view all project components.",
            link: "projects/project-stirling-fridge.html"
        },
        {
            id: "bt-segway-robot",
            title: "Bluetooth-Controlled Segway Robot",
            tools: "KiCad, Circuit Design, PCB Design, STM32, Bluetooh 2.0, C, FreeRTOS",
            description: "Designing custom STM32-based PCB hardware and firmware for bluetooth-controlled SegWay robot, also with the goal of building foundational components to support future additions, such as obstacle detection and autonomous driving.",
            link: "projects/project-bt-segway.html"
        },
        {
            id: "can-2b-module",
            title: "CAN 2.0B Module",
            tools: "Altium Designer, Circuit Design, PCB Design, CAN Protocol",
            description: "Developed CAN 2.0B Module designed to interface with and test SPI to CAN communication migration for various motor drivers and a RaspberryPi Computer.",
            link: "projects/project-can-2b.html"
        },
        {
            id: "motordriver-v6-4",
            title: "MotorDriver V6.4 - UBC Thunderbots",
            tools: "Altium Designer, Circuit Design, PCB Design, Power Electronics, EMI&EMC",
            description: "Currently redesigning the BLDC motordriver for UBC Thunderbots student design team.",
            link: "projects/project-motordriver-v6-4.html"
        }
    ],

    // Assets
    assets: {
        resume: "documents/resume 2025-2026.pdf"
    },

    // Copyright
    copyright: "2026 Tiger Zhou"
};

// SVG Icons Library
const ICONS = {
    linkedin: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>`,
    
    github: `<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />`,
    
    email: `<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>`,
    
    smiley: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
    
    arrowDown: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>`
};
