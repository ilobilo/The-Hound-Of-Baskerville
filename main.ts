controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sherlock,
    [img`
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e e e e c e e e . . 
        e e e e e e c c e e e c . 
        e e e c e e e e e e e c . 
        c c c e e e e e e e c e . 
        e e e e e e e e e c c e . 
        e e e b f 4 e f b e e e . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 8 8 8 8 b f e f . 
        e 4 f 8 8 8 8 8 8 f 4 e . 
        e e f 8 8 8 8 8 8 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . e e e e . . . . 
        . . . e e e e e e e e . . 
        . . e e e e e e c e e e . 
        e e e e e e e c c e e e c 
        e e e e c e e e e e e e c 
        . c c c e e e e e e e c c 
        . e e e e e e e e e c c e 
        . e e e b f 4 e f b e e e 
        . e e 4 1 f 4 4 f 1 4 e f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 8 8 8 e 4 4 4 e 
        . e 4 f 8 8 8 8 e 4 4 e . 
        . . . f 8 8 8 8 8 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e c e e e e e e . . 
        c e e e c c e e e e e e e 
        c e e e e e e e c e e e e 
        c c e e e e e e e c c e . 
        e c c e e e e e e e e e . 
        e e e b f 4 e f b e e e . 
        f e 4 1 f 4 4 f 1 4 e f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 8 8 8 b f e f . 
        . e 4 4 e 8 8 8 8 f 4 e . 
        . . e e 8 8 8 8 8 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    250,
    false
    )
})
function StartLevel () {
    Velocity = -25
    Shooted = false
    Started = true
    Sherlock = sprites.create(img`
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e e e e c e e e . . 
        e e e e e e c c e e e c . 
        e e e c e e e e e e e c . 
        c c c e e e e e e e c c . 
        e e e e e e e e e c c e . 
        e e e b f e e f b e e e . 
        . e 4 1 f 4 4 f 1 4 e . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 8 8 8 8 b f e f . 
        e 4 f 8 8 8 8 8 8 f 4 e . 
        e e f 8 8 8 8 8 8 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Sherlock, 75, 75)
    Sherlock.setStayInScreen(true)
    Sherlock.setBounceOnWall(true)
    ms = 2250
    info.setLife(3)
    info.setScore(0)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Started == true) {
        if (info.score() >= 50) {
            if (ShootedFireBall == false) {
                FireBall = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 5 2 5 2 . . . . 
                    . . . . . . 5 5 4 4 4 4 2 2 . . 
                    . . . . 5 5 4 4 2 4 4 4 4 2 2 . 
                    . . . 5 4 5 4 4 4 4 4 5 2 4 2 . 
                    . 4 4 5 4 4 4 5 4 5 4 4 4 4 2 2 
                    5 5 5 5 4 5 4 4 4 4 4 4 4 4 4 2 
                    . 4 5 4 4 2 4 4 2 4 4 2 4 4 2 2 
                    . . . 5 4 4 5 4 4 4 4 4 4 2 2 . 
                    . . . 4 5 5 4 4 4 5 4 4 2 2 . . 
                    . . . . . 5 5 5 5 2 2 2 2 . . . 
                    . . . . . . . . 2 5 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Sherlock, 150, 0)
                FireBall.setFlag(SpriteFlag.GhostThroughWalls, true)
                music.buzzer.play()
                ShootedFireBall = true
            }
        } else {
            game.showLongText("Reach 50 Points To Unlock FireBall!", DialogLayout.Bottom)
        }
    }
})
function ShowWelcomeScreen () {
    game.splash("Haund Of The Baskerville", "Press A")
    StartLevel()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Started == true) {
        if (Shooted == false) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . c e e e 8 4 . . . . . 
                . . . . . c e e 4 8 4 4 . . . . 
                . . . . . c e e 4 4 4 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sherlock, 150, 0)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            music.pewPew.play()
            Shooted = true
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sherlock,
    [img`
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e e e e c e e e . . 
        e e e e e e c c e e e c . 
        e e e c e e e e e e e c . 
        c c c e e e e e e e c e . 
        e e e e e e e e e c c e . 
        e e e b f 4 e f b e e e . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 8 8 8 8 b f e f . 
        e 4 f 8 8 8 8 8 8 f 4 e . 
        e e f 8 8 8 8 8 8 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . e e e e . . . . 
        . . . e e e e e e e e . . 
        . . e e e e e e c e e e . 
        e e e e e e e c c e e e c 
        e e e e c e e e e e e e c 
        . c c c e e e e e e e c c 
        . e e e e e e e e e c c e 
        . e e e b f 4 e f b e e e 
        . e e 4 1 f 4 4 f 1 4 e f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 8 8 8 e 4 4 4 e 
        . e 4 f 8 8 8 8 e 4 4 e . 
        . . . f 8 8 8 8 8 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e c e e e e e e . . 
        c e e e c c e e e e e e e 
        c e e e e e e e c e e e e 
        c c e e e e e e e c c e . 
        e c c e e e e e e e e e . 
        e e e b f 4 e f b e e e . 
        f e 4 1 f 4 4 f 1 4 e f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 8 8 8 b f e f . 
        . e 4 4 e 8 8 8 8 f 4 e . 
        . . e e 8 8 8 8 8 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    250,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sherlock,
    [img`
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e e e e c e e e . . 
        e e e e e e c c e e e c . 
        e e e c e e e e e e e c . 
        c c c e e e e e e e c e . 
        e e e e e e e e e c c e . 
        e e e b f 4 e f b e e e . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 8 8 8 8 b f e f . 
        e 4 f 8 8 8 8 8 8 f 4 e . 
        e e f 8 8 8 8 8 8 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . e e e e . . . . 
        . . . e e e e e e e e . . 
        . . e e e e e e c e e e . 
        e e e e e e e c c e e e c 
        e e e e c e e e e e e e c 
        . c c c e e e e e e e c c 
        . e e e e e e e e e c c e 
        . e e e b f 4 e f b e e e 
        . e e 4 1 f 4 4 f 1 4 e f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 8 8 8 e 4 4 4 e 
        . e 4 f 8 8 8 8 e 4 4 e . 
        . . . f 8 8 8 8 8 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e c e e e e e e . . 
        c e e e c c e e e e e e e 
        c e e e e e e e c e e e e 
        c c e e e e e e e c c e . 
        e c c e e e e e e e e e . 
        e e e b f 4 e f b e e e . 
        f e 4 1 f 4 4 f 1 4 e f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 8 8 8 b f e f . 
        . e 4 4 e 8 8 8 8 f 4 e . 
        . . e e 8 8 8 8 8 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    250,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Sherlock,
    [img`
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e e e e c e e e . . 
        e e e e e e c c e e e c . 
        e e e c e e e e e e e c . 
        c c c e e e e e e e c e . 
        e e e e e e e e e c c e . 
        e e e b f 4 e f b e e e . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 8 8 8 8 b f e f . 
        e 4 f 8 8 8 8 8 8 f 4 e . 
        e e f 8 8 8 8 8 8 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . e e e e . . . . 
        . . . e e e e e e e e . . 
        . . e e e e e e c e e e . 
        e e e e e e e c c e e e c 
        e e e e c e e e e e e e c 
        . c c c e e e e e e e c c 
        . e e e e e e e e e c c e 
        . e e e b f 4 e f b e e e 
        . e e 4 1 f 4 4 f 1 4 e f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 8 8 8 e 4 4 4 e 
        . e 4 f 8 8 8 8 e 4 4 e . 
        . . . f 8 8 8 8 8 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . e e e e . . . . . 
        . . e e e e e e e e . . . 
        . e e e c e e e e e e . . 
        c e e e c c e e e e e e e 
        c e e e e e e e c e e e e 
        c c e e e e e e e c c e . 
        e c c e e e e e e e e e . 
        e e e b f 4 e f b e e e . 
        f e 4 1 f 4 4 f 1 4 e f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 8 8 8 b f e f . 
        . e 4 4 e 8 8 8 8 f 4 e . 
        . . e e 8 8 8 8 8 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    250,
    false
    )
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Started == true) {
        Started = false
        game.splash("Paused", "Press A to Continue")
        Started = true
    }
})
info.onLifeZero(function () {
    Started = false
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 4 . . . . . . 
        . . . . 4 . 4 . . 5 4 . . . . . 
        . . . . 5 2 4 5 . 5 . 2 . . . . 
        . . . . 5 2 4 5 2 4 4 4 . . . . 
        . . 4 . 2 4 4 4 5 5 4 4 . . . . 
        . . . . 4 5 5 4 4 4 . 4 4 . . . 
        . . . . 5 4 5 4 4 4 4 . . . . . 
        . . 5 4 2 4 2 4 . 2 2 4 . . . . 
        . . . . 4 4 4 5 . 5 5 4 . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 2 . . 4 2 . . . . 
        . . . . . . 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 2 . 4 4 4 4 . . . . . 
        . . . . 2 4 4 2 5 . 4 . . . . . 
        . . . . . 5 . 5 2 5 5 4 . . . . 
        . . . . . 4 5 . 4 4 4 . . . . . 
        . . . . . 4 4 4 2 2 5 . . . . . 
        . . . . 4 . . 2 . 5 5 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 2 5 . . . . . . . 
        . . . . . . . 5 . 2 5 . . . . . 
        . . . . . . 5 . . 4 4 . . . . . 
        . . . . . . 4 4 2 2 5 . . . . . 
        . . . . . . . 2 . 5 . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    25,
    false
    )
    info.changeScoreBy(5)
    otherSprite.destroy()
    if (sprite == FireBall) {
        music.bigCrash.play()
    } else {
        music.smallCrash.play()
    }
    pause(100)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.bigCrash.play()
    scene.cameraShake(4, 500)
})
let Totally_A_Dog: Sprite = null
let projectile: Sprite = null
let FireBall: Sprite = null
let ShootedFireBall = false
let ms = 0
let Shooted = false
let Velocity = 0
let Sherlock: Sprite = null
let Started = false
Started = false
tiles.setTilemap(tilemap`level1`)
ShowWelcomeScreen()
game.onUpdateInterval(ms, function () {
    if (Started == true) {
        Totally_A_Dog = sprites.create(img`
            . . . c c . . c c . . . . . . . 
            . . . c e e f f c . . . . . . . 
            . . . e e e e e e . . . . . . . 
            . . e e 2 e e e e . . . . . . . 
            . f e e e e e e e . . . . . . . 
            . f e e e e e e . . . . . . . . 
            . . 5 4 4 e e e . . . . . . . . 
            . 5 5 2 e e e e 8 f 6 . . . . . 
            . 5 4 . e e e e e f e e e e e . 
            . 2 . . . e e 6 e e e f 8 e 2 4 
            . . . . . e f e e f e 8 8 . 5 2 
            . . . . . 8 f f f f e e . . . 4 
            . . . . . e e e e e f e 8 . . . 
            . . . . . 8 e e . e e e e . . . 
            . . . . . 2 e . . . e 4 e . . . 
            . . . . 4 4 2 . . . 2 2 4 . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Totally_A_Dog,
        [img`
            . . . c c . . c c . . . . . . . 
            . . . c e e f f c . . . . . . . 
            . . . e e e e e e . . . . . . . 
            . . e e 2 e e e e . . . . . . . 
            . f e e e e e e e . . . . . . . 
            . f e e e e e e . . . . . . . . 
            . . 5 4 4 e e e . . . . . . . . 
            . . 4 2 e e e e 8 f 6 . . . . 5 
            . . . . e e e e e f e e e e 4 2 
            . . . . . e e 6 e e e f 8 e e 5 
            . . . . . e f e e f e 8 8 . . . 
            . . . . . 8 f f f f e e . . . . 
            . . . . . e e e e e f e 8 . . . 
            . . . . . 8 2 e . e e e e . . . 
            . . . . . 4 4 2 . . e 4 e . . . 
            . . . . . . . . . . 2 2 4 . . . 
            `,img`
            . . . c c . . c c . . . . . . . 
            . . . c e e f f c . . . . . . . 
            . . . e e e e e e . . . . . . . 
            . . e e 2 e e e e . . . . . . . 
            . f e e e e e e e . . . . . . . 
            . f e e e e e e . . . . . . . . 
            . . 5 4 4 e e e . . . . . . . . 
            . 2 4 2 e e e e 8 f 6 . . . . 5 
            . 4 5 . e e e e e f e e e e 4 2 
            . 4 . . . e e 6 e e e f 8 e e 5 
            . . . . . e f e e f e 8 8 . . . 
            . . . . . 8 f f f f e e . . . . 
            . . . . . e e e e e f e 8 . . . 
            . . . . . 8 2 e . e e 4 e . . . 
            . . . . . 4 e e . . 2 2 4 . . . 
            . . . . 4 4 2 . . . . . . . . . 
            `,img`
            . . . c c . . c c . . . . . . . 
            . . . c e e f f c . . . . . . . 
            . . . e e e e e e . . . . . . . 
            . . e e 2 e e e e . . . . . . . 
            . f e e e e e e e . . . . . . . 
            . f e e e e e e . . . . . . . . 
            . . 5 4 4 e e e . . . . . . . . 
            . 5 5 2 e e e e 8 f 6 . . . . . 
            . 5 4 . e e e e e f e e e e 4 . 
            . 2 . . . e e 6 e e e f 8 e e 5 
            . . . . . e f e e f e 8 8 . 5 4 
            . . . . . 8 f f f f e e . . . 2 
            . . . . . e e e e e f e 8 . . . 
            . . . . . 8 2 e . e e e e . . . 
            . . . . . 4 e e . . e 4 e . . . 
            . . . . 4 4 2 . . . 2 2 4 . . . 
            `],
        250,
        true
        )
        Totally_A_Dog.setPosition(scene.screenWidth() + 5, randint(scene.screenHeight() - 10, 10))
        Totally_A_Dog.setVelocity(Velocity, randint(-10, 10))
        Totally_A_Dog.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
forever(function () {
    if (100 == info.score()) {
        if (Started == true) {
            Started = false
            game.over(true, effects.confetti)
        }
    } else if (info.score() >= 75) {
        ms = 250
        Velocity = -100
    } else if (info.score() >= 50) {
        ms = 1000
        Velocity = -75
    } else if (info.score() >= 25) {
        ms = 1500
        Velocity = -50
    } else {
        ms = 2000
        Velocity = -25
    }
})
forever(function () {
    if (Shooted == true) {
        pause(500)
        Shooted = false
    }
})
forever(function () {
    if (ShootedFireBall == true) {
        pause(3000)
        ShootedFireBall = false
    }
})
