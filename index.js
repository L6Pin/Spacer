
var playerObj = {
    name: '',
    hp: 100,
    shield: 25,
    engine: true,
    rocketAmmo: true
}

var enemyObj = {
    name: '',
    hp: 100,
    shield: 25,
    engine: true,
    rocketAmmo: true
}

var weaponObj = {
    attackLaser: function () {
        return Math.floor((Math.random() * 20) + 10);

    },
    attackRocket: function () {
        return Math.floor((Math.random() * 15) + 25);

    }
}

var animationSystem = {
    //add the animation methodes for the enemy ship
    playerLaserAttack: function () {
        var playerShip = document.getElementById('playerShip')
        var playerLaserAttack = document.getElementById('playerShipLaserAttack')
        var playerRocketAttack = document.getElementById('playerShipRocketAttack')

        playerShip.style.display = 'none';
        playerLaserAttack.style.display = 'inline'
        playerRocketAttack.style.display = 'none';

        setTimeout(function () {
            playerShip.style.display = 'inline';
            playerLaserAttack.style.display = 'none'
            playerRocketAttack.style.display = 'none';
        }, 700);
    },

    playerRocketAttack: function () {
        var playerShip = document.getElementById('playerShip')
        var playerLaserAttack = document.getElementById('playerShipLaserAttack')
        var playerRocketAttack = document.getElementById('playerShipRocketAttack')

        playerShip.style.display = 'none';
        playerLaserAttack.style.display = 'none'
        playerRocketAttack.style.display = 'inline';

        setTimeout(function () {
            playerShip.style.display = 'inline';
            playerLaserAttack.style.display = 'none'
            playerRocketAttack.style.display = 'none';
        }, 700);
    },

    enemyLaserAttack: function () {
        var enemyShip = document.getElementById('enemyShip')
        var enemyLaserAttack = document.getElementById('enemyShipLaserAttack')
        var enemyRocketAttack = document.getElementById('EnemyShipAttackRocket')

        enemyShip.style.display = 'none';
        enemyLaserAttack.style.display = 'inline'
        enemyRocketAttack.style.display = 'none';

        setTimeout(function () {
            enemyShip.style.display = 'inline';
            enemyLaserAttack.style.display = 'none'
            enemyRocketAttack.style.display = 'none';
        }, 700);
    },

    enemyRocketAttack: function () {
        var enemyShip = document.getElementById('enemyShip')
        var enemyLaserAttack = document.getElementById('enemyShipLaserAttack')
        var enemyRocketAttack = document.getElementById('EnemyShipAttackRocket')

        enemyShip.style.display = 'none';
        enemyLaserAttack.style.display = 'none'
        enemyRocketAttack.style.display = 'inline';

        setTimeout(function () {
            enemyShip.style.display = 'inline';
            enemyLaserAttack.style.display = 'none'
            enemyRocketAttack.style.display = 'none';
        }, 700);
    },




}

attackSystem = { //as = Attacking Ship, ds = Defending Ship

    playerLaserAttack: function (ds) {

        document.getElementById('nameShip').style.color = 'green';
        var hitChance = Math.floor((Math.random() * 100) + 1);
        var hitChanceDisableEngine = Math.floor((Math.random() * 100) + 1);
        var currentDamage = weaponObj.attackLaser();

        // ------ IF PLAYER ENGINES ARE ENABLED ----- //
        if (shipList[ds].engine === true) {
            if (shipList[ds].shield > 0) {
                if (hitChance > 40) {
                    shipList[ds].shield = shipList[ds].shield - currentDamage;
                    if (shipList[ds].shield < 0) {
                        document.getElementById('enemyShield').innerHTML = '0'
                        document.getElementById('enemyShield').style.color = 'gray';
                        document.getElementById('nameShip').innerHTML = 'The Peruvian‎‎‎‎‎‎‎‏‏‎ ‎';
                        document.getElementById('restOfText').innerHTML = ' destroys the enemy shields!'
                        return;
                    }
                    else {
                        document.getElementById('enemyShield').innerHTML = shipList[ds].shield;
                        document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                        document.getElementById('restOfText').innerHTML = ' hits the enemy shield dealing ' + currentDamage + ' damage.'
                    }
                }
                else {
                    document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                    document.getElementById('restOfText').innerHTML = ' missed the enemy ship with lasers!'
                }
            }
            else {
                if (hitChance > 40) {
                    var currentLaserDamage = weaponObj.attackLaser();
                    shipList[ds].hp = shipList[ds].hp - currentLaserDamage;
                    document.getElementById('enemyHp').innerHTML = shipList[ds].hp;


                    if (hitChanceDisableEngine > 90) {
                        shipList[ds].engine = false;
                        document.getElementById('enemyEngine').innerHTML = shipList[ds].engine;
                        document.getElementById('enemyEngine').style.color = 'gray';

                        shipList[ds].engine === false;
                        document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                        document.getElementById('restOfText').innerHTML = ' hits the enemy ship dealing ' + currentDamage + ' damage and destroyes their engines (+20% hit chance)'
                        return
                    }

                    document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                    document.getElementById('restOfText').innerHTML = ' hits the enemy ship dealing ' + currentLaserDamage + ' damage.'
                }
                else {
                    document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                    document.getElementById('restOfText').innerHTML = ' missed the enemy ship with lasers!'
                }
            }
        }
        // ------ IF PLAYER ENGINES ARE DISABLED ----- //
        else {
            console.log('Attacking the enemy with his engines off')
            var hitChance = Math.floor((Math.random() * 100) + 1);

            if (hitChance > 20) {
                var currentLaserDamage = weaponObj.attackLaser();
                shipList[ds].hp = shipList[ds].hp - currentLaserDamage;
                document.getElementById('enemyHp').innerHTML = shipList[ds].hp;
                document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                document.getElementById('restOfText').innerHTML = ' hits the enemy ship dealing ' + currentLaserDamage + ' damage.'

            }
            else {
                document.getElementById('nameShip').innerHTML = 'The Peruvian‏‏‎ ‎';
                document.getElementById('restOfText').innerHTML = ' missed the enemy ship with lasers!'
            }
        }
    },

    enemyLaserAttack: function (ds) {
        trigger;
        document.getElementById('nameShip').style.color = 'red';
        var hitChance = Math.floor((Math.random() * 100) + 1);
        var hitChanceDisableEngine = Math.floor((Math.random() * 100) + 1);
        var currentLaserDamage = weaponObj.attackLaser();

        // ------ IF ENEMY ENGINES ARE ENABLED ----- //
        if (shipList[ds].engine === true) {
            if (shipList[ds].shield > 0) {
                if (hitChance > 40) {
                    shipList[ds].shield = shipList[ds].shield - currentLaserDamage;
                    if (shipList[ds].shield < 0) {
                        document.getElementById('playerShield').innerHTML = '0'
                        document.getElementById('playerShield').style.color = 'gray';
                        document.getElementById('nameShip').innerHTML = 'The Sutherland‎‎‎‎‎‎‎‏‏‎ ‎';
                        document.getElementById('restOfText').innerHTML = ' destroys the player shields!'
                        return;
                    }
                    else {
                        document.getElementById('playerShield').innerHTML = shipList[ds].shield;
                        document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎ ‎';
                        document.getElementById('restOfText').innerHTML = ' hits the player shield dealing ' + currentLaserDamage + ' damage.'
                    }
                }
                else {
                    document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎ ‎';
                    document.getElementById('restOfText').innerHTML = ' missed the player ship with lasers!'
                }
            }
            else {
                if (hitChance > 40) {
                    var currentLaserDamage = weaponObj.attackLaser();
                    shipList[ds].hp = shipList[ds].hp - currentLaserDamage;
                    document.getElementById('playerHp').innerHTML = shipList[ds].hp;


                    if (hitChanceDisableEngine > 90) {
                        shipList[ds].engine = false;
                        document.getElementById('playerEngine').innerHTML = shipList[ds].engine;
                        document.getElementById('playerEngine').style.color = 'gray';
                        shipList[ds].engine === false;

                        document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎‎';
                        document.getElementById('restOfText').innerHTML = ' hits the enemy ship dealing ' + currentLaserDamage + ' damage and destroyes their engines (+20% hit chance)'
                        return;
                    }


                    document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎‎';
                    document.getElementById('restOfText').innerHTML = ' hits the enemy ship dealing ' + currentLaserDamage + ' damage.'
                }
                else {
                    document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎ ‎';
                    document.getElementById('restOfText').innerHTML = ' missed the player ship with lasers!'
                }
            }
        }
        // ------ IF ENEMY ENGINES ARE DISABLED ----- //
        else {
            console.log('Attacking the player with his engines off')
            var hitChance = Math.floor((Math.random() * 100) + 1);

            if (hitChance > 20) {
                var currentLaserDamage = weaponObj.attackLaser();
                shipList[ds].hp = shipList[ds].hp - currentLaserDamage;
                document.getElementById('playerHp').innerHTML = shipList[ds].hp;
                document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎ ‎';

                setTimeout(() => {

                }, 3000);
                document.getElementById('restOfText').innerHTML = ' hits the enemy ship dealing ' + currentLaserDamage + ' damage.'
            }
            else {
                document.getElementById('nameShip').innerHTML = 'The Sutherland‏‏‎ ‎';
                document.getElementById('restOfText').innerHTML = ' missed the enemy ship with lasers!'
            }
        }
    },

    rocketAttack: function (as, ds) {

        var hitChance = Math.floor((Math.random() * 100) + 1);
        var currentRocketDamage = weaponObj.attackRocket();
        var hitChanceCheck = 65;

        if (as === 0) {
            document.getElementById('nameShip').style.color = 'green';
        }
        else {
            document.getElementById('nameShip').style.color = 'red';
        }

        if (shipList[ds].engine === false) {
            hitChanceCheck = 45;
        }

        if (shipList[as].rocketAmmo === true) {
            if (shipList[ds].engine === true) {
                if (hitChance > hitChanceCheck) {
                    shipList[ds].hp = shipList[ds].hp - currentRocketDamage;
                    document.getElementById('nameShip').innerHTML = 'The ‎' + shipList[as].name;
                    document.getElementById('restOfText').innerHTML = 'hits the ‎' + shipList[ds].name + ' ‎with a rocket dealing ‎' + currentRocketDamage + ' ‎damage';
                    shipList[as].rocketAmmo = false;
                }
                else {
                    document.getElementById('nameShip').innerHTML = 'The ‎' + shipList[as].name;
                    document.getElementById('restOfText').innerHTML = ' ‎rocket attack missed!';
                    shipList[as].rocketAmmo = false;
                }
            }
        }
        else {
            document.getElementById('nameShip').innerHTML = 'The ‎' + shipList[as].name;
            document.getElementById('restOfText').innerHTML = ' ‎does not have any rockets left';
        }
    }
}





function checkEndGame (){

    if (playerObj.hp <= 0){
        document.getElementById('playerHp').innerHTML = '0'
        document.getElementById('playerHp').style.color = 'red';
        document.getElementById('nameShip').innerHTML = 'The Peruvian‎‎‎‎‎‎‎‏‏‎ ‎';
        document.getElementById('restOfText').innerHTML = ' is destroyed!'
        document.getElementById('nameShip').style.color = 'green'
        setTimeout(function(){
           
            document.getElementById('enemy_vic').style.opacity = '1'
            document.getElementById('enemy_vic').style.zIndex = '9999'

        }, 3000)

        return;
    }
    if (enemyObj.hp <= 0){

        document.getElementById('enemyHp').innerHTML = '0'
        document.getElementById('enemyHp').style.color = 'red';
        document.getElementById('nameShip').innerHTML = 'The Sutherland‎‎‎‎‎‎‎‏‏‎ ‎‎';
        document.getElementById('restOfText').innerHTML = ' is destroyed!'
        document.getElementById('nameShip').style.color = 'red'

        setTimeout(function(){
 
            document.getElementById('player_vic').style.opacity = '1'
            document.getElementById('player_vic').style.zIndex = '9999'
        }, 3000)
        return;
    }
}







// AUDIO 
document.getElementById('music_on').style.display = 'none';
var bgMusic = new Audio("./sound/bgMusic.mp3");
var missleSound = new Audio("./sound/missleSound.mp3")
var isPlaying = false;
var isToggleMenu = false;
bgMusic.loop = true;



trigger = {
    playerLaserAttack: function () {
        document.getElementById('btnLaser').disabled = true
        document.getElementById('restOfText').innerHTML = ''
        document.getElementById('nameShip').innerHTML = ''
        document.getElementById('btnLaser').classList.add("button_clicked");

        animationSystem.playerLaserAttack();

        var playerLaserSound = new Audio("./sound/playerLaserSound.mp3");

        setTimeout(() => {
            playerLaserSound.play()
        }, 0)

        setTimeout(() => {
            attackSystem.playerLaserAttack(1);
            checkEndGame ()
        }, 1200);

        checkEndGame ()
   
    },

    playerRocketAttack: function () {
        document.getElementById('btnRocket').disabled = true
        document.getElementById('restOfText').innerHTML = ''
        document.getElementById('nameShip').innerHTML = ''
        document.getElementById('btnRocket').classList.add("button_clicked");

        if (shipList[0].rocketAmmo === true) {
            animationSystem.playerRocketAttack()
            missleSound.play()
        }

        setTimeout(() => {
            attackSystem.rocketAttack(0, 1);
            document.getElementById('playerRockets').style.color = 'gray'
            document.getElementById('playerRockets').innerHTML = 'false'
            document.getElementById('enemyHp').innerHTML = shipList[1].hp;
            checkEndGame ()
        }, 800);
       
    },

    endTurn: function () {

        document.getElementById('btnEndTurn').disabled = true
        document.getElementById('btnLaser').disabled = true
        document.getElementById('btnRocket').disabled = true

        document.getElementById('restOfText').innerHTML = ''
        document.getElementById('nameShip').innerHTML = ''

        document.getElementById('btnEndTurn').classList.add("button_clicked");

        var weaponChoiceChance = Math.floor((Math.random() * 100) + 1)





        if (weaponChoiceChance > 80) {
            if (shipList[1].rocketAmmo === true) {
                animationSystem.enemyRocketAttack()
                missleSound.play()
                setTimeout(() => {
                    attackSystem.rocketAttack(1, 0);
                    document.getElementById('enemyRockets').style.color = 'gray'
                    document.getElementById('enemyRockets').innerHTML = 'false'
                    document.getElementById('playerHp').innerHTML = shipList[0].hp;
                    checkEndGame()
                }, 800);
               
            }
            else {
                animationSystem.enemyLaserAttack()
                var enemyLaserSound = new Audio("./sound/enemyLaserSound.mp3");
                enemyLaserSound.play()
                setTimeout(() => {
                    attackSystem.enemyLaserAttack(0);
                    checkEndGame ()
                }, 800);
            }
        }
        else {
            animationSystem.enemyLaserAttack()
            var enemyLaserSound = new Audio("./sound/enemyLaserSound.mp3");
            enemyLaserSound.play()
            setTimeout(() => {
                attackSystem.enemyLaserAttack(0);
                checkEndGame ()
            }, 800);
            
        }

        setTimeout(() => {
            document.getElementById('btnEndTurn').disabled = false;
            document.getElementById('btnLaser').disabled = false;
            document.getElementById('btnRocket').disabled = false;

            document.getElementById('btnLaser').classList.remove("button_clicked");
            document.getElementById('btnRocket').classList.remove("button_clicked");
            document.getElementById('btnEndTurn').classList.remove("button_clicked");

        }, 800);

        


    },

    toggleMusic: function () {

        if (isPlaying === false) {
            bgMusic.play()
            isPlaying = true;
            document.getElementById('music_on').style.display = 'inline';
            document.getElementById('music_off').style.display = 'none';
        }
        else {

            bgMusic.pause();
            isPlaying = false;
            document.getElementById('music_on').style.display = 'none';
            document.getElementById('music_off').style.display = 'inline';
        }

    },

    toggleMenu: function (){

        if (isToggleMenu === false){
            document.getElementById('menu').style.zIndex = '100'
            document.getElementById('menu_btn').style.position = 'relative';
            document.getElementById('menu_btn').style.zIndex = '120'
            isToggleMenu = true;
        }
        else{
            document.getElementById('menu').style.zIndex = '-1'
            document.getElementById('menu_btn').style.position = 'static';
            document.getElementById('menu_btn').style.zIndex = '0'
            isToggleMenu = false;
        }

    },

    startGame: function () {
        document.getElementById('landing_section').style.display = 'none';
        bgMusic.play()
        isPlaying = true;
        document.getElementById('music_on').style.display = 'inline';
        document.getElementById('music_off').style.display = 'none';
    }
}


var shipList = [playerObj, enemyObj];
shipList[0].name = 'Peruvian'
shipList[1].name = 'Sutherland'


document.getElementById('enemyHp').innerHTML = shipList[1].hp
document.getElementById('enemyShield').innerHTML = shipList[1].shield
document.getElementById('enemyRockets').innerHTML = shipList[1].rocketAmmo
document.getElementById('enemyEngine').innerHTML = shipList[1].engine

document.getElementById('playerHp').innerHTML = shipList[0].hp
document.getElementById('playerShield').innerHTML = shipList[0].shield
document.getElementById('playerRockets').innerHTML = shipList[0].rocketAmmo
document.getElementById('playerEngine').innerHTML = shipList[0].engine






























