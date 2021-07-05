// TODO: add useful logging functions here

export default {
  info: function info (...a: any): void {
    console.log(...a)
  },
  warn: function warn (...a: any): void {
    console.warn(...a)
  },
  error: function error (...a: any): void {
    console.error(...a)
  },
  debug: function debug (...a: any): void {
    console.log(...a)
  }
}
