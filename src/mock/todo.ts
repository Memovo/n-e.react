export function xhrGetTodo(): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                status: 200,
                list: [
                    {
                        text: '待完成事件',
                        value: 0,
                    },
                    {
                        text: '已结束事件',
                        value: 1,
                    },
                ]
            })
        }, 300)
    })
}
