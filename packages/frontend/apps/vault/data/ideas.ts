export type Idea = {
  id: string;
  drawer: string;
  title: string;
  label: string;
  summary: string;
  glow: 'violet' | 'blue' | 'gold';
  tags: string[];
};

export const ideas: Idea[] = [
  {
    id: 'nocturne-index',
    drawer: 'A-17',
    title: 'Nocturne Index',
    label: 'ARCHIVE / A-17',
    summary:
      'A midnight taxonomy for creative sparks, reference fragments, and unresolved questions.',
    glow: 'violet',
    tags: ['Research', 'Mapping', 'Memory'],
  },
  {
    id: 'brass-protocol',
    drawer: 'B-04',
    title: 'Brass Protocol',
    label: 'SYSTEM / B-04',
    summary:
      'A premium ritual for turning raw notes into durable, searchable knowledge artifacts.',
    glow: 'gold',
    tags: ['Workflow', 'Curation', 'Vault'],
  },
  {
    id: 'blueprint-room',
    drawer: 'C-12',
    title: 'Blueprint Room',
    label: 'DESIGN / C-12',
    summary:
      'Spatial plans for cinematic dashboards, glass surfaces, and softly animated navigation.',
    glow: 'blue',
    tags: ['Design', 'Interface', 'Motion'],
  },
];

export const drawerRows = [
  ['A-01', 'A-02', 'A-03', 'A-04'],
  ['B-01', 'B-02', 'B-03', 'B-04'],
  ['C-09', 'C-10', 'C-11', 'C-12'],
];
