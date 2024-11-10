function GenerateResume(event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var projects = document.getElementById('projects').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills')
        .value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var languages = document.getElementById('languages')
        .value.split(',').map(function (lang) { return lang.trim(); }).join(', ');
    document.getElementById('resumeForm').style.display = 'none';
    // Display the resume
    document.getElementById('resumeName').innerText = name;
    document.getElementById('resumeEmail').innerText = email;
    document.getElementById('resumePhone').innerText = phone;
    if (github != "") {
        document.getElementById('Github').innerHTML = "<a href=\"https://github.com/".concat(github, "/\" target=\"_blank\">").concat(github, "</a>");
        ;
    }
    else {
        document.getElementById('Github').style.display = "none";
    }
    if (linkedin != "") {
        document.getElementById('LinkedIn').innerHTML = "<a href=\"https://www.linkedin.com/in/".concat(linkedin, "/\" target=\"_blank\">").concat(linkedin, "</a>");
    }
    else {
        document.getElementById('LinkedIn').style.display = "none";
    }
    document.getElementById('resumeSummary').innerText = summary;
    document.getElementById('resumeExperience').innerText = experience;
    document.getElementById('resumeProjects').innerText = projects;
    document.getElementById('resumeEducation').innerText = education;
    document.getElementById('resumeSkills').innerText = skills;
    document.getElementById('resumeLanguages').innerText = languages;
    // Show the generated resume
    document.getElementById('resumeOutput').style.display = 'block';
}
function EditResume(e) {
    document.getElementById('resumeForm').style.display = 'block';
}
// Function to download the resume
function DownloadPDF() {
    var element = document.getElementById('resumeOutput'); // The element to convert to PDF
    if (element) {
        html2pdf()
            .from(element)
            .save("".concat(document.getElementById('resumeName').innerText.replace(/\s+/g, '_'), "_Resume.pdf"));
    }
}
// Function to print the resume
function PrintResume() {
    var element = document.getElementById('resumeOutput');
    if (element) {
        var printWindow = window.open('', '', 'height=600,width=800');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write('<html><head><title>Print Resume</title>');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write('</head><body >');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write(element.innerHTML);
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write('</body></html>');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
    }
}
