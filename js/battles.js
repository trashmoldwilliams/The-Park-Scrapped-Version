function Battle(Character, Park, Weather, Temperature) {
  //Structure
  this.EnemyCharacter = Character;
  this.Park = Park;
  this.Weather = Weather;
  this.Temperature = Temperature;

  //Changing Elements
  this.firstTurnTo = undefined;
  this.playerActionDocket = [];
  this.enemyActionDocket = [];
}

Battle.prototype.executeTurn = function() {
  var firstTurnPlayer = determineFirstTurnPlayer(PlayerCharacter, this.EnemyCharacter);
  for (var i = 0; i <= playerActionDocket; i++) {
    playerActionDocket[i]
  }

};

function determineFirstTurnPlayer(PlayerCharacter, EnemyCharacter) {
  if(PlayerCharacter.Stats.maxAP > EnemyCharacter.Stats.maxAP) {
    firstTurnPlayer = "player";
  } else if (PlayerCharacter.Stats.maxAP < EnemyCharacter.Stats.maxAP) {
    firstTurnPlayer = "enemy";
  } else {
    var tieBreaker = Math.floor((Math.random() * 2) + 1);
    if (tieBreaker === 1) {
      firstTurnPlayer = "tiePlayer";
    } else {
      firstTurnPlayer = "tieEnemy";
    }
  }
  return firstTurnPlayer;
}
