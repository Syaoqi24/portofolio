import { content, pick } from './data.js';

// elemen teks yang bisa dilokalisasi: data-i berisi jalur ke data.js
const T = (tag, cls, path, lang) =>
  `<${tag} class="${cls}" data-i="${path}">${pick(path, lang)}</${tag}>`;

function renderExperience(lang) {
  const n = content.experience.length;
  document.getElementById('experience-list').innerHTML = content.experience.map((e, i) => `
  <div class="exp-item ${e.open ? 'open ' : ''}${i < n - 1 ? 'border-b border-line ' : ''}py-5 cursor-pointer">
    <div class="flex justify-between items-baseline gap-4 flex-wrap">
      <div>
        ${T('h3', 'text-[clamp(15px,2vw,18px)] font-semibold', `experience.${i}.title`, lang)}
        ${T('div', 'text-accent text-[13px] mt-1', `experience.${i}.org`, lang)}
      </div>
      ${T('div', 'font-mono text-xs text-inkdim whitespace-nowrap', `experience.${i}.period`, lang)}
    </div>
    <div class="exp-body">
      <ul class="pl-4 text-inkdim text-sm leading-relaxed list-disc">
        ${e.bullets.map((_, j) => T('li', '', `experience.${i}.bullets.${j}`, lang)).join('')}
      </ul>
    </div>
    ${T('div', 'font-mono text-xs text-inkdim mt-1.5', 'ui.clickDetails', lang)}
  </div>`).join('');
}

function renderProjects(lang) {
  const n = content.projects.length;
  document.getElementById('projects-list').innerHTML = content.projects.map((p, i) => `
  <div class="proj-card ${i < n - 1 ? 'border-b border-line ' : ''}py-6 transition-[padding]" data-tags="${p.tags}">
    ${T('h3', 'text-[clamp(16px,2.2vw,19px)] font-semibold mb-2', `projects.${i}.title`, lang)}
    ${T('p', 'text-inkdim text-sm leading-relaxed mb-3.5', `projects.${i}.desc`, lang)}
    <div class="mb-1">${p.stack.map((s) => `<span class="font-mono text-[11px] text-accent border border-line px-2 py-1 rounded mr-1.5 inline-block mb-1.5">${s}</span>`).join('')}</div>
    ${p.links.map((l, j) => `<a class="text-[13px] text-inkdim hover:text-accent transition mt-2 mr-4 inline-block" href="${l.href}" target="_blank" rel="noopener" data-i="projects.${i}.links.${j}.label">${pick(`projects.${i}.links.${j}.label`, lang)}</a>`).join('')}
  </div>`).join('');
}

function renderSkills(lang) {
  document.getElementById('skills-grid').innerHTML = ['daily', 'built', 'learning'].map((tier) => `
  <div class="skill-group border-l-2 border-line pl-[18px]">
    ${T('h4', 'font-mono text-accent text-[13px] tracking-wide', `skillTiers.${tier}.label`, lang)}
    ${T('p', 'text-inkdim text-xs mt-1 mb-4', `skillTiers.${tier}.hint`, lang)}
    <ul class="space-y-3.5">
      ${content.skills.map((s, i) => (s.tier === tier ? `
      <li>
        <div class="text-sm font-medium">${s.name}</div>
        ${T('div', 'text-xs text-inkdim mt-0.5 leading-relaxed', `skills.${i}.proof`, lang)}
      </li>` : '')).join('')}
    </ul>
  </div>`).join('');
}

function renderCerts(lang) {
  const n = content.certs.length;
  document.getElementById('certs-items').innerHTML = content.certs.map((c, i) => `
  <div class="cert-item ${i < n - 1 ? 'border-b border-line ' : ''}py-3.5" data-cert-tags="${c.tags}">
    <div class="flex justify-between gap-3 flex-wrap">
      <h4 class="text-sm font-medium">${c.title}</h4>
      ${T('span', 'font-mono text-[11px] text-inkdim whitespace-nowrap', `certs.${i}.date`, lang)}
    </div>
    ${T('div', 'text-xs text-inkdim mt-1', `certs.${i}.issuer`, lang)}
  </div>`).join('');
}

export function renderAll(lang = 'en') {
  renderExperience(lang);
  renderProjects(lang);
  renderSkills(lang);
  renderCerts(lang);
}