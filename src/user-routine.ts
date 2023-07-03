
import { Test } from "./controllers/Test";
import { Tutorial } from "./controllers/Tutorial";
import { UserRoutineOptions } from "./models/config";
import { BoilerplateExampleComponent } from "./views/boilerplate-example/boilerplate-example.component";

export function v6Test() {
  console.log("Reached v6Test")
  return new BoilerplateExampleComponent();
}

export const routine = {

  test: (name: string, options: UserRoutineOptions) => {
    return new Test(name, options)
  },
  tutorial: (name: string, options: UserRoutineOptions) => {
    return new Tutorial(name, options)
  },
  // series: (name: string, options: any) => {
  //   return new BaseRoutine(name, options)
  // },
  

}
