// MongoDB Zen Class Programme Database

use("zen_class_programme");

// Drop Existing Collections

db.users.drop();
db.codekata.drop();
db.attendance.drop();
db.topics.drop();
db.tasks.drop();
db.company_drives.drop();
db.mentors.drop();

// USERS COLLECTION

db.users.insertMany([
  {
    user_id: "U101",
    name: "Vikram S",
    email: "vikram@gmail.com",
    phone: "9876543211",
    batch: "B43WD",
    mentor_id: "M101",
    created_date: new Date("2020-09-01"),
  },
  {
    user_id: "U102",
    name: "Anitha R",
    email: "anitha@gmail.com",
    phone: "9876543212",
    batch: "B43WD",
    mentor_id: "M101",
    created_date: new Date("2020-09-02"),
  },
  {
    user_id: "U103",
    name: "Rahul K",
    email: "rahul@gmail.com",
    phone: "9876543213",
    batch: "B44WD",
    mentor_id: "M102",
    created_date: new Date("2020-09-03"),
  },
  {
    user_id: "U104",
    name: "Sneha P",
    email: "sneha@gmail.com",
    phone: "9876543214",
    batch: "B44WD",
    mentor_id: "M103",
    created_date: new Date("2020-09-04"),
  },
]);

// CODEKATA COLLECTION

db.codekata.insertMany([
  {
    user_id: "U101",
    problem_id: "P101",
    problem_title: "Array Rotation",
    solved_date: new Date("2020-10-05"),
    difficulty: "Easy",
    status: "solved",
  },
  {
    user_id: "U101",
    problem_id: "P102",
    problem_title: "Find Maximum",
    solved_date: new Date("2020-10-07"),
    difficulty: "Easy",
    status: "solved",
  },
  {
    user_id: "U102",
    problem_id: "P103",
    problem_title: "Palindrome Number",
    solved_date: new Date("2020-10-11"),
    difficulty: "Medium",
    status: "solved",
  },
  {
    user_id: "U103",
    problem_id: "P104",
    problem_title: "Merge Arrays",
    solved_date: new Date("2020-10-18"),
    difficulty: "Medium",
    status: "solved",
  },
]);

// ATTENDANCE COLLECTION

db.attendance.insertMany([
  {
    user_id: "U101",
    date: new Date("2020-10-15"),
    status: "present",
    topic_id: "T101",
  },
  {
    user_id: "U102",
    date: new Date("2020-10-20"),
    status: "absent",
    topic_id: "T102",
  },
  {
    user_id: "U103",
    date: new Date("2020-10-22"),
    status: "absent",
    topic_id: "T103",
  },
  {
    user_id: "U104",
    date: new Date("2020-10-25"),
    status: "present",
    topic_id: "T104",
  },
]);

// TOPICS COLLECTION

db.topics.insertMany([
  {
    topic_id: "T101",
    topic_name: "HTML Basics",
    date: new Date("2020-10-15"),
    mentor_id: "M101",
  },
  {
    topic_id: "T102",
    topic_name: "CSS Flexbox",
    date: new Date("2020-10-20"),
    mentor_id: "M102",
  },
]);

// TASKS COLLECTION

db.tasks.insertMany([
  {
    task_id: "TK101",
    task_name: "Create Portfolio Page",
    assigned_date: new Date("2020-10-16"),
    due_date: new Date("2020-10-25"),
    topic_id: "T101",
    submissions: [
      {
        user_id: "U101",
        submitted_date: new Date("2020-10-24"),
        status: "submitted",
      },
    ],
  },
  {
    task_id: "TK102",
    task_name: "Build Responsive Layout",
    assigned_date: new Date("2020-10-21"),
    due_date: new Date("2020-10-30"),
    topic_id: "T102",
    submissions: [],
  },
]);

// COMPANY DRIVES COLLECTION

db.company_drives.insertMany([
  {
    drive_id: "D101",
    company_name: "HCL",
    drive_date: new Date("2020-10-18"),
    students_appeared: ["U101", "U102"],
    requirements: {
      min_experience: 0,
      skills: ["HTML", "CSS"],
    },
  },
  {
    drive_id: "D102",
    company_name: "Tech Mahindra",
    drive_date: new Date("2020-10-25"),
    students_appeared: ["U101", "U104"],
    requirements: {
      min_experience: 1,
      skills: ["JavaScript", "React"],
    },
  },
  {
    drive_id: "D103",
    company_name: "Capgemini",
    drive_date: new Date("2020-10-28"),
    students_appeared: ["U102", "U103"],
    requirements: {
      min_experience: 0,
      skills: ["MongoDB", "Node.js"],
    },
  },
]);

// MENTORS COLLECTION

db.mentors.insertMany([
  {
    mentor_id: "M101",
    name: "Harish Kumar",
    email: "harish@zenclass.com",
    expertise: ["HTML", "CSS", "JavaScript"],
    mentees: [
      "U101",
      "U102",
      "U105",
      "U106",
      "U107",
      "U108",
      "U109",
      "U110",
      "U111",
      "U112",
      "U113",
      "U114",
      "U115",
      "U116",
      "U117",
      "U118",
    ],
  },
  {
    mentor_id: "M102",
    name: "Lavanya Devi",
    email: "lavanya@zenclass.com",
    expertise: ["React", "Node.js"],
    mentees: ["U103", "U119", "U120"],
  },
  {
    mentor_id: "M103",
    name: "Aravind Raj",
    email: "aravind@zenclass.com",
    expertise: ["MongoDB", "Express"],
    mentees: ["U104", "U121", "U122"],
  },
]);

print("Database Created Successfully");



// Query 1

print("Topics in October 2020");

db.topics.find({
  date: {
    $gte: new Date("2020-10-01"),
    $lt: new Date("2020-11-01"),
  },
});

print("Tasks in October 2020");

db.tasks.find({
  assigned_date: {
    $gte: new Date("2020-10-01"),
    $lt: new Date("2020-11-01"),
  },
});

// Query 2

print("Company Drives Between 15-Oct-2020 and 31-Oct-2020");

db.company_drives.find({
  drive_date: {
    $gte: new Date("2020-10-15"),
    $lte: new Date("2020-10-31"),
  },
});

// Query 3

print("Company Drives with Students Appeared");

db.company_drives.find({
  students_appeared: {
    $exists: true,
    $ne: [],
  },
});

// Query 4

print("Problems Solved By Users");

db.codekata.aggregate([
  {
    $match: {
      status: "solved",
    },
  },
  {
    $group: {
      _id: "$user_id",
      problems_solved: {
        $sum: 1,
      },
    },
  },
]);

// Query 5

print("Mentors with More Than 15 Mentees");

db.mentors.find({
  $expr: {
    $gt: [
      {
        $size: "$mentees",
      },
      15,
    ],
  },
});

// Query 6

print("Absent Users Between 15-Oct-2020 and 31-Oct-2020");

db.attendance.aggregate([
  {
    $match: {
      date: {
        $gte: new Date("2020-10-15"),
        $lte: new Date("2020-10-31"),
      },
      status: "absent",
    },
  },
  {
    $group: {
      _id: null,
      absent_users: {
        $addToSet: "$user_id",
      },
      count: {
        $sum: 1,
      },
    },
  },
]);
