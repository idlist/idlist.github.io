export const createArray = <T>(n: number) => Array.from<T>({ length: n })

export const range = (n: number) => [...createArray(n).keys()]

export const zeroes = (n: number) => createArray(n).fill(0)

export const nextFrame = (cb: FrameRequestCallback) => {
  const id: Promise<number> = new Promise((resolve) => {
    requestAnimationFrame(() => {
      resolve(requestAnimationFrame((ts) => cb(ts)))
    })
  })
  return id
}

export const createDelay = (ms: number) => {
  let id: number | undefined
  const run = () => {
    return new Promise<void>((resolve) => {
      id = setTimeout(() => {
        resolve()
      }, ms)
    })
  }
  const cancel = () => clearTimeout(id)

  return { id, run, cancel }
}
