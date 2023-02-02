import mongoose from "mongoose";




let testSchema = new mongoose.Schema({

    "data": {
     
        "gstNumber": String,
        "nominationDetails": String,
        "isPOSP": Boolean,
        "isPOSPVerified": Boolean,
        "phoneNumber": String,
        "firstName": String,
        "lastName": String,
        "middleName": String,
        "pospId": String,
        "email": String,
        "alternateNo": String,
        "country": String,
        "countryCode": String,
        "maritalStatus": String,
        "profilePhoto": String,
        "profileHeading": String,
        "occupation": String,
        "incomeStatus": String,
        "motherName": String,
        "fatherName": String,
        "dob": String,
        "created_Date": String,
        "educations": {
            "qualifications": String,
            "pic": String,
            "userId":String,
            "user": String
        },
        "panNo": String,
        "identityProof": String,
        "aadharNo": String,
        "spouseName": String,
        "countryOfBirth": String,
        "residentialStatus": String,
        "latitude": String,
        "longitude": String,
        "addressLine1": String,
        "addressLine2": String,
        "city": String,
        "pinCode":String,
        "addressProof": String,
        "addressProofBack": String,
        "addressProofType": String,
        "addressProofNo": String,
        "addressProofIssueDate": String,
        "addressProofExpiryDate": String,
        "accountHolderName": String,
        "accountNumber": String,
        "ifscCode": String,
        "accountProof": String,
        "signature": String,
        "ipvVideo": String,
        "educationStatus": String
    }
})
 export const test =mongoose.model("test",testSchema)