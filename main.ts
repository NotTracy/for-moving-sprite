input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 1; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index <= 1; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    for (let index = 0; index <= 1; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index <= 1; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    for (let index = 0; index <= 1; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index <= 3; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index <= 3; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index <= 3; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    for (let index = 0; index <= 3; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index <= 3; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(3, 3)
basic.forever(function () {
	
})
