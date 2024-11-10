
// Function to generate the unique URL for the resume
function generateResumeLink() {
    const username = document.getElementById("username").value; // Get the username from the input field
    if (username) {
        // Generate the unique link using the username entered
        const resumeLink = `https://${username}.vercel.app/resume`;
        
        // Display the generated link
        document.getElementById("resumeLink").innerText = `Your resume link: ${resumeLink}`;
    } else {
        alert("Please enter a username to generate your resume link.");
    }
}

// Function to update the resume preview based on form input
function updateResumePreview() {
    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Update the resume preview with the user inputs
    document.getElementById("previewName").innerText = name;
    document.getElementById("previewEmail").innerText = `Email: ${email}`;
    document.getElementById("previewPhone").innerText = `Phone: ${phone}`;
    document.getElementById("previewEducation").innerText = education;
    document.getElementById("previewExperience").innerText = experience;
    document.getElementById("previewSkills").innerText = skills;
}

// Function to handle the resume form submission and update the preview
function handleFormInput() {
    // Update resume preview each time an input field is changed
    updateResumePreview();
}

// Add event listeners to the form inputs
document.getElementById("resumeForm").addEventListener("input", handleFormInput);

// Function to download the resume as a PDF using jsPDF
function downloadPDF() {
    const { jsPDF } = window.jspdf; // Ensure jsPDF is loaded
    const doc = new jsPDF();

    // Get the content for the resume preview
    const resumeContent = document.getElementById("resumePreview");

    // Add a title or introduction to the PDF
    doc.setFontSize(22);
    doc.text('Resume', 10, 10); // Positioning the title

    // Add the resume content to the PDF
    doc.setFontSize(16);
    doc.text("Name: " + document.getElementById("previewName").innerText, 10, 20);
    doc.text("Email: " + document.getElementById("previewEmail").innerText, 10, 30);
    doc.text("Phone: " + document.getElementById("previewPhone").innerText, 10, 40);
    doc.text("Education: " + document.getElementById("previewEducation").innerText, 10, 50);
    doc.text("Experience: " + document.getElementById("previewExperience").innerText, 10, 60);
    doc.text("Skills: " + document.getElementById("previewSkills").innerText, 10, 70);

    // Save the resume as a PDF file
    doc.save('resume.pdf'); 
}

// Update the resume preview when the page loads (initial values)
updateResumePreview();
