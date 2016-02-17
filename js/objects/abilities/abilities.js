function Ability(abilityID, abilityType, isSpecial, inputType, inputVal, outputType, outputVal, abilityTarget, methods) {
	this.abilityID = abilityID;
	this.abilityType = abilityType;
	this.isSpecial = isSpecial;
	this.inputType = inputType;
	this.inputVal = inputVal;
	this.outputType = outputType;
	this.outputVal = outputVal;
	this.abilityTarget = abilityTarget;
	this.methods = methods;

}

Ability.prototype.execute = function (user, opponent) {
	user.current[inputType] += inputVal;
	eval(target).current[outputType] += outputVal;
	for (var i = 0; i <= functions.length; i++)
	{
		methods[i];
	}
};
