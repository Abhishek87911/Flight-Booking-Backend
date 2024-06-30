const sender = require('../config/email-config');

const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();
const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
   
}

const fetchPendingEmail = async (timeStamp) => {
    try {
        
      
        const response = await repo.get({status: 'PENDING'});
        return response;
        
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
          
    } catch (error) {
        throw error;
    }
}

const subscribedEvents = async (payload) => {
    let service = payload.service;
    let data = payload.data;
    switch (service) {
        case 'CREATE_TICKET':
               await createNotification(data);
               break;
       case 'SEND_BASIC_MAIL':
                await sendBasicEmail(data);
                break;
    
        default:
            console.log('No valid event received');
            break;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmail,
    createNotification,
    updateTicket,
    subscribedEvents
}