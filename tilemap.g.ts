// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000704050105050601030205060505050505040302040604070104060103020505010105050505030205060505060507060302060704010105010603020605010507040504030205040605040101050302`, img`
2 . . . . . . . 2 . 
. . . . . . . . 2 . 
. . . 2 . . . . 2 . 
. . . . . . . . 2 . 
. . . . . . 2 . 2 . 
. 2 . . . . . . 2 . 
. . . . 2 . . . 2 . 
. . . . . . . . 2 . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
