//var http = require('http');

var Hyperwallet = require("hyperwallet-sdk");
var client = new Hyperwallet({
    username: "selrestuser@1861681",
    password: "Password1!",
    server:"https://localhost-hyperwallet.aws.paylution.net:8181",
    programToken: "prg-eedaf875-01f1-4524-8b94-d4936255af78",
});
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

/*
option = {
    "status" : "ACTIVATED"
};

client.listPrepaidCards("usr-ef382719-975d-47d9-8f92-ba751f62fbab", option, myFunction);
client.listBalancesForUser("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba", {}, myFunction);


option = {
    "type" : "BANK_CARD"
};
client.listBankCards("usr-f49967a9-9b7f-4cfc-9fc7-037d736711ba", option, myFunction);
option = {
    'currency':'USD'
};

*/


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
