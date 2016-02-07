function Character(name, isPlayer, Stats, NetWorth, Abilities, Weaknesses, Body, CompetitionStanding) {
  this.name = name;
  this.isPlayer = isPlayer;
  this.graphic = graphic;
  this.Stats = Stats;
  this.NetWorth = NetWorth;
  this.Abilites = Abilities;
  this.Weaknesses = Weaknesses;
  this.Body = Body;
  this.CompetitionStanding = CompetitionStanding;

}

function Stats(strength, endurance, finesse, perception, wits, intelligence) {

  //Base Stats
  this.strength = strength;
  this.endurance = endurance;
  this.finesse = finesse;
  this.perception = perception;
  this.wits = wits;
  this.intelligence = intelligence;

  //Substats: HP, AP, SP, and MP
  this.currentHP = endurance * 5;
  this.maxHP = endurance * 5;
  this.currentAP = finesse;
  this.maxAP = finesse;
  this.currentSP = 10 + endurance;
  this.maxSP = 10 + endurance;
  this.currentMP = perception + wits + intelligence;
  this.maxMP = perception + wits + intelligence;

  //Substats: Misc

  this.defense = defense;
  this.attack = strength;
  this.carryWeight = strength + endurance;
  this.stealth = finesse;
  this.sense = perception;
  this.charisma = wits;
  this.knowledge = intelligence;

}

function CompetitionStanding(competitorType, bracketPosition) {
  this.competitorType = competitorType;
  this.bracketPosition = bracketPosition;
}

function NetWorth(inventory, cashValue) {
  this.inventory = inventory;
  this.cashValue = cashValue;
}

function Weaknesses(physicalWeaknesses, mentalWeaknesses) {
  this.physicalWeaknesses = physicalWeaknesses;
  this.mentalWeaknesses = mentalWeaknesses;
}
