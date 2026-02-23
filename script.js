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
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  }, 
  {
    id: 3, 
    companyName: 'DataViz Solutions', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 4, 
    companyName: 'CloudFirst Inc', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 5, 
    companyName: 'Innovation Labs', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 6, 
    companyName: 'MegaCorp Solutions', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 7, 
    companyName: 'StartupXYZ', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 8, 
    companyName: 'TechCorp Industries', 
    position: 'React Native Developer', 
    detiles: `Remote • Full-time • $130,000 - $175,000`, 
    status: 'Not Applied',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
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

document.getElementById('all-filter-btn').addEventListener('click', renderjobs(jobs))

function renderjobs(arr){
 
   const jobContainer = document.getElementById('job-container');
   jobContainer.innerHTML = '';
    arr.forEach(job => {
     

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

          <button class="status-interview py-4 px-4 font-bold text-green-400 border border-green-400 rounded-lg cursor-pointer" onclick="updetStatusInterView(${job.id})">Interview</button>
          <button class="status-rejected py-4 px-4 font-bold text-red-400 border border-red-400 rounded-lg cursor-pointer ml-4" onclick="updetStatusRejected(${job.id})">Rejected</button>
          </div>

          <!-- left side -->
          <div>
            <i onclick="deleteJob(${job.id})" class="delete fa-solid fa-trash-can text-red-400 cursor-pointer"></i>
          </div>
        </div>
    `
    jobContainer.appendChild(jobCard);

   

  })
}

// updet status function
 function updetStatusInterView(id){
      const job = jobs.find(job => job.id === id);
      if(job.status === 'Not Applied' || job.status === 'rejected'){
        job.status = 'interview'
      } ;
      renderjobs(jobs);
      updetCounters();
    };

function updetStatusRejected(id){
  const job = jobs.find(job => job.id === id);
  console.log(job)
      if(job.status === 'Not Applied' || job.status === 'interview'){
        job.status = 'rejected'
      } 
      renderjobs(jobs);
      updetCounters();
};

function deleteJob (id){
      const index = jobs.findIndex(job => job.id === id);

      if (index !== -1){
        jobs.splice(index, 1);
      }
      filteredJob = jobs;
      renderjobs(jobs);
      updetCounters();
      
}
  

function interviewJobs(){
  const interviewSection = document.getElementById('interview-section');
  interviewSection.innerHTML = ''
}
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

    const sections = document.querySelectorAll('#main-section .section');
    sections.forEach(section => section.classList.add('hidden'));

    document.getElementById(event.target.dataset.target).classList.remove('hidden')

    
   
    
  })}


renderjobs(jobs)
updetCounters()


// console.log(jobs)