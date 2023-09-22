import { NodePlopAPI } from 'plop';
import * as fs from 'fs';
import * as path from 'path';

// Learn more about plopjs: https://plopjs.com/documentation/
module.exports = function (plop: NodePlopAPI) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'component boilerplate',
    // Learn more about prompt types: https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/README.md#prompt-types
    prompts: [
      {
        type: 'list',
        name: 'hasParentComponent',
        message: 'Create component under an existing component?',
        choices: ['Yes', 'No'],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name (ex. format -- MyComponent):',
      },
      {
        type: 'list',
        name: 'componentParent',
        message: 'Select the parent component:',
        choices: () => {
          const componentsDir = path.resolve(__dirname, './components');
          return fs.readdirSync(componentsDir).filter((item) => {
            return fs.statSync(path.join(componentsDir, item)).isDirectory();
          });
        },
        when: (answers) => answers.hasParentComponent === 'Yes',
      },
    ],
    actions: (answers) => {
      const actions = [];

      const isStandalone = answers?.hasParentComponent === 'No';
      const componentPath = isStandalone
        ? `./components/{{componentName}}`
        : `./components/{{componentParent}}`;

      // Add new component file
      actions.push({
        type: 'add',
        path: `${componentPath}/{{componentName}}.tsx`,
        templateFile: './templates/component.hbs',
      });

      // Add new index.ts for standalone component
      if (isStandalone) {
        actions.push({
          type: 'add',
          path: `${componentPath}/index.ts`,
          templateFile: './templates/component-index.hbs',
        });

        // Append to top-level components barrel file
        actions.push({
          type: 'append',
          path: './components/index.ts',
          template: `export * from './{{componentName}}';\n`,
          separator: '',
        });
      } else {
        // Append to parent component's barrel file
        actions.push({
          type: 'append',
          path: `./components/{{componentParent}}/index.ts`,
          template: `export { {{componentName}} } from './{{componentName}}';\n`,
          separator: '',
        });
      }

      return actions;
    },
  });
};
