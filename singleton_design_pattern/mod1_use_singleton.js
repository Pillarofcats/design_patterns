import {logger} from "./singleton_logger.js"

export default function module1UsingSingletonLogger() {
  logger.addLog('module 1 using singleton Logger')
  logger.logCount()
  logger.printLogs()
}