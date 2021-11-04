function store() {
    
    /* let inputTitle = $("#title").val();
    localStorage.setItem("title", inputTitle); */

    let data = {

        'title': $("#title").val(),
        'imageName1': $("#imageName1").val(),
        'imageURL1': $("#imageURL1").val(),
        /* 'imageName2': $("#imageName2").val(),
        'imageURL2': $("#imageURL2").val(),
        'imageName3': $("#imageName3").val(),
        'imageURL3': $("#imageURL3").val() */

    };

    /* let jsonData = JSON.stringify(data);
    console.log(jsonData); */

    //localStorage.setItem('list', jsonData);
    localStorage.setItem('list', JSON.stringify(data));

    let test = JSON.parse(localStorage.getItem('list'));

    console.log(test.imageName1 + ' ' + test.imageURL1);

    document.getElementById("title").innerHTML = test.title;
    document.getElementById("imageName").innerHTML = test.imageName1;
    document.getElementById("imageURL").innerHTML = test.imageURL1;

}
