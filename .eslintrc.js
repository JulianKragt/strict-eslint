module.exports = {
    root: true,
    env: {
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'no-constructor-return': 'error',
        'no-duplicate-imports': ['warn', {
            includeExports: true,
        }],
        'no-fallthrough': 'off',
        'no-undef': 'off',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'error',
        'no-unused-private-class-members': 'error',
        'no-use-before-define': ['error', {
            classes: true,
            functions: true,
            variables: true,
        }],
        'require-atomic-updates': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'camelcase': 'error',
        'capitalized-comments': ['warn', 'always'],
        'consistent-return': 'warn',
        'curly': ['error', 'all'],
        'default-case': 'warn',
        'default-case-last': 'warn',
        'default-param-last': 'warn',
        'dot-notation': ['warn', {
            allowKeywords: false,
        }],
        'eqeqeq': ['warn', 'always', {
            null: 'ignore',
        }],
        'func-name-matching': 'error',
        'func-names': ['error', 'as-needed'],
        'func-style': ['error', 'declaration', {
            allowArrowFunctions: true,
        }],
        'id-length': ['warn', {
            exceptions: ['x', 'y', 'i'],
        }],

        /*
         * I don't like using id-match because I can't exclude class names
         * 'id-match': ['warn', '^[a-z]+([A-Z][a-z]+)*$'],
         */
        'max-classes-per-file': ['warn', 1],
        'max-depth': 'warn',
        'max-lines-per-function': ['warn', {
            max: 100,
            skipBlankLines: true,
            skipComments: true,
        }],
        'max-nested-callbacks': 'warn',
        'multiline-comment-style': ['warn', 'starred-block'],
        'new-cap': 'error',
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-confusing-arrow': 'error',
        // 'no-console': 'error',
        'no-else-return': 'warn',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'warn',
        'no-invalid-this': 'error',
        'no-labels': 'warn',
        'no-lonely-if': 'warn',
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': ['error', {
            props: true,
        }],
        'no-proto': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-sequences': 'warn',
        'no-shadow': ['error', {
            builtinGlobals: true,
            hoist: 'functions',
        }],
        'no-throw-literal': 'error',
        'no-undef-init': 'warn',
        'no-underscore-dangle': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': ['error', {
            enforceForClassMembers: true,
        }],
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': ['warn', 'always', {
            avoidQuotes: true,
        }],
        'operator-assignment': ['warn', 'always'],
        'prefer-const': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-exponentiation-operator': 'warn',
        'prefer-named-capture-group': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': 'error',
        // 'prefer-template': 'warn',
        'quote-props': ['error', 'consistent-as-needed'],
        'radix': ['error', 'as-needed'],
        'require-unicode-regexp': 'error',
        'sort-imports': 'warn',
        'spaced-comment': 'warn',
        'strict': 'error',
        'symbol-description': 'warn',
        'yoda': ['warn', 'never'],
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['warn', 'consistent'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': 'warn',
        'block-spacing': 'warn',
        'brace-style': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'dot-location': ['warn', 'property'],
        'eol-last': ['warn', 'always'],
        'func-call-spacing': 'warn',
        'function-call-argument-newline': ['warn', 'consistent'],
        'generator-star-spacing': ['warn', 'before'],
        'implicit-arrow-linebreak': ['warn', 'beside'],
        'indent': 'warn',
        'jsx-quotes': 'error',
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'line-comment-position': 'warn',
        'lines-around-comment': 'warn',
        'lines-between-class-members': ['warn', 'always', {
            exceptAfterSingleLine: true,
        }],
        'max-statements-per-line': 'warn',
        'multiline-ternary': ['error', 'never'],
        'new-parens': 'error',

        /*
         * 'newline-per-chained-call': ['warn', {
         *     ignoreChainWithDepth: 3,
         * }],
         */
        'no-extra-parens': 'warn',
        'no-multi-spaces': 'warn',
        'no-multiple-empty-lines': 'warn',
        // TODO turn on after sometime
        // 'no-trailing-spaces': 'warn',
        'no-whitespace-before-property': 'warn',
        // 'object-curly-newline': ['warn', {
        //     ObjectExpression: {
        //         minProperties: 2,
        //     },
        //     ObjectPattern: {
        //         multiline: true,
        //     },
        //     ImportDeclaration: {
        //         multiline: true,
        //     },
        //     ExportDeclaration: {
        //         multiline: true,
        //     },
        // }],
        'object-curly-spacing': 'warn',
        // TODO test object-property-newline
        'object-property-newline': [
            'warn', {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        'operator-linebreak': ['warn', 'before'],
        // 'padded-blocks': 'warn',
        'padding-line-between-statements': [
            'warn', {
                blankLine: 'always',
                prev: ['const', 'let'],
                next: '*',
            }, {
                blankLine: 'any',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            }, {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            }, {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            }, {
                blankLine: 'always',
                prev: ['case', 'default'],
                next: '*',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'class',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'do',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'import',
            }, {
                blankLine: 'any',
                prev: 'import',
                next: 'import',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'export',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'function',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'if',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'while',
            }, {
                blankLine: 'always',
                prev: '*',
                next: 'try',
            },
        ],
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true,
        }],
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': 'warn',
        'space-infix-ops': 'error',
        'space-unary-ops': 'warn',
        'switch-colon-spacing': 'warn',
        'template-curly-spacing': 'warn',
        'template-tag-spacing': ['warn', 'always'],
        'unicode-bom': 'error',
        'wrap-iife': 'warn',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',

    },
};
