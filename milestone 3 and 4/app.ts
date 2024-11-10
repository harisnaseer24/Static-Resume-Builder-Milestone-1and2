
function GenerateResume(event: Event): void {
    event.preventDefault(); 

   
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const email: string = (document.getElementById('email') as HTMLInputElement).value;
    const github: string = (document.getElementById('github') as HTMLInputElement).value;
    const linkedin: string = (document.getElementById('linkedin') as HTMLInputElement).value;
    const phone: string = (document.getElementById('phone') as HTMLInputElement).value;
    const summary: string = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const experience: string = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const projects: string = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const education: string = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById('skills') as HTMLTextAreaElement)
        .value.split(',').map(skill => skill.trim()).join(', ');
    const languages: string = (document.getElementById('languages') as HTMLTextAreaElement)
        .value.split(',').map(lang => lang.trim()).join(', ');

        (document.getElementById('resumeForm') as HTMLFormElement).style.display='none';

    // Display the resume
    (document.getElementById('resumeName') as HTMLHeadingElement).innerText = name;
    (document.getElementById('resumeEmail') as HTMLParagraphElement).innerText = email;
    (document.getElementById('resumePhone') as HTMLParagraphElement).innerText = phone;
    
    if(github !="") {
        (document.getElementById('Github') as HTMLParagraphElement).innerHTML =`<a href="https://github.com/${github}/" target="_blank">${github}</a>`;;
    }else{
        (document.getElementById('Github') as HTMLParagraphElement).style.display = "none";
        
    } if(linkedin !="") {
        (document.getElementById('LinkedIn') as HTMLParagraphElement).innerHTML =`<a href="https://www.linkedin.com/in/${linkedin}/" target="_blank">${linkedin}</a>`;
    }else{
        (document.getElementById('LinkedIn') as HTMLParagraphElement).style.display = "none";
        
    }
    (document.getElementById('resumeSummary') as HTMLParagraphElement).innerText = summary;
    (document.getElementById('resumeExperience') as HTMLParagraphElement).innerText = experience;
    (document.getElementById('resumeProjects') as HTMLParagraphElement).innerText = projects;
    (document.getElementById('resumeEducation') as HTMLParagraphElement).innerText = education;
    (document.getElementById('resumeSkills') as HTMLParagraphElement).innerText = skills;
    (document.getElementById('resumeLanguages') as HTMLParagraphElement).innerText = languages;

    // Show the generated resume
    (document.getElementById('resumeOutput') as HTMLDivElement).style.display = 'block';
}

function EditResume(e:Event):void{

    (document.getElementById('resumeForm') as HTMLFormElement).style.display='block';
}
// Function to download the resume
function DownloadPDF(): void {
    const element = document.getElementById('resumeOutput'); // The element to convert to PDF
    if (element) {
        html2pdf()
            .from(element)
            .save(`${(document.getElementById('resumeName') as HTMLHeadingElement).innerText.replace(/\s+/g, '_')}_Resume.pdf`);
    }
}

