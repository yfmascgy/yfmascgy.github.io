export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/talks', label: 'Talks' },
  { href: '/about', label: 'About' },
] as const;

export const profile = {
  currentRole: 'Sr. Engineering Manager',
  leadership: 'I lead Uber’s Mobile & Edge Networking organization.',
  networkCharter: 'My charter is to build and operate Uber’s global network to be reliable, fast, cost-efficient, secure, and multi-cloud ready.',
  edgeScope: 'The Edge Networking team manages all Layer 7 traffic into Uber, supporting both mobile and web platforms, and manages Uber’s global DNS infrastructure, anti-DDoS infrastructure, and network security.',
  edgeFocus: 'Managing Layer 7 traffic into Uber, Uber’s global DNS infrastructure, anti-DDoS infrastructure, and network security across mobile and web.',
  mobileScope: 'The Mobile Networking team owns the mobile networking stack, libraries, and observability infrastructure across all Uber apps on iOS and Android.',
  autonomousVehicleScope: 'The Autonomous Vehicle Networking team enables reliable vehicle-to-cloud connectivity for autonomous vehicles.',
  xlinkImpact: 'XLINK deployed the Multipath QUIC protocol to Taobao at scale.',
  ietfImpact: 'I am also one of the authors of the IETF Multipath QUIC protocol.',
} as const;

export interface Publication {
  year: number;
  venue: string;
  title: string;
  authors: string;
  description: string;
  href?: string;
  category: 'Networks' | 'Wireless & sensing';
  featured?: boolean;
  correspondingAuthor?: string;
}

export const publications: Publication[] = [
  {
    year: 2023,
    venue: 'ACM SIGCOMM',
    title: 'Cellfusion: Multipath Vehicle-to-Cloud Video Streaming with Network Coding in the Wild',
    authors: 'Yunzhe Ni, Zhilong Zheng, Xianshang Lin, Fengyu Gao, Xuan Zeng, Yirui Liu, Guang Yang, Yuanchao Su, Dennis Cai, Harry Hongqiang Liu, Chenren Xu, Ennan Zhai, and Yunfei Ma',
    description: 'A production-oriented approach to resilient, high-quality vehicle video streaming across multiple cellular links.',
    href: '/papers/cellfusion.pdf',
    category: 'Networks',
    featured: true,
    correspondingAuthor: 'Yunfei Ma',
  },
  {
    year: 2023,
    venue: 'ACM SIGCOMM',
    title: 'XRON: A Hybrid Elastic Cloud Overlay Network for Video Conferencing at Planetary Scale',
    authors: 'Bingyang Wu, Kun Qian, Bo Li, Yunfei Ma, Qi Zhang, Zhigang Jiang, Jiayu Zhao, Dennis Cai, Ennan Zhai, Xuanzhe Liu, and Xin Jin',
    description: 'An elastic overlay network designed for reliable, large-scale global video conferencing.',
    category: 'Networks',
  },
  {
    year: 2022,
    venue: 'ACM SIGCOMM',
    title: 'GSO-Simulcast: Global Stream Orchestration in Simulcast Video Conferencing Services',
    authors: 'Xianshang Lin, Yunfei Ma, Junshao Zhang, Yao Cui, Jing Li, Shi Bai, Ziyue Zhang, Dennis Cai, Harry Hongqiang Liu, and Ming Zhang',
    description: 'Global orchestration that improves video quality and efficiency across large conferencing systems.',
    href: '/papers/gso-simulcast.pdf',
    category: 'Networks',
    featured: true,
    correspondingAuthor: 'Yunfei Ma',
  },
  {
    year: 2022,
    venue: 'IETF Working Group Draft',
    title: 'Multipath Extension for QUIC',
    authors: 'Yanmei Liu, Yunfei Ma, Quentin De Coninck, Olivier Bonaventure, Christian Huitema, and Mirja Kühlewind',
    description: 'A standards-track extension enabling QUIC connections to use multiple network paths.',
    href: 'https://datatracker.ietf.org/doc/draft-ietf-quic-multipath',
    category: 'Networks',
  },
  {
    year: 2021,
    venue: 'ACM SIGCOMM',
    title: 'XLINK: QoE-Driven Multi-Path QUIC Transport in Large-Scale Video Services',
    authors: 'Zhilong Zheng, Yunfei Ma, Yanmei Liu, Furong Yang, Zhenyu Li, Yuanbo Zhang, Jiuhai Zhang, Wei Shi, Wentao Chen, Ding Li, Qing An, Hai Hong, Hongqiang Harry Liu, and Ming Zhang',
    description: 'A production transport system that deployed Multipath QUIC to Taobao at scale and connects directly to my work as one of the authors of the IETF Multipath QUIC protocol.',
    href: '/papers/xlink.pdf',
    category: 'Networks',
    featured: true,
    correspondingAuthor: 'Yunfei Ma',
  },
  {
    year: 2021,
    venue: 'ACM MobiCom',
    title: 'HeadFi: Bringing Intelligence to All Headphones',
    authors: 'Xiaoran Fan, Longfei Shangguan, Siddharth Rupavatharam, Yanyong Zhang, Jie Xiong, Yunfei Ma, and Richard Howard',
    description: 'Sensing and interaction techniques that work through conventional headphone hardware.',
    href: '/papers/headfi.pdf',
    category: 'Wireless & sensing',
  },
  {
    year: 2020,
    venue: 'ACM SIGCOMM',
    title: 'NFC+: Breaking NFC Networking Limits Through Resonance Engineering',
    authors: 'Renjie Zhao, Purui Wang, Yunfei Ma, Pengyu Zhang, Hongqiang Liu, Xianshang Lin, Xinyu Zhang, Chenren Xu, and Ming Zhang',
    description: 'Resonance engineering that extends the reach and capabilities of NFC networking.',
    href: '/papers/nfc-plus.pdf',
    category: 'Wireless & sensing',
  },
  {
    year: 2020,
    venue: 'ACM MobiCom',
    title: 'Towards Flexible Wireless Charging for Medical Implants Using Distributed Antenna Systems',
    authors: 'Xiaoran Fan, Longfei Shangguan, Richard Howard, Yanyong Zhang, Yao Peng, Jie Xiong, Yunfei Ma, and Xiang-Yang Li',
    description: 'A distributed antenna approach for practical wireless power delivery to medical implants.',
    href: '/papers/inout.pdf',
    category: 'Wireless & sensing',
  },
  {
    year: 2019,
    venue: 'USENIX NSDI',
    title: '3D Backscatter Localization for Fine-Grained Robotics',
    authors: 'Zhihong Luo, Qiping Zhang, Yunfei Ma, Manish Singh, and Fadel Adib',
    description: 'Millimeter-scale tracking of tagged objects for fast, precise robotic manipulation.',
    href: '/papers/turbotrack.pdf',
    category: 'Wireless & sensing',
  },
  {
    year: 2018,
    venue: 'ACM SIGCOMM',
    title: 'Enabling Deep-Tissue Networking for Miniature Medical Devices',
    authors: 'Yunfei Ma, Zhihong Luo, Christoph Steiger, Giovanni Traverso, and Fadel Adib',
    description: 'Wireless communication and power delivery for miniature devices deep inside the body.',
    href: '/papers/IVN.pdf',
    category: 'Wireless & sensing',
    featured: true,
  },
  {
    year: 2017,
    venue: 'ACM SIGCOMM',
    title: 'Drone Relays for Battery-Free Networks',
    authors: 'Yunfei Ma, Nicholas Selby, and Fadel Adib',
    description: 'Aerial relays that extend battery-free RFID networks without modifying deployed tags.',
    href: '/papers/rfly.pdf',
    category: 'Wireless & sensing',
  },
  {
    year: 2017,
    venue: 'ACM MobiCom',
    title: 'Minding the Billions: Ultra-Wideband Localization in Deployed RFID Tags',
    authors: 'Yunfei Ma, Nicholas Selby, and Fadel Adib',
    description: 'Fine-grained localization using the enormous base of already-deployed RFID tags.',
    href: '/papers/rfind.pdf',
    category: 'Wireless & sensing',
  },
  {
    year: 2016,
    venue: 'ACM MobiCom',
    title: '3D Real-Time Indoor Localization via Broadband Nonlinear Backscatter in Passive Devices',
    authors: 'Yunfei Ma, Xiaonan Hui, and Edwin C. Kan',
    description: 'Centimeter-precision 3D localization using passive nonlinear backscatter devices.',
    href: '/papers/3d-localization.pdf',
    category: 'Wireless & sensing',
  },
];

export const keynotes = [
  {
    year: 2022,
    event: 'APNET',
    title: 'GSO-Simulcast: Global Stream Orchestration in DingTalk’s Video Conferencing',
    href: 'https://youtu.be/GyOtUBrRRUA?t=23269',
    format: '40 min video',
  },
  {
    year: 2021,
    event: 'APNET',
    title: 'XLINK: Alibaba’s Multi-Path QUIC Transport for Large-Scale Video Applications',
    href: "https://conferences.sigcomm.org/events/apnet2021/records/24/24.XLINK%20Alibaba's%20Multi-path%20QUIC%20Transport%20for%20Large-scale%20Video%20Applications.mp4",
    format: '40 min video',
  },
  {
    year: 2021,
    event: 'ACM MobiHoc',
    title: 'Is the Network Ready for Video Ubiquity? An Outlook from Alibaba’s Video Services',
    href: 'https://www.sigmobile.org/mobihoc/2021/keynotes.html',
    format: 'Keynote',
  },
  {
    year: 2018,
    event: 'IoT Tech Expo',
    title: 'Minding the Billions: Enabling Wide-Scale and In-Vivo Networking in Low-Power IoT',
    href: '/presentation/IoT-Expo-talk2.pdf',
    format: 'Slides',
  },
] as const;

export const conferenceTalks = [
  { year: 2022, event: 'ACM SIGCOMM', title: 'GSO-Simulcast: Global Stream Orchestration in Simulcast Video Conferencing', href: 'https://www.youtube.com/watch?v=K9ra9ZocRUo' },
  { year: 2021, event: 'ACM SIGCOMM', title: 'XLINK: QoE-Driven Multi-Path QUIC Transport in Large-Scale Video Services', href: 'https://dl.acm.org/doi/10.1145/3452296.3472893' },
  { year: 2018, event: 'ACM SIGCOMM', title: 'IVN: Enabling Deep-Tissue Networking for Miniature Medical Devices', href: 'https://www.youtube.com/watch?v=wDZh_kQcicY&t=497s' },
  { year: 2017, event: 'ACM SIGCOMM', title: 'RFly: Drone Relays for Battery-Free Networks', href: 'https://dl.acm.org/doi/10.1145/3098822.3098847' },
  { year: 2017, event: 'ACM MobiCom', title: 'RFind: Ultra-Wideband Localization for Deployed RFID Tags' },
  { year: 2016, event: 'ACM MobiCom', title: '3D Real-Time Indoor Localization via Broadband Nonlinear Backscatter' },
] as const;

export interface Update {
  year: number;
  title: string;
  href?: string;
}

export const updates: Update[] = [
  { year: 2026, title: 'Served on the USENIX NSDI 2027 Technical Program Committee.' },
  { year: 2025, title: 'Served on the ACM MobiCom 2025 Technical Program Committee.' },
  { year: 2024, title: 'Served on the ACM SIGCOMM and ACM HotMobile Technical Program Committees.' },
  { year: 2023, title: 'Cellfusion, a production vehicle-to-cloud video streaming system, was accepted to ACM SIGCOMM 2023.', href: '/papers/cellfusion.pdf' },
  { year: 2023, title: 'Invited to speak at the IAP workshop at UC San Diego.' },
  { year: 2022, title: 'GSO-Simulcast, our global stream orchestration system deployed in DingTalk, was accepted to ACM SIGCOMM 2022.', href: 'https://conferences.sigcomm.org/sigcomm/2022/program.html' },
  { year: 2022, title: 'XLINK became a new product in the Alibaba Cloud IoT family: Multi-Link Aggregation Cube.', href: 'https://help.aliyun.com/document_detail/2249092.html' },
  { year: 2021, title: 'XLINK, our production Multipath QUIC transport deployed across Alibaba video services, was accepted to ACM SIGCOMM 2021.', href: 'https://dl.acm.org/doi/10.1145/3452296.3472893' },
  { year: 2021, title: 'The IETF QUIC Working Group adopted the Multipath QUIC draft, advancing the protocol toward standardization.', href: 'https://datatracker.ietf.org/doc/draft-ietf-quic-multipath' },
  { year: 2021, title: 'Published an APNIC article on efficient multipath transport with QUIC video services.', href: 'https://blog.apnic.net/2021/12/08/efficient-multipath-transport-with-quic-video-services/' },
  { year: 2021, title: 'HeadFi received the Best Paper Runner-Up award at ACM MobiCom.', href: 'https://www.sigmobile.org/mobicom/2021/' },
  { year: 2021, title: 'Presented an industry keynote at APNET and a keynote at ACM MobiHoc.' },
  { year: 2020, title: 'NFC+ was accepted to ACM SIGCOMM.' },
  { year: 2019, title: 'TurboTrack was accepted to USENIX NSDI and covered by MIT News and other media.', href: 'https://news.mit.edu/2019/robots-track-moving-objects-unprecedented-precision-0219' },
  { year: 2018, title: 'IVN was selected as an ACM SIGCOMM Research Highlight.', href: 'https://www.acm.org/media-center/2018/august/sigcomm-2018' },
  { year: 2018, title: 'Invited to serve on the ACM CoNEXT and IEEE INFOCOM technical program committees.' },
  { year: 2017, title: 'RFly was accepted to ACM SIGCOMM and featured by MIT News.', href: 'https://news.mit.edu/2017/drones-relay-rfid-signals-inventory-control-0825' },
  { year: 2017, title: 'RFind was accepted to ACM MobiCom, with a demo presented at ACM SIGCOMM.' },
];

export const patents = [
  'Methods and apparatus for wideband localization — US Patent Application 15/936,078.',
  'Methods and apparatus for analog relays — US Patent Application 15/894,901.',
  'Solenoid inductor — US Patent Application 15/345,312.',
  'Two-dimensional structure to form an embedded three-dimensional structure — US Patent Application 15/192,802.',
  'RF multiplexer with integrated directional coupler — US Patent 10,171,112.',
  'Encapsulation of acoustic resonator devices — US Patent 10,069,474.',
  'Tunable matching network — US Patent 10,187,031.',
  'RFID device, methods and applications — US Patent 9,645,234.',
] as const;

export interface Award {
  year: number;
  title: string;
  detail?: string;
}

export const awards: Award[] = [
  { year: 2025, title: 'Uber Reimagine Award Finalist', detail: 'Contributions & leadership in building multi-layer anti-DDoS infrastructure for Uber' },
  { year: 2021, title: 'DAMO Academy Individual Award finalist', detail: 'Top 0.4%' },
  { year: 2018, title: 'ACM SIGCOMM Research Highlight', detail: 'IVN' },
  { year: 2018, title: 'China Young Scientist Computing Association Rising Star' },
  { year: 2015, title: 'Qualcomm QualStar Award' },
  { year: 2015, title: 'Best Student Paper Award', detail: 'IEEE International Microwave Symposium' },
  { year: 2011, title: 'Irwin and Joan Jacobs Scholar' },
  { year: 2010, title: 'Best Undergraduate Thesis', detail: 'USTC' },
  { year: 2009, title: 'National Scholarship', detail: 'Ministry of Education, China' },
];

export const committeeService = [
  { year: 2027, organization: 'USENIX NSDI', role: 'Technical Program Committee' },
  { year: 2025, organization: 'ACM MobiCom', role: 'Technical Program Committee' },
  { year: 2024, organization: 'ACM SIGCOMM', role: 'Technical Program Committee' },
  { year: 2024, organization: 'ACM HotMobile', role: 'Technical Program Committee' },
  { year: 2021, organization: 'IEEE GlobeCom', role: 'Technical Program Committee' },
  { year: 2020, organization: 'IEEE INFOCOM', role: 'Technical Program Committee' },
  { year: 2019, organization: 'IEEE INFOCOM', role: 'Technical Program Committee' },
  { year: 2018, organization: 'ACM CoNEXT', role: 'Technical Program Committee' },
  { year: 2018, organization: 'ACM MobiCom', role: 'Workshop Technical Program Committee' },
  { year: 2018, organization: 'ACM Mobisys', role: 'Workshop Technical Program Committee' },
] as const;

export interface MediaCoverage {
  outlet: string;
  project: 'RFIQ' | 'IVN' | 'RFly' | 'TurboTrack';
  href: string;
}

export const mediaCoverage: MediaCoverage[] = [
  { outlet: 'CBS This Morning', project: 'RFIQ', href: 'https://www.youtube.com/watch?v=M-4WQDzI6wc' },
  { outlet: 'The Verge', project: 'RFly', href: 'https://www.theverge.com/2017/9/2/16217302/mit-drones-billion-dollar-problem-inventory-rfid-tags' },
  { outlet: 'IEEE Spectrum', project: 'RFly', href: 'https://spectrum.ieee.org/mit-builds-drone-based-rfid-relay-to-track-boxes-in-warehouses' },
  { outlet: 'MIT News', project: 'TurboTrack', href: 'https://news.mit.edu/2019/robots-track-moving-objects-unprecedented-precision-0219' },
  { outlet: 'MIT Technology Review', project: 'IVN', href: 'https://www.technologyreview.com/2018/06/05/142354/some-day-you-may-be-able-to-monitor-your-stomach-from-your-smartphone/' },
  { outlet: 'Engadget', project: 'TurboTrack', href: 'https://www.engadget.com/2019-02-19-mit-rfid-tags-improve-robotic-accuracy.html' },
  { outlet: 'International Business Times', project: 'RFly', href: 'https://www.ibtimes.co.uk/mits-new-tech-uses-tiny-drones-real-time-inventory-management-1636768' },
  { outlet: 'RFID Journal', project: 'TurboTrack', href: 'https://www.rfidjournal.com/mit-researchers-develop-rfid-system-to-guide-robots' },
  { outlet: 'ZDNET', project: 'TurboTrack', href: 'https://www.zdnet.com/article/rfid-tags-help-robots-locate-and-grab-moving-objects-in-milliseconds/' },
  { outlet: 'Digital Trends', project: 'IVN', href: 'https://www.digitaltrends.com/cool-tech/wireless-charging-implant-125-feet/' },
  { outlet: 'New Atlas', project: 'IVN', href: 'https://newatlas.com/mit-wireless-radio-wave-implant/54900/' },
  { outlet: 'UPI', project: 'IVN', href: 'https://www.upi.com/Science_News/2018/06/05/Method-devised-for-wirelessly-powering-controlling-devices-inside-body/1991528131472/' },
];
