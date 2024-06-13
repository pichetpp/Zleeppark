$(document).ready(function() {
    var data = {};




    
    data.fn_Init = function () {  
        let menu_data = 
            [
                {"link":"default.html","link_text":"Home" },
                {"link":"aboutus.html","link_text":"About Us"},
                {"link":"ourservices.html","link_text":"Our Services"},
                {"link":"ourdoctors.html","link_text":"Our Doctors"},
                {"link":"review.html","link_text":"Review"},
                {"link":"ourblog.html","link_text":"Our Blog"},
                {"link":"appointment.html","link_text":"Appointment"},
                {"link":"contact.html","link_text":"Contact"} 
            ]
        data.dataMenu = ko.observableArray([]);

        data.dataMenu(menu_data);
        data.dataMenu.valueHasMutated();



    }
    
    data.fn_Load = function () {

    }

    data.fn_Search = function(){
       
    }

    data.fn_CancelSearch = function() {
       
    }

    data.fn_Save = function() {

    }

    data.fn_Validate = function() {
       
    }

   
    data.fn_Init();
    data.fn_Load();
    ko.applyBindings(data, document.getElementById('nav-menu'));
});
