import { NamespaceNameError, world } from "@minecraft/server";

/**
 * 範囲破壊の関数
 * @param {import("@minecraft/server").Block} block 指定したブロックを一括破壊
 * @param {import("@minecraft/server").Dimension} dimension ディメンション
 * @param {import("@minecraft/server").Vector3} location 座標
 * @param {number} n　破壊上限
 * @param {Set} visited setのリスト
 */
function rangeBreake(block, dimension, location, n, visited) {
    if (n <= 0) {
        return
    };

    const direction = [
        { x: 1, y: 0, z: 0},
        { x: -1, y: 0, z: 0},
        { x: 0, y: 1, z: 0},
        { x: 0, y: -1, z: 0},
        { x: 0, y: 0, z: 1},
        { x: 0, y: 0, z: -1}
    ];

    for (const dir of direction) {
        const nextL = {
            x: location.x + dir.x,
            y: location.y + dir.y,
            z: location.z + dir.z
        };

        const clocation = `${nextL.x},${nextL.y},${nextL.z}`;

        if (visited.has(clocation)) continue;
        visited.add(clocation);

        try {
            const targetBlock = dimension.getBlock(nextL);

            if (targetBlock.typeId == block.typeId) {
                dimension.runCommand(`setblock ${nextL.x} ${nextL.y} ${nextL.z} air destroy`)

                rangeBreake(block, dimension, nextL, n - 1, visited)
            }
        }
        catch (error) {
            continue
        }
    };
}