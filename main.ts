input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 14; index++) {
        temp = randint(15, 27)
        if (temp >= temp_max) {
            temp_max = temp
        }
        if (temp <= temp_min) {
            temp_min = temp
        }
        acum_temp = acum_temp + temp
    }
    prom_temp = acum_temp / 14
    basic.showString("Prom_temp")
    basic.showNumber(prom_temp)
    basic.pause(500)
    basic.showString("Temp_max")
    basic.showNumber(temp_max)
    basic.pause(500)
    basic.showString("Temp_min")
    basic.showNumber(temp_min)
    basic.pause(500)
})
let temp_max = 0
let temp_min = 0
let prom_temp = 0
let acum_temp = 0
let temp = 0
temp = 0
acum_temp = 0
prom_temp = 0
prom_temp = 0
temp_min = 0
