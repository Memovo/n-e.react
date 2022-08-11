'use strict'

module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    rules: {
        'type-enum': [
            2,
            'always',
            ['WIP', 'feat', 'fix', 'refactor', 'docs', 'test', 'style', 'chore', 'revert'],
        ],
        'type-case': [1, 'always', ['lower-case', 'upper-case']],
        'scope-case': [0, 'never'],
        'subject-case': [0, 'never'],
        'scope-empty': [0, 'never'],
    },
}