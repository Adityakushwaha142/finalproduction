/* deliver  schedule */

$(()=>{
    $("#btn1").click(()=>{
        if($("#btn2").hasClass("border border-info")){
            $("#btn2").removeClass("border border-info")
            $("#btn1").addClass("border border-info") ; 
        }
    })
    console.log("hello world") ; 

    console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; console.log("hello world") ; 

    $("#btn2").click(()=>{
        if($("#btn1").hasClass("border border-info")){
            $("#btn1").removeClass("border border-info")
            $("#btn2").addClass("border border-info") ; 
        }
    })


})