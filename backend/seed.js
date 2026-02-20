// ============================================================
//  seed.js  –  Populate MongoDB with realistic sample data
//  Run:  node seed.js
// ============================================================

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ── Models ──────────────────────────────────────────────────
const AdminProfile = require("./models/admin");
const AluminiProfile = require("./models/alumini");
const Student = require("./models/student");
const Job = require("./models/job");
const Event = require("./models/event");
const Donation = require("./models/donation");
const DonationPayment = require("./models/donationPayment");
const Message = require("./models/messages");
const Conversation = require("./models/conversation");

// ── Helper ──────────────────────────────────────────────────
const hash = (pw) => bcrypt.hashSync(pw, 10);

// ── Clear all collections ───────────────────────────────────
async function clearDatabase() {
    await AdminProfile.deleteMany({});
    await AluminiProfile.deleteMany({});
    await Student.deleteMany({});
    await Job.deleteMany({});
    await Event.deleteMany({});
    await Donation.deleteMany({});
    await DonationPayment.deleteMany({});
    await Message.deleteMany({});
    await Conversation.deleteMany({});
    console.log("🗑️  Cleared all collections");
}

// ── 1. Admins ───────────────────────────────────────────────
async function seedAdmins() {
    const admins = [
        {
            name: "admin",
            email: "admin@alumini.com",
            password: hash("admin123"),
            role: "superAdmin",
        },
        {
            name: "eventmanager",
            email: "events@alumini.com",
            password: hash("events123"),
            role: "event manager",
        },
        {
            name: "contentmanager",
            email: "content@alumini.com",
            password: hash("content123"),
            role: "content manager",
        },
    ];

    const docs = await AdminProfile.insertMany(admins);
    console.log(`✅ Seeded ${docs.length} admins`);
    return docs;
}

// ── 2. Alumni ───────────────────────────────────────────────
async function seedAlumni() {
    const alumni = [
        {
            userName: "arjun_kapoor",
            email: "arjun.kapoor@gmail.com",
            password: hash("alumni123"),
            batch: "2018-2022",
            company: "Google",
            department: "Computer Science",
            industry: "Technology",
            position: "Software Engineer",
            phone: "9876543210",
            linkedin: "https://linkedin.com/in/arjunkapoor",
            github: "https://github.com/arjunkapoor",
            avatar: "",
            marksheet: "https://res.cloudinary.com/demo/image/upload/sample.pdf",
            status: "approved",
        },
        {
            userName: "priya_sharma",
            email: "priya.sharma@gmail.com",
            password: hash("alumni123"),
            batch: "2017-2021",
            company: "Microsoft",
            department: "Information Technology",
            industry: "Technology",
            position: "Product Manager",
            phone: "9876543211",
            linkedin: "https://linkedin.com/in/priyasharma",
            github: "https://github.com/priyasharma",
            avatar: "",
            marksheet: "https://res.cloudinary.com/demo/image/upload/sample.pdf",
            status: "approved",
        },
        {
            userName: "vikram_mehta",
            email: "vikram.mehta@gmail.com",
            password: hash("alumni123"),
            batch: "2019-2023",
            company: "Amazon",
            department: "Electronics",
            industry: "E-Commerce",
            position: "DevOps Engineer",
            phone: "9876543212",
            linkedin: "https://linkedin.com/in/vikrammehta",
            github: "https://github.com/vikrammehta",
            avatar: "",
            marksheet: "https://res.cloudinary.com/demo/image/upload/sample.pdf",
            status: "approved",
        },
        {
            userName: "rahul_singh",
            email: "rahul.singh@gmail.com",
            password: hash("alumni123"),
            batch: "2020-2024",
            company: "TCS",
            department: "Mechanical",
            industry: "Consulting",
            position: "Analyst",
            phone: "9876543213",
            linkedin: "https://linkedin.com/in/rahulsingh",
            github: "",
            avatar: "",
            marksheet: "https://res.cloudinary.com/demo/image/upload/sample.pdf",
            status: "pending",
        },
        {
            userName: "sneha_reddy",
            email: "sneha.reddy@gmail.com",
            password: hash("alumni123"),
            batch: "2016-2020",
            company: "Infosys",
            department: "Computer Science",
            industry: "Technology",
            position: "Data Scientist",
            phone: "9876543214",
            linkedin: "https://linkedin.com/in/snehareddy",
            github: "https://github.com/snehareddy",
            avatar: "",
            marksheet: "https://res.cloudinary.com/demo/image/upload/sample.pdf",
            status: "approved",
        },
    ];

    const docs = await AluminiProfile.insertMany(alumni);
    console.log(`✅ Seeded ${docs.length} alumni`);
    return docs;
}

// ── 3. Students ─────────────────────────────────────────────
async function seedStudents() {
    const students = [
        {
            userName: "akshay_patel",
            email: "akshay.patel@student.com",
            password: hash("student123"),
            rollNo: "21CS001",
            batch: "2021-2025",
            degree: "B.Tech",
            department: "Computer Science",
            year: 3,
            role: "student",
            avatar: "",
        },
        {
            userName: "meera_nair",
            email: "meera.nair@student.com",
            password: hash("student123"),
            rollNo: "21IT002",
            batch: "2021-2025",
            degree: "B.Tech",
            department: "Information Technology",
            year: 3,
            role: "student",
            avatar: "",
        },
        {
            userName: "rajesh_kumar",
            email: "rajesh.kumar@student.com",
            password: hash("student123"),
            rollNo: "22EC003",
            batch: "2022-2026",
            degree: "B.Tech",
            department: "Electronics",
            year: 2,
            role: "student",
            avatar: "",
        },
        {
            userName: "ananya_gupta",
            email: "ananya.gupta@student.com",
            password: hash("student123"),
            rollNo: "20ME004",
            batch: "2020-2024",
            degree: "B.Tech",
            department: "Mechanical",
            year: 4,
            role: "student",
            avatar: "",
        },
        {
            userName: "karthik_rajan",
            email: "karthik.rajan@student.com",
            password: hash("student123"),
            rollNo: "23CS005",
            batch: "2023-2027",
            degree: "B.Tech",
            department: "Computer Science",
            year: 1,
            role: "student",
            avatar: "",
        },
    ];

    const docs = await Student.insertMany(students);
    console.log(`✅ Seeded ${docs.length} students`);
    return docs;
}

// ── 4. Jobs ─────────────────────────────────────────────────
async function seedJobs(alumniDocs) {
    const jobs = [
        {
            title: "Frontend Developer",
            companyName: "Google",
            location: "Bangalore, India",
            jobType: "Full-time",
            skillsRequired: ["React", "JavaScript", "CSS", "HTML"],
            salary: "₹18,00,000 per annum",
            description:
                "We are looking for a passionate Frontend Developer to join our team and build beautiful user interfaces for Google products.",
            deadline: new Date("2026-06-30"),
            postedBy: alumniDocs[0]._id,
            postedByName: "arjun_kapoor",
            companyWebsite: "https://careers.google.com",
            appliedUsers: [],
        },
        {
            title: "Product Management Intern",
            companyName: "Microsoft",
            location: "Hyderabad, India",
            jobType: "Internship",
            skillsRequired: ["Communication", "Analytical Thinking", "SQL", "Excel"],
            salary: "₹50,000 per month",
            description:
                "Join Microsoft as a Product Management Intern and work with cross-functional teams to deliver impactful products.",
            deadline: new Date("2026-05-15"),
            postedBy: alumniDocs[1]._id,
            postedByName: "priya_sharma",
            companyWebsite: "https://careers.microsoft.com",
            appliedUsers: [],
        },
        {
            title: "DevOps Engineer",
            companyName: "Amazon",
            location: "Chennai, India",
            jobType: "Full-time",
            skillsRequired: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
            salary: "₹22,00,000 per annum",
            description:
                "Seeking a DevOps Engineer to manage cloud infrastructure and automate deployment pipelines at Amazon.",
            deadline: new Date("2026-07-20"),
            postedBy: alumniDocs[2]._id,
            postedByName: "vikram_mehta",
            companyWebsite: "https://amazon.jobs",
            appliedUsers: [],
        },
        {
            title: "Data Science Intern",
            companyName: "Infosys",
            location: "Pune, India",
            jobType: "Internship",
            skillsRequired: ["Python", "Machine Learning", "Pandas", "NumPy"],
            salary: "₹35,000 per month",
            description:
                "An exciting opportunity to work on real-world data science projects at Infosys with mentorship from senior data scientists.",
            deadline: new Date("2026-04-30"),
            postedBy: alumniDocs[4]._id,
            postedByName: "sneha_reddy",
            companyWebsite: "https://infosys.com",
            appliedUsers: [],
        },
        {
            title: "Part-time Web Developer",
            companyName: "Freelance Corp",
            location: "Remote",
            jobType: "Part-time",
            skillsRequired: ["Node.js", "Express", "MongoDB", "React"],
            salary: "₹25,000 per month",
            description:
                "Looking for a part-time web developer to help build and maintain web applications for multiple clients.",
            deadline: new Date("2026-08-15"),
            postedBy: alumniDocs[0]._id,
            postedByName: "arjun_kapoor",
            companyWebsite: "https://freelancecorp.com",
            appliedUsers: [],
        },
    ];

    const docs = await Job.insertMany(jobs);
    console.log(`✅ Seeded ${docs.length} jobs`);
    return docs;
}

// ── 5. Events ───────────────────────────────────────────────
async function seedEvents(adminDocs) {
    const events = [
        {
            title: "Annual Career Fair 2026",
            description:
                "Connect with top recruiters from leading tech companies. Bring your resume and dress professionally! Over 50 companies will be participating.",
            date: new Date("2026-03-15"),
            time: "10:00 AM - 4:00 PM",
            venue: "Main Auditorium, Block A",
            media: "",
            postedby: adminDocs[0]._id,
        },
        {
            title: "Tech Talk: AI & Machine Learning",
            description:
                "Join us for an insightful session on the latest trends in Artificial Intelligence and Machine Learning presented by industry experts from Google and Microsoft.",
            date: new Date("2026-04-10"),
            time: "2:00 PM - 5:00 PM",
            venue: "Seminar Hall, Block B",
            media: "",
            postedby: adminDocs[1]._id,
        },
        {
            title: "Alumni Homecoming 2026",
            description:
                "A grand reunion for alumni from all batches! Enjoy networking, panel discussions, cultural events, and a gala dinner with your old classmates.",
            date: new Date("2026-05-20"),
            time: "9:00 AM - 9:00 PM",
            venue: "College Campus Ground",
            media: "",
            postedby: adminDocs[0]._id,
        },
        {
            title: "Workshop: Full-Stack Web Development",
            description:
                "Hands-on workshop covering the MERN stack (MongoDB, Express, React, Node.js). Laptops are mandatory. Prior knowledge of JavaScript is recommended.",
            date: new Date("2026-06-05"),
            time: "10:00 AM - 1:00 PM",
            venue: "Computer Lab 3, Block C",
            media: "",
            postedby: adminDocs[2]._id,
        },
    ];

    const docs = await Event.insertMany(events);
    console.log(`✅ Seeded ${docs.length} events`);
    return docs;
}

// ── 6. Donations ────────────────────────────────────────────
async function seedDonations() {
    const donations = [
        {
            caption: "Help Build the New Computer Lab 💻",
            mediaUrl: "https://res.cloudinary.com/demo/image/upload/computer_lab.jpg",
            mediaType: "image",
        },
        {
            caption: "Scholarship Fund for Underprivileged Students 🎓",
            mediaUrl: "https://res.cloudinary.com/demo/image/upload/scholarship.jpg",
            mediaType: "image",
        },
        {
            caption: "Sports Equipment Fundraiser ⚽",
            mediaUrl: "https://res.cloudinary.com/demo/image/upload/sports.jpg",
            mediaType: "image",
        },
        {
            caption: "Library Renovation Drive 📚",
            mediaUrl: "https://res.cloudinary.com/demo/image/upload/library.jpg",
            mediaType: "image",
        },
    ];

    const docs = await Donation.insertMany(donations);
    console.log(`✅ Seeded ${docs.length} donations`);
    return docs;
}

// ── 7. Donation Payments ────────────────────────────────────
async function seedDonationPayments(donationDocs) {
    const payments = [
        {
            paymentId: "pay_SAMPLE001",
            orderId: "order_SAMPLE001",
            amount: 5000,
            donationPostId: donationDocs[0]._id,
            userEmail: "arjun.kapoor@gmail.com",
            status: "success",
        },
        {
            paymentId: "pay_SAMPLE002",
            orderId: "order_SAMPLE002",
            amount: 2000,
            donationPostId: donationDocs[1]._id,
            userEmail: "priya.sharma@gmail.com",
            status: "success",
        },
        {
            paymentId: "pay_SAMPLE003",
            orderId: "order_SAMPLE003",
            amount: 10000,
            donationPostId: donationDocs[0]._id,
            userEmail: "sneha.reddy@gmail.com",
            status: "success",
        },
        {
            paymentId: "pay_SAMPLE004",
            orderId: "order_SAMPLE004",
            amount: 1500,
            donationPostId: donationDocs[2]._id,
            userEmail: "akshay.patel@student.com",
            status: "success",
        },
        {
            paymentId: "pay_SAMPLE005",
            orderId: "order_SAMPLE005",
            amount: 3000,
            donationPostId: donationDocs[3]._id,
            userEmail: "vikram.mehta@gmail.com",
            status: "success",
        },
    ];

    const docs = await DonationPayment.insertMany(payments);
    console.log(`✅ Seeded ${docs.length} donation payments`);
    return docs;
}

// ── 8. Messages ─────────────────────────────────────────────
async function seedMessages() {
    const messages = [
        {
            sender: "arjun_kapoor",
            receiver: "akshay_patel",
            text: "Hi Akshay! I saw your profile. Would you be interested in a frontend developer role at Google?",
        },
        {
            sender: "akshay_patel",
            receiver: "arjun_kapoor",
            text: "Hi Arjun sir! Yes, I'm very interested. Can you share more details?",
        },
        {
            sender: "arjun_kapoor",
            receiver: "akshay_patel",
            text: "Sure! The role requires React and TypeScript skills. I'll share the JD soon.",
        },
        {
            sender: "priya_sharma",
            receiver: "meera_nair",
            text: "Hey Meera, I have a product management internship opening. Are you interested?",
        },
        {
            sender: "meera_nair",
            receiver: "priya_sharma",
            text: "That sounds amazing! I'd love to learn more about the opportunity.",
        },
        {
            sender: "sneha_reddy",
            receiver: "rajesh_kumar",
            text: "Hi Rajesh, I noticed you're interested in data science. Happy to mentor you!",
        },
    ];

    const docs = await Message.insertMany(messages);
    console.log(`✅ Seeded ${docs.length} messages`);
    return docs;
}

// ── 9. Conversations ────────────────────────────────────────
async function seedConversations() {
    const conversations = [
        {
            sender: "arjun_kapoor",
            receiver: "akshay_patel",
            lastMessage: "Sure! The role requires React and TypeScript skills. I'll share the JD soon.",
        },
        {
            sender: "priya_sharma",
            receiver: "meera_nair",
            lastMessage: "That sounds amazing! I'd love to learn more about the opportunity.",
        },
        {
            sender: "sneha_reddy",
            receiver: "rajesh_kumar",
            lastMessage: "Hi Rajesh, I noticed you're interested in data science. Happy to mentor you!",
        },
    ];

    const docs = await Conversation.insertMany(conversations);
    console.log(`✅ Seeded ${docs.length} conversations`);
    return docs;
}

// ── Main ────────────────────────────────────────────────────
async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB\n");

        // Clear existing data (comment out if you want to keep existing data)
        await clearDatabase();
        console.log("");

        // Seed in order (some collections depend on others)
        const adminDocs = await seedAdmins();
        const alumniDocs = await seedAlumni();
        const studentDocs = await seedStudents();
        const jobDocs = await seedJobs(alumniDocs);
        const eventDocs = await seedEvents(adminDocs);
        const donationDocs = await seedDonations();
        const paymentDocs = await seedDonationPayments(donationDocs);
        const messageDocs = await seedMessages();
        const conversationDocs = await seedConversations();

        console.log("\n🎉 Database seeding completed successfully!\n");

        // Print summary
        console.log("╔══════════════════════════════════════════════╗");
        console.log("║           📊  SEEDING SUMMARY               ║");
        console.log("╠══════════════════════════════════════════════╣");
        console.log(`║  Admins            : ${adminDocs.length}                       ║`);
        console.log(`║  Alumni            : ${alumniDocs.length}                       ║`);
        console.log(`║  Students          : ${studentDocs.length}                       ║`);
        console.log(`║  Jobs              : ${jobDocs.length}                       ║`);
        console.log(`║  Events            : ${eventDocs.length}                       ║`);
        console.log(`║  Donations         : ${donationDocs.length}                       ║`);
        console.log(`║  Donation Payments : ${paymentDocs.length}                       ║`);
        console.log(`║  Messages          : ${messageDocs.length}                       ║`);
        console.log(`║  Conversations     : ${conversationDocs.length}                       ║`);
        console.log("╚══════════════════════════════════════════════╝");

        console.log("\n🔑 Login Credentials:");
        console.log("─────────────────────────────────────────────");
        console.log("👤 Admin       →  username: admin       | password: admin123");
        console.log("🎓 Alumni      →  email: arjun.kapoor@gmail.com | password: alumni123");
        console.log("📚 Student     →  email: akshay.patel@student.com | password: student123");
        console.log("─────────────────────────────────────────────\n");
    } catch (error) {
        console.error("❌ Seeding failed:", error.message);
    } finally {
        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");
        process.exit(0);
    }
}

// Run it!
seedDatabase();
