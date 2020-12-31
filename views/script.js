/* deliver  schedule */

$(()=>{
    $(document).on('click', "#btn1", function() {

        if($("#btn2").hasClass("border border-info")){
            $("#btn2").removeClass("border border-info")
            $("this").addClass("border border-info") ; 
        }
    })

    console.log("hello world") ; 

    console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; 
    $(document).on('click', "#btn2", function() {

        if($("#btn1").hasClass("border border-info")){
            $("#btn1").removeClass("border border-info")
            $("#this").addClass("border border-info") ; 
        }
    })


})