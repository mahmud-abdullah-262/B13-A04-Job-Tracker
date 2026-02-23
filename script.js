const jobs = [
  {
    id: 1, 
    companyName: 'Mobile First Corp', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 2, 
    companyName: 'WebFlow Agency', 
    position: 'Web Designer & Developer', 
    detiles: `Los Angeles, CA • Part-time • $80,000 - $120,000`, 
    status: 'Not Applied',
    description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
  }, 
  {
    id: 3, 
    companyName: 'DataViz Solutions', 
    position: 'Data Visualization Specialist', 
    detiles: `Boston, MA • Full-time • $125,000 - $165,000`, 
    status: 'Not Applied',
    description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
  },
  {
    id: 4, 
    companyName: 'CloudFirst Inc', 
    position: 'Backend Developer', 
    detiles: `Seattle, WA • Full-time • $140,000 - $190,000`, 
    status: 'Not Applied',
    description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
  },
  {
    id: 5, 
    companyName: 'Innovation Labs', 
    position: 'UI/UX Engineer', 
    detiles: `Austin, TX • Full-time • $110,000 - $150,000`, 
    status: 'Not Applied',
    description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
  },
  {
    id: 6, 
    companyName: 'MegaCorp Solutions', 
    position: 'JavaScript Developer', 
    detiles: `New York, NY • Full-time • $130,000 - $170,00`, 
    status: 'Not Applied',
    description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
  },
  {
    id: 7, 
    companyName: 'StartupXYZ', 
    position: 'Full Stack Engineer', 
    detiles: `Remote • Full-time • $120,000 - $160,000`, 
    status: 'Not Applied',
    description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
  },
  {
    id: 8, 
    companyName: 'TechCorp Industries', 
    position: 'Senior Frontend Developer', 
    detiles: `San Francisco, CA • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
  }
];

// counter function
function updetCounters(){
const jobCount = jobs.length;
const interviweCount = jobs.filter(job => job.status === 'interview').length;
const rejectedCount = jobs.filter(job => job.status === 'rejected').length


document.getElementById('all-jobs').innerText = jobCount;
document.getElementById('interview-jobs').innerText = interviweCount;
document.getElementById('rejected-jobs').innerText = rejectedCount;
}


// job creating function

const jobContainer = document.getElementById('job-container');
let currentFilter = 'all';
let availableJobCounter = document.getElementById('availavle-jobs-counter');




function renderjobs(){
    let rendardJob = [];

    if(currentFilter === 'all'){
      rendardJob = jobs;
      availableJobCounter.innerText = rendardJob.length;
    } else if(currentFilter === 'interview'){
      rendardJob = jobs.filter(job => job.status === 'interview');
      availableJobCounter.innerText = rendardJob.length;
    } else if(currentFilter === 'rejected'){
      rendardJob = jobs.filter(job => job.status === 'rejected');
      availableJobCounter.innerText = rendardJob.length;
    }


    jobContainer.innerHTML = '';

    if(rendardJob.length === 0){
    
    jobContainer.innerHTML = `<section class="text-center flex flex-col gap-4 justify-center items-center py-48">
        <img src="assets/jobs.png" alt="">
        <h1 class="text-[#002C5C] text-3xl font-bold">No jobs available</h1>
        <p class="text-gray-600">Check back soon for new job opportunities</p>
        </section>`
        return;
    } 

       rendardJob.forEach(job => {
     
        
     // badge 

    let badgeClass = 'status py-4 px-6 font-bold text-black bg-gray-100 rounded-2xl';
    let badgeText = 'Not Applied';
   
    if(job.status === 'interview'){
       badgeClass = 'status py-4 px-6 font-bold text-green-400 border border-green-400 bg-gray-100 rounded-2xl';
       badgeText = 'Interview'
    } else if(job.status === 'rejected'){
       badgeClass = 'status py-4 px-6 font-bold text-red-400 border border-red-400 bg-gray-100 rounded-2xl';
       badgeText = 'Rejected';
    }



   
    const jobCard = document.createElement('div');
    jobCard.dataset.id = job.id;
    jobCard.classList.add('job-card')
    jobCard.innerHTML = `
    <div class="single-job flex justify-between border border-gray-200  p-12 rounded-2xl">
          <!-- right part -->
          <div class="content">

      
          <h1 class="companyName text-3xl text-[#002C5C] font-bold">${job.companyName}</h1>
          <p class="pposition text-xl text-gray-500 mt-4">${job.position}</p>
          <p class="job-type text-gray-500 my-4">${job.detiles}</p>
          <button class="${badgeClass}">${badgeText}</button>
          <p class="descripton text-xl text-gray-500 my-4">${job.description}</p>

          <button class="status-interview py-4 px-4 font-bold text-green-400 border border-green-400 rounded-lg cursor-pointer" onclick="updetStatus(${job.id}, 'interview')">Interview</button>
          <button class="status-rejected py-4 px-4 font-bold text-red-400 border border-red-400 rounded-lg cursor-pointer lg:ml-4" onclick="updetStatus(${job.id}, 'rejected')">Rejected</button>
          </div>

          <!-- left side -->
          <div>
            <i onclick="deleteJob(${job.id})" class="delete fa-solid fa-trash-can text-red-400 cursor-pointer"></i>
          </div>
        </div>
    `
    jobContainer.appendChild(jobCard);

   
    updetCounters();

  })
    




  
   
   
}

// updet status function
 function updetStatus(id, newStatus){
      const job = jobs.find(job => job.id === id);
     job.status = newStatus;
      renderjobs();
      updetCounters();
    };



// delete function
function deleteJob (id){
      const index = jobs.findIndex(job => job.id === id);

      if (index !== -1){
        jobs.splice(index, 1);
      }
      filteredJob = jobs;
      renderjobs();
      updetCounters();
      
}




// filter button function
const filterBtn = document.querySelectorAll('.filter-btn');


for (const button of filterBtn){
  button.addEventListener('click', function(event){
    const allFilterBtn = document.getElementById('all-filter-btn');
    const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
    const interviewFilterBtn = document.getElementById('interview-filter-btn');

    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');
    
    event.target.classList.remove('bg-gray-300', 'text-black')
    event.target.classList.add('bg-blue-500', 'text-white')

    if (event.target.id === 'all-filter-btn'){
      currentFilter = 'all';
    } else if(event.target.id === 'interview-filter-btn'){
      currentFilter = 'interview'
    } else if(event.target.id === 'rejected-filter-btn'){
      currentFilter = 'rejected';
    }

    
   renderjobs()
    
  })}


renderjobs()
updetCounters()



