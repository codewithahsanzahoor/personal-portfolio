
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: "001-A",
    title: "NEBULA CORE",
    subtitle: "NEBULA CORE",
    description: "A decentralized neural network visualization engine built using Three.js and WebGL. Processing real-time data streams across global nodes.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0e4SBc8tAHPMvzOEDVC-nQFZrGwufKRpgX_CxqjqkzzHZ3Lpwm61PZuzAIi7fyUtYfRQXv_xdKFIptQaDje2ea4w5ipTm66rlgxvmqLGsQ5IOy8zQheAV66ffEIU8C3gVsK3_SqNGWahXL3XdonEvTLmMKiqawjqgniIUzX7ZoxAj8xRyt9nB9fL2qjU6VPz8CT9lcsocrpr0buStct6pJukkXBgoUCpGEuqPbCi142euzIuqR0dTbu-qjPDtLqs8Rc8knfVWpxA",
    tags: ["REACT", "THREE.JS", "GSAP"],
    tech: ["WebGL", "WebSocket", "Redux"],
    status: "ACTIVE",
    coordinates: "X: 192.168.1.1 / Y: 42.3601 N"
  },
  {
    id: "042-B",
    title: "KRYPTOS VAULT",
    subtitle: "KRYPTOS VAULT",
    description: "Advanced encryption dashboard with multi-sig authentication and real-time intrusion detection monitoring.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIm41nM2Ic4ewEGrco5I2gBjdvboE1PN_NX8NBKRSRBWP0OKmJm9mvj6dXR-NGwn68esnmsPOj2q0UdbYF_OKS8IAg8iFzwWju4GjqQR451WTkPAbYIRCWGgcpp71OazGm8bvviqk6cWHpeIbcnmVV5AZSGE0W5UuBs4XdqR0IcJ_klhPz02QJJGodpSXHAQoeIUdMzLPygqGh7HeNw8rrqDUKbhyTCdbokgrN3BvmgRG3oPIq2G18JwLikva4frZLdmjQGpjJ1_g",
    tags: ["NODE.JS", "WEB3", "D3.JS"],
    tech: ["Solidity", "Hardhat", "Truffle"],
    status: "LOCKED",
    coordinates: "SEC: LEVEL 5 / STATUS: LOCKED"
  },
  {
    id: "088-C",
    title: "ZENITH OS",
    subtitle: "ZENITH OS",
    description: "A cloud-native operating system abstraction layer for managing multi-tenant Kubernetes clusters with ease.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzRGKJyLKV1qODhmEpQzi3VcFqnJNjmYovzJQK3PZrgA9SEBpM2n3XGdCc6owoBn37xMff5lk0IPv93C3z-ekFzNFBdIAh3Bd5TaVgPXulLlqkqvPtUCfwcxkOMeJBjnPanjm1cWqtenUmfQdwJzBunytvO9U_6EzkFUr63Tur_Mk_d5-YUygjek1gpOQozTST4JpNbR_7bXN-nhEWZxBkFgNr-d4P93D7Y0OnCRDG_4UDaeG9W-GwGs6mb2ot7W9MP_FHOKtdEIw",
    tags: ["GOLANG", "DOCKER", "PYTHON"],
    tech: ["K8s", "Terraform", "AWS"],
    status: "ONLINE",
    coordinates: "LOC: NEO-TOKYO / GRID: 08"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", proficiency: 94, icon: "view_in_ar", module: "001_REACT" },
  { name: "Node.js", proficiency: 88, icon: "javascript", module: "002_NODE" },
  { name: "WordPress", proficiency: 90, icon: "web", module: "003_CMS" },
  { name: "Docker", proficiency: 75, icon: "inventory_2", module: "004_CONT" },
  { name: "AWS / GCP", proficiency: 82, icon: "cloud", module: "005_CLOUD" },
  { name: "MongoDB", proficiency: 85, icon: "list_alt", module: "006_DB" }
];
