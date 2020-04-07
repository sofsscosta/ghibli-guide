describe('delete-user', () => {
    let name, email, username, password, token

    beforeEach(() => {
        name = 'name-' + Math.random()
        email = 'email-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    it('should fail on non-string token', () => {
        token = 1
        expect(() =>
            deleteUser(password, token, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)

        token = true
        expect(() =>
            deleteUser(password, token, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)

        token = undefined
        expect(() =>
            deleteUser(password, token, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)
    })

    /* it('should fail on invalid token format', () => {
        token = 'abc'
        
        expect(() =>
            deleteUser(password, token, () => { })
        ).toThrowError(Error, 'invalid token')
    }) */

    it('should fail on non-function callback', () => {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNiZDhmZDE3YjgwOTFiYWFjMTIxMzgiLCJpYXQiOjE1ODA5ODA3NjEsImV4cCI6MTU4MDk4NDM2MX0.t8g49qXznSCYiK040NvOWHPXWqnj9riJ_6MD2vwIv3M'

        expect(() =>
            deleteUser(password, token, 1)
        ).toThrowError(TypeError, 'callback 1 is not a function')


        expect(() =>
            deleteUser(password, token, true)
        ).toThrowError(TypeError, 'callback true is not a function')

        
        expect(() =>
            deleteUser(password, token, undefined)
        ).toThrowError(TypeError, 'callback undefined is not a function')
    })

})
