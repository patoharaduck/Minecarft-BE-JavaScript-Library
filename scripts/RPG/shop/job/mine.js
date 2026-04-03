import { world, sytem } from "@minecraft/server"

world.afterEvents.playerBreakBlock.subscribe(eventData => {
    const { block, player } = eventData;
    const blockId = block.id;

    const fBlock = mineList.find(element => element.id == blockId);
    if (fBlock != undefined) {
        oreGenerater(blockId, block.location).then(() => {
            world.getDimension("overworld").setBlockPermutation(block.location, blockId);
        })
    }
})