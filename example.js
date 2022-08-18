//Requires DataTables with Fixed Headers, and jQuery
function toggleFixedHeader(dt, limit) {
    // Toggle the DataTable's fixed header feature based on screen size.
    // Fixed headers do not work with smaller screen sizes and the "table-response" table class.
    if($(window).width() < limit) {
        dt.fixedHeader.disable();
    }
    else {
        dt.fixedHeader.enable();
    }
}

 // Initialize the DataTable. 
    let dt = $("#table-id").DataTable({
        fixedHeader: true,
    });
