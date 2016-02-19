describe('execute', function(user, target) {
  it("will execute the intented function of an ability", function() {
    //Setup Abilities

    var testAttack = new Ability("Test Attack", "combat", false, "AP", -10, "HP", 0 , "opponent", "N/A methods")

    Ability.prototype.testMethod = function () {
      // body...
    };


    //Setup Test Player
    var testPlayerExactStats = new ExactStats(3, 3, 3, 2, 2, 2)
    var testPlayerStats = new Stats("N/A FillerApproximateStats", testPlayerExactStats)

    var testPlayerAbilities = [testAttack];

    var testPlayer = new Character("Ralph", 15, "player", "N/A Sprites", testPlayerStats, testPlayerAbilities, "N/A Inventory", "N/A Body", "N/A Loadout")


    //Setup Test Enemy
    var testEnemyExactStats = new ExactStats(2, 2, 2, 3, 3, 3)
    var testEnemyStats = new Stats("N/A FillerApproximateStats", testEnemyExactStats)

    var testEnemyAbilities = [testAttack];

    var testEnemy = new Character("Jack", 15, "player", "N/A Sprites", testEnemyStats, testEnemyAbilities, "N/A Inventory", "N/A Body", "N/A Loadout")


    expect(testPlayer.Stats.ExactStats.currentAP).to.equal(20);
    expect(testEnemy.Stats.ExactStats.currentHP).to.equal(70);
  });
});
