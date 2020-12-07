# David Franco - Compara Online - Technical challenge

Hi there! This is David Franco. I'm applying for a Ruby on Rails position at Compara, and this is my solution proposed for the technical challenge.

## Technical approach
- I decided to use NodeJS for solving  the challenge to make it more interesting but also because I know that compara is getting rid of Ruby on Rails applications. Please, take into account that I'm not a node expert, so there could be trivial improvements I can be missing.
- I relied on Martin Fowler's [Replace Type Code with State/Strategy](https://refactoring.com/catalog/replaceTypeCodeWithSubclasses.html) refactoring pattern. I decided to use Strategy instead of subclasses as the challenge proposed to change only the updatePrice method
- Coverage report relies on [Istanbul JS](https://istanbul.js.org/)


## How should I run this?
- First of all, you should pull the repo and run `npm install` in the project folder
- 3 [NodeJS scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) were created:
  1. ``