export interface SportItem {
  title: string;
  description: string;
  level: string;
}

export const sports: SportItem[] = [
  {
    title: 'Endurance Running',
    description: 'Training for half-marathons with a focus on consistency and injury prevention.',
    level: 'Advanced'
  },
  {
    title: 'Strength Training',
    description: 'Structured 4-day split emphasizing mobility and progressive overload.',
    level: 'Intermediate'
  },
  {
    title: 'Climbing',
    description: 'Indoor bouldering sessions that develop problem-solving and grip endurance.',
    level: 'Intermediate'
  }
];
