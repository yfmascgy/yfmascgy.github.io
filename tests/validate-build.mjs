import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';

const routes = ['index', 'research/index', 'talks/index', 'about/index', 'updates/index'];

await Promise.all(routes.map((route) => access(`dist/${route}.html`)));
await Promise.all([
  access('dist/og.png'),
  access('dist/Yunfei_CV.pdf'),
  access('dist/papers/cellfusion.pdf'),
  access('dist/papers/xlink.pdf'),
]);

const home = await readFile('dist/index.html', 'utf8');
const research = await readFile('dist/research/index.html', 'utf8');
const news = await readFile('dist/updates/index.html', 'utf8');

assert.match(home, /Engineering the global network that/);
assert.match(home, /keeps Uber moving/);
assert.match(home, /reliable, fast, cost-efficient, secure, and multi-cloud ready/);
assert.match(home, /Sr\. Engineering Manager/);
assert.match(home, /manages all Layer 7 traffic into Uber/);
assert.match(home, /across all Uber apps on iOS and Android/);
assert.match(home, /anti-DDoS infrastructure and network security/);
assert.match(home, /XLINK deployed the Multipath QUIC protocol to Taobao at scale/);
assert.match(home, /authors of the IETF Multipath QUIC protocol/);
assert.match(home, /<h3>XLINK<\/h3>/);
assert.match(home, /deployed Multipath QUIC to Taobao at scale/);
assert.match(home, /USENIX NSDI 2027 Technical Program Committee/);
assert.match(home, /ACM MobiCom 2025 Technical Program Committee/);
assert.match(home, /Autonomous Vehicle Networking/);
assert.match(home, /reliable vehicle-to-cloud connectivity for autonomous vehicles/);
assert.doesNotMatch(home, /Building the networks behind real-time experiences/);
assert.match(home, /data-shape="round"/);
assert.doesNotMatch(home, /Senior Staff Network Architect|Network architect/);
assert.match(home, /property="og:image"/);
assert.match(home, /Skip to content/);
assert.doesNotMatch(home, /jquery|bootstrap\.min/i);
assert.match(research, /Cellfusion/);
assert.match(research, /Enabling Deep-Tissue Networking/);
assert.match(news, /USENIX NSDI 2027 Technical Program Committee/);
assert.match(news, /ACM MobiCom 2025 Technical Program Committee/);
assert.match(news, /Cellfusion, a production vehicle-to-cloud video streaming system/);
assert.match(news, /GSO-Simulcast, our global stream orchestration system deployed in DingTalk/);
assert.match(news, /XLINK, our production Multipath QUIC transport deployed across Alibaba video services/);
assert.match(news, /IETF QUIC Working Group adopted the Multipath QUIC draft/);
assert.doesNotMatch(news, /Cellfusion and XRON were accepted/);

const about = await readFile('dist/about/index.html', 'utf8');
const builtCv = await readFile('dist/Yunfei_CV.pdf');
assert.match(about, /Uber Reimagine Award Finalist/);
assert.match(about, /multi-layer anti-DDoS infrastructure for Uber/);
assert.match(about, /data-shape="round"/);
assert.match(about, /Committee service/);
assert.match(about, /USENIX NSDI/);
assert.match(about, /ACM Mobisys/);
assert.equal(createHash('sha256').update(builtCv).digest('hex'), 'a3b10b152d78158d433c205003a289e02d8e09c62210a6eff61af11de16c4cb2');

console.log('Production build validation passed.');
