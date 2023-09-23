"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_same_group_constant_1 = __importDefault(require("./no-same-group-constant"));
const tester = new eslint_1.RuleTester({ parserOptions: { ecmaVersion: 6 } });
tester.run("no-same-group-constant.test", no_same_group_constant_1.default, {
    valid: [{ code: "const CHAIN_ETHEREUM = 1" }],
    invalid: [
        {
            code: "const CHAIN_ID_ETHEREUM = 1",
            errors: [{ message: "constant variables could be replaced by `const ChainId = {ETHEREUM: 1}" }],
        },
    ],
});
