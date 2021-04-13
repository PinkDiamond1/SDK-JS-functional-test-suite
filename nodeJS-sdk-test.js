
var Hyperwallet = require("/Users/rrathinasabapath/IntellijWorkspace/node-sdk");
//var Hyperwallet = require("hyperwallet-sdk");

var client = new Hyperwallet({
    username: "selrestuser@1861681",
    password: "Password1!",
    server:"https://localhost-hyperwallet.aws.paylution.net:8181",
    programToken: "prg-eedaf875-01f1-4524-8b94-d4936255af78",
});

/*
var client = new Hyperwallet({
    username: "selrestuser@330068",
    password: "Password1!",
    //server:"https://localhost:8181",
    server:"https://localhost-hyperwallet.aws.paylution.net:8181",
    programToken: "prg-0438cadc-614c-11e5-af23-0faa28ca7c0f",
});
*/
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

myFunction= function(errors, body, res) {
    if (errors) {
        console.log("list Failed");
        console.log(errors);
    } else {
        transitionBody = body;
        console.log("list Response");
        console.log(res.text);
    }
}


option = {
    "createdBefore" : "2017-07-26T17:39:56",
    "status" : "ACTIVATED"
};

//console.log("Starting the Prepaid cards--------");

//client.listPrepaidCards("usr-ef382719-975d-47d9-8f92-ba751f62fbab", option, myFunction);
console.log("Starting the listPayPalAccounts--------");
/*
client.listUsers((err, body) => {
    if (err)
        console.log(err);
    if (body)
        console.log(body)
});

client.listUsers(option,myFunction);
*/
//client.listPayPalAccounts("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba", option, myFunction);
/*
client.listWebhookNotifications({
    programToken: "prg-eedaf875-01f1-4524-8b94-d4936255af78",
    type : "USERS.CREATED",
    limit: 10,
    offset: 0,
    createdAfter: '2021-03-02T00:00:00',
    createdBefore: '2021-03-03T00:00:00',
    sortBy: 'createdOn'
}, (err, body) => {
    if (err)
        console.log(err);
    if (body)
        console.log(body)
});
*/


client.listWebhookNotifications({
    //limit: 5,
    //type : "USERS.CREATED",
   // type: 'TRANSFERS.UPDATED.STATUS.SCHEDULED',
   // type: 'PAYMENTS.UPDATED.STATUS.COMPLETED',
    type: 'TRANSFERS.UPDATED.STATUS.COMPLETED',
    createdAfter: '2020-09-29T00:00:00',
    createdBefore: '2020-09-30T00:00:00',
    sortBy: 'createdOn'
}, (err, body) => {
    if (err)
        console.log(err);
    if (body)
        console.log(body)
});

/*
console.log("Starting the listBalancesForUser--------");
client.listBalancesForUser("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba", {}, myFunction);
console.log("Starting the getTransfer--------");
client.getTransfer("trf-5f354d37-ab33-41e5-a80c-39c897e0823a",myFunction);


client.createPayPalAccount("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba", {
    "type": "PAYPAL_ACCOUNT",
    "transferMethodCountry": "US",
    "transferMethodCurrency": "USD",
    "email": "john@company.com"
}, myFunction) ;
*/
//client.getPayPalAccount("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba","trm-44d90b1a-099a-4ea0-b238-d93f3f1c3d9b", myFunction); 
//newAccountData = {"email": "john2@company.com"};
//client.updatePayPalAccount("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba","trm-44d90b1a-099a-4ea0-b238-d93f3f1c3d9b", newAccountData, myFunction);
/*

var userData = {
    clientUserId: "user1877264",
    email: "user1877264@sink.sendgrid.net",
    profileType: "INDIVIDUAL",
    firstName: "Stan",
    middleName: "QA",
    lastName: "Fung",
    dateOfBirth: "1980-01-01",
    phoneNumber: "647-90531",
    addressLine1: "abc",
    city: "vancouver",
    gender: "MALE",
    stateProvince: "AZ",
    country: "US",
    postalCode: "12345",
    language: "en",
    mobileNumber: "605-555-1323",
    timeZone: "MST",
    programToken: "prg-eedaf875-01f1-4524-8b94-d4936255af78",
    governmentId: "987654321",
    verificationStatus:"NOT_REQUIRED",
    businessStakeholderVerificationStatus:"VERIFIED",
    letterOfAuthorizationStatus:"VERIFIED",
    governmentIdType:"NATIONAL_ID_CARD"
};


client.createUser(userData, function(errors, body, res) {
    if (errors) {
        console.log("Create User Failed");
        console.log(errors);
    } else {
        console.log("Create User Response");
        console.log(body);
    }
});


option = {
    "type" : "BANK_CARD"
};
client.listBankCards("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba", option, myFunction);
option = {
    'currency':'USD'
};




createOption = {
    "clientTransferId": "transferid-2",
    "destinationAmount": "10",
    "destinationCurrency": "USD",
    "notes": "transfer-notes",
    "memo": "transfer-memo",
    "purpose": "OTHER",
    "sourceToken": "usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba",
    "destinationToken": "act-d468a8e7-19f5-4dac-9fcd-5bd0d9a80c09"
}

//client.createTransfer(createOption, myFunction);
client.getTransfer("trf-5f354d37-ab33-41e5-a80c-39c897e0823a",myFunction);

commitOption = {
    "transition": "SCHEDULED",
    "notes": "Completing the Partial-Balance Transfer"
}
//client.createTransferStatusTransition("trf-5f354d37-ab33-41e5-a80c-39c897e0823a",commitOption,myFunction);


listOption = {
    clientTransferId:"transferid-2",
    //sourceToken:"usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba",
    //destinationToken:"act-d468a8e7-19f5-4dac-9fcd-5bd0d9a80c09"
};

//client.listTransfers({},myFunction);

createSpendbackRefundOption = {
    //"clientRefundId": "sts-772cc157-4d7d-4b28-b03e-56103bb2a953",
    "clientRefundId": "client-refund-id-1",
    "notes": "Merchant Payment return to Wallet Balance",
    "memo": "TransferClientId transferid-2"
}

//client.createTransferRefund("trf-5f354d37-ab33-41e5-a80c-39c897e0823a", createSpendbackRefundOption, myFunction);
//client.getTransferRefund("trf-5f354d37-ab33-41e5-a80c-39c897e0823a", "trd-2340e08d-c5a4-4d01-92b3-5c197ecb81c9", myFunction);
*/