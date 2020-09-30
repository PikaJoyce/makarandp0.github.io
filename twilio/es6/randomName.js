import { randomItem } from './randomItem.js';

export function randomName() {
  var ADJECTIVES = [
    'Abrasive', 'Brash', 'Callous', 'Daft', 'Eccentric', 'Fiesty', 'Golden',
    'Holy', 'Ignominious', 'Joltin', 'Killer', 'Luscious', 'Mushy', 'Nasty',
    'OldSchool', 'Pompous', 'Quiet', 'Rowdy', 'Sneaky', 'Tawdry',
    'Unique', 'Vivacious', 'Wicked', 'Xenophobic', 'Yawning', 'Zesty'
  ];

  var FIRST_NAMES = [
    'Anna', 'Bobby', 'Cameron', 'Danny', 'Emmett', 'Frida', 'Gracie', 'Hannah',
    'Isaac', 'Jenova', 'Kendra', 'Lando', 'Mufasa', 'Nate', 'Owen', 'Penny',
    'Quincy', 'Roddy', 'Samantha', 'Tammy', 'Ulysses', 'Victoria', 'Wendy',
    'Xander', 'Yolanda', 'Zelda'
  ];

  var LAST_NAMES = [
    'Anchorage', 'Berlin', 'Cucamonga', 'Davenport', 'Essex', 'Fresno',
    'Gunsight', 'Hanover', 'Indianapolis', 'Jamestown', 'Kane', 'Liberty',
    'Minneapolis', 'Nevis', 'Oakland', 'Portland', 'Quantico', 'Raleigh',
    'SaintPaul', 'Tulsa', 'Utica', 'Vail', 'Warsaw', 'XiaoJin', 'Yale',
    'Zimmerman'
  ];
  return randomItem(ADJECTIVES) +
    randomItem(FIRST_NAMES) +
    randomItem(LAST_NAMES);
}

export function randomRoomName() {
  var PLACES = [
    'Agra', 'Berlin', 'Cucamonga', 'Davenport', 'Essex', 'Fresno',
    'Gunsight', 'Hanover', 'Indore', 'Jamestown', 'Kalwa', 'Liberty',
    'Madras', 'Nevis', 'Oakland', 'Portland', 'Quantico', 'Redmond',
    'Seattle', 'Thane', 'Utica', 'Vail', 'Warsaw', 'XiaoJin', 'Yale',
    'Zimmerman'
  ];

  var COUNTRIES = [
    'Austria', 'Brazil', 'China', 'Denmark', 'Egypt', 'France',
    'Ghana', 'Holland', 'India', 'Jamaica', 'Kenya', 'Libya',
    'Mexico', 'Nepal', 'Oman', 'Peru', 'Qatar', 'Russia',
    'Spain', 'Turkey', 'Uganda', 'Vietnam', 'Wales', 'Xianbei', 'Yemen',
    'Zambia'
  ];


  return randomItem(PLACES) +
    randomItem(COUNTRIES);
}
