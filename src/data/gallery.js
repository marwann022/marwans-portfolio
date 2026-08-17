export const gallery = [
  {
    id: "moon",
    num: "01",
    name: "Moon",
    category: "Brand identity & packaging",
    year: "2024",
    image: "https://drive.google.com/thumbnail?id=1Cbal9PBxChChqDUmrJqc58caqjddlmhG&sz=w1000",
    summary: "A minimalist brand identity and luxury packaging system designed for high-end cosmetic and lifestyle products.",
    role: "Lead Brand Designer",
    deliverables: ["Brand Strategy", "Visual Identity", "Packaging System", "Brand Guidelines"],
    tools: ["Figma", "Illustrator", "Photoshop"],
    designDirection: "Centering on tactile paper textures, restrained display accents, and geometric grid structures to evoke calm sophistication.",
    gallery: [
      { type: "landscape", image: "https://drive.google.com/thumbnail?id=1Cbal9PBxChChqDUmrJqc58caqjddlmhG&sz=w1000", caption: "Primary packaging box layout and tactile foil detail" },
      { type: "landscape", image: "https://drive.google.com/thumbnail?id=1Cbal9PBxChChqDUmrJqc58caqjddlmhG&sz=w1000", caption: "Stationery system and typography collateral grid" }
    ]
  },
  {
    id: "cela",
    num: "02",
    name: "Cela",
    category: "Campaign & social design",
    year: "2024",
    image: "https://drive.google.com/thumbnail?id=1LIM7s0ZnUMQ0T7LZa9wJI5K0ibZBLhUR&sz=w1000",
    summary: "A dynamic social media and promotional campaign system created for remote brand advertising and digital marketing.",
    role: "Graphic & Campaign Designer",
    deliverables: ["Campaign Strategy", "Social Media Templates", "Advertising Posters", "Digital Collateral"],
    tools: ["Photoshop", "Illustrator", "Figma"],
    designDirection: "High-contrast editorial typography paired with vivid color blocks to drive visual engagement across digital channels.",
    gallery: [
      { type: "landscape", image: "https://drive.google.com/thumbnail?id=1LIM7s0ZnUMQ0T7LZa9wJI5K0ibZBLhUR&sz=w1000", caption: "Core promotional hero poster visual" },
      { type: "landscape", image: "https://drive.google.com/thumbnail?id=1LIM7s0ZnUMQ0T7LZa9wJI5K0ibZBLhUR&sz=w1000", caption: "Digital outdoor billboard and social media campaign grid" }
    ]
  },
  {
    id: "ieee",
    num: "03",
    name: "IEEE",
    category: "Community communications",
    year: "2023",
    image: "https://drive.google.com/thumbnail?id=396702188_702184045263495_3409533937639513646_n&sz=w1000",
    summary: "Event branding, social communications, and editorial publication collateral designed for student engineering community chapters.",
    role: "Visual Communications Designer",
    deliverables: ["Event Identity", "Publication Layouts", "Promotional Materials", "Digital Banners"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    designDirection: "Technical precision combined with vibrant community photography to foster engagement across engineering student chapters.",
    gallery: [
      { type: "landscape", image: "https://drive.google.com/thumbnail?id=396702188_702184045263495_3409533937639513646_n&sz=w1000", caption: "IEEE chapter annual summit promotional graphic" },
      { type: "landscape", image: "https://drive.google.com/thumbnail?id=396702188_702184045263495_3409533937639513646_n&sz=w1000", caption: "Technical seminar flyer and stage backdrop signage" }
    ]
  }
];

export const archiveProjects = gallery.reduce((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {});

export const archiveKeys = gallery.map((item) => item.id);

