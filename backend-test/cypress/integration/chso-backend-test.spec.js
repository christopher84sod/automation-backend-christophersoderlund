/* /// <reference types="cypress" /> */
// GET, POST, PUT and DELETE 
describe('Testfall', function(){
    
    it ('Creat New Client', function(){
     
          const newClient = {"name":"A","email":"B@b.com","telephone":"C"}
        cy.LogIn().then((response =>{
            cy.request({
                method: "POST",
                url: 'http://localhost:3000/api/client/new',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },body:newClient
            }).then((response =>{
               // cy.log(response.body[0].id)
                
            }))
        }))
    }) 
    it ('Delete Client', function(){
        cy.LogIn().then((response =>{
            cy.request({
                method: "DELETE",
                url: 'http://localhost:3000/api/client/1',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response =>{
            // ok	true
                // cy.log(response)
                

            }))
            
            cy.request({
                method: "GET",
                url: 'http://localhost:3000/api/clients',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response =>{
                cy.log(response.body[0].id)
                cy.log(response.body[0].created)
                cy.log(response.body[0].name)
                cy.log(response.body[0].email)
                cy.log(response.body[0].telephone)

            }))
        }))
    })


    it ('New Bill', function(){
        cy.LogIn().then((response =>{
           const newbill = {"value":"1000","paid":true}
            cy.request({
                method: "POST",
                url: 'http://localhost:3000/api/bill/new',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },body:newbill
            }).then((response =>{
               // cy.log(response.body[0].paid)
               // cy.log(response.body[0].value)

            }))
        }))
    })

    it ('Edit First Bill', function(){
        cy.LogIn().then((response =>{
            const editFirstBill = {"id":1,"created":"2020-01-07T12:00:00.000Z","value":"244500","paid":false}
            cy.request({
                method: "PUT",
                url: 'http://localhost:3000/api/bill/1',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },body:editFirstBill
            })
            cy.request({
                    method: "GET",
                    url: 'http://localhost:3000/api/bills',
                    headers:{
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json'
                    },body:editFirstBill
                }).then((response =>{
                    cy.log(response.body[0].id)
                    cy.log(response.body[0].value)
                    cy.log(response.body[0].paid)
                    }))   
        
        }))
    })

    
    it ('Delete Bill', function(){
        cy.LogIn().then((response =>{
            cy.request({
                method: "DELETE",
                url: 'http://localhost:3000/api/bill/1',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response =>{
             // {"ok":true}
                //   cy.log(response.body[0].id)
             

            }))
            cy.request({
                method: "GET",
                url: 'http://localhost:3000/api/clients',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response =>{
                cy.log(response.body[0].id)
                cy.log(response.body[0].created)
                cy.log(response.body[0].name)
                cy.log(response.body[0].email)
                cy.log(response.body[0].telephone)

            }))
        }))
    })

}) // Slut på test

