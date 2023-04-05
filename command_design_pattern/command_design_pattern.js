class Calculator {
  constructor() {
    this.value = 0
    this.history = []
  }

  executeCmd(cmd) {
    this.value = cmd.execute(this.value)
    this.history.push(cmd)
    return this
  }

  undoExecuteCmd() {
    const cmd = this.history.pop()
    this.value = cmd.undo(this.value)
    return this
  }

  print() {
    console.log(this.value)
  }
}

class AddCmd {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currVal) {
    return currVal + this.valueToAdd
  }

  undo(currVal) {
    return currVal - this.valueToAdd
  }
}

class SubtractCmd {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract
  }

  execute(currVal) {
    return currVal - this.valueToSubtract
  }

  undo(currVal) {
    return currVal + this.valueToSubtract
  }
}

class MultiplyCmd {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply
  }

  execute(currVal) {
    return currVal * this.valueToMultiply
  }

  undo(currVal) {
    return currVal / this.valueToMultiply
  }
}

class DivideCmd {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide
  }

  execute(currVal) {
    return currVal / this.valueToDivide
  }

  undo(currVal) {
    return currVal * this.valueToDivide
  }
}

class AddThenMultiply {
  constructor(valueToAdd, valueToMultiply) {
    this.addCmd = new AddCmd(valueToAdd)
    this.multiplyCmd = new MultiplyCmd(valueToMultiply)
  }

  execute(currVal) {
    const addVal = this.addCmd.execute(currVal)
    return this.multiplyCmd.execute(addVal)
  }

  undo(currVal) {
    const undoMultiVal = this.multiplyCmd.undo(currVal)
    return this.addCmd.undo(undoMultiVal)
  }
}

const calc = new Calculator()

//Separate commands

console.log('Separate Commands - Executing Calculations')
calc.print()
calc.executeCmd(new AddCmd(8)).print()
calc.executeCmd(new SubtractCmd(2)).print()
calc.executeCmd(new MultiplyCmd(2)).print()
calc.executeCmd(new DivideCmd(4)).print()

console.log('Separate Commands - Undoing Calculations')
calc.print()
calc.undoExecuteCmd().print()
calc.undoExecuteCmd().print()
calc.undoExecuteCmd().print()
calc.undoExecuteCmd().print()

//Chaining commands
console.log('Chaining Commands - Executing Calculations')
calc.executeCmd(new AddCmd(8)).executeCmd(new SubtractCmd(2)).print()

console.log('Chaining Commands - Undoing Calculations')
calc.undoExecuteCmd().undoExecuteCmd().print()

//Joint commands
console.log('Joint Command "Add then Multiply" - Executing Calculations')
calc.executeCmd(new AddThenMultiply(5,2)).print()

console.log('Joint Command "Add then Multiply" - Undoing Calculations')
calc.undoExecuteCmd().print()