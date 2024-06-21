const server = {
    getServer() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('PROMISE RESOLVE')
            }, 1000)
        })
    }
}