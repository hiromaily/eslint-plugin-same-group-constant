import { Rule } from "eslint"

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
  },  
  create: (context) => {
    return {
      VariableDeclaration(node) {
        const declarations = node.declarations;

        if (declarations.length < 2) {
          return;
        }
        declarations[0].init

        const sameValue = declarations.every(
          (declaration) =>
            declaration.init &&
            declaration.init.type === 'Literal' &&
            declaration.init.value === declarations[0].init?.value
        );

        if (!sameValue) {
          return;
        }

        context.report({
          node,
          message: 'Group constants into an object',
          fix(fixer) {
            const firstDeclaration = declarations[0];
            const objectProperties = declarations.map((declaration) =>
              context.getSourceCode().getText(declaration.id)
            );

            const refactorCode = `export const ${firstDeclaration.init.value} = {\n  ${objectProperties.join(',\n  ')}\n} as const;`;

            return fixer.replaceText(node, refactorCode);
          },
        });
      },
    };
  },
}

export = rule