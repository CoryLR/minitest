export class Time {

  /**
   * @param duration - milliseconds
   * @example await Time.sleep(500);
   */
  public static sleep(duration: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  /**
   * 
   * @param duration - milliseconds total
   * @param interval - milliseconds between each loop iteration
   * @param action - Function to run each iteration
   * @param stopValue - (Default `null`) if the action function returns the stopValue, the loop will end early
   * @returns true if stopped early, false for full duration
   * @example Time.loop(9000, 500, () => { doThing() })
   * @example Time.loop(9000, 500, checkForThing, true) // if checkForThing returns `true`, the loop stops
   */
  public static async loop(duration: number, interval: number, action: Function, stopValue = null): Promise<boolean> {
    const loopCount = Math.floor(duration / interval);
    if ( await action() === stopValue ) return true;
    for (let i = 0; i < loopCount; i++) {
      Time.sleep(interval);
      if ( await action() === stopValue ) return true;
    }
    return false
  }

}
