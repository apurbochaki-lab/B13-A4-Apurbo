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







