const mongoose = require("mongoose");

const connectDatabase = () => {
  // mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  mongoose
    .connect(
      " mongodb+srv://new-user_31:aLOc9DLOZDAXAoKq@ecommerce.ilhzz.mongodb.net/Ecommerce?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )
    .then((data) => {
      console.log(`Monogodb connected with server : ${data.connection.host} `);
    });
};

// module.exports = connectDatabase
module.exports = connectDatabase;
