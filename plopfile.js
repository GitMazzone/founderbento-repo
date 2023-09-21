"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Learn more about plopjs: https://plopjs.com/documentation/
module.exports = function (plop) {
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
                choices: function () { return fs.readdirSync(path.resolve(__dirname, './components')); },
                when: function (answers) { return answers.isNewComponent === 'No'; },
            },
        ],
        actions: function (answers) {
            var actions = [];
            var componentPath = (answers === null || answers === void 0 ? void 0 : answers.isNewComponent) === 'Yes'
                ? "./components/{{componentName}}"
                : "./components/{{componentParent}}/{{componentName}}";
            // Add new component to standalone or existing dir
            actions.push({
                type: 'add',
                path: "".concat(componentPath, "/{{componentName}}.tsx"),
                templateFile: './templates/component.hbs',
            });
            // Add barrel file for new standalone component
            if ((answers === null || answers === void 0 ? void 0 : answers.isNewComponent) === 'Yes') {
                actions.push({
                    type: 'add',
                    path: "".concat(componentPath, "/index.ts"),
                    templateFile: './templates/component-index.hbs',
                });
            }
            // Add to top-level components barrel file
            actions.push({
                type: 'append',
                path: './components/index.ts',
                template: "export { {{componentName}} } from './{{componentName}}/{{componentName}}';\n",
            });
            return actions;
        },
    });
};
