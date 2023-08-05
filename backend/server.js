const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//import routes here

//hivindu
const applicationRoutes = require('./routes/applications')
const registeredRoutes = require('./routes/registered')

//dima
const eventRoutes = require('./routes/specialevents');
const timetableRoutes = require('./routes/timetables');
const attendanceRoutes = require('./routes/attendances');
const studentattendancesRoute = require('./routes/studentattendances');
const leaverequests = require('./routes/leaverequest');
const ttrequest = require('./routes/timetablerequest');
const approvedleaves = require('./routes/ApprovedLeavesR');
 

//diniru
const subjectRoutes = require('./routes/subjects');
const enrollmentRoutes = require('./routes/enrollments');
const subjectClient = require('./routes/subjectClient')

//nethmi
const lecturerRoutes = require('./routes/lecturers');
const regRoutes = require('./routes/registration');
const reqRoutes = require('./routes/request');
const timetableUpdate = require('./routes/updateTimet');
const detailRoutes = require('./routes/updateDetails');
const registrationL = require('./routes/registrationL');
const regeviewer = require('./routes/regeviewer');

//minosh
const buyCourse = require("./routes/buyCourse");
const  courseRouter =require('./routes/courses');
const multer = require('multer');
//malshika
const postRoutes = require('./routes/posts')
const approvedStudents = require('./routes/approvedstudents')

//madhu
const additional_payRoutes = require('./routes/additional_pay');
const buyCourseDula = require('./routes/buyCourseDula');
const feesPay = require('./routes/feesPay');
const CalculatedSalarys = require('./routes/CalculatedSalarys');
const nonAcStaffSalary = require('./routes/nonAcStaffSalary');

//disa
const fineRoutes = require('./routes/fine');
const borrowRoutes = require('./routes/borrow');
const applicantsRoutes = require('./routes/applicants');
const membersRoutes = require('./routes/members');
const addBookRoutes = require('./routes/addBook');

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//route middleware

//hivindu
app.use(applicationRoutes);
app.use(registeredRoutes);

//dima
app.use(eventRoutes);
app.use(timetableRoutes);
app.use(attendanceRoutes);
app.use(studentattendancesRoute);
app.use(leaverequests);
app.use(ttrequest);
app.use(approvedleaves);

//diniru
app.use(subjectRoutes);
app.use(enrollmentRoutes);
app.use(subjectClient)

//nethmi
app.use(lecturerRoutes);
app.use(regRoutes);
app.use(reqRoutes);
app.use(timetableUpdate);
app.use(detailRoutes);
app.use(registrationL);
app.use(regeviewer);

//minosh
app.use('/courses', courseRouter );
app.use(buyCourse);




app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({storage}).array('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.files)
    })
});










//malshika
app.use(postRoutes);
app.use(approvedStudents);

//madhu
app.use(additional_payRoutes);
app.use (buyCourseDula);
app.use (feesPay);
app.use(CalculatedSalarys);
app.use(nonAcStaffSalary);

//disa
app.use("/fines",fineRoutes);
app.use("/borrow",borrowRoutes);
app.use("/applicants",applicantsRoutes);
app.use("/member",membersRoutes);
app.use("/addBook",addBookRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://admin:admin@institutedb.nhxwx.mongodb.net/instituteDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB connect failed', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

