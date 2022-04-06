import express  from "express";
import momgoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Đã chạy cổng : ${PORT}`);
})
