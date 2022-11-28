# Vega Quiz

Monorepo consisting of 2 frontend apps:
- **Quiz app**
- **Admin app**

Tech stack:
- NX
- React
- Tailwind
- Storybook
- React Query

# How to run?

After you clone the repo:
1. Install dependencies:
```yarn```

2. Run web app(s)

To run the **quiz-app** use: 
```
yarn start:quiz
```
To run the **admin** use: 

```
yarn start:admin
```


# Storybook

Currently we are only making stories for `common-ui` library.
To run storybook execute:

```
yarn common:storybook
```


# Essential files structure
```
vega-quiz
│   README.md
└───apps
│   └───admin (react app)
│   └───admin-e2e (cypres tests)
│   └───quiz-app (react app)
│   └───quiz-app-e2e (cypres tests)
└───libs
│   └───common-ui (common react components)
│   └───common-login (shared business logic)
```

# Useful scripts
- `yarn start` , same as `yarn start:quiz` - starts the quiz frontend
- `yarn start:admin` - starts the admin frontend
- `yarn common:component --name=NameOfTheComponent` - creates template for new component inside `common-ui`, ready to be used instantly 
- `yarn common:storybook` - runs the storybook for `common-ui`
- `yarn graph` - shows the graph of dependencies across all repos


# Tailwind
At the root of the project you will se file named `tailwind-workspace-preset.js`.
In that file the global Tailwind styles are contained, and are loaded as preset in all `tailwind.config.js` files across repoes and libs alike.

In there we will add the global styles, and if you have any specific styles needed only in specific repoes you are welcome to add them to the according `tailwind.config.js` files contained inside them.

For example `quiz-app`, `admin` and `common-ui` all have specific `tailwind.config.js` files, and they all load `tailwind-workspace-preset.js` as preset.
