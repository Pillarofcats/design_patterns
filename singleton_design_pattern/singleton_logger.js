class Logger {
  constructor () {
    //Instance of Logger has not been instantiated yet
    if(Logger.instance == null) {
      this.logs = []
      Logger.instance = this
    }
    return Logger.instance
  }

  addLog(msg) {
    this.logs.push(msg)
  }

  printLogs() {
    return console.log("Logs: ", this.logs)
  }

  logCount() {
    return console.log(`There are ${this.logs.length} logs`)
  }
}

//Exporting singleton "logger"
export const logger = new Logger()
Object.freeze(logger)

//Exporting Class definition "Logger"
export default Logger