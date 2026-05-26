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
