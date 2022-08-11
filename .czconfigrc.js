'use strict'

module.exports = {
    types: [
        {
            value: 'WIP',
            name: '💪  WIP:      Work in Progress',
        },
        {
            value: 'feat',
            name: '✨  feat:     A new feature',
        },
        {
            value: 'fix',
            name: '🐞  fix:      A bug fix',
        },
        {
            value: 'refactor',
            name: '🛠  refactor:  A code change that neither fixes a bug nor adds a feature',
        },
        {
            value: 'docs',
            name: '📚  docs:     Documentation only changes',
        },
        {
            value: 'test',
            name: '🏁  test:     Add missing tests or correcting existing tests',
        },
        {
            value: 'chore',
            name: '🗯  chore:     Changes that don\'t modify src or test files. Such as updating build tasks, package manager'
        },
        {
            value: 'style',
            name: '💅  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
        },
        {
            value: 'revert',
            name: '⏪  revert:   Revert to a commit',
        },
    ],
    messages: {
        type: '选择你提交的信息类型:',
        scope: '选择本次提交的改变所影响的范围？',
        customScope: '本次提交的改变所影响的范围？',
        subject: '写一个简短的变化描述，尽量包含主谓宾结构，杜绝简单的单词：\n',
        body: '提供更详细的变更描述 (按 enter 跳过). 使用 "|" 换行：\n',
        breaking: '列出所有的不兼容变更 (按 enter 跳过)：\n',
        footer: '列出此次改动解决的所有 issues （如："#123, #234"）(按 enter 跳过)：\n',
        confirmCommit: '确认提交以上内容信息？'
    },
    scopes: [],
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
}
