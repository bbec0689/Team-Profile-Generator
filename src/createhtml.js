const generateManager = () =>{

    return`
<!--Manager Card-->
<div class=" card flex card text-white bg-secondary mb-3" style="max-width: 18rem;">
<div class=" bg-dark card-header">Manager: <span>${managerName}</span></div>
<div class=" card-body">
<ul class=" text-white bg-secondary list-group list-group-flush">
<li class=" bg-secondary list-group-item">ID:<span>${managerId} </span></li>
<li class=" bg-secondary list-group-item">Email: <span>${managerEmail}</span></li>
<li class=" bg-secondary list-group-item">Office Number <span>${officeNumber}</span></li>
</ul>
</div>
</div>`
}

const templateData = () => {

return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    
<!--BootStrap-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
<!--Font Awesome-->
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    
<!--CSSSheet-->
<link rel="stylesheet" href="./style.css">
<title>Team-File</title>
</head>
<body>
    
<div class=" text-light flex-header header bg-dark">Deployed Team</div>
    
<div class="flex-body">
${generateManager()}
</div>
<!--JQuery-->
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>   
</body>
</html>`

}




module.exports = {

templateData: templateData,
generateManager: generateManager
}