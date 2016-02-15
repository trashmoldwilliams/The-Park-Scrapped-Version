function Battle(EnemyCharacter, Weather, Temperature) {
	this.EnemyCharacter = EnemyCharacter;
	this.Weather = Weather;
	this.Temperature = Temperature;
	this.Park = new Park();
	var battleState = "turnSetup";
	var playerCombatDocket;
	var enemyStrategyDocket;
	var enemyCombatDocket;
	var endingMovement;
}

//Turn Setup

$(".ability").click(function() {
	if (battleState === "turnExecution") {
		ability = event.target.id;

		if (ability.abilityType === "strategic") {
			ability.StrategicAbility.execute;

		} else if (ability.abilityType === "combat") {
			playerCombatDocket.push(ability);

		} else if (ability.abilityType === "movement") {
			if (isFirst === "player") {
				ability.MovementAbility.execute;

			} else {
				endingMovement = ability;
			}
		}
	}
});


//Turn Execution

$(".confirmCombat").click(function() {
	currentBattle.executeTurn();
});

Battle.prototype.executeTurn = function() {
	battleState = "turnExecution";
	var isFirst = isFirst(PlayerCharacter.Stats.ApproximateStats.MaxAP, this.EnemyCharacter.Stats.ApproximateStats.MaxAP);
	var isSecond = isSecond(isFirst);

	for (var i = 0; i <= [isFirst]CombatDocket; i++) {
		[isFirst]CombatDocket[i].CombatAbility.execute();
	}

	for (var i = 0; i <= [isSecond]CombatDocket; i++) {
		[isSecond]CombatDocket[i].CombatAbility.execute();
	}
	
	battleState = "turnSetup";
};


//Battle Functions

function isFirst(PlayerMaxAP, EnemyMaxAP) {
	if (PlayerMaxAP > EnemyMaxAP) {
		return "player";
	} else if (EnemyMaxAP > PlayerMaxAP) {
		return "enemy";
	} else {
		return "tie";
	}
}

function isSecond(isFirst) {
	if (isFirst === "tie") {
		return "N/A";

	}else if (isFirst === "player") {
		return "enemy";

	} else {
		return "player";
	}
}