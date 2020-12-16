
import BannerModel from './BannerModel';
import StudentModel from "./StudentModel";
import TeacherModel from "./TeacherModel";
import LessonModel from "./LessonModel";
import JournalModel from "./JournalModel";
import SublessonModel from './SublessonModel';
import ScheduleModel from './ScheduleModel';
import TransactionModel from './TransactionModel';


const Banner = new BannerModel({ model: 'banner' });
const Student = new StudentModel({ model: 'student' });
const Teacher = new TeacherModel({ model: 'teacher' });
const Lesson = new LessonModel({ model: 'lesson' });
const Journal = new JournalModel({ model: 'journal' });
const Sublesson = new SublessonModel({ model: 'sublesson' });
const Transaction = new TransactionModel({ model: 'transaction' });
const Schedule = new ScheduleModel({ model: 'schedule' });


export { Banner, Student, Teacher, Lesson, Journal, Sublesson, Schedule, Transaction };
