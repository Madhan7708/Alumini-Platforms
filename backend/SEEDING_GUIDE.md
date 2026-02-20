# Database Seeding Guide

## Sample Data Overview

The `seed.js` script populates your MongoDB database with realistic sample data across all collections:

### 📊 Data Summary

| Collection | Records | Purpose |
|-----------|---------|---------|
| **Admins** | 3 | Super Admin, Event Manager, Content Manager |
| **Students** | 5 | Students from different departments & batches |
| **Alumni** | 5 | Approved & pending alumni with job details |
| **Jobs** | 5 | Full-time, Part-time, Internship opportunities |
| **Events** | 4 | Career fairs, tech talks, alumni meets |
| **Donations** | 4 | Donation campaigns for various causes |
| **Donation Payments** | 5 | Payment transaction records |
| **Messages** | 6 | Chat conversations between users |

---

## 🚀 How to Run the Seed Script

### Step 1: Navigate to Backend Directory
```powershell
cd backend
```

### Step 2: Ensure Dependencies Are Installed
```powershell
npm install
```

### Step 3: Run the Seed Script
```powershell
node seed.js
```

### Step 4: Verify Success
You should see output like:
```
✅ Connected to MongoDB
✅ Seeded 3 admins
✅ Seeded 5 students
✅ Seeded 5 alumni
✅ Seeded 5 jobs
✅ Seeded 4 events
✅ Seeded 4 donations
✅ Seeded 5 donation payments
✅ Seeded 6 messages

🎉 Database seeding completed successfully!
```

---

## 📝 Sample Login Credentials

After seeding, you can login with these credentials:

### Admin Login
- **Email/Username:** `admin`
- **Password:** `admin123`
- **Role:** Super Admin

### Alternative Admin
- **Email:** `events@alumini.com`
- **Password:** `events123`
- **Role:** Event Manager

### Alumni Login (Approved)
- **Email:** `arjun.kapoor@gmail.com`
- **Password:** `alumni123`
- **Name:** arjun_kapoor
- **Company:** Google

### Alumni Login (Pending Approval)
- **Email:** `rahul.singh@gmail.com`
- **Password:** `alumni123`
- **Name:** rahul_singh
- **Company:** TCS

### Student Login
- **Email:** `akshay.patel@student.com`
- **Password:** `student123`
- **Roll No:** 21CS001
- **Name:** akshay_patel

---

## 🔧 Customizing Sample Data

To modify sample data, edit `seed.js`:

### Change Number of Records
Open `seed.js` and modify the data arrays in each seed function. For example:

```javascript
// In seedStudents()
const studentData = [
  // Add or remove student objects here
];
```

### Add New Fields
If you add fields to your schemas, update the corresponding seed function:

```javascript
{
  userName: "new_user",
  email: "new@email.com",
  // Add new fields here
}
```

### Clear Database Before Seeding
Uncomment this line in `seedDatabase()`:
```javascript
await clearDatabase(); // Uncomment this line
```

---

## ⚠️ Important Notes

1. **Passwords:** All sample passwords are plaintext before seeding. They're hashed with bcryptjs during insertion.
2. **Unique Fields:** Email and rollNo are set as unique. Don't duplicate these in custom data.
3. **References:** Job postings reference alumni IDs, and donations reference each other.
4. **Timestamps:** Events and messages use automatic timestamps.

---

## 🚨 Troubleshooting

### Error: "MongoDB connection failed"
- Verify `MONGODB_URI` in `.env` file
- Check internet connection
- Ensure MongoDB cluster is running

### Error: "Duplicate key error"
- Run with `await clearDatabase()` uncommented
- Or use MongoDB Compass to manually delete collections

### Error: "Module not found"
- Run `npm install` to ensure all dependencies are installed
- Verify `.env` file exists with `MONGODB_URI`

---

## 📂 File Locations

- Seed Script: `backend/seed.js`
- Environment Variables: `backend/.env`
- Models: `backend/models/`

---

## 🎯 Next Steps

After seeding:
1. Start your backend: `npm start`
2. Access API endpoints to fetch sample data
3. Test frontend with populated database
4. Create your own data as needed

---

## 📌 Sample API Endpoints to Test

```bash
# Get all students
GET /students

# Get all alumni
GET /alumni

# Get all jobs
GET /jobs

# Get all events
GET /events

# Login with sample credentials
POST /login
Body: { "userInput": "akshay_patel", "password": "student123" }
```

