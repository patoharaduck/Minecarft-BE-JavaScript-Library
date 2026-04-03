import { world, system } from "@minecraft/server";
import { dropRateList } from "./list"

/**
 * mob killed by player
 * @arg {import("@minecraft/server").Entity} entity 対象のエンティティ
 * @arg {import("@minecraft/server").Player} player 対象のプレイヤー
 */

function modDrop(entity, player) {
    try {
        const dEntityId = dropRateList.filter(mob => mob.mobTypeId == entity.typeId);
        if (dEntityId != undefined) {
            const catchEntity = dEntityId.find(element => element.nameTag == entity.nameTag);

            for (const item of catchEntity.itemLoot) {
                if (item.dropRate >= Math.random() * 100) {
                    player.getComponent("minecraft:inventory").container.addItem(item.item);
                }
            }
        }
    } catch (error) {
        console.error(error)
    }
}

world.afterEvents.entityDie.subscribe(eventData => {
    const { damageSource, deadEntity } = eventData;
    const damageEntity = damageSource.damagingEntity;

    if (damageEntity != undefined && damageEntity instanceof world.Player) {
        modDrop(deadEntity, damageEntity);
    }
})