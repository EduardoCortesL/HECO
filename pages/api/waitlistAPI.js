const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server:process.env.MAILCHIMP_API_SERVER
})

const audiance = process.env.MAILCHIMP_AUDIENCE_ID;


export default async function addUserMail(req,res){
    console.log("this is the email im getting",req.body);
    try{
        if(req.method === 'POST'){
            const newMailUser = await client.lists.addListMember("498cc3d498", {
                email_address: req.body,
                status: "subscribed"
            });
            //console.log("This is something",newMailUser);
            res.status(200).send({
                status: newMailUser.status,
            })
        }
    }  catch(error){
            //console.log("This are the errors", error.message);
            res.status(error.status || 500).send(error.message)
            }
    }
