export const createArray = <T>(n: number) => Array.from<T>({ length: n })

export const range = (n: number) => [...createArray(n).keys()]

export const zeroes = (n: number) => createArray(n).fill(0)

