import { ItemStack } from "@minecraft/server"
import { randItemNumber } from "./func"

/**
 * mob drop rate
 */

export const dropRateList = [
    {
        mobTypeId : "minecraft:husk",
        mobName : "testMob",
        itemLoot : [
            {
                item : new ItemStack("minecraft:apple", randItemNumber(1, 5))
                .nameTag = "testItem",
                dropRate : 20 //per      
            },
            {
                item : new ItemStack("minecraft:stick", randItemNumber(0, 10))
                .nameTag = "teststick",
                dropRate : 50 //per      
            }
        ]
    }
]