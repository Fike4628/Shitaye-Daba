/* ============================================
   Shitaye Daba — Portfolio
   Script: Language, theme, nav, animations, form
   ============================================ */

(function () {
    "use strict";

    /* ============================================
       TRANSLATIONS
       ============================================ */
    const translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.services": "Services",
            "nav.projects": "Projects",
            "nav.education": "Education",
            "nav.contact": "Contact",

            "hero.greeting": "Hi, I'm",
            "hero.title": "Front-End Developer",
            "hero.description": "I am a third-year Computer Science student at Wolaita Sodo University. I enjoy creating modern, responsive, and user-friendly websites.",
            "hero.viewWork": "View My Work",
            "hero.contactMe": "Contact Me",
            "hero.scroll": "Scroll",

            "about.tag": "Get to know me",
            "about.title": "About Me",
            "about.role": "Front-End Developer & CS Student",
            "about.p1": "I am Shitaye Daba, a passionate front-end developer and a third-year Computer Science student at Wolaita Sodo University. I specialize in building clean, responsive, and accessible web interfaces using HTML, CSS, and JavaScript.",
            "about.p2": "I love turning ideas into real, functional products on the web. I focus on writing clean code, creating intuitive user experiences, and continuously learning new technologies to improve my craft.",
            "about.name": "Name",
            "about.email": "Email",
            "about.location": "Location",
            "about.locationValue": "Wolaita Sodo, Ethiopia",
            "about.letsTalk": "Let's Talk",
            "about.yearsText": "Years Coding",

            "skills.tag": "What I know",
            "skills.title": "My Skills",
            "skills.responsive": "Responsive Design",
            "skills.responsiveText": "Mobile-first layouts that look great on any device.",
            "skills.uiux": "UI / UX Design",
            "skills.uiuxText": "Clean interfaces with thoughtful user experiences.",
            "skills.performance": "Performance",
            "skills.performanceText": "Fast-loading, optimized websites and applications.",
            "skills.accessibility": "Accessibility",
            "skills.accessibilityText": "Inclusive websites usable by everyone, everywhere.",

            "services.tag": "What I offer",
            "services.title": "My Services",
            "services.s1.title": "Web Design",
            "services.s1.text": "Creating visually appealing and modern website designs that reflect your brand and engage your audience.",
            "services.s2.title": "Front-End Development",
            "services.s2.text": "Building fast, interactive, and maintainable user interfaces with HTML, CSS, and JavaScript.",
            "services.s3.title": "Responsive Design",
            "services.s3.text": "Ensuring your website looks and works perfectly on mobile phones, tablets, and desktops.",
            "services.s4.title": "Website Maintenance",
            "services.s4.text": "Updating, fixing, and improving existing websites to keep them secure, fast, and up to date.",

            "projects.tag": "My future projects",
            "projects.title": "My Future Projects",
            "projects.p1.title": "Agro Market",
            "projects.p1.text": "The Agro Market Management System is a web-based platform that connects farmers and buyers directly, allowing farmers to list products and customers to browse and purchase them efficiently.",
            "projects.p2.title": "E-Learning Platform",
            "projects.p2.text": "An online learning platform that offers courses, video lessons, and quizzes, helping students learn at their own pace from anywhere.",
            "projects.p3.title": "Personal Portfolio",
            "projects.p3.text": "Personal Portfolio – Shitaye Daba. A modern, responsive portfolio featuring a dark-blue design, glowing effects, technical skills, projects, and contact information.",

            "education.tag": "My background",
            "education.title": "Education",
            "education.e1.date": "2022 — Present",
            "education.e1.degree": "BSc in Computer Science",
            "education.e1.school": "Wolaita Sodo University",
            "education.e1.detail": "Currently a third-year student focusing on web development, algorithms, and software engineering principles.",
            "education.e2.date": "2020 — 2022",
            "education.e2.degree": "High School Certificate",
            "education.e2.school": "Secondary School",
            "education.e2.detail": "Completed secondary education with a focus on natural sciences and mathematics.",
            "education.e3.date": "Ongoing",
            "education.e3.degree": "Self-Taught Web Development",
            "education.e3.school": "Online Courses & Practice",
            "education.e3.detail": "Continuously learning through online tutorials, documentation, and building real-world projects.",

            "contact.tag": "Get in touch",
            "contact.title": "Contact Me",
            "contact.subtitle": "Let's create something great together",
            "contact.text": "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
            "contact.emailLabel": "Email",
            "contact.locationLabel": "Location",
            "contact.locationValue": "Wolaita Sodo, Ethiopia",
            "contact.followMe": "Follow Me",
            "contact.namePlaceholder": "Your Name",
            "contact.emailPlaceholder": "Your Email",
            "contact.subjectPlaceholder": "Subject",
            "contact.messagePlaceholder": "Your Message",
            "contact.nameError": "Please enter your name",
            "contact.emailError": "Please enter a valid email",
            "contact.subjectError": "Please enter a subject",
            "contact.messageError": "Please enter your message",
            "contact.send": "Send Message",
            "contact.success": "Thank you! Your message has been sent successfully.",

            "footer.madeWith": "Made with",
            "footer.by": "by Shitaye Daba"
        },

        am: {
            "nav.home": "መነሻ",
            "nav.about": "ስለ እኔ",
            "nav.skills": "ችሎታዎች",
            "nav.services": "አገልግሎቶች",
            "nav.projects": "ፕሮጀክቶች",
            "nav.education": "ትምህርት",
            "nav.contact": "አግኙን",

            "hero.greeting": "ሰላም፣ እኔ",
            "hero.title": "የፊት-መጨረሻ ገንቢ",
            "hero.description": "በዎላይታ ሶዶ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ተማሪ በሶስተኛ ዓመት ነኝ። ዘመናዊ፣ ለስልስል መልስ የሚሰጥ እና ለተጠቃሚ ምቾት የሆኑ ድረ-ገጾችን ማንደፍ እወዳለሁ።",
            "hero.viewWork": "ስራዬን ይዩ",
            "hero.contactMe": "ያግኙን",
            "hero.scroll": "ወደታች",

            "about.tag": "ስለ እኔ ይወቁ",
            "about.title": "ስለ እኔ",
            "about.role": "የፊት-መጨረሻ ገንቢ እና የሲኤስ ተማሪ",
            "about.p1": "እኔ ሽጣዬ ዳባ ነኝ፣ እንቅስቃሴ ያለው የፊት-መጨረሻ ገንቢ እና በዎላይታ ሶዶ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ተማሪ በሶስተኛ ዓመት ነኝ። HTML፣ CSS እና JavaScript በመጠቀም ንፁህ፣ ለስልስል መልስ የሚሰጥ እና ለሁሉም ሰው የሚደረስ የድረ-ገጽ በይነገጾችን ለመገንባት እስፔሻላይዝ አደርጋለሁ።",
            "about.p2": "ሃሳቦችን ወደ እውነተኛ እና ተግባራዊ ምርቶች ለመቀየር እወዳለሁ። ንፁህ ኮድ በመጻፍ፣ ግልጽ የተጠቃሚ ልምዶችን በመፍጠር፣ እና ክህሎቴን ለማሳደግ አዳዲስ ቴክኖሎጂዎችን በመማር ላይ እያለሁ።",
            "about.name": "ስም",
            "about.email": "ኢሜይል",
            "about.location": "አካባቢ",
            "about.locationValue": "ዎላይታ ሶዶ፣ ኢትዮጵያ",
            "about.letsTalk": "እንነጋገር",
            "about.yearsText": "የኮዲንግ ዓመታት",

            "skills.tag": "የማውቀው ነገር",
            "skills.title": "ችሎታዎቼ",
            "skills.responsive": "ለስልስል መልስ የሚሰጥ ዲዛይን",
            "skills.responsiveText": "በማንኛውም መሳሪያ ላይ የሚያምር የሞባይል-ፊርስት አቀማመጥ።",
            "skills.uiux": "UI / UX ዲዛይን",
            "skills.uiuxText": "ከአስተማማኝ የተጠቃሚ ልምድ ጋር የሚቀርቡ ንፁህ በይነገጾች።",
            "skills.performance": "አፈጻጸም",
            "skills.performanceText": "ቶሎ የሚከፈቱ፣ ተመጣጣኝ ድረ-ገጾች እና መተግበሪያዎች።",
            "skills.accessibility": "ተደራሽነት",
            "skills.accessibilityText": "ሁሉም ሰው ሁልጊዜ መጠቀም የሚችላቸው አካባቢዎችን የሚያካትቱ ድረ-ገጾች።",

            "services.tag": "የምሰጣቸው አገልግሎቶች",
            "services.title": "አገልግሎቶቼ",
            "services.s1.title": "የድረ-ገጽ ዲዛይን",
            "services.s1.text": "የእርስዎን ብራንድ የሚያንፀባርቅ እና ተመልካችዎችን የሚማርክ ዘመናዊ እና ማራኪ የድረ-ገጽ ዲዛይኖችን መንደፍ።",
            "services.s2.title": "የፊት-መጨረሻ ልማት",
            "services.s2.text": "በ HTML፣ CSS እና JavaScript ፈጣን፣ መስተጋብሬሽን እና ቀልጣፋ የተጠቃሚ በይነገጾችን መገንባት።",
            "services.s3.title": "ለስልስል መልስ የሚሰጥ ዲዛይን",
            "services.s3.text": "ድረ-ገጽዎ በሞባይል፣ ታብሌት እና ዴስክቶፕ ላይ በትክክል መስራቱን ማረጋገጥ።",
            "services.s4.title": "የድረ-ገጽ ጥገና",
            "services.s4.text": "ወቅታዊ ለማድረግ፣ ለማስተካከል እና ለማሻሻል አስቀድሞ ያሉ ድረ-ገጾችን ለመጠበቅ ጥገና ማድረግ።",

            "projects.tag": "የወደፊት ፕሮጀክቶቼ",
            "projects.title": "የወደፊት ፕሮጀክቶቼ",
            "projects.p1.title": "አግሮ ገበያ",
            "projects.p1.text": "የአግሮ ገበያ አስተዳደር ስርዓት ገበሬዎችን እና ገዢዎችን በቀጥታ የሚያገናኝ የድረ-ገጽ መድረክ ሲሆን፣ ገበሬዎች ምርቶችን ለመዘረዘር እና ደንበኞች በቀልጣፋ ለመፈለግ እና ለመግዛት ያስችላል።",
            "projects.p2.title": "የኤ-ትምህርት መድረክ",
            "projects.p2.text": "በመስመር ላይ የሚሰጥ የመማር መድረክ ሲሆን ኮርሶችን፣ የቪዲዮ ትምህርቶችን እና ጥያቄዎችን ይዞል፣ ተማሪዎች በራሳቸው ፍጥነት ከየቦታውም እንዲማሩ ይረዳል።",
            "projects.p3.title": "የግል ፖርትፎሊዮ",
            "projects.p3.text": "የግል ፖርትፎሊዮ – ሽጣዬ ዳባ። ጥቁር-ሰማያዊ ዲዛይን፣ የሚያብረቀርቁ ተፅዕኖዎች፣ ቴክኒካዊ ክህሎቶች፣ ፕሮጀክቶች እና የደምጽ መረጃ ያካተተ ዘመናዊ ሬስፖንሲቭ ፖርትፎሊዮ።",

            "education.tag": "የእኔ ዳራ",
            "education.title": "ትምህርት",
            "education.e1.date": "2022 — አሁን",
            "education.e1.degree": "በኮምፒውተር ሳይንስ ባችለር",
            "education.e1.school": "ዎላይታ ሶዶ ዩኒቨርሲቲ",
            "education.e1.detail": "በሶስተኛ ዓመት ተማሪነት የድረ-ገጽ ልማት፣ አልጎሪዝም እና የሶፍትዌር ምህንድስና መርሐ ግብሮች ላይ ትኩረት አድርጌ ነው።",
            "education.e2.date": "2020 — 2022",
            "education.e2.degree": "የሁለተኛ ደረጃ ምዝገባ",
            "education.e2.school": "ሁለተኛ ደረጃ ትምህርት ቤት",
            "education.e2.detail": "በተፈጥሮ ሳይንስ እና ሂሳብ ላይ ትኩረት በማድረግ ሁለተኛ ደረጃ ትምህርት ተጠናቅቂያለሁ።",
            "education.e3.date": "በመቀጠል ላይ",
            "education.e3.degree": "ራስን የማስተማር የድረ-ገጽ ልማት",
            "education.e3.school": "የመስመር ላይ ኮርሶች እና ልምምድ",
            "education.e3.detail": "በመስመር ላይ አጋዥ ስልጠናዎች፣ ዶክመንቴሽን እና እውነተኛ ፕሮጀክቶችን በመገንባት በመቀጠል ላይ ነኝ።",

            "contact.tag": "አግኙን",
            "contact.title": "አግኙን",
            "contact.subtitle": "አብረን በሪያል ነገር እንፍጠር",
            "contact.text": "ፕሮጀክት አለዎት ወይስ መተባበር ይፈልጋሉ? በነፃነት ያግኙን። ለአዲስ እድሎች ሁልጊዜ ዝግጁ ነኝ።",
            "contact.emailLabel": "ኢሜይል",
            "contact.locationLabel": "አካባቢ",
            "contact.locationValue": "ዎላይታ ሶዶ፣ ኢትዮጵያ",
            "contact.followMe": "ተከታተሉኝ",
            "contact.namePlaceholder": "ስምዎ",
            "contact.emailPlaceholder": "ኢሜይልዎ",
            "contact.subjectPlaceholder": "ጉዳዩ",
            "contact.messagePlaceholder": "መልዕክትዎ",
            "contact.nameError": "እባክዎ ስምዎን ያስገቡ",
            "contact.emailError": "እባክዎ ትክክለኛ ኢሜይል ያስገቡ",
            "contact.subjectError": "እባክዎ ጉዳዩን ያስገቡ",
            "contact.messageError": "እባክዎ መልዕክትዎን ያስገቡ",
            "contact.send": "መልዕክት ላክ",
            "contact.success": "እናመሰግናለን! መልዕክትዎ በተሳካ ሁኔታ ተልኳል።",

            "footer.madeWith": "ተሰራው በ",
            "footer.by": "በ ሽጣዬ ዳባ"
        }
    };

    /* ============================================
       STATE & STORAGE
       ============================================ */
    const STORAGE_KEYS = {
        lang: "shitaye_lang",
        theme: "shitaye_theme"
    };

    let currentLang = localStorage.getItem(STORAGE_KEYS.lang) || "en";

    /* ============================================
       LANGUAGE SWITCHING
       ============================================ */
    function applyLanguage(lang) {
        const dict = translations[lang] || translations.en;
        currentLang = lang;

        // Text content via data-i18n
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // Placeholders via data-i18n-placeholder
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // Update <html lang>
        const langCode = { en: "en", am: "am" }[lang] || "en";
        document.documentElement.setAttribute("lang", langCode);

        // Update body class for font switching
        document.body.className = document.body.className
            .replace(/\blang-\w+/g, "")
            .trim();
        if (lang !== "en") {
            document.body.classList.add("lang-" + lang);
        }

        // Update language dropdown(s) selected value
        document.querySelectorAll(".lang-select").forEach(function (sel) {
            sel.value = lang;
        });

        // Persist
        localStorage.setItem(STORAGE_KEYS.lang, lang);
    }

    /* ============================================
       THEME (Dark / Light)
       ============================================ */
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(STORAGE_KEYS.theme, theme);
    }

    function initTheme() {
        const saved = localStorage.getItem(STORAGE_KEYS.theme);
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(saved || (prefersDark ? "dark" : "light"));
    }

    /* ============================================
       MOBILE NAVIGATION
       ============================================ */
    function initMobileNav() {
        const toggle = document.getElementById("navToggle");
        const menu = document.getElementById("navMenu");

        if (!toggle || !menu) return;

        toggle.addEventListener("click", function () {
            const isActive = menu.classList.toggle("active");
            toggle.classList.toggle("active", isActive);
            toggle.setAttribute("aria-expanded", String(isActive));
            document.body.style.overflow = isActive ? "hidden" : "";
        });

        // Close on link click
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("active");
                toggle.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
                document.body.style.overflow = "";
            });
        });

        // Close when clicking outside
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains("active")) {
                menu.classList.remove("active");
                toggle.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
                document.body.style.overflow = "";
            }
        });

        // Reset on resize to desktop
        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                menu.classList.remove("active");
                toggle.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
                document.body.style.overflow = "";
            }
        });
    }

    /* ============================================
       SMOOTH SCROLL (native + offset fallback)
       ============================================ */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href");
                if (targetId === "#" || targetId.length < 2) return;
                const target = document.querySelector(targetId);
                if (!target) return;
                e.preventDefault();
                const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 74;
                const top = target.getBoundingClientRect().top + window.pageYOffset - headerH + 2;
                window.scrollTo({ top: top, behavior: "smooth" });
            });
        });
    }

    /* ============================================
       SCROLL EFFECTS: header, back-top, progress,
       active nav link, skill bars, reveal
       ============================================ */
    function initScrollEffects() {
        const header = document.getElementById("header");
        const backTop = document.getElementById("backTop");
        const progressBar = document.getElementById("scrollProgress");
        const navLinks = document.querySelectorAll(".nav__link");
        const sections = document.querySelectorAll("section[id]");

        let ticking = false;

        function onScroll() {
            const scrollY = window.pageYOffset;
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPct = docH > 0 ? (scrollY / docH) * 100 : 0;

            // Progress bar
            if (progressBar) progressBar.style.width = scrollPct + "%";

            // Header shadow
            if (header) header.classList.toggle("scrolled", scrollY > 20);

            // Back to top
            if (backTop) backTop.classList.toggle("show", scrollY > 500);

            // Active nav link
            let current = "";
            sections.forEach(function (sec) {
                const top = sec.offsetTop - 120;
                if (scrollY >= top) current = sec.getAttribute("id");
            });
            navLinks.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + current);
            });

            ticking = false;
        }

        window.addEventListener("scroll", function () {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        }, { passive: true });

        onScroll();

        // Back to top click
        if (backTop) {
            backTop.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    }

    /* ============================================
       CONTACT FORM VALIDATION
       ============================================ */
    function initContactForm() {
        const form = document.getElementById("contactForm");
        if (!form) return;

        const fields = {
            name: { el: document.getElementById("name"), err: document.getElementById("nameError") },
            email: { el: document.getElementById("email"), err: document.getElementById("emailError") },
            subject: { el: document.getElementById("subject"), err: document.getElementById("subjectError") },
            message: { el: document.getElementById("message"), err: document.getElementById("messageError") }
        };

        function showError(field, show) {
            if (!field.el || !field.err) return;
            field.el.classList.toggle("invalid", show);
            field.err.classList.toggle("show", show);
        }

        function validateField(key) {
            const field = fields[key];
            if (!field.el) return true;
            const val = field.el.value.trim();

            if (key === "email") {
                const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const valid = emailRe.test(val);
                showError(field, !valid);
                return valid;
            }

            const valid = val.length > 0;
            showError(field, !valid);
            return valid;
        }

        // Real-time validation on blur
        Object.keys(fields).forEach(function (key) {
            const field = fields[key];
            if (field.el) {
                field.el.addEventListener("blur", function () { validateField(key); });
                field.el.addEventListener("input", function () {
                    if (field.el.classList.contains("invalid")) validateField(key);
                });
            }
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let allValid = true;
            Object.keys(fields).forEach(function (key) {
                if (!validateField(key)) allValid = false;
            });

            if (allValid) {
                const successMsg = document.getElementById("formSuccess");
                if (successMsg) {
                    successMsg.classList.add("show");
                    // Update success text for current language
                    const dict = translations[currentLang] || translations.en;
                    successMsg.textContent = dict["contact.success"];
                    setTimeout(function () { successMsg.classList.remove("show"); }, 5000);
                }
                form.reset();

                // Clear any invalid states
                Object.keys(fields).forEach(function (key) {
                    showError(fields[key], false);
                });
            }
        });
    }

    /* ============================================
       HEADER / NAV (language buttons + theme toggle)
       ============================================ */
    function initControls() {
        // Language dropdown(s)
        document.querySelectorAll(".lang-select").forEach(function (sel) {
            sel.addEventListener("change", function () {
                const lang = this.value;
                if (lang && translations[lang]) applyLanguage(lang);
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", function () {
                const current = document.documentElement.getAttribute("data-theme");
                applyTheme(current === "dark" ? "light" : "dark");
            });
        }

        // Current year in footer
        const yearEl = document.getElementById("currentYear");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    /* ============================================
       INIT
       ============================================ */
    document.addEventListener("DOMContentLoaded", function () {
        initTheme();
        applyLanguage(currentLang);
        initControls();
        initMobileNav();
        initSmoothScroll();
        initScrollEffects();
        initContactForm();
    });
})();
