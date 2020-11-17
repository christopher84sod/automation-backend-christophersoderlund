/* /// <reference types="cypress" /> */
// GET, POST, PUT and DELETE 

import * as billHelper from '../helpers/billHelper'
import * as roomHelper from '../helpers/roomHelper'
describe('Testfall', function(){
    const newroom = roomHelper.createRandomRoom()
    it ('New Room', function(){
        roomHelper.NewRoom(cy,newroom)
        roomHelper.RoomCheck(cy,newroom.number,newroom.floor,newroom.available,newroom.price)
       })
       
       it ('Edit First Room', function(){
        const Editnewroom = roomHelper.createRandomRoom()
        roomHelper.EditFirstRoom(cy,Editnewroom)
        roomHelper.RoomCheck(cy,Editnewroom.number,Editnewroom.floor,Editnewroom.available,Editnewroom.price)
       })
       
        it ('Delete Room', function(){       
            roomHelper.deleteRoom(cy)
        })
    
    
    const newbill = billHelper.createRandomBill()
    it ('New Bill', function(){
     
        billHelper.NewBill(cy,newbill)
        billHelper.billsCheck(cy,newbill.value,newbill.paid)
    })
    
    it ('Edit First Bill', function(){
       const newBill = billHelper.createRandomBill()
       const EditFirstBill = {"id":1,"created":"2020-01-07T12:00:00.000Z","value":newBill.value,"paid":newBill.paid}
       billHelper.EditFirstBill(cy,EditFirstBill)
       billHelper.billsCheck(cy,newBill.value,newBill.paid)

    })
   
    it ('Delete Bill', function(){       
        billHelper.deleteBill(cy)
        billHelper.billsCheckNotthere(cy,newbill.value)
    })
   
   
   
   
   
   
   
   
    /* it ('Creat New Client', function(){
     
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
    }) */


}) // Slut på test

