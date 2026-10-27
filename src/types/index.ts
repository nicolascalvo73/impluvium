export interface NavItem { label: string; href: string }

export interface AxisItem { title: string; subitems?: string[] }
export interface Axis {
  id: string;
  title: string;
  tone: 'azul' | 'durazno' | 'crema' | 'verde';
  items: AxisItem[];
}

export interface RestorationStage { n: number; title: string; items: string[] }

export interface Referent {
  name: string;
  role: string;
  education: string[];
  institutional: string[];
  independent: string[];
}
