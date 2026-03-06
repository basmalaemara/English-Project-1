// === PROJECT DATA ===
const projects = [
    {
        title: "MedTwin",
        emoji: "🏥",
        date: "2025",
        description: "A medical digital twin system using agentic orchestration and 3D clinical visualization for predictive health insights.",
        tags: ["Python", "AI", "Digital Twin", "Healthcare"],
        category: "ai",
        color: "#38bdf8"
    },
    {
        title: "Mohamy Masry",
        emoji: "⚖️",
        date: "2025",
        description: "An AI-powered legal assistant platform providing accessible legal guidance tailored to Egyptian law and citizens.",
        tags: ["NLP", "Python", "LLM", "Legal Tech"],
        category: "ai",
        color: "#818cf8"
    },
    {
        title: "Stock Market Prediction",
        emoji: "📈",
        date: "May 2025",
        description: "Achieved 83.66% accuracy predicting EGX direction using XGBoost, RF, and SVR. Applied PCA, feature scaling, and Stratified K-Fold validation.",
        tags: ["Python", "XGBoost", "ML", "Finance"],
        category: "ai",
        color: "#38bdf8"
    },
    {
        title: "EduFund Fintech App",
        emoji: "🎓",
        date: "May 2025",
        description: "Designed a platform comparing student loans from banks and fintechs. Pitched to EduGate and campus events with a complete go-to-market plan.",
        tags: ["Fintech", "Product Design", "Startup"],
        category: "fintech",
        color: "#34d399"
    },
    {
        title: "Gaming Platform Architecture",
        emoji: "🎮",
        date: "May 2025",
        description: "Used PostgreSQL, Redis, and Cassandra for real-time inventory, chat, and stats. Designed schemas supporting concurrent gameplay and analytics.",
        tags: ["PostgreSQL", "Redis", "Cassandra", "Big Data"],
        category: "data",
        color: "#f59e0b"
    },
    {
        title: "HR Data Warehouse & OLAP Cube",
        emoji: "📊",
        date: "Apr 2025",
        description: "Built a star schema with SSIS ETL pipelines and MDX OLAP cubes. Created Power BI dashboards for pay gap analysis, shift coverage, and KPIs.",
        tags: ["SQL", "SSIS", "Power BI", "OLAP"],
        category: "data",
        color: "#818cf8"
    },
    {
        title: "AI Tic Tac Toe",
        emoji: "🤖",
        date: "Dec 2024 – Jan 2025",
        description: "Built an unbeatable AI opponent using Minimax with memoization optimization. Developed a GUI interface using Python's Tkinter library.",
        tags: ["Python", "AI", "Minimax", "Tkinter"],
        category: "ai",
        color: "#38bdf8"
    },
    {
        title: "LMS System",
        emoji: "📋",
        date: "Oct 2024 – Jan 2025",
        description: "Gathered requirements, created UML diagrams (use case, class, sequence), and built a modular, extensible learning management system design.",
        tags: ["UML", "Software Engineering", "Design Patterns"],
        category: "se",
        color: "#818cf8"
    },
    {
        title: "Database Project",
        emoji: "🗄️",
        date: "Oct 2024 – Jan 2025",
        description: "Created a BCNF-normalized schema in MS SQL Server and built a Python GUI for full CRUD operations and report generation.",
        tags: ["SQL", "Python", "BCNF", "GUI"],
        category: "data",
        color: "#38bdf8"
    },
    {
        title: "Quotes Generator Chatbot",
        emoji: "💬",
        date: "Apr – May 2024",
        description: "Developed an interactive chatbot with mood-based quote logic using functional programming in Scala.",
        tags: ["Scala", "Chatbot", "Functional Programming"],
        category: "se",
        color: "#f59e0b"
    },
    {
        title: "Social Media Mental Health Study",
        emoji: "🧪",
        date: "Apr – May 2024",
        description: "Ran ANOVA, Chi-Square, and Pearson correlation on a university student survey to measure social media's impact on mental health.",
        tags: ["Data Analysis", "Statistics", "Python", "Research"],
        category: "data",
        color: "#34d399"
    },
    {
        title: "CustomEase AR Furniture Tool",
        emoji: "🪑",
        date: "Dec 2023 – Jan 2024",
        description: "Designed an AR tool allowing users to preview customized furniture in their own space using AI-driven recommendations.",
        tags: ["AR", "AI", "Entrepreneurship", "UX"],
        category: "ai",
        color: "#818cf8"
    },
    {
        title: "Student Management System",
        emoji: "🎒",
        date: "Nov – Dec 2023",
        description: "Built a BST for subject management and a sorted linked list for grade tracking, analysis, and GPA computation.",
        tags: ["C++", "Data Structures", "BST"],
        category: "se",
        color: "#38bdf8"
    },
];

// === RENDER PROJECTS ===
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    grid.innerHTML = '';
    filtered.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'neon-border rounded-2xl p-6 bg-card card-hover animate-on-scroll flex flex-col';
        card.style.transitionDelay = `${i * 0.05}s`;
        card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style="background: ${p.color}22;">${p.emoji}</div>
        <span class="text-xs text-slate-500 mt-1">${p.date}</span>
      </div>
      <h3 class="text-white font-bold text-lg mb-2">${p.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed flex-grow mb-4">${p.description}</p>
      <div class="flex flex-wrap gap-1">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;
        grid.appendChild(card);
        setTimeout(() => card.classList.add('visible'), 50 + i * 60);
    });
}

// === FILTER ===
function filterProjects(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isActive = btn.dataset.filter === filter;
        btn.style.background = isActive ? 'linear-gradient(90deg, #38bdf8, #818cf8)' : '';
        btn.style.color = isActive ? '#0f172a' : '#94a3b8';
        btn.style.border = isActive ? 'none' : '1px solid rgba(56,189,248,0.2)';
    });
    renderProjects(filter);
}

// === SCROLL ANIMATIONS ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

function observeElements() {
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// === MOBILE MENU ===
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// === NAVBAR SCROLL EFFECT ===
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.borderBottomColor = window.scrollY > 50 ? 'rgba(56,189,248,0.25)' : 'rgba(56,189,248,0.1)';
});

// === CONTACT FORM ===
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
        document.getElementById('contact-form').reset();
        document.getElementById('form-success').classList.remove('hidden');
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        setTimeout(() => document.getElementById('form-success').classList.add('hidden'), 4000);
    }, 1200);
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    filterProjects('all');
    setTimeout(observeElements, 100);

    // Apply saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.textContent = '☀️';
    }
});

// === THEME TOGGLE ===
function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    const icon = document.getElementById('theme-icon');
    icon.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
