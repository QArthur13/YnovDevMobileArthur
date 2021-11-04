function store() {
    
    /* let inputTitle = $("#title").val();
    localStorage.setItem("title", inputTitle); */

    let data = {

        'title': $("#title").val(),
        'imageName': $("#imageName").val(),
        'imageURL': $("#imageURL").val()

    };

    let jsonData = JSON.stringify(data);
    console.log(jsonData);

    localStorage.setItem('list', jsonData);

    window.location("../index.html");

}