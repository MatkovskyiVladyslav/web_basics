class Animal {
    constructor(age = 0) {
        this.age = age;
        this.isHeterotrophic = true; // Гетеротрофність (споживання готових органічних речовин)
        this.canMoveFreely = true;   // Здатність вільно рухатись
    }
}
class Mammal extends Animal {
    constructor(name, age, HairColor = '') {
        super(name, age);
        this.furColor = HairColor;
        this.hasLargeBrain = true;   // Наявність великого мозку
    }
}
class Primate extends Mammal {
    constructor(name, age, HairColor) {
        super(name, age, HairColor);
    }
}
class Human extends Primate {
    constructor(name, age, HairColor, language = 'ukrainian'){
        super(name, age, HairColor);
        this.language = language;
    }
}

