const soldier = {
  name: "Рядовой Райан",
  health: 10,
  weapon: {
    nameWeapon: "M16",
    cartridges: 30,
  },
  supplies: 3,
  fire: function () {
    if (this.weapon.cartridges !== 0) {
      this.weapon.cartridges--;
      console.log("бах-бах");
    }
    if (this.weapon.cartridges === 0) {
      console.log("Обойма пуста. Перезарядитесь");
      this.recharge();
    }
  },
  recharge: function () {
    this.weapon.cartridges = 30;
    if (this.supplies !== 0) {
      this.supplies--;
      console.log("перезарядка");
    }
    if (this.supplies === 0) {
      console.log("не осталось припасов");
    }
  },
  hurt: function () {
    if (this.health === 0) {
      console.log("Ты проиграл");
    }
    if (this.health !== 0) {
      this.health--;
    }
  },
};
console.log(soldier);
