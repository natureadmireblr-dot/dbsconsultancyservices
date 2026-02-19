export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface MethodologyStep {
  letter: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}
