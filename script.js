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