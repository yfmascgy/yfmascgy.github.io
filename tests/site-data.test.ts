import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  awards,
  committeeService,
  conferenceTalks,
  keynotes,
  mediaCoverage,
  navigation,
  patents,
  profile,
  publications,
  updates,
} from '../src/data/site';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));

describe('portfolio content', () => {
  it('uses the current Uber title and team responsibilities verbatim', () => {
    expect(profile.currentRole).toBe('Sr. Engineering Manager');
    expect(profile.leadership).toBe('I lead Uber’s Mobile & Edge Networking organization.');
    expect(profile.networkCharter).toContain('reliable, fast, cost-efficient, secure, and multi-cloud ready');
    expect(profile.edgeScope).toContain('manages all Layer 7 traffic into Uber');
    expect(profile.edgeScope).toContain('manages Uber’s global DNS infrastructure');
    expect(profile.edgeScope).toContain('anti-DDoS infrastructure');
    expect(profile.edgeScope).toContain('network security');
    expect(profile.edgeFocus).toBe('Managing Layer 7 traffic into Uber, Uber’s global DNS infrastructure, anti-DDoS infrastructure, and network security across mobile and web.');
    expect(profile.mobileScope).toBe('The Mobile Networking team owns the mobile networking stack, libraries, and observability infrastructure across all Uber apps on iOS and Android.');
    expect(profile.autonomousVehicleScope).toBe('The Autonomous Vehicle Networking team enables reliable vehicle-to-cloud connectivity for autonomous vehicles.');
    expect(profile.xlinkImpact).toBe('XLINK deployed the Multipath QUIC protocol to Taobao at scale.');
    expect(profile.ietfImpact).toBe('I am also one of the authors of the IETF Multipath QUIC protocol.');
  });

  it('retains the complete selected research archive', () => {
    expect(publications).toHaveLength(14);
    expect(new Set(publications.map(({ title }) => title)).size).toBe(publications.length);
    expect(publications.some(({ title }) => title.startsWith('Cellfusion'))).toBe(true);
    expect(publications.some(({ title }) => title.startsWith('Enabling Deep-Tissue'))).toBe(true);
  });

  it('keeps publications in reverse chronological order', () => {
    const years = publications.map(({ year }) => year);
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });

  it('features XLINK instead of XRON in the homepage research selection', () => {
    const featuredTitles = publications
      .filter(({ featured }) => featured)
      .slice(0, 3)
      .map(({ title }) => title);
    const xlink = publications.find(({ title }) => title.startsWith('XLINK'));

    expect(featuredTitles).toEqual([
      expect.stringMatching(/^Cellfusion/),
      expect.stringMatching(/^GSO-Simulcast/),
      expect.stringMatching(/^XLINK/),
    ]);
    expect(featuredTitles.some((title) => title.startsWith('XRON'))).toBe(false);
    expect(xlink?.description).toContain('authors of the IETF Multipath QUIC protocol');
  });

  it('points every local publication link to an existing public asset', async () => {
    const localLinks = publications.flatMap(({ href }) => href?.startsWith('/') ? [href] : []);
    await Promise.all(localLinks.map((href) => access(`${projectRoot}/public${href}`)));
  });

  it('preserves talks, patents, awards, and updates', () => {
    expect(keynotes).toHaveLength(4);
    expect(conferenceTalks).toHaveLength(6);
    expect(patents).toHaveLength(8);
    expect(awards).toHaveLength(9);
    expect(awards[0]).toEqual({
      year: 2025,
      title: 'Uber Reimagine Award Finalist',
      detail: 'Contributions & leadership in building multi-layer anti-DDoS infrastructure for Uber',
    });
    expect(updates.length).toBeGreaterThanOrEqual(15);
  });

  it('publishes the complete committee service history in reverse chronological order', () => {
    expect(committeeService.map(({ organization, role, year }) => `${organization} ${role} ${year}`)).toEqual([
      'USENIX NSDI Technical Program Committee 2027',
      'ACM MobiCom Technical Program Committee 2025',
      'ACM SIGCOMM Technical Program Committee 2024',
      'ACM HotMobile Technical Program Committee 2024',
      'IEEE GlobeCom Technical Program Committee 2021',
      'IEEE INFOCOM Technical Program Committee 2020',
      'IEEE INFOCOM Technical Program Committee 2019',
      'ACM CoNEXT Technical Program Committee 2018',
      'ACM MobiCom Workshop Technical Program Committee 2018',
      'ACM Mobisys Workshop Technical Program Committee 2018',
    ]);
  });

  it('publishes a curated set of linked media coverage without duplicate outlets', () => {
    expect(mediaCoverage).toHaveLength(12);
    expect(new Set(mediaCoverage.map(({ outlet }) => outlet)).size).toBe(mediaCoverage.length);
    expect(mediaCoverage.map(({ outlet }) => outlet)).toEqual(expect.arrayContaining([
      'CBS This Morning',
      'The Verge',
      'IEEE Spectrum',
      'MIT News',
      'MIT Technology Review',
      'Engadget',
      'RFID Journal',
    ]));
    expect(mediaCoverage.every(({ href }) => href.startsWith('https://'))).toBe(true);
    expect(new Set(mediaCoverage.map(({ project }) => project))).toEqual(new Set(['RFIQ', 'IVN', 'RFly', 'TurboTrack']));
  });

  it('links the June 2026 full CV revision', async () => {
    const cv = await readFile(`${projectRoot}/public/Yunfei_CV.pdf`);
    expect(cv).toHaveLength(100941);
    expect(createHash('sha256').update(cv).digest('hex')).toBe('a3b10b152d78158d433c205003a289e02d8e09c62210a6eff61af11de16c4cb2');
  });

  it('keeps update years in reverse chronological order', () => {
    const years = updates.map(({ year }) => year);
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });

  it('highlights committee service, SIGCOMM papers, and Multipath QUIC standardization', () => {
    const milestoneTitles = updates.map(({ title }) => title);

    expect(updates[0]).toEqual({
      year: 2026,
      title: 'Served on the USENIX NSDI 2027 Technical Program Committee.',
    });
    expect(milestoneTitles).toContain('Served on the ACM MobiCom 2025 Technical Program Committee.');
    expect(milestoneTitles).toContain('Cellfusion, a production vehicle-to-cloud video streaming system, was accepted to ACM SIGCOMM 2023.');
    expect(milestoneTitles).toContain('GSO-Simulcast, our global stream orchestration system deployed in DingTalk, was accepted to ACM SIGCOMM 2022.');
    expect(milestoneTitles).toContain('XLINK, our production Multipath QUIC transport deployed across Alibaba video services, was accepted to ACM SIGCOMM 2021.');
    expect(milestoneTitles).toContain('The IETF QUIC Working Group adopted the Multipath QUIC draft, advancing the protocol toward standardization.');
    expect(milestoneTitles.some((title) => title.includes('Cellfusion and XRON'))).toBe(false);
  });

  it('styles both profile images with thin, light round boundaries', async () => {
    const styles = await readFile(`${projectRoot}/src/styles/global.css`, 'utf8');
    expect(styles).toMatch(/\.portrait-frame,\s*\.about-portrait\s*\{[^}]*aspect-ratio:\s*1/s);
    expect(styles).toMatch(/\.portrait-frame,\s*\.about-portrait\s*\{[^}]*padding:\s*5px/s);
    expect(styles).toMatch(/\.portrait-frame,\s*\.about-portrait\s*\{[^}]*border:\s*1px solid rgba\(14, 143, 114, 0\.28\)/s);
    expect(styles).toMatch(/\.portrait-frame,\s*\.about-portrait\s*\{[^}]*border-radius:\s*50%/s);
    expect(styles).toMatch(/\.portrait-frame,\s*\.about-portrait\s*\{[^}]*box-shadow:/s);
    expect(styles).not.toMatch(/\.portrait-frame\s*\{[^}]*background-color:\s*var\(--ink\)/s);
  });

  it('lays out the three networking teams as equal columns', async () => {
    const styles = await readFile(`${projectRoot}/src/styles/global.css`, 'utf8');
    expect(styles).toMatch(/\.role-scope\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\)/s);
  });

  it('uses a restrained, evidence-led hierarchy across every page', async () => {
    const [home, research, talks, about, news, styles] = await Promise.all([
      readFile(`${projectRoot}/src/pages/index.astro`, 'utf8'),
      readFile(`${projectRoot}/src/pages/research.astro`, 'utf8'),
      readFile(`${projectRoot}/src/pages/talks.astro`, 'utf8'),
      readFile(`${projectRoot}/src/pages/about.astro`, 'utf8'),
      readFile(`${projectRoot}/src/pages/updates.astro`, 'utf8'),
      readFile(`${projectRoot}/src/styles/global.css`, 'utf8'),
    ]);

    expect(home).toContain('<h1>Yunfei Ma</h1>');
    expect(home).toContain('Global connectivity at Uber');
    expect(home).toContain('Systems and protocols');
    expect(home).toContain('Selected record');
    expect(home).toContain("{ organization: 'Alibaba', detail: 'Senior Manager · Alibaba Cloud' }");
    expect(home).not.toContain('Senior Manager · Global network infrastructure');
    expect(home).not.toContain('Engineering the global network that');
    expect(home).not.toContain('profile-cta');
    expect(home).not.toContain('signal-strip');
    expect(research).toContain('<h1>Selected publications</h1>');
    expect(talks).toContain('<h1>Talks & keynotes</h1>');
    expect(about).toContain('<h1>About</h1>');
    expect(news).toContain('<h1>News & milestones</h1>');
    expect(styles).toMatch(/--mint:\s*#5ce1bd/);
    expect(styles).toMatch(/--mint-dark:\s*#0e8f72/);
    expect(styles).toMatch(/\.section-heading h2\s*\{[^}]*font-size:\s*clamp\(1\.8rem,\s*3vw,\s*2\.7rem\)/s);
    expect(styles).toMatch(/\.page-hero h1\s*\{[^}]*font-size:\s*clamp\(2\.8rem,\s*5vw,\s*4\.6rem\)/s);
    expect(styles).toMatch(/\.evidence-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\)/s);
  });
});

describe('navigation', () => {
  it('maps every primary navigation item to a source page', async () => {
    await Promise.all(navigation.map(({ href }) => {
      const page = href === '/' ? 'index' : href.slice(1);
      return access(`${projectRoot}/src/pages/${page}.astro`);
    }));
  });
});
