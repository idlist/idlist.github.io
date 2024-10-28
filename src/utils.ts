export const createArray = <T>(n: number) => Array.from<T>({ length: n })

export const range = (n: number) => [...createArray(n).keys()]

const nextFrame = () => {
  return new Promise<{ id: number, timestamp: number }>((resolve) => {
    const id = requestAnimationFrame((timestamp) => {
      resolve({ id, timestamp })
    })
  })
}

interface CreateFramesOptions {
  oneshot?: boolean
}

export const createFrames = (options?: CreateFramesOptions) => {
  const config: Required<CreateFramesOptions> = {
    oneshot: true,
    ...options,
  }
  let skipFirstFrame = config.oneshot

  const next = async () => {
    if (skipFirstFrame) {
      skipFirstFrame = false
      await nextFrame()
    }

    return await nextFrame()
  }

  return { next }
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
