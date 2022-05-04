namespace SpriteKind {
    export const Goomba = SpriteKind.create()
    export const block = SpriteKind.create()
    export const left = SpriteKind.create()
    export const right = SpriteKind.create()
}
function Load_enimies () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        mySprite2 = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e d f e e e e f d e e e . 
            . e e e d f f f f f f d e e e . 
            e e e e d f d e e d f d e e e e 
            e e e e d d d e e d d d e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `, SpriteKind.Goomba)
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(mySprite2, value)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e d f e e e e f d e e e . 
            . e e e d f f f f f f d e e e . 
            e e e e d f d e e d f d e e e e 
            e e e e d d d e e d d d e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e d f e e e e f d e e e . 
            . e e e d f f f f f f d e e e . 
            e e e e d f d e e d f d e e e e 
            e e e e d d d e e d d d e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d f f . . 
            . . . f f d d d d d f f f f f . 
            . . . f f f d d d f f f f f f . 
            . . . . f f f . . f f f f f . . 
            `],
        750,
        true
        )
        mySprite2.vx = 10
        mySprite2.ay = 250
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        mySprite2 = sprites.create(img`
            . 4 d d d d d d d d f 4 d d d d 4 . 
            . d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d . 
            . d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d . 
            . d 4 4 4 4 4 4 4 4 f d 4 4 4 4 d . 
            . d 4 4 4 4 4 4 4 4 f d f 4 4 4 d . 
            . d 4 4 4 4 4 4 4 4 f 4 f f f f 4 . 
            9 d 4 4 4 4 4 4 4 4 f d d d d d f 9 
            9 d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 9 
            9 d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 9 
            9 d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 9 
            . f f 4 4 4 4 4 4 f d 4 4 4 4 4 f . 
            . d 4 f f 4 4 4 4 f d 4 4 4 4 4 f . 
            . d 4 d d f f f f d 4 4 4 4 4 4 f . 
            . d 4 4 4 d d d f d 4 4 4 4 4 4 f . 
            . d 4 4 4 4 4 4 f d 4 4 4 4 4 f f . 
            . 4 f f f f f f 4 f f f f f f f 4 9 
            `, SpriteKind.block)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`myTile`)
    }
}
sprites.onOverlap(SpriteKind.Goomba, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite.y > otherSprite.y) {
        sprite.destroy()
        mySprite.vy = -20
    } else {
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.block, SpriteKind.Goomba, function (sprite, otherSprite) {
    sprite.vx = sprite.vx - 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -160
    } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ................
            ......22222.....
            d...222222d.....
            dd.222222dd.....
            dd.22222222222..
            ddeeeeddeddd....
            deeddeddeedddd..
            eeeddeedddddddd.
            .eeddeedddedddd.
            .eedddddeeeeee..
            .eeedddddeeeee..
            .eeeedddddddd...
            ..eeeddddd......
            ..eee22eee2e....
            ..eee22eee2ee...
            ..eee222222eee..
            ..22e2d22d2eedd.
            ..222222222.dddd
            ..222222222.dddd
            ..222222222.dddd
            ..222222222..dd.
            ..22222222......
            ..22222222......
            ..22222222......
            ..2222222.......
            ..222222........
            ..222222........
            eeee222.........
            eeee22..........
            eeeeee..........
            .eeeee..........
            .eeeee..........
            `],
        500,
        false
        )
        mySprite.vx = 150
        mySprite.vy = -160
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ................
            .....22222......
            .....d222222...d
            .....dd222222.dd
            ..22222222222.dd
            ....dddeddeeeedd
            ..ddddeeddeddeed
            .ddddddddeeddeee
            .ddddedddeeddee.
            ..eeeeeedddddee.
            ..eeeeedddddeee.
            ...ddddddddeeee.
            ......dddddeee..
            ....e2eee22eee..
            ...ee2eee22eee..
            ..eee222222eee..
            .ddee2d22d2e22..
            dddd.222222222..
            dddd.222222222..
            dddd.222222222..
            .dd..222222222..
            ......22222222..
            ......22222222..
            ......22222222..
            .......2222222..
            ........222222..
            ........222222..
            .........222eeee
            ..........22eeee
            ..........eeeeee
            ..........eeeee.
            ..........eeeee.
            `],
        500,
        false
        )
        mySprite.vx = -150
        mySprite.vy = -160
    }
})
sprites.onOverlap(SpriteKind.Goomba, SpriteKind.Goomba, function (sprite, otherSprite) {
    sprite.vx = 0 - sprite.vx
    otherSprite.vx = 0 - otherSprite.vx
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ......22222.....
    ....222222d.....
    ...222222dd.....
    ...22222222222..
    ...eeeddeddd....
    ..eddeddeedddd..
    ..eddeedddddddd.
    .eeddeedddedddd.
    .eedddddeeeeee..
    .eeedddddeeeee..
    ...eedddddddd...
    ....2ddddde.....
    ....e2eeee2e....
    ...ee2eeee2ee...
    ..eee2eeee2eee..
    .eeee2eeee2eeee.
    .eee22eeee22eee.
    eeee22eeee22eeee
    eeee22222222eeee
    eeee2d2222d2eeee
    dddd22222222dddd
    dddd22222222dddd
    .ddd22222222ddd.
    .dd2222222222dd.
    ..222222222222..
    .222222..222222.
    .22222....22222.
    .22222....22222.
    ..eeee....eeee..
    ..eeee....eeee..
    eeeeee....eeeeee
    eeeeee....eeeeee
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 250
characterAnimations.loopFrames(
mySprite,
[img`
    ......22222.....
    ....222222d.....
    ...222222dd.....
    ...22222222222..
    ...eeeddeddd....
    ..eddeddeedddd..
    ..eddeedddddddd.
    .eeddeedddedddd.
    .eedddddeeeeee..
    .eeedddddeeeee..
    ...eedddddddd...
    .....eeedd......
    ....2222ee2...d.
    ...eeee22ee2.ddd
    ..eeeeee22e2eddd
    .eeeeeee22ee2ddd
    .eeeeeee22ee2ede
    .eeeeee222ee2ee.
    eeeeee222d2ede..
    eeee222222222...
    ddddd22222222...
    ddddd22222222..e
    dddd222222222.ee
    .ddd2222222eeeee
    ...2e222222eeeee
    ..e22e22222eeeee
    eee222ee222eeeee
    eeee2222...eeeee
    eeeee2..........
    .eee............
    .eee............
    ..eee...........
    `,img`
    ................
    ................
    .......22222....
    .....222222d....
    ....222222dd....
    ....22222222222.
    ....eeeddeddd...
    ...eddeddeedddd.
    ...eddeedddddddd
    ..eeddeedddedddd
    ..eedddddeeeeee.
    ...eedddddeeeee.
    .....edddddddd..
    ....e222ddd.....
    ...e2eee2e......
    ...e2eeee2e.....
    ..ee2eeeee22dd..
    ..e22eeeeeeedddd
    ..e222eeeeeedddd
    ...222eeeeeeeddd
    ...2222eeeeeeddd
    ...222222eee2...
    ...2222222222...
    ...222222222e...
    eeee2222222e22..
    eeee22222ee222..
    eeee2222e2222...
    eeee222..2222...
    eeee.....eeee...
    ee.......eeee...
    e........eeeeee.
    .........eeeeee.
    `,img`
    ................
    .....22222......
    ...222222d......
    ..222222dd......
    ..22222222222...
    ..eeeddeddd.....
    .eddeddeedddd...
    .eddeedddddddd..
    eeddeedddedddd..
    eedddddeeeeee...
    .eedddddeeeee...
    ..eedddddddd....
    ...2222dd.......
    ..e2ee22ee......
    .e2eeee22e......
    .e2eeee22ee.....
    .e2eeee222e.....
    .e2eeeeedde.....
    .e2eeeedddd.....
    .22eeeedddd2....
    .222eeedddd22...
    .2222eeddd222...
    .222222ee2222...
    ..22222eee22....
    ...222eeeeee....
    ...22eeeeee.....
    ....22eeee......
    ....e222eee.....
    ....eeee.ee.....
    ...eeeee........
    ...eeeeeee......
    ....eeeeee......
    `],
200,
characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    .....22222......
    .....d222222....
    .....dd222222...
    ..22222222222...
    ....dddeddeee...
    ..ddddeeddedde..
    .ddddddddeedde..
    .ddddedddeeddee.
    ..eeeeeedddddee.
    ..eeeeedddddeee.
    ...ddddddddee...
    ......ddeee.....
    .d...2ee2222....
    ddd.2ee22eeee...
    ddde2e22eeeeee..
    ddd2ee22eeeeeee.
    ede2ee22eeeeeee.
    .ee2ee222eeeeee.
    ..ede2d222eeeeee
    ...222222222eeee
    ...22222222ddddd
    e..22222222ddddd
    ee.222222222dddd
    eeeee2222222ddd.
    eeeee222222e2...
    eeeee22222e22e..
    eeeee222ee222eee
    eeeee...2222eeee
    ..........2eeeee
    ............eee.
    ............eee.
    ...........eee..
    `,img`
    ................
    ................
    ....22222.......
    ....d222222.....
    ....dd222222....
    .22222222222....
    ...dddeddeee....
    .ddddeeddedde...
    ddddddddeedde...
    ddddedddeeddee..
    .eeeeeedddddee..
    .eeeeedddddee...
    ..dddddddde.....
    .....ddd222e....
    ......e2eee2e...
    .....e2eeee2e...
    ..dd22eeeee2ee..
    ddddeeeeeee22e..
    ddddeeeeee222e..
    dddeeeeeee222...
    dddeeeeee2222...
    ...2eee222222...
    ...2222222222...
    ...e222222222...
    ..22e2222222eeee
    ..222ee22222eeee
    ...2222e2222eeee
    ...2222..222eeee
    ...eeee.....eeee
    ...eeee.......ee
    .eeeeee........e
    .eeeeee.........
    `,img`
    ................
    ......22222.....
    ......d222222...
    ......dd222222..
    ...22222222222..
    .....dddeddeee..
    ...ddddeeddedde.
    ..ddddddddeedde.
    ..ddddedddeeddee
    ...eeeeeedddddee
    ...eeeeedddddee.
    ....ddddddddee..
    .......dd2222...
    ......ee22ee2e..
    ......e22eeee2e.
    .....ee22eeee2e.
    .....e222eeee2e.
    .....eddeeeee2e.
    .....ddddeeee2e.
    ....2ddddeeee22.
    ...22ddddeee222.
    ...222dddee2222.
    ...2222ee222222.
    ....22eee22222..
    ....eeeeee222...
    .....eeeeee22...
    ......eeee22....
    .....eee222e....
    .....ee.eeee....
    ........eeeee...
    ......eeeeeee...
    ......eeeeee....
    `],
200,
characterAnimations.rule(Predicate.HittingWallDown, Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    ............ddd.
    ...........ddedd
    ......22222ddeed
    ....2222222ddddd
    ...22222222eeeee
    ...22222222222ee
    ...eeeddedddeeee
    ..eddeddedddddee
    ..eddeedddddddde
    ..eddeedddedddde
    .eedddddeeeeeee.
    .eeeeddddeeeede.
    ...eeddddddddee.
    ....2222ee2eeee.
    .eeeeee22e2eee..
    eeeeeeee2ee2ee..
    eeeeeeee22e2e...
    eeddeeee22ee2...
    eddddee2222ed...
    ddddde222d222...
    ddddd22222222...
    d.dd222222222..e
    .dd2222222222.ee
    ...222222222eeee
    ...e22222222eeee
    eee2ee222222eeee
    eee222ee2222eeee
    eee22222..22eeee
    eee22222........
    eee2222.........
    ee..............
    e...............
    `],
500,
characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    .ddd............
    ddedd...........
    deedd22222......
    ddddd2222222....
    eeeee22222222...
    ee22222222222...
    eeeedddeddeee...
    eedddddeddedde..
    eddddddddeedde..
    eddddedddeedde..
    .eeeeeeedddddee.
    .edeeeeddddeeee.
    .eeddddddddee...
    .eeee2ee2222....
    ..eee2e22eeeeee.
    ..ee2ee2eeeeeeee
    ...e2e22eeeeeeee
    ...2ee22eeeeddee
    ...de2222eedddde
    ...222d222eddddd
    ...22222222ddddd
    e..222222222dd.d
    ee.2222222222dd.
    eeee222222222...
    eeee22222222e...
    eeee222222ee2eee
    eeee2222ee222eee
    eeee22..22222eee
    ........22222eee
    .........2222eee
    ..............ee
    ...............e
    `],
500,
characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    .......22222......
    .....222222d......
    ....222222dd......
    ....22222222222...
    ....eeeddeddd.....
    ...eddeddeedddd...
    ...eddeedddddddd..
    ..eeddeedddedddd..
    ..eedddddeeeeee...
    ..eeedddddeeeee...
    ....eedddddddd....
    .....2ddddde......
    .....e2eeee2e.....
    ....ee2eeee2ee....
    ...eee2eeee2eee...
    ..eeee2eeee2eeee..
    ..eee22eeee22eee..
    .eeee22eeee22eeee.
    .eeee22222222eeee.
    .eeee2d2222d2eeee.
    .dddd22222222dddd.
    .dddd22222222dddd.
    ..ddd22222222ddd..
    ..dd2222222222dd..
    ...222222222222...
    ..222222..222222..
    ..22222....22222..
    ..22222....22222..
    ...eeee....eeee...
    ...eeee....eeee...
    .eeeeee....eeeeee.
    .eeeeee....eeeeee.
    `],
200,
characterAnimations.rule(Predicate.HittingWallDown, Predicate.FacingRight, Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
[img`
    .....22222......
    .....d222222....
    .....dd222222...
    ..22222222222...
    ....dddeddeee...
    ..ddddeeddedde..
    .ddddddddeedde..
    .ddddedddeeddee.
    ..eeeeeedddddee.
    ..eeeeedddddeee.
    ...ddddddddee...
    .....eddddd2....
    ....e2eeee2e....
    ...ee2eeee2ee...
    ..eee2eeee2eee..
    .eeee2eeee2eeee.
    .eee22eeee22eee.
    eeee22eeee22eeee
    eeee22222222eeee
    eeee2d2222d2eeee
    dddd22222222dddd
    dddd22222222dddd
    .ddd22222222ddd.
    .dd2222222222dd.
    ..222222222222..
    .222222..222222.
    .22222....22222.
    .22222....22222.
    ..eeee....eeee..
    ..eeee....eeee..
    eeeeee....eeeeee
    eeeeee....eeeeee
    `],
200,
characterAnimations.rule(Predicate.HittingWallDown, Predicate.FacingLeft, Predicate.NotMoving)
)
Load_enimies()
forever(function () {
    if (mySprite2.isHittingTile(CollisionDirection.Left)) {
        mySprite2.vx = 10
    }
    if (mySprite2.isHittingTile(CollisionDirection.Right)) {
        mySprite2.vx = -10
    }
})
