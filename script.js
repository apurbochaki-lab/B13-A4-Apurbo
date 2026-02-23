let interviewList = [];
let rejectedList = [];
let currentStatus = '';

const totalCount = document.getElementById('totalCount');
const jobsCount = document.getElementById('jobsCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');

const parentNode = document.getElementById('all-cards');
const filterSection = document.getElementById('filter-section');

// All Count Calculations :
function countCalculation() {
    totalCount.innerText = parentNode.children.length;
    jobsCount.innerText = parentNode.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countCalculation()


// 3 Button Toggle Effect
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const whenNoData = document.getElementById('when-no-data');

function toggleEffect(id) {
    // console.log("Click -->", id);
    currentStatus = id;
    // Tab Buttons color toggle
    allFilterBtn.style.backgroundColor = 'white';
    interviewFilterBtn.style.backgroundColor = 'white';
    rejectedFilterBtn.style.backgroundColor = 'white';
    allFilterBtn.style.color = 'black';
    interviewFilterBtn.style.color = 'black';
    rejectedFilterBtn.style.color = 'black';

    const selected = document.getElementById(id);
    selected.style.backgroundColor = '#50a2ff';
    selected.style.color = 'white';

    // No Data to show logic :
    if (id == 'interview-filter-btn' && interviewList.length == 0) {
        whenNoData.classList.remove('hidden');
    }
    else if (id == 'rejected-filter-btn' && rejectedList.length == 0) {
        whenNoData.classList.remove('hidden');
    } else {
        whenNoData.classList.add('hidden')
    };

    // Available jobs count
    const interviewCount = interviewList.length;
    const rejectedCount = rejectedList.length;
    const totalJobsCount = parentNode.children.length;
    const countDisplay = document.getElementById('count-display');

    // Tab Buttons mechanism
    if (id == 'interview-filter-btn') {
        countDisplay.innerHTML = `${interviewCount} of ${totalJobsCount} Jobs`

        parentNode.classList.add('hidden');
        filterSection.classList.remove('hidden');

    }
    else if (id == 'all-filter-btn') {
        countDisplay.innerHTML = `${totalJobsCount} Jobs`

        parentNode.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == 'rejected-filter-btn') {
        countDisplay.innerHTML = `${rejectedCount} of ${totalJobsCount} Jobs`

        parentNode.classList.add('hidden');
        filterSection.classList.remove('hidden');

    };

};


// Event Delegation to Parent/Main :
const main = document.querySelector('main');

main.addEventListener('click', function (event) {
    // console.log(event.target)
    if (event.target.classList.contains('interview-btn')) {
        // console.log("Clicked Interview")

        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobSalary = parentNode.querySelector('.job-salary').innerText;
        const jobStatus = parentNode.querySelector('.jobStatus').innerText;
        const jobNotes = parentNode.querySelector('.job-notes').innerText;

        // Update Status
        parentNode.querySelector('.jobStatus').innerText = 'INTERVIEW';
        parentNode.querySelector('.jobStatus').style.color = '#33c36d';
        parentNode.querySelector('.jobStatus').style.fontWeight = '700';
        parentNode.querySelector('.jobStatus').style.border = '2px solid #15d361';
        parentNode.querySelector('.jobStatus').style.backgroundColor = '#ddffcf'

        const cardInfo = {
            companyName,
            jobTitle,
            jobSalary,
            jobStatus: 'INTERVIEW',
            jobNotes
        }
        // No Duplicate
        const isExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!isExist) {
            interviewList.push(cardInfo);
        }

        // Remove items from list
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        // After remove render html
        if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }
        countCalculation()

    }
    else if (event.target.classList.contains('rejected-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobSalary = parentNode.querySelector('.job-salary').innerText;
        const jobStatus = parentNode.querySelector('.jobStatus').innerText;
        const jobNotes = parentNode.querySelector('.job-notes').innerText;

        // Update Status
        parentNode.querySelector('.jobStatus').innerText = 'REJECTED';
        parentNode.querySelector('.jobStatus').style.color = 'red';
        parentNode.querySelector('.jobStatus').style.fontWeight = '700';
        parentNode.querySelector('.jobStatus').style.border = '2px solid red';
        parentNode.querySelector('.jobStatus').style.backgroundColor = '#eadada'


        const cardInfo = {
            companyName,
            jobTitle,
            jobSalary,
            jobStatus: 'REJECTED',
            jobNotes
        }
        // No Duplicate
        const isExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!isExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);
        if (currentStatus == 'interview-filter-btn') {
            renderInterview()
        }
        countCalculation()

    }

});




