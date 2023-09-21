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
        name: 'isNewComponent',
        message: 'Is it a new component?',
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
        choices: () => fs.readdirSync(path.resolve(__dirname, './components')),
        when: (answers) => answers.isNewComponent === 'No',
      },
    ],
    actions: (answers) => {
      const actions = [];

      const isStandalone = answers?.isNewComponent === 'Yes';
      const componentPath = isStandalone
        ? `./components/{{componentName}}`
        : `./components/{{componentParent}}/{{componentName}}`;

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
        });
      } else {
        // Append to parent component's barrel file
        actions.push({
          type: 'append',
          path: `./components/{{componentParent}}/index.ts`,
          template: `export * from './{{componentName}}';\n`,
        });
      }

      return actions;
    },
  });
};
