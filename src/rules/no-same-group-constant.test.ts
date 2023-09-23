import { RuleTester } from "eslint"
import noSameGroupConstant from "./no-same-group-constant"

const tester = new RuleTester({ parserOptions: { ecmaVersion: 6 } })
tester.run("no-same-group-constant.test", noSameGroupConstant, {
  valid: [{ code: "const chainEthereum = 1" }],
  invalid: [
    {
      code: "const CHAIN_ID_ETHEREUM = 1",
      errors: [{ message: "constant variables could be replaced by `const ChainId = {ETHEREUM: 1}" }],
    },
  ],
})