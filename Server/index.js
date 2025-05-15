const express = require('express');

const port = 8000;

const app = express();

const db = require('./Database/db');

const cors = require('cors');

app.use(cors());

app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     return res.status(200).json({
//         success: true,
//         msg: "hello",
//         todo: [
//             {
//                 "id": 1,
//                 "title": "Buy groceries",
//                 "description": "Remember to get milk, bread, and coffee.",
//                 "completed": false,
//                 "due_date": "2025-04-27T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-19T04:25:17.296961Z",
//                 "updated_at": "2025-04-19T04:25:17.296961Z"
//             },
//             {
//                 "id": 2,
//                 "title": "Finish project report",
//                 "description": "Deadline by end of the day.",
//                 "completed": true,
//                 "due_date": "2025-04-27T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-20T04:25:17.296961Z",
//                 "updated_at": "2025-04-20T04:25:17.296961Z"
//             },
//             {
//                 "id": 3,
//                 "title": "Call plumber",
//                 "description": "Check for leaks in the kitchen sink.",
//                 "completed": true,
//                 "due_date": "2025-04-29T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-19T04:25:17.296961Z",
//                 "updated_at": "2025-04-19T04:25:17.296961Z"
//             },
//             {
//                 "id": 4,
//                 "title": "Schedule dentist appointment",
//                 "description": "Routine dental cleaning needed.",
//                 "completed": true,
//                 "due_date": "2025-04-28T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-21T04:25:17.296961Z",
//                 "updated_at": "2025-04-23T04:25:17.296961Z"
//             },
//             {
//                 "id": 5,
//                 "title": "Write blog post",
//                 "description": "Topic: Productivity hacks.",
//                 "completed": true,
//                 "due_date": "2025-04-27T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-16T04:25:17.296961Z",
//                 "updated_at": "2025-04-21T04:25:17.296961Z"
//             },
//             {
//                 "id": 6,
//                 "title": "Pay utility bills",
//                 "description": "Due before the 5th of each month.",
//                 "completed": false,
//                 "due_date": "2025-04-25T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-20T04:25:17.296961Z",
//                 "updated_at": "2025-04-23T04:25:17.296961Z"
//             },
//             {
//                 "id": 7,
//                 "title": "Read new book",
//                 "description": "Start with chapter 1.",
//                 "completed": true,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-21T04:25:17.296961Z",
//                 "updated_at": "2025-04-23T04:25:17.296961Z"
//             },
//             {
//                 "id": 8,
//                 "title": "Workout session",
//                 "description": "Leg day. Don't skip.",
//                 "completed": false,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-17T04:25:17.296961Z",
//                 "updated_at": "2025-04-19T04:25:17.296961Z"
//             },
//             {
//                 "id": 9,
//                 "title": "Prepare dinner",
//                 "description": "Try the new pasta recipe.",
//                 "completed": false,
//                 "due_date": "2025-04-29T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-15T04:25:17.296961Z",
//                 "updated_at": "2025-04-16T04:25:17.296961Z"
//             },
//             {
//                 "id": 10,
//                 "title": "Clean the house",
//                 "description": "Living room and kitchen mainly.",
//                 "completed": false,
//                 "due_date": "2025-04-28T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-21T04:25:17.296961Z",
//                 "updated_at": "2025-04-24T04:25:17.296961Z"
//             },
//             {
//                 "id": 11,
//                 "title": "Fix the bike",
//                 "description": "Chain is making noise.",
//                 "completed": false,
//                 "due_date": "2025-04-29T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-15T04:25:17.296961Z",
//                 "updated_at": "2025-04-18T04:25:17.296961Z"
//             },
//             {
//                 "id": 12,
//                 "title": "Organize desk",
//                 "description": "Declutter and sort papers.",
//                 "completed": true,
//                 "due_date": "2025-04-27T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-22T04:25:17.296961Z",
//                 "updated_at": "2025-04-23T04:25:17.296961Z"
//             },
//             {
//                 "id": 13,
//                 "title": "Backup files",
//                 "description": "Use external hard drive.",
//                 "completed": false,
//                 "due_date": "2025-04-29T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-20T04:25:17.296961Z",
//                 "updated_at": "2025-04-22T04:25:17.296961Z"
//             },
//             {
//                 "id": 14,
//                 "title": "Study for exam",
//                 "description": "Focus on chapters 3 and 4.",
//                 "completed": false,
//                 "due_date": "2025-04-25T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-15T04:25:17.296961Z",
//                 "updated_at": "2025-04-17T04:25:17.296961Z"
//             },
//             {
//                 "id": 15,
//                 "title": "Plan weekend trip",
//                 "description": "Destination: mountains.",
//                 "completed": true,
//                 "due_date": "2025-04-29T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-19T04:25:17.296961Z",
//                 "updated_at": "2025-04-24T04:25:17.296961Z"
//             },
//             {
//                 "id": 16,
//                 "title": "Water the plants",
//                 "description": "Every 3 days.",
//                 "completed": false,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-23T04:25:17.296961Z",
//                 "updated_at": "2025-04-23T04:25:17.296961Z"
//             },
//             {
//                 "id": 17,
//                 "title": "Attend team meeting",
//                 "description": "Bring notes to the meeting.",
//                 "completed": true,
//                 "due_date": "2025-04-29T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-18T04:25:17.296961Z",
//                 "updated_at": "2025-04-21T04:25:17.296961Z"
//             },
//             {
//                 "id": 18,
//                 "title": "Submit tax documents",
//                 "description": "Due this Friday.",
//                 "completed": false,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-22T04:25:17.296961Z",
//                 "updated_at": "2025-04-23T04:25:17.296961Z"
//             },
//             {
//                 "id": 19,
//                 "title": "Grocery shopping",
//                 "description": "Restock snacks and fruit.",
//                 "completed": false,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-14T04:25:17.296961Z",
//                 "updated_at": "2025-04-17T04:25:17.296961Z"
//             },
//             {
//                 "id": 20,
//                 "title": "Update resume",
//                 "description": "Add recent experience.",
//                 "completed": false,
//                 "due_date": "2025-04-26T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-21T04:25:17.296961Z",
//                 "updated_at": "2025-04-26T04:25:17.296961Z"
//             },
//             {
//                 "id": 21,
//                 "title": "Learn new recipe",
//                 "description": "Try cooking Pad Thai.",
//                 "completed": true,
//                 "due_date": "2025-04-28T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-23T04:25:17.296961Z",
//                 "updated_at": "2025-04-28T04:25:17.296961Z"
//             },
//             {
//                 "id": 22,
//                 "title": "Practice guitar",
//                 "description": "Practice scales and chords.",
//                 "completed": false,
//                 "due_date": "2025-04-27T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-14T04:25:17.296961Z",
//                 "updated_at": "2025-04-16T04:25:17.296961Z"
//             },
//             {
//                 "id": 23,
//                 "title": "Go for a walk",
//                 "description": "30-minute light walk.",
//                 "completed": true,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "medium",
//                 "created_at": "2025-04-19T04:25:17.296961Z",
//                 "updated_at": "2025-04-21T04:25:17.296961Z"
//             },
//             {
//                 "id": 24,
//                 "title": "Reply to emails",
//                 "description": "Respond to priority messages.",
//                 "completed": false,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-14T04:25:17.296961Z",
//                 "updated_at": "2025-04-16T04:25:17.296961Z"
//             },
//             {
//                 "id": 25,
//                 "title": "Clean the garage",
//                 "description": "Organize tools and shelves.",
//                 "completed": true,
//                 "due_date": "2025-04-26T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-16T04:25:17.296961Z",
//                 "updated_at": "2025-04-20T04:25:17.296961Z"
//             },
//             {
//                 "id": 26,
//                 "title": "Review budget",
//                 "description": "Check monthly spending.",
//                 "completed": false,
//                 "due_date": "2025-04-30T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-16T04:25:17.296961Z",
//                 "updated_at": "2025-04-17T04:25:17.296961Z"
//             },
//             {
//                 "id": 27,
//                 "title": "Schedule annual checkup",
//                 "description": "Ask about blood test.",
//                 "completed": false,
//                 "due_date": "2025-05-01T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-14T04:25:17.296961Z",
//                 "updated_at": "2025-04-17T04:25:17.296961Z"
//             },
//             {
//                 "id": 28,
//                 "title": "Order new shoes",
//                 "description": "Size 10, black color.",
//                 "completed": false,
//                 "due_date": "2025-04-26T04:25:17.296961Z",
//                 "priority": "low",
//                 "created_at": "2025-04-15T04:25:17.296961Z",
//                 "updated_at": "2025-04-20T04:25:17.296961Z"
//             },
//             {
//                 "id": 29,
//                 "title": "Watch tutorial video",
//                 "description": "Learn JavaScript basics.",
//                 "completed": false,
//                 "due_date": "2025-04-25T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-14T04:25:17.296961Z",
//                 "updated_at": "2025-04-15T04:25:17.296961Z"
//             },
//             {
//                 "id": 30,
//                 "title": "Print important documents",
//                 "description": "For Monday's presentation.",
//                 "completed": false,
//                 "due_date": "2025-04-25T04:25:17.296961Z",
//                 "priority": "high",
//                 "created_at": "2025-04-22T04:25:17.296961Z",
//                 "updated_at": "2025-04-24T04:25:17.296961Z"
//             }
//         ]
//     })
// })

express.json();

app.use(express.urlencoded());

app.use('/', require('./route/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is start on port : `, port);
})