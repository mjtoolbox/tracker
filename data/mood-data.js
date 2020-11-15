import Mood from '../models/Mood';
import Tag from '../models/Tag';

// Jan = 0, Aug = 7
export const MOODS = [
  new Mood('m1', new Date(2020, 7, 31, 10, 25), 'sunny', 5),
  new Mood('m2', new Date(2020, 8, 1, 13, 0), 'sunny', 3),
  new Mood('m3', new Date(2020, 8, 2, 9, 5), 'rainy', 4),
  new Mood('m4', new Date(2020, 8, 3, 15, 0), 'cloudy', 2),
];

export const TAGS = [
  new Tag('t1', 'm1', 'coffee'),
  new Tag('t2', 'm1', 'weather'),
  new Tag('t3', 'm2', 'tired'),
  new Tag('t4', 'm2', "couldn't sleep"),
  new Tag('t5', 'm2', 'worry'),
  new Tag('t6', 'm3', 'call friend'),
  new Tag('t7', 'm3', 'walk'),
  new Tag('t8', 'm4', 'tired'),
  new Tag('t9', 'm4', "couldn't sleep"),
];
