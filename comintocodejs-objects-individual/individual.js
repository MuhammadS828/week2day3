const carlJonson = {
  HP: 100,
  bodyArmor: 0,
  wanted: {
    condition: false,
    wantedLevel: 0,
  },
  patrons: 30,
  cash: 0,
  fire: function () {
    if (this.patrons !== 0) {
      this.patrons--;
      console.log("Умри, ублюдок");
    }
    if (this.patrons === 0) {
      console.log("Черт, мне конец");
    }
  },
  findBodyArmor: function () {
    this.bodyArmor = 100;
    console.log("Я пуленепробиваемый");
  },
  hesoyam: function () {
    this.bodyArmor = 100;
    this.HP = 100;
    this.cash += 100000;
    console.log('Как хорошо, что есть чит-коды')
  },
  killCop: function () {
   this.wanted.condition = true;
   this.wanted.wantedLevel = 2;
   console.log('Сдохни, мусор!')
  },
  shootingAtThePoliceStation: function() {
    this.killCop();
    this.wanted.wantedLevel = 6;
    console.log('Я враг государства номер 1');
  }


};
