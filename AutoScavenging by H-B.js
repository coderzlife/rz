// ==UserScript==
// @name        AutoScavenging by H-B
// @namespace   Violentmonkey Scripts
// @match       https://*.die-staemme.de/game.php?village=*&screen=place&mode=scavenge*
// @grant       none
// @version     1.1
// @author      -
// @description Raubzug
// ==/UserScript==

// WICHTIG !! : Vor der ersten Benutzung alle Truppen rausstellen und mit aktiviertem Script die preferences auf der Raubzugseite definieren!

//  Fenstertitel wenn Script aktiv
    document.title = "AutoScavenging";



async function loadCheese() {
    console.log('lade Truppensplit-Tool');
  (window.TwCheese && TwCheese.tryUseTool('ASS'))
  || $.ajax('https://cheesasaurus.github.io/twcheese/launch/ASS.js?'
  +~~((new Date())/3e5),{cache:1,dataType:"script"});void 0;

    await new Promise(r => setTimeout(r, 3000));
}

async function scavenge() {

  await loadCheese();                                                                         // Funktion load Chess ausführen ( externe skript zum splitten der trp.)
  var i;
  let Raubzug = document.getElementsByClassName("btn btn-default free_send_button").length;   //Wie viele Startknöpe gibt es
  let ongoing = document.getElementsByClassName("return-countdown").length;                   //wie viele Zeiten sind aktiv
      console.log('Ongoing: ' + ongoing);                                                     //Schreibe die Var Ongoing in die Konsole

  if (ongoing == 0){                                                                          //Sind 0 Raubzüge gestartet mache...
    for(i=Raubzug; i>0; i=i-1) {                                                             //Zählschleife, abhänig der Startknöpfe
    var y = Math.floor((Math.random() * 2500) + 750);                                         //Zufallszahl zw. 750 - 2500 ms
    await new Promise(r => setTimeout(r, y));                                                 //Timeoutbefehl aus der Zufallszahl
    let button = $ ("a.btn.btn-default.free_send_button")[i-1].click();                       //ausführen des Startknopfs Index 1 kommt von der Zählschleife
    console.log ('Raubzug gestartet');                                                        //Schreibe in Konsole
  }
     }
  else{                                                                                      //ansonsten......
      console.log ('kein Start => nicht alle Startknöpfe verfügbar');                        //Schreibe in Konsole
     }

  var x = Math.floor((Math.random() * 240000) + 180000);                                     //Zufallszahl wie Zeile 30
  console.log('Timeout:' + x/1000/60 + 'Minuten');                                         //Zahl in die Konsole schreiben (debug)
  var d = new Date();                                                                         //Zeitausgabe im Log
  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();                      //Zeitausgabe im Log
  console.log(time);                                                                          //Zeitausgabe im Log
  await new Promise(r => setTimeout(r, x));                                                  //Timeout mit der Zahl von Zeile 45
  return scavenge();                                                                         //return zu Funktion Scavenge
       }
scavenge();
