addEventListener('load',()=>fetchIsuues())
document.getElementById('issue-input').addEventListener('submit',()=>saveIssue())

function saveIssue(){
    const issueDescription = document.getElementById('issueDescription').value
    const issueSeverity = document.getElementById('issueSeverity').value
    const issueAssigned = document.getElementById('issueAssigned').value
    const issueID = chance.guid()
    const issueStatus = 'Open'

    const issue = {
        id : issueID,
        description : issueDescription,
        severity : issueSeverity,
        assignedTo : issueAssigned,
        status : issueStatus
    }

    const issues = (localStorage.getItem('issues'))? JSON.parse(localStorage.getItem('issues')) : []
    issues.push(issue)
    localStorage.setItem('issues',JSON.stringify(issues))

    document.getElementById('issue-input').reset()
    fetchIsuues()
}
function fetchIsuues(){
    const issues = JSON.parse(localStorage.getItem('issues'))
    const issuesList = document.getElementById('issuesList')
    issuesList.innerHTML = ''
    if(issues){
        for (let index = 0; index < issues.length; index++) {
            let [id,desc,severity,assignedTo,status] = [issues[index].id,issues[index].description,issues[index].severity,issues[index].assignedTo,issues[index].status]
            
            issuesList.innerHTML += `<div class="card">
            <div class="card-body">
            <h6>Issue ID:${id}</h6>
            <p><span class="label label-info">${status}</span></p>
            <h3>${desc}</h3>
            <p><span class="glyphicon glyphicon-time"></span>${severity}</p>
            <p><span class="glyphicon glyphicon-user"></span>${assignedTo}</p>
            <a href="#" onclick="setStatusClosed(\'${id}\')" class="btn btn-warning">Close</a>
            <a href="#" onclick="deleteIssue(\'${id}\')" class="btn btn-danger">Delete</a>
            </div>
            </div>`;
        }
    }
}
function setStatusClosed(id){
    const issues = JSON.parse(localStorage.getItem('issues'))
    for (let index = 0; index < issues.length; index++) {
        if(issues[index].id!=id)    continue
        issues[index].status = 'Closed'
    }
    localStorage.setItem('issues',JSON.stringify(issues))
    fetchIsuues()
}
function deleteIssue(id){
    const issues = JSON.parse(localStorage.getItem('issues'))
    for (let index = 0; index < issues.length; index++) {
        if(issues[index].id!=id)    continue
        issues.splice(index,1)
    }
    localStorage.setItem('issues',JSON.stringify(issues))
    fetchIsuues()
}