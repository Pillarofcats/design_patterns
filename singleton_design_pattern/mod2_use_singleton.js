import {logger} from "./singleton_logger.js"

export default function module2UsingSingletonLogger() {
  logger.addLog('module 2 using singleton Logger')
  logger.logCount()
  logger.printLogs()
}