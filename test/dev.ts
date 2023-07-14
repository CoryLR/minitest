import { BaseRoutine } from '../src/controllers/BaseRoutine'

const baseRoutine = new BaseRoutine('test');

console.log(baseRoutine.click('btn').await('hi'));
