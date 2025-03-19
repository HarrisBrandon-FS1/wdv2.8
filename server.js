require("dotenv").config();
const app = require("../WDV353-2_8/app");
const connectDB = require("../WDV353-2_8/app/db/config");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
}
);

