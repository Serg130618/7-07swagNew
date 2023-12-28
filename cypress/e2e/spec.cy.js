describe("user store api", () => {
  it("should create, put and delete user", () => {

    cy.request({method: 'PUT', url: "/user/user", body :{ 
      id: 0,
      username: 13,
      code: 200,
      userStatus: 0}
    }).then((response) => {

   expect(response.status).be.eq(200);
   expect(response.body).be.eqls({
     code: 200,
     type: "unknown",
     message: "9223372036854775807"});
    });

    cy.request({method: 'DELETE', url: "/user/13",  body: "13"}).then((response) => {
      expect(response.status).be.eq(200);
      });

      cy.request({method: 'POST', url: "/user", body :{ 
        code: 200,
        type: "unknown",
        message: "0" }
      }).then((response) => {
      
      expect(response.status).be.eql(200);
      expect(response.body).to.eqls( {
        code: 200,
        type: "unknown",
        message: "0"});
      });

});
})