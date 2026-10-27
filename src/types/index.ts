import type { ImageMetadata } from 'astro';

export interface NavItem { label: string; href: string }

export interface AxisItem { title: string; subitems?: string[] }
export interface Axis {
  id: string;
  title: string;
  tone: 'azul' | 'durazno' | 'crema' | 'verde';
  items: AxisItem[];
}

export interface WheelArea {
  id: string;
  name: string;
  color: string;
  components: string[];
  highlighted?: boolean;
  note?: string;
}

export interface RestorationStage { n: number; title: string; items: string[] }

export interface BackgroundItem {
  title: string;
  place: string;
  description?: string;
  image: ImageMetadata;
  alt: string;
}

export interface Referent {
  name: string;
  role: string;
  education: string[];
  institutional: string[];
  independent: string[];
}
