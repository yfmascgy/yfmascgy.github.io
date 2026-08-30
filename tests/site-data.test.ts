import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  awards,
  conferenceTalks,
  keynotes,
  navigation,
  patents,
  publications,
  updates,
} from '../src/data/site';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));

describe('portfolio content', () => {
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

  it('points every local publication link to an existing public asset', async () => {
    const localLinks = publications.flatMap(({ href }) => href?.startsWith('/') ? [href] : []);
    await Promise.all(localLinks.map((href) => access(`${projectRoot}/public${href}`)));
  });

  it('preserves talks, patents, awards, and updates', () => {
    expect(keynotes).toHaveLength(4);
    expect(conferenceTalks).toHaveLength(6);
    expect(patents).toHaveLength(8);
    expect(awards).toHaveLength(8);
    expect(updates.length).toBeGreaterThanOrEqual(15);
  });

  it('keeps update years in reverse chronological order', () => {
    const years = updates.map(({ year }) => year);
    expect(years).toEqual([...years].sort((a, b) => b - a));
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
