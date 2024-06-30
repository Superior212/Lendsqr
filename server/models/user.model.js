const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    org: String,
    username: String,
    personal_info: {
        full_name: String,
        phone_number: { type: String, unique: true },
        email_address: { type: String, unique: true },
        bvn: { type: Number, unique: true },
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
    date_joined: Date,
    has_loan: Boolean,
    has_savings: Boolean,
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;