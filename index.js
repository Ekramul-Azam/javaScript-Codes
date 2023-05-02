// You want to accept an input stirg with first ans last name, and swap the names so the last name is first.  আপনি প্রথম এবং শেষ নাম সহ একটি ইনপুট স্ট্রিং গ্রহণ করতে চান এবং নামগুলি অদলবদল করতে চান যাতে শেষ নামটি প্রথম হয়।

// Use capturing parentheses ans a regular expression to find and remember the two names in the string, and reverse them.

// var nam = "Ekramul Azam";
// var ree = /^(\w+)\s(\w+)$/;
// var newname = nam.replace(ree, "$2, $1");
// console.log(newname);  //Azam, Ekramul

document.getElementById('searchSubmit').onclick = function(){
    // get pattern 
    var pattern = document.getElementById("pattern").value;
    var re = new RegExp(pattern, "g");
    
    // get string
    var searchString = document.getElementById("incoming").value;
    var resultString = searchString.replace(re, "<span class='found'> $& </span>");


    //insert into page
    document.getElementById("searchResult").innerHTML = resultString;
}