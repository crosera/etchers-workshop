export interface Contact {
  _id?:            string;
  armorClass:      number;
  attackAbility?:  string;
  attackModifier?: number;
  class:           string;
  languages?:      string[];
  level:           number;
  maxHp:           number;
  name:            string;
  passives?:       Passives;
  player?:         string;
  proficiencies?:  string[];
  race:            string;
  resistances?:    string[];
  savingThrows?:   SavingThrows;
  senses?:         string[];
}

export interface Passives {
  Insight:       number;
  Investigation: number;
  Perception:    number;
}

export interface SavingThrows {
  CHA: number;
  CON: number;
  DEX: number;
  INT: number;
  STR: number;
  WIS: number;
}