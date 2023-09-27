class DummyAPI {
    static getUserData() {
        return cy.request({
            method: 'GET',
            url: 'https://dummyapi.io/data/v1/post',
            headers: {
                'Context-Type': 'application-json',
                'app-id': '61f4248c9d9bb038eaf0c6c0'
            } 
        }).then((reponse) => {
            return reponse.body.data
        })
    }
}
export default DummyAPI