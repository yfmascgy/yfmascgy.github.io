import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  awards,
  committeeService,
  conferenceTalks,
  keynotes,
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
    expect(profile.leadership).toBe('I lead Uber’s Mobile, Edge, and Autonomous Vehicle Networking organization.');
    expect(profile.networkCharter).toContain('reliable, fast, cost-efficient, secure, and multi-cloud ready');
    expect(profile.edgeScope).toContain('manages all Layer 7 traffic into Uber');
    expect(profile.edgeScope).toContain('anti-DDoS infrastructure and network security');
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

    expect(milestoneTitles).toContain('Selected to serve on the USENIX NSDI 2027 Technical Program Committee.');
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
});

describe('navigation', () => {
  it('maps every primary navigation item to a source page', async () => {
    await Promise.all(navigation.map(({ href }) => {
      const page = href === '/' ? 'index' : href.slice(1);
      return access(`${projectRoot}/src/pages/${page}.astro`);
    }));
  });
});
