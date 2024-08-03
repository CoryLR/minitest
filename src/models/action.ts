export type ActionName = 'await' | 'awaitNot' | 'click' | 'comment' | 'exists' | 'existsNot' | 'fill' | 'log' | 'nav' | 'valueIs' | 'valueIsNot';

export type ActionExpression = { name: ActionName, args: [string, (string | number)?]};

export type ActionResult = { success: boolean, message: string, error?: string };
