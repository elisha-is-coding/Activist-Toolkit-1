/*misconceptions fact (homepage)*/
var factList = [
  "Myth: 'Most sexual assaults occur at night in dark alleys away from others.' Fact: 'Many sexual assaults occur during the day and often in the homes of the people involved.'",/*0*/
  "Myth: 'Women who wear revealing clothes are asking to be sexually assaulted.' Fact: 'No one asks or deserves to be sexually assaulted. Women dress to feel comfortable and attractive. Perpetrators are responsible for their own actions.'",/*1*/
  "Myth: 'Most sexual assaults are committed by strangers.' Fact: '8 out of 10 victims of sexual assault are assaulted by someone they know.'",/*2*/
  "Myth: 'If someone is drinking or taking drugs they are asking to be sexually assaulted.' Fact: 'Being under the influence of alcohol or drugs can prevent a person from being able to consent to sexual acts with another person. It is a crime to have sex with a person who cannot consent due to being intoxicated or drugged. Remember that drinking and taking drugs does not influence good decision making.'",/*3*/
  "Myth: 'Children who dress like adults and act in a provocative way are asking to be sexually abused.' Fact: 'A child’s appearance or behaviour does not excuse an abuser’s behaviour. A child, by law, is unable consent to any sexual activity with another person no matter how they dress or act. No child asks or deserves to be sexually abused.'",/*4*/
  "Myth: '‘No’ can sometimes mean ‘yes’ – women sometimes play ‘hard to get’.' Fact: 'No means NO!'",/*5*/
  "Myth: 'Some children let the abuse go on for a long time because they like it.' Fact: 'A child may not tell anyone about the abuse for many reasons. This may be because the abuser threatened them, or they may feel ashamed or they may feel guilty. Sometimes they do not tell in order to keep the family together.'",/*6*/
  "Myth: 'Men sexually assault others because they are sexually frustrated or cannot control themselves.' Fact: 'The majority of sexual assaults are well planned and do not involve a loss of control on the perpetrator’s part.'",/*7*/
  "Myth: 'If a person did not scream or fight or has no injury, it could not have been a sexual assault.' Fact: 'Despite what you might see on TV, most people do not scream or fight. This is because they freeze. It is a common reaction for people to become paralysed with fear.'",/*8*/
  "Myth: 'Women enjoy being sexually assaulted.' Fact: 'Any form of sexual violence is a frightening and humiliating experience during which the person has no control over what happens. No one enjoys an experience like that.'",/*9*/
  "Myth: 'Prostitutes cannot be sexually assaulted.' Fact: 'Everyone has the right to say no to sexual acts they do not want.'",/*10*/
];

var fact = document.getElementById("fact");
var misconceptButton = document.getElementById("misconceptButton");
var count = 0;

if (misconceptButton){
  misconceptButton.addEventListener("click", displayFact);
}


function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

