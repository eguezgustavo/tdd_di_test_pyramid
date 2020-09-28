# TDD, Dependency Injection and Test pyramid workshop
Note: To run this workshop use node 13 or above

## Unit Tests
- Single responsibility
- No side effects (Therefore, mocks are needed)
  - Creating data in the DB and not deleting it
  - Writing files and not deleting them
  - Mutating data on the DB, removing existing files
  - Using the network
  - It has to be like a ghost (nobody knows it is or it was over there)
  - Two schools 
    - Mock all dependencies
    - Mock dependencies that cause side effects
    - It's up to you
### Workshop 1 (Spot the poorly written unit tests)
[click here to go to workshop 1](workshop-1/README.md)

## TDD (Test driven development)
- It is a way of writing code
- Cycle
  - You first write the test (declarative code)
  - See the test fail (obviously because logic hasn't been implemented yet)
  - Implement the logic
  - See the test pass
  - Refactor the code
  - See the test pass
- First happy paths (how your dependencies can vary)
- Error paths (errors in your unit or errors in your dependencies)

__Advantages__
- Forces you to write single units which are more easy to maintain, extend and code
- Do not implement more code than needed

## TDD Tips and tricks<br/>
__1. Naming the test__<br/>
- There is no rule but spending some time naming the test is worthy
- It is better if your name has the following parts:
  - Name of the method or function you are testing
  - What the method or function is supposed to do
  - Under what state of the arguments
- Example of the name of a unit test
```
function sum                    ReturnsTeSum     OfTwoPositiveNumbers
         ---                    -------------    --------------------
          |                           |                   |
        name of the method      What it does     State of the arguments
```

__2. Parts of the test__
A test hast three parts:
- Setup (creating mocks or the values of the arguments)
- Execution (calling the method or function)
- Assertion (assert that mocks were called and right values are returned)
__Tips__:
- Write the execution first. At this point your code doesn't exist so you are calling a function that does not exist. Write the function as you want it to be used instead of writing what it does.
- Once you call the function you will not what the state of the arguments should be. It's time to write the setup
- Finally write the assertions
- This is not a rule, sometimes you'll find yourself writing the setup first.
- If it is possible split up the test parts using an empty line or two

### Workshop 2 (Write a micro app using TDD)
[click here to go to workshop 2](workshop-2/Readme.md)

## Dependency Injection
Instead of creating the dependencies inside a function or constructor creating them in other part of the code and passing them as arguments to classes that need them.

__Example: With no DI__
```
class SomeClass {
  constructor() {
    this.dependencyOne = new DependencyOne();
    this.dependencyTwo = new DependencyTwo();
  }

  functionOne() {
    dependencyThree = new DependencyThree();
  }
}
```

__Example: With DI__
```
class SomeClass {
  constructor(dependencyOne, dependencyTwo, dependencyThree) {
    this.dependencyOne = dependencyOne;
    this.dependencyTwo = dependencyTwo;
    this.dependencyThree = dependencyThree;
  }
}
```

__Advantages__
- Favors single responsibility of clases or functions
- makes code more testable
- Favors loosely coupled classes therefore maintainability
- Contract within the team (interfaces)

### Workshop 3 (Split in two teams: A and B)
The team C has developed a Math Class with two methods sum and multiply.
- Team A has to develop another class named AdvancedMath with a factorial method. It has to use the team C class to perform math operations.
- Team B hast to implement a class named MoreAdvancedMath with a combinatorial method that receives two numbers and calculate the combinatorial for both of them. It has to use classes from team C and A to perform math operations.

__References__

https://lasmatematicas.eu/2017/08/09/factorial-de-un-numero-y-numeros-combinatorios/

https://www.sangakoo.com/en/unit/combinatorial-numbers
