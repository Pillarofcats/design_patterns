import module1UsingSingletonLogger from "./mod1_use_singleton.js";
import module2UsingSingletonLogger from "./mod2_use_singleton.js";
import Logger from './singleton_logger.js'

module1UsingSingletonLogger()
module2UsingSingletonLogger()

//New Logger implementation will result in an instance of the singleton
//A new Logger class cannot be created as an instance already exists, exported from singleton_logger.js
console.log('\nAn instantiation of the Logger Class already exists, so a new one cannot be created. An instance of the original is created instead.')
console.log(new Logger)