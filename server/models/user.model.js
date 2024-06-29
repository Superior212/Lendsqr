const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    _id: ObjectId,
    org: String,
    username: String,
    personal_info: {
        full_name: String,
        phone_number: String,
        email_address: String,
        bvn: Number,
        gender: String,
        marital_status: String,
        children: Number,
        type_of_residence: String
    },
    education_and_employment: {
        level_of_education: String,
        employment_status: String,
        sector_of_employment: String,
        duration_of_employment: String,
        office_email: String,
        monthly_income: Number,
        loan_repayment: Number
    },
    socials: {
        twitter: String,
        facebook: String,
        instagram: String
    },
    guarantor: {
        full_name: String,
        phone_number: String,
        email_address: String,
        relationship: String
    },
    status: String,
    date_joined: Date
});

const user = mongoose.model("User", userSchema);
module.exports = user;