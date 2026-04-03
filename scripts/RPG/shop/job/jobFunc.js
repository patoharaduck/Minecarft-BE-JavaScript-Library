import { mineList } from "./jobList";
import { world } from "@minecraft/server"

/**
 * ore generater
 * @arg {string} ore ore name
 */

export async function oreGenerater(ore, location) {
    try {
        const generateOre = mineList.find(element => element.id == ore);
        new Promise((resolve) => {
            setTimeout(() => {
                world.getDimension("overworld").setBlockPermutation(location, generateOre.id); //c
                //cobblestone ==> then change bedrock
                resolve();
            }, generateOre.cooltime * 1000);
        }
    )
    } catch (error) {
        console.error(error)
    }
}