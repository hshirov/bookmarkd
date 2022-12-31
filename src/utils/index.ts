export const isArr = (val: unknown): boolean => Array.isArray(val);

export const isStr = (val: unknown): boolean => typeof val === 'string';

export const isNonEmptyArr = (val: unknown): boolean => isArr(val) && (val as unknown[]).length > 0;

export const isNonEmptyStr = (val: unknown): boolean => isStr(val) && val !== '';

export const isEqual = (val1: unknown, val2: unknown): boolean => JSON.stringify(val1) === JSON.stringify(val2);

export const getRandomNumber = (max: number) => Math.floor(Math.random() * max);
