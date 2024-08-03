
import { BaseRoutine } from "./controllers/BaseRoutine";
import { Test } from "./controllers/old/Test_old";
import { Tutorial } from "./controllers/Tutorial";
import { UserRoutineOptions } from "./models/routine";
import { BoilerplateExampleComponent } from "./views/boilerplate-example/boilerplate-example.component";

export function test(name: string, options?: UserRoutineOptions) {
  console.log('TEST FUNCTION REACHED!')
  return new Test(name, options)
}

export const routine = {

  devTest: (label, options) => {
    return new BaseRoutine(label, options);
  },
  test: (label: string, options?: UserRoutineOptions) => {
    return new Test(label, options)
  },
  tutorial: (label: string, options?: UserRoutineOptions) => {
    return new Tutorial(label, options)
  },
  // series: (name: string, options: any) => {
  //   return new BaseRoutine(name, options)
  // },
  
}
