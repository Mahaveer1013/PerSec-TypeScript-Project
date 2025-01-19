import "reflect-metadata";
import connectDB from "./Config/db";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import { Logger } from "winston";
import { Container } from "typedi";
import cors from "cors";
import { createExpressServer, useContainer } from "routing-controllers";

// import { AuthController } from "./Api/Controller/auth-controller";
import { UserController } from "./Api/Controller/user-controller";
import { TenantController } from "./Api/Controller/tenant-controller";
import { JobPostingController } from "./Api/Controller/jobPosting-controller";
import { ProvidedJobRolesController } from './Api/Controller/provided-job-roles-controller';
import { SkillDesignationController, SkillDesignationUploadController } from "./Api/Controller/skill-designation-controller"; // Added new controller
import { JobApplicationController } from "./Api/Controller/job-application-controller";
import { InquiryController } from "./Api/Controller/inquiry-controller";
import { LocationController } from "./Api/Controller/location.controller";
import { AuthController } from "./Api/Controller/auth-controller";
import { SuperAdminController } from "./Api/Controller/middleware-test.controller";

useContainer(Container);

dotenv.config();
connectDB();

Container.set(Logger, new Logger());

if (!process.env.PORT || !process.env.ORIGIN_LOCAL || !process.env.ORIGIN_DEV) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

app.use(cors({
  origin: [process.env.ORIGIN_LOCAL, process.env.ORIGIN_DEV],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
}));
const routingApp = createExpressServer({
  classTransformer: true,
  controllers: [
    TenantController,
    JobPostingController,
    UserController, 
    AuthController,
    ProvidedJobRolesController,
    SkillDesignationUploadController, // Added new controller
    SkillDesignationController, // Renamed controller
    JobApplicationController,
    InquiryController, // Added inquiry controller
    LocationController,
    SuperAdminController
  ], // we specify controllers we want to use  // middlewares: [CustomErrorHandler, BeforeRequestMiddleware],
});

app.use(routingApp);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
// })

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

// app.get('/ping', (_req: Request, res: Response) => {
//   return res.send('pong 🏓')
// })


app.use(express.json({ limit: "1024mb" }));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});