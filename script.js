let myformEl = document.getElementById("myForm");
let firstNameEl = document.getElementById("firstName");
let lastnameEl = document.getElementById("lastName");
let dobEl = document.getElementById("dob");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let fatherFirstNameEl = document.getElementById("fatherFirstName");
let fatherLastNameEl = document.getElementById("fatherLastName");
let motherFirstNameEl = document.getElementById("motherFirstName");
let motherLastNameEl = document.getElementById("motherLastName");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");
let nationEl = document.getElementById("nation");
let addressEl = document.getElementById("address");
let cityEl = document.getElementById("city");
let CountryEl = document.getElementById("Country");
let optionsEl = document.getElementById("options");
let homeNumberEl = document.getElementById("homeNumber");
let personalNumberEl = document.getElementById("personalNumber");
let hscInstitutionNameEl = document.getElementById("hscInstitutionName");
let hscBoardEl = document.getElementById("hscBoard");
let hscScoreEl = document.getElementById("hscScore");
let sscInstitutionNameEl = document.getElementById("sscInstitutionName");
let sscBoardEl = document.getElementById("sscBoard");
let sscScoreEl = document.getElementById("sscScore");
let currentDegreeEl = document.getElementById("currentDegree");
let currentInstitutionNameEl = document.getElementById("currentInstitutionName");
let overallPercentageEl = document.getElementById("overallPercentage");
let backlogsEl = document.getElementById("backlogs");

let formData = {
    candidateName: {
        firstName: "",
        lastName: ""
    },
    DateOfBirth: "",
    email: "",
    candidateFatherName: {
        firstName: "",
        lastName: "",
    },
    candidateMotherName: {
        firstName: "",
        lastName: "",
    },
    nationality: "",
    homeAddress: {
        address: "",
        city: "",
        country: ""
    },
    homeNumber: "",
    personelNumber: "",
    hscEducationalDetails: {
        InstitutionName: "",
        boardName: "",
        score: ""
    },
    sscEducationalDetails: {
        InstitutionName: "",
        boardName: "",
        score: ""
    },
    currentEducationalDetails: {
        degree: "",
        InstitutionName: "",
        overallPercentage: "",
        backlogs: ""
    },
    gender: "Male"
};

firstNameEl.addEventListener("change", function(event) {
    formData.candidateName.firstName = event.target.value;
});
lastnameEl.addEventListener("change", function(event) {
    formData.candidateName.lastName = event.target.value;
});
dobEl.addEventListener("change", function(event) {
    formData.DateOfBirth = event.target.value;
});
emailEl.addEventListener("change", function(event) {
    formData.email = event.target.value;
});
fatherFirstNameEl.addEventListener("change", function(event) {
    formData.candidateFatherName.firstName = event.target.value;
});
fatherLastNameEl.addEventListener("change", function(event) {
    formData.candidateFatherName.lastName = event.target.value;
});
motherFirstNameEl.addEventListener("change", function(event) {
    formData.candidateFatherName.firstName = event.target.value;
});
motherLastNameEl.addEventListener("change", function(event) {
    formData.candidateFatherName.firstName = event.target.value;
});
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});
nationEl.addEventListener("change", function(event) {
    formData.nationality = event.target.value;
});
addressEl.addEventListener("change", function(event) {
    formData.homeAddress.address = event.target.value;
});
cityEl.addEventListener("change", function(event) {
    formData.homeAddress.city = event.target.value;
});
CountryEl.addEventListener("change", function(event) {
    formData.homeAddress.country = event.target.value;
});
homeNumberEl.addEventListener("change", function(event) {
    formData.homeNumber = event.target.value;
});
personalNumberEl.addEventListener("change", function(event) {
    formData.personelNumber = event.target.value;
});
hscInstitutionNameEl.addEventListener("change", function(event) {
    formData.hscEducationalDetails.InstitutionName = event.target.value;
});
hscBoardEl.addEventListener("change", function(event) {
    formData.hscEducationalDetails.boardName = event.target.value;
});
hscScoreEl.addEventListener("change", function(event) {
    formData.hscEducationalDetails.score = event.target.value;
});
sscInstitutionNameEl.addEventListener("change", function(event) {
    formData.sscEducationalDetails.InstitutionName = event.target.value;
});
sscBoardEl.addEventListener("change", function(event) {
    formData.sscEducationalDetails.boardName = event.target.value;
});
sscScoreEl.addEventListener("change", function(event) {
    formData.sscEducationalDetails.score = event.target.value;
});
currentDegreeEl.addEventListener("change", function(event) {
    formData.currentEducationalDetails.degree = event.target.value;
});
currentInstitutionNameEl.addEventListener("change", function(event) {
    formData.currentEducationalDetails.InstitutionName = event.target.value;
});
overallPercentageEl.addEventListener("change", function(event) {
    formData.currentEducationalDetails.overallPercentage = event.target.value;
});
backlogsEl.addEventListener("change", function(event) {
    formData.currentEducationalDetails.backlogs = event.target.value;
});

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer d9a80dc82dac490c11d3e85e5f8a97afe66491a429c0c686b980ca011b6d6137"
        },
        body: JSON.stringify(formData)
    };
    fetch("https://gorest.co.in/public/v2/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            if (jsondata.data[0].message === "has already been taken" && jsondata.data[0].field === "email") {
                emailErrMsgEl.textContent = "Email Has Already Exists";
            }

        });
}
myformEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (firstNameEl === "" || lastnameEl === "" || dobEl === "" || emailEl === "" || fatherFirstNameEl === "" || fatherLastNameEl === "" || motherFirstNameEl === "" || motherLastNameEl === "" || personalNumberEl.value.length < 10 || nationEl === "" || addressEl === "" || cityEl === "" || CountryEl === "" || personalNumberEl === "" || hscInstitutionNameEl === "" || hscBoardEl === "" || hscScoreEl === "" || sscInstitutionNameEl === "" || sscBoardEl === "" || sscScoreEl === "" || currentDegreeEl === "" || currentInstitutionNameEl === "" || overallPercentageEl === "" || backlogsEl === "") {
        alert("Please Fill All Empty Fields");
    } else {
        submitFormData(formData);
    }
});