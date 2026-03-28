import { world } from "@minecraft/server"

/**
 * 指定したスコアボードに値を追加
 * @arg {import("@minecraft/server").Player|string} player 対象のプレイヤー
 * @arg {string} scoreBoardName 対象のスコアボード
 * @arg {number} number 追加する値
 */

export function addScore(player, scoreBoardName, number) {
    try {
        world.scoreboard.getObjective(scoreBoardName).addScore(player, number);
    } catch (error) {
        console.error(error)
    }
}

