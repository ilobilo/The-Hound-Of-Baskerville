def StartLevel():
    global Velocity, Shooted, Started, Sherlock, ms
    Velocity = -25
    Shooted = False
    Started = True
    Sherlock = sprites.create(img("""
            . . . . e e e e . . . . . 
                    . . e e e e e e e e . . . 
                    . e e e e e e c e e e . . 
                    e e e e e e c c e e e c . 
                    e e e c e e e e e e e c . 
                    c c c e e e e e e e c c . 
                    e e e e f e 4 f e c c e . 
                    e e e b f 4 4 f b e e e . 
                    . f 4 1 f 4 4 f 1 4 f . . 
                    . . e 4 4 4 4 4 4 e . . . 
                    . . f f e e e e f f . . . 
                    f e f b 6 6 6 6 b f e f . 
                    e 4 f 6 6 6 6 6 6 f 4 e . 
                    e e f 8 8 8 8 8 8 f e e . 
                    . . . f f f f f f . . . . 
                    . . . f f . . f f . . . .
        """),
        SpriteKind.player)
    info.set_life(3)
    info.set_score(0)
    controller.move_sprite(Sherlock)
    Sherlock.set_stay_in_screen(True)
    Sherlock.set_bounce_on_wall(True)
    tiles.set_wall_at(tiles.get_tile_location(10, 10), True)
    ms = 2250
def ShowWelcomeScreen():
    game.splash("Haund Of The Baskerville", "Press A")
    StartLevel()

def on_a_pressed():
    global projectile, Shooted
    if Started == True:
        if Shooted == False:
            projectile = sprites.create_projectile_from_sprite(img("""
                    . . . . . c c b b b . . . . . . 
                                    . . . . c b d d d d b . . . . . 
                                    . . . . c d d d d d d b b . . . 
                                    . . . . c d d d d d d d d b . . 
                                    . . . c b b d d d d d d d b . . 
                                    . . . c b b d d d d d d d b . . 
                                    . c c c c b b b b d d d b b b . 
                                    . c d d b c b b b b b b b b d b 
                                    c b b d d d b b b b b d d b d b 
                                    c c b b d d d d d d d b b b d c 
                                    c b c c c b b b b b b b d d c c 
                                    c c b b c c c c b d d d b c c b 
                                    . c c c c c c c c c c c b b b b 
                                    . . c c c c c b b b b b b b c . 
                                    . . . . . . c c b b b b c c . . 
                                    . . . . . . . . c c c c . . . .
                """),
                Sherlock,
                200,
                0)
            Shooted = True
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_menu_pressed():
    global Started
    if Started == True:
        Started = False
        game.splash("Paused", "Press A to Continue")
        Started = True
controller.menu.on_event(ControllerButtonEvent.PRESSED, on_menu_pressed)

def on_life_zero():
    global Started
    Started = False
    game.over(False, effects.dissolve)
info.on_life_zero(on_life_zero)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(5)
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

Flying_Thing: Sprite = None
projectile: Sprite = None
ms = 0
Sherlock: Sprite = None
Shooted = False
Velocity = 0
Started = False
Started = False
scene.set_background_color(9)
ShowWelcomeScreen()

def on_update_interval():
    global Flying_Thing
    if Started == True:
        Flying_Thing = sprites.create(img("""
                . . f f f . . . . . . . . f f f 
                            . f f c c . . . . . . f c b b c 
                            f f c c . . . . . . f c b b c . 
                            f c f c . . . . . . f b c c c . 
                            f f f c c . c c . f c b b c c . 
                            f f c 3 c c 3 c c f b c b b c . 
                            f f b 3 b c 3 b c f b c c b c . 
                            . c 1 b b b 1 b c b b c c c . . 
                            . c 1 b b b 1 b b c c c c . . . 
                            c b b b b b b b b b c c . . . . 
                            c b 1 f f 1 c b b b b f . . . . 
                            f f 1 f f 1 f b b b b f c . . . 
                            f f 2 2 2 2 f b b b b f c c . . 
                            . f 2 2 2 2 b b b b c f . . . . 
                            . . f b b b b b b c f . . . . . 
                            . . . f f f f f f f . . . . . .
            """),
            SpriteKind.enemy)
        Flying_Thing.set_position(scene.screen_width() + 5,
            randint(scene.screen_height() - 10, 0))
        Flying_Thing.set_velocity(Velocity, 0)
game.on_update_interval(ms, on_update_interval)

def on_forever():
    global Shooted
    if Shooted == True:
        pause(500)
        Shooted = False
forever(on_forever)

def on_forever2():
    global Started, ms, Velocity
    if 100 == info.score():
        if Started == True:
            Started = False
            game.over(True, effects.confetti)
    elif info.score() >= 75:
        ms = 250
        Velocity = -100
    elif info.score() >= 50:
        ms = 1000
        Velocity = -75
    elif info.score() >= 25:
        ms = 1500
        Velocity = -50
    else:
        ms = 2000
        Velocity = -25
forever(on_forever2)
