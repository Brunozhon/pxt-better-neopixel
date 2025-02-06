//% color="#AA278D" weight=100 icon="\uf0eb" block="Better NeoPixel"
namespace betterNeopixel {
    enum Style {
        //% block="outside to inside"
        oti = 0,
        //% block="inside to outside"
        ito = 1,
        //% block="left to right"
        ltr = 2,
        //% block="right to left"
        rtl = 3,
    }
    
    //% block="create graph with $np|using value $value|capped at $max|using style $style"
    export function createGraph(np: neopixel.Strip,
    value: number, max: number, style: Style) {
        let percent = value / max
        let half_length = Math.floor(np.length() / 2)
        let np_to_light = Math.round(
            Math.min(half_length, percent * half_length)
        )

        for (let i = 0; i < np_to_light; i++) {
            switch (style) {
            case Style.oti:
                np.setPixelColor(i, neopixel.colors(NeoPixelColors.White))
                np.setPixelColor(29 - i, neopixel.colors(NeoPixelColors.White))
            }
        }
    }
}
