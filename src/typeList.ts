/* eslint-disable */
// 基本の型

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "text";

// array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [1, "text"];

// any
let any1: any = false;

// void 何も返却値がないことを表す
const funcA = (): void => {
  const test = "text";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "Text" };
