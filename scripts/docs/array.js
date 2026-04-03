/**
 * 配列をabcdef...順に並び替えます
 * @argument {[]} array
 * @returns {[]}
 */

export function arraySort(array) {
    try {
        const copyArray = [...array]
        copyArray.sort((s, t) => {
            let a = s.toLocaleLowerCase();
            let b = t.toLocaleLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    } catch (error) {
        console.error(error) }
}