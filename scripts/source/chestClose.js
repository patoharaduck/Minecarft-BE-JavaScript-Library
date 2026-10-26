import { Player, world } from "@minecraft/server";

world.afterEvents.blockContainerClosed.subscribe((eventData) => {
    const { block, closeSource, dimension } = eventData;
    const player = closeSource.entity

    if ( block.typeId == "minecraft:chest" && typeof player == Player) {
        player.applyImpulse({
            x: 5,
            y: 0,
            z: 5
        })

        player.addTag("debug:used")

        location = block.location

        world.getDimension("minecraft:overworld").setBlockType(location, "minecraft:bedrock")

    }
})

world.beforeEvents.playerInteractWithBlock.subscribe((eventData) => {
    const { block, blockFace, player } = eventData;

    if (player.hasTag("debug:used") && block.typeId == "minecraft:chest") {
        eventData.cancel = true
    }
})