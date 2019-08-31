console.log("this works!");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const assignments = [
    {
        title: 'Assignment 1',
        dueDate: '3 September 2019',
        topic: 'HTML Basics',
        notes: 'The bones of your website!',
        assignmentUrl: 'https://github.com/aclai4067/'
    },
    {
        title: 'Assignment 2',
        dueDate: '12 September 2019',
        topic: 'Intro to CSS',
        notes: 'Looking good with CSS',
        assignmentUrl: 'https://github.com/aclai4067/'
    },
    {
        title: 'Assignment 3',
        dueDate: '20 September 2019',
        topic: 'Flexbox',
        notes: 'Step up your style game',
        assignmentUrl: 'https://github.com/aclai4067/'
    },
    {
        title: 'Assignment 4',
        dueDate: '3 October 2019',
        topic: 'Intro to JavaScript',
        notes: 'Make it DO something',
        assignmentUrl: 'https://github.com/aclai4067/'
    },
    {
        title: 'Assignment 5',
        dueDate: '20 October 2019',
        topic: 'Loops, Arrays, and Objects',
        notes: 'Rinse and Repeat',
        assignmentUrl: 'https://github.com/aclai4067/'
    }
];

const printAssignmentCards = (assignmentArr) => {
    let cardsToPrint = '';
    for (let i = 0; i < assignmentArr.length; i++) {
        const assignmentObj = assignmentArr[i];
        cardsToPrint += `
            <div class="assignmentCard">
            <header><h3>${assignmentObj.title}</h3></header>
            <p>Due: ${assignmentObj.dueDate}</p>
            <h4>${assignmentObj.topic}</h4>
            <p>${assignmentObj.notes}</p>
            <p><a href="${assignmentObj.assignmentUrl}">Details</a></p>
            </div>
        `
    }
    printToDom('cardDiv', cardsToPrint);
};

printAssignmentCards(assignments);