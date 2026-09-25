import { profile } from './constants.js';

function applyProfileData() {
    document.title = `${profile.name} | Entry-Level Web Developer & IT Operator`;

    const updateText = (element, value) => {
        if (!element.matches('a')) {
            element.textContent = value;
            return;
        }

        const textNode = [...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (textNode) textNode.textContent = ` ${value}`;
    };

    document.querySelectorAll('[data-config="name"]').forEach(element => {
        updateText(element, profile.name.toUpperCase());
    });
    document.querySelectorAll('[data-config="location"]').forEach(element => {
        updateText(element, profile.location);
    });
    document.querySelectorAll('[data-config="email"]').forEach(element => {
        updateText(element, profile.email);
        if (element.matches('a')) element.href = `mailto:${profile.email}`;
    });
    document.querySelectorAll('[data-config="phone"]').forEach(element => {
        updateText(element, profile.phone);
        if (element.matches('a')) element.href = `tel:${profile.phone}`;
    });
    document.querySelectorAll('[data-config="github"]').forEach(element => {
        if (element.matches('a')) element.href = profile.github;
        if (element.dataset.configDisplay === 'url') updateText(element, profile.github.replace('https://', ''));
    });
    document.querySelectorAll('[data-config="linkedin"]').forEach(element => {
        if (element.matches('a')) element.href = profile.linkedin;
        if (element.dataset.configDisplay === 'url') updateText(element, profile.linkedin.replace('https://', ''));
    });
}

// Automatic Year update
function updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Dark Mode Logic
function initTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon-sun').classList.remove('hidden');
        document.getElementById('theme-icon-moon').classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-icon-sun').classList.add('hidden');
        document.getElementById('theme-icon-moon').classList.remove('hidden');
    }
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        document.getElementById('theme-icon-sun').classList.add('hidden');
        document.getElementById('theme-icon-moon').classList.remove('hidden');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        document.getElementById('theme-icon-sun').classList.remove('hidden');
        document.getElementById('theme-icon-moon').classList.add('hidden');
    }
}

// Skill Category Filter Logic
function filterSkills(category) {
    const cards = document.querySelectorAll('.skill-card');
    const buttons = document.querySelectorAll('.skill-filter-btn');

    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('bg-brand-600', 'text-white');
            btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('bg-brand-600', 'text-white');
            btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
            btn.setAttribute('aria-selected', 'false');
        }
    });

    cards.forEach(card => {
        card.style.display = category === 'all' || card.getAttribute('data-category') === category ? 'block' : 'none';
    });
}

// Mobile Menu Toggle Logic
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', !isExpanded);
}

// ATS Printable Modal Logic
function toggleAtsModal(show) {
    const modal = document.getElementById('ats-modal');
    if (show) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function printAtsResume() {
    const printableArea = document.getElementById('ats-printable-area');
    const printWindow = window.open('', '_blank', 'width=900,height=1200');

    if (!printWindow) {
        window.alert('Please allow pop-ups for this site to print the resume.');
        return;
    }

    printWindow.document.open();
    printWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${profile.name} - Resume</title>
    <style>
        @page { margin: 0.6in; }
        * { box-sizing: border-box; }
        body { margin: 0; color: #111; background: #fff; font-family: Arial, Helvetica, sans-serif; font-size: 11pt; line-height: 1.45; }
        .resume { max-width: 8in; margin: 0 auto; }
        h1 { margin: 0; font-size: 22pt; line-height: 1.2; }
        h2 { margin: 18pt 0 6pt; padding-bottom: 3pt; border-bottom: 1px solid #aaa; font-size: 11pt; text-transform: uppercase; }
        h3 { margin: 0; font-size: 11pt; }
        p { margin: 5pt 0; }
        ul { margin: 5pt 0; padding-left: 18pt; }
        li { margin: 2pt 0; }
        .resume-header { padding-bottom: 10pt; border-bottom: 1px solid #111; }
        .resume-header p { margin: 3pt 0; }
        .muted { color: #444; }
        .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24pt; }
        .avoid-break { break-inside: avoid; }
    </style>
</head>
<body>
    <main class="resume">${printableArea.innerHTML}</main>
</body>
</html>`);
    printWindow.document.close();
    printWindow.focus();
    let hasPrinted = false;
    const startPrint = () => {
        if (hasPrinted) return;
        hasPrinted = true;
        printWindow.print();
        printWindow.onafterprint = () => printWindow.close();
    };
    printWindow.onload = startPrint;
    window.setTimeout(startPrint, 300);
}

function loadPdfLibrary() {
    if (typeof window.html2pdf === 'function') return Promise.resolve();

    return new Promise((resolve, reject) => {
        const pdfScript = document.createElement('script');
        pdfScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        pdfScript.onload = resolve;
        pdfScript.onerror = reject;
        document.head.appendChild(pdfScript);
    });
}

async function saveAtsResumeAsPdf() {
    try {
        await loadPdfLibrary();
    } catch {
        window.alert('PDF export is unavailable. Please check your internet connection and try again.');
        return;
    }

    const source = document.getElementById('ats-printable-area');
    const exportArea = source.cloneNode(true);
    exportArea.removeAttribute('id');
    exportArea.style.width = '8in';
    exportArea.style.maxHeight = 'none';
    exportArea.style.overflow = 'visible';
    exportArea.style.padding = '0.35in';
    exportArea.style.background = '#fff';
    exportArea.style.color = '#111';
    exportArea.style.fontFamily = 'Arial, Helvetica, sans-serif';

    const exportHost = document.createElement('div');
    exportHost.style.position = 'fixed';
    exportHost.style.left = '-100000px';
    exportHost.style.top = '0';
    exportHost.style.width = '8in';
    exportHost.style.background = '#fff';
    exportHost.appendChild(exportArea);
    document.body.appendChild(exportHost);

    try {
        await window.html2pdf().set({
            margin: 0,
            filename: `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: '#fff' },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).from(exportArea).save();
    } finally {
        exportHost.remove();
    }
}

window.toggleDarkMode = toggleDarkMode;
window.filterSkills = filterSkills;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleAtsModal = toggleAtsModal;
window.printAtsResume = printAtsResume;
window.saveAtsResumeAsPdf = saveAtsResumeAsPdf;

window.addEventListener('click', function(event) {
    const modal = document.getElementById('ats-modal');
    if (event.target === modal) toggleAtsModal(false);
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') toggleAtsModal(false);
});

applyProfileData();
updateYear();
initTheme();
