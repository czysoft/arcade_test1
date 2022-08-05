scene.setBackgroundImage(assets.image`caodi`)
let mySprite = sprites.create(assets.image`111`, SpriteKind.Player)
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.bobbingRight),
5000,
false
)
pause(5000)
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.bounceLeft),
2000,
false
)
