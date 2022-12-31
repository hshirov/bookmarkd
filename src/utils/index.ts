export const isArr = (value: unknown) => Array.isArray(value);

export const isStr = (value: unknown) => typeof value === 'string';

export const isNonEmptyArr = (value: unknown) => isArr(value) && (value as unknown[]).length > 0;

export const isNonEmptyStr = (value: unknown) => isStr(value) && value !== '';

export const isEqual = (value1: unknown, value2: unknown) => JSON.stringify(value1) === JSON.stringify(value2);

export const getRandomNumber = (max: number) => Math.floor(Math.random() * max);
