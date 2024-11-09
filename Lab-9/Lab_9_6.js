const car = {
    speedometer: 0,
};
Object.defineProperty(car, 'setSpeedometer', {
    value: function(speed) {
        this.speedometer = speed;
        return this;
    },
});
Object.defineProperty(car, 'getSpeedometer', {
    value: function() {
        console.log(this.speedometer);
        return this;
    },
});
Object.defineProperty(car, 'clearSpeedometer', {
    value: function() {
        this.speedometer = 0;
        return this;
    },
});

car.setSpeedometer(200).setSpeedometer(300).getSpeedometer().clearSpeedometer();