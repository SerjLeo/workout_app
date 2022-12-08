export default function (func: (...args: any[]) => void, waitTime: number) {
  let callTimeout: ReturnType<typeof setTimeout> | null = null
  return function(this: unknown, ...args: any[]) {
    if(callTimeout) clearTimeout(callTimeout)
    callTimeout = setTimeout(() => {
      func.apply(this, args)
    }, waitTime)
  }
}
