let nameC1 = prompt(`What's the name of character 1?`);
let nameC2 = prompt(`What's the name of the character 2?`);

let powerC1 = parseFloat(prompt(`What's the attack damage of ${nameC1}?`));
let lifeC2 = parseFloat(prompt(`How many life points does ${nameC2} have?`));
let defenseC2 = parseFloat(
  prompt(`How many defense points does ${nameC2} have?`)
);
let shieldC2 = confirm(`the ${nameC2} have a shield?`);

let damageDealt = 0;

if (powerC1 > defenseC2 && shieldC2 === false) {
  damageDealt = powerC1 - defenseC2;
} else if (powerC1 > defenseC2 && shieldC2 === true) {
  damageDealt = (powerC1 - defenseC2) / 2;
} 

if(shieldC2 === true){
    shieldC2 = "has a shield"
}else {
    shieldC2 = "doesn't have a shield"
}

lifeC2 -= damageDealt

alert(`
    the ${nameC1} dealt ${damageDealt} attack damage to ${nameC2}\n
`);
alert(`
    ${nameC1}: \n
    attack damage: ${powerC1}\n

    ${nameC2}: \n
    life points: ${lifeC2}\n
    defense: ${defenseC2}\n
    shield: ${shieldC2}
    `);