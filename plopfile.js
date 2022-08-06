module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "list",
        choices: [
          {
            name: "React",
            value: "react",
          },
          {
            name: "Astro",
            value: "astro",
          },
        ],
        name: "type",
        message: "Which component type?",
      },
      {
        type: "input",
        name: "path",
        message: "Component path (e.g. atoms)",
      },
    ],
    actions({ path, name, type }) {
      const kebabCase = plop.getHelper("kebabCase");
      const basePath = `src/components/${path}`;
      const componentPath = `${basePath}/${kebabCase(name)}`;
      return [
        {
          type: "add",
          path:
            type === "react"
              ? `${componentPath}.tsx`
              : `${componentPath}.astro`,
          templateFile:
            type === "react"
              ? "plop/templates/component/index.tsx.hbs"
              : "plop/templates/component/index.astro.hbs",
        },
      ];
    },
  });
};
