import { ItemStack, world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(eventData => {
    const { entity } = eventData;
    const health = entity.getComponent("health")
    if (entity.typeId == "minecraft:husk") {
        entity.nameTag = `ハスク\nHP : ${health.currentValue} / ${health.defaultValue}\n${entityHPBar(entity)}`
    }
})

world.afterEvents.entityHealthChanged.subscribe(eventData => {
    const { entity, newValue } = eventData;
    if ( entity.typeId == "minecraft:husk") {
        entity.nameTag = `ハスク\nHP : ${Math.round(newValue * 10) / 10} / ${entity.getComponent("health").defaultValue}\n${entityHPBar(entity)}`
    }
})