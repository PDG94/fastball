const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "fastball.pf@gmail.com",
    pass: "xjglbexuejzggbhj"
  }
});

const mailActivateAccount = async (name, email) => {
  await transport.sendMail({
    from: "FastBall <fastball.pf@gmail.com>",
    to: email,
    subject: "Account activated at FastBall ",
    html: `
            <h2>Hi! ${name}</h2>
            <h4>Thank you for registering.</h4>
            <hr />            
            <div>                        
              <p>Regards,</p>
              <p>Your friends at FastBall</p>
            </div>        
          `,
  });
};

const pago = async (name, email, amount, items) => {
  await transport.sendMail({
    from: "FastBall <fastball.pf@gmail.com>",
    to: email,
    subject: "Succesful Payment",
    html: `
            <h2>Hi! ${name}</h2>
            <h1>Thank you for your purchase of ${items} worth $${amount}.</h1>
            <hr />            
            <div>                        
              <p>Regards,</p>
              <p>Your friends at FastBall</p>
            </div>        
         `,
  });
};

const datos = async (name, email) => {
  await transport.sendMail({
    from: "FastBall <fastball.pf@gmail.com>",
    to: email,
    subject: "Information Updated",
    html: `
            <h2>Hi! ${name}</h2>
            <h1>Your user info has been updated.</h1>
            <hr />            
            <div>                        
              <p>Regards,</p>
              <p>Your friends at FastBall</p>
            </div>        
         `,
  });
};


const baja = async (name, email) => {
  await transport.sendMail({
    from: "FastBall <fastball.pf@gmail.com>",
    to: email,
    subject: "Account Cancelled",
    html: `
            <h2>Hi! ${name}, we are sad to see you go.</h2>
            <h1>Your account has been successfully cancelled.</h1>
            <hr />            
            <div>                        
              <p>Regards,</p>
              <p>Your friends at FastBall</p>
            </div>        
         `,
  });
};

const active = async (name, email) => {
  await transport.sendMail({
    from: "FastBall <fastball.pf@gmail.com>",
    to: email,
    subject: "Account Re-Activated",
    html: `
            <h2>Hi! ${name}, we are glad to see you back.</h2>
            <h1>Your account has been successfully activated.</h1>
            <hr />            
            <div>                        
              <p>Regards,</p>
              <p>Your friends at FastBall</p>
            </div>        
         `,
  });
};

module.exports = { mailActivateAccount, pago, datos, baja, active };