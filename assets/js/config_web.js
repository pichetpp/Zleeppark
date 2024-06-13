var ARTLANG = ARTLANG || {};
var LANG = LANG || {};

var defaultLANG = 'EN';



LANG.EN = {
    LANG: "EN",
    LANGIMG: "assets/global/img/flags/us.png",
    OK: "OK",
    // Msg Login
    MsgWelcome: "Welcome again",
    MsgEnterName: "Please enter your name:",
    // Msg Alert
    MsgConfirmSave: "Confirm Save data",
    MsgSaveComplete: "Save complete",
    MsgUpdateComplete: "Update complete",
    MsgConfirmDelete: "Confirm delete data!",
    MsgDeleteComplete: "Delete complete",
	MsgApproveComplete: "Approve complete",
	MsgSelectData: "Please select the data",
	MsgConfirmSaveInputResult: "Confirm save data {0} items",	
	MsgInputResultInvalid: "Input Result Valid!!!",
	MsgSelectDataSubmitResult: "Please select at least 1 item to submit test result",
	MsgConfirmSubmitResult: "Confirm submit data {0} items",
	MsgConfirmSaveAndSubmitResult: "Save and confirm data",
	MsgSelectDataApproveResult: "Please select at least 1 item to approve test result",
	MsgSelectDataDisApproveResult: "Please select at least 1 item to disapprove test result",
	MsgConfirmDisApproveResult: "Confirm disapprove data {0} items",
	MsgConfirmApproveResult: "Confirm approve data {0} items",
    // Msg Invalid Extension
    MsgImgInvalidExt: "invalid extension! (.gif,.png,.jpg,.jpeg only)",
    MsgFileInvalidExt: "invalid extension!",
	// Msg Invalid Date
	MsgDateRange: "Event must finish after it started",
    // Grid Paging
    Record: "Records",
    Number: "Number",
    // Dropdownlist
    DDLSelect: "-- Select --",
    // MultiSelect
    UserList: "User List",
    UserSelected: "Selected",
    User: "User",
    "Find": "Find",
    //AboutAction
    "ExportExcel": "ExportExcel",
    "ExportPDF": "ExportPDF",
    "AddNew": "AddNew",
    "Add New": "Add New",
    "Approve": "Approve",
    "Cancel": "Cancel",

    No: "No",
	no: "No",
    Edit: "Edit",
    Delete: "Delete",
    "Show All": "Show All",
    "EmpNo": "EmployeeNo.",
    RowID: "RowID",

    "Search here":"Search here",

    //AboutMasterData
    Code: "Code",
    
    "Browse File": "Browse File",
    "Delete Image":"Delete Image",

    "Every hours":"Every hours",
    "Every of Minutes": "Every of Minutes",
    "Every Month": "Every Month",
    "Selected Month": "Selected Month",
    "Every Day": "Every Day",
    "Last Day": "Last Day",
    "Selected Day": "Selected Day",
    "Every Day": "Every Day",
    "Selected Day": "Selected Day",
    "Pending": "Pending",
    "All Plan":"All Plan",

    "Columns": "Columns",
    "Actions": "Actions",

    "Add All User": "Add All User",
    "No.": "No.",
    "No. of Method": "No. of Method",
    "Create Date": "Create Date",
    "Print Report": "Print Report",
    "Search": "Search",
    "Cancel": "Cancel",
    "Month / Year": "Month / Year",
    "Month": "Month",
    "General Information": "GENERAL INFORMATION",
    "Save And Next": "Save And Next",
    "Receive": "Receive",
    "Select Test Method to Assign": "SELECT TEST METHOD TO ASSIGN",
    "Select Test Items to Assign": "Select Test Items to Assign",
    "Select Tester Name": "Select Tester Name",
    "Tester Name": "Tester Name",
    "Sub Contractor": "Sub Contractor",
    "Assign Test": "Assign Test",
    "Select Method to input test results": "Select Method to input test results",
    "Input Test Date": "Input Test Date",
    "Input Test Results": "Input Test Results",
    "Save": "Save",
    "m_select":"เลือก",
    "selectall":"เลือกทั้งหมด",
    "alertdetail": "กรุณากรอกข้อมูลให้สมบูรณ์",
    "alertdateannounce": "กรุณากรอกวันที่ประกาศ",
    "alertdateto": "วันที่ ถึง ต้องมากกว่าหรือเท่ากับวันที่ประกาศ",
    "attachments": "แนบไฟล์"
	
    


};

if (localStorage.getItem("LANG") == null) {
    localStorage.LANG = defaultLANG;
}
if (localStorage.LANG == 'EN') {
    LANG.current = ko.observable(LANG.EN);
} else {
    LANG.current = ko.observable(LANG.VN);
}

LANG.SET = function (params) {
    if (params != undefined) {
        localStorage.LANG = params;
    }
    if (localStorage.LANG == 'EN') {
        LANG.current(LANG.EN);
    } else {
        LANG.current(LANG.VN);
    }
};


ARTLANG = function (key) {
    try
    {
        return (LANG.current()[key] == undefined ? '[' + key + ']' : LANG.current()[key]);
    }
    catch(ex)
    {
        return false;
    }
   
};






/********************************************* About Cookie **********************************/

function setCookie(c_name, c_value, expire_days) {
    var d = new Date();
    d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = c_name + "=" + escape(c_value) + "; " + expires;
}

function getCookie(c_name) {
    var name = c_name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = unescape(ca[i]);
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "0";
}

function deleteCookie(c_name) {
    document.cookie = encodeURIComponent(c_name) + "=deleted; expires=" + new Date(0).toUTCString();
}

/****************************************** About Querystring ********************************/

function getQueryString(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*************************************** About String Function *******************************/

function left(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}

function right(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}

String.prototype.replaceAll = function (target, replacement) {
     return this.split(target).join(replacement);
};

/***************************************** About PDF Viewer ********************************/

function openPDFViewer(file) {
    //window.open('../../assets/components/pdfjs/web/viewer.html?file=' + file);
    if (file.indexOf('data:application/pdf') != -1) {
        // กรณีเป็น base64
        var w = window.open('../../assets/components/pdfjs/web/viewer.html?file=');
        if (w) {
            w.onload = function () {
                var pdfDocument;
                var PDFViewer = this.PDFViewerApplication;
                this.PDFJS.getDocument(file).then(function (pdf) {
                    pdfDocument = pdf;
                    PDFViewer.load(pdfDocument, 1.5)
                });
            };
        }
    } else {
        // กรณีเป็น url
        window.open('../../assets/components/pdfjs/web/viewer.html?file=' + file);
    }
}

function showPDFViewer(file) {
    return '../../assets/components/pdfjs/web/viewer.html?file=' + file;
}

/*************************************** About Date Function *******************************/

var arrMonthNameFullEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var arrMonthNameShortEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var arrMonthNameFullTH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
var arrMonthNameShortTH = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

function checkZero(objvalue) {
    objvalue = parseFloat(objvalue);
    if (objvalue <= 9) {
        objvalue = '0' + objvalue;
    }
    return objvalue;
}

/**** get Current DateTime ****/

function getCurrentDateTime() {
    //var date = new Date();
    //date.setFullYear(date.getFullYear());
    //date.setMonth(date.getMonth());
    //date.setDate(date.getDate());
    //date.setHours(date.getUTCHours() - date.getTimezoneOffset() / 60);
    //date.setMinutes(date.getUTCMinutes());
    return moment()._d;//date;
}

function getCurrentDatepicker() {
    return moment(getCurrentDateTime()).format();
}

/**** Convert Json To JSDate & JSDateTime ****/

function ConvertJsonToJSDate(jsondate) {
    if (jsondate != '' && jsondate != null && jsondate != undefined) {
        var date = new Date(parseInt(jsondate.replace(/\/Date\((\d+)\)\//, '$1')));

        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        return date;
    } else {
        return null;
    }
}

function ConvertJsonToJSDateTime(jsondate) {
    if (jsondate != '' && jsondate != null && jsondate != undefined) {
        var date = new Date(parseInt(jsondate.replace(/\/Date\((\d+)\)\//, '$1')));
        return date;
    } else {
        return null;
    }
}

/**** Convert Json To DateString ****/

function ConvertJsonToDateStringEN(dateString, strFormat) {
    return ConvertJsonToDateString(dateString, strFormat, 0);
}

function ConvertJsonToDateStringTH(dateString, strFormat) {
    return ConvertJsonToDateString(dateString, strFormat, 543);
}

function ConvertJsonToDateString(jsondate, strFormat, addYearTH) {
    if (jsondate != '' && jsondate != null && jsondate != undefined) {
        var date = new Date(parseInt(jsondate.replace(/\/Date\((\d+)\)\//, '$1')));
        //date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
        return ConvertJSDateToDateString(date, strFormat, addYearTH);
    } else {
        return '';
    }
}

/**** Convert JSDate To DateString ****/

function ConvertJSDateToDateStringEN(date, strFormat) {
    return ConvertJSDateToDateString(date, strFormat, 0);
}


function ConvertJSDateToDateString(date, strFormat, addYearTH) {
    //   console.log(date);
    if (date != '' && date != null && date != undefined) {
        if (strFormat == null) {
            strFormat = "DD/MM/YYYY";
        }
        strFormat = strFormat.replace("DD", checkZero(date.getDate()));
      
            strFormat = strFormat.replace("MMMM", arrMonthNameFullEN[(date.getMonth() + 1) - 1]);
            strFormat = strFormat.replace("MMM", arrMonthNameShortEN[(date.getMonth() + 1) - 1]);
     
        strFormat = strFormat.replace("MM", checkZero(date.getMonth() + 1));
        strFormat = strFormat.replace("YYYY", date.getFullYear() );
        strFormat = strFormat.replace("YY", right(date.getFullYear() , 2));
        // date.setHours(date.getUTCHours() - date.getTimezoneOffset() / 60);
        strFormat = strFormat.replace("HH", checkZero(date.getHours()));
        strFormat = strFormat.replace("mm", checkZero(date.getUTCMinutes()));
        return strFormat;
    } else {
        return '';
    }
}

/**** Convert JSDate To Json ****/

function ConvertJSDateToJson(date) {
    if (date != '' && date != null && date != undefined) {
       // date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
        return '/Date(' + date.getTime() + ')/';
    } else {
        return '';
    }
}

/**** Convert DateString To JSDate ****/

function ConvertDateStringToJSDate(strDate, strFormat) {
    try {
        if (strDate != '' && strDate != null && strDate != undefined) {
            var index = strFormat.indexOf('YYYY');
            if (index != -1) {
                var numM = 0;
                var indexM1 = strFormat.indexOf('MMMM');
                if (indexM1 != -1 && indexM1 < index) {
                    for (var i = 1; i <= 12; i++) {
                        if (strDate.indexOf(arrMonthNameFullEN[i - 1]) != -1) {
                            numM = arrMonthNameFullEN[i - 1].length - 4
                            break;
                        }
                        if (strDate.indexOf(arrMonthNameFullTH[i - 1]) != -1) {
                            numM = arrMonthNameFullTH[i - 1].length - 4
                            break;
                        }
                    }
                }

                var indexM2 = strFormat.indexOf('MMM');
                if (indexM2 != -1 && indexM2 < index) {
                    for (var i = 1; i <= 12; i++) {
                        if (strDate.indexOf(arrMonthNameShortEN[i - 1]) != -1) {
                            numM = arrMonthNameShortEN[i - 1].length - 3
                            break;
                        }
                        if (strDate.indexOf(arrMonthNameShortTH[i - 1]) != -1) {
                            numM = arrMonthNameShortTH[i - 1].length - 3
                            break;
                        }
                    }
                }

                //substr(indexstart,length) | substring(indexstart,indexend)
                var strYear = parseFloat(strDate.substring(index + numM, index + 4 + numM));
                if (strYear > 2400) {
                    strDate = strDate.replace(strYear, strYear - 543);
                }
            }
            var date = moment(strDate, strFormat).toDate();
            if (date.getHours() > 0 || date.getUTCMinutes() > 0) {
                //date.setHours(date.getUTCHours() - date.getTimezoneOffset() / 60);
            }
            return date;
        } else {
            return null;
        }
    }
    catch (err) {
        return null;
    }
}

/**** Convert DateString To DateString ****/

function ConvertDateStringToDateStringEN(strDate, strFormat, strResultFormat) {
    var date = ConvertDateStringToJSDate(strDate, strFormat);
    return ConvertJSDateToDateStringEN(date, strResultFormat);
}



/************************************** About Number Function ******************************/

function MoneyToWord() { }

MoneyToWord.execute = function (money) {
    var result = '';
    money = parseFloat(Math.round(money * 100) / 100).toFixed(2);  // แปลงเป็นแบบ ทศนิยม แล้ว Math.round กรณี คูณแล้วมีเศษ ถ้าต่ำกว่า 0.4 ปัดลง 0.5 ปัดขึ้นและทศนิยม สองตำแหน่ง

    var numbers = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    var positions = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];

    var digit = money.length; // money จะมี .xx เป็นทศนิยม
    var inputs = [];

    if (digit <= 15) {  // เช็คว่า จำนวนเงินที่เข้ามา น้อยกว่าหรือเท่ากับ 15 
        if (digit > 9) {  // มากกว่า 9 
            inputs[0] = money.substr(0, digit - 9);
            inputs[1] = money.substr(inputs[0].length, 6);
        } else {     // น้อยกว่า 9 หรือ หลักแสน
            inputs[0] = '00';
            inputs[1] = money.substr(0, money.length - 3);  // จะได้ตัวเลขธรรมดาแบบไม่มี ทศนิยม
        }
        inputs[2] = money.substr(money.indexOf('.') + 1, 2); // ถ้าเก็บทศนิยม แต่กรณีไม่มีเศษ จะให้เท่ากับ .00
    } else {
        result = 'Error: ไม่สามารถรองรับจำนวนเงินที่เกินหลักแสนล้าน';
        return result;
    }

    for (i = 0; i < 3; i++) {
        var input = inputs[i];  // จะเก็บค่าไว้ 3 ค่า คือ 00 เลขที่ป้อน ทศนิยม
        if (input != '0' && input != '00') {
            var digit = input.length;  // จะได้ตัวเลข ของจำนวนเต็ม และ จำนวนของทศนิยม ในแต่ละรอบของ for
            for (j = 0; j < digit; j++) {
                var s = input.substr(j, 1);  // จะตัดเป็น ตัว ๆ 
                var number = numbers[s];  // จะแปลงเป็น อักษร ทีละตัว
                var position = '';

                if (number != '') {
                    position = positions[digit - (j + 1)];  // เก็บจำนวนหลัก 
                }
                if ((digit - j) == 2) {   //digit - j จะนับจำนวน หลัก 
                    if (s == '1') {
                        number = '';
                    } else if (s == '2') {  // ถ้าหลักที่ 2 ตรงกับเลข 2 
                        number = 'ยี่';
                    }
                } else if ((digit - j) == 1 && (digit != 1)) {  // ถ้าจำนวนหลัก เท่ากับ 1 และ ถ้าจำนวนยังไม่เท่ากับ 1
                    var pre_s = '0';
                    if (j > 0) {
                        pre_s = input.substr(j - 1, 1);  // ตัดตัวหลักสิบ และตัวแรกของทศนิยมออกมา
                    }
                    if (i == 0) {
                        if (pre_s != '0') {
                            if (s == '1') {
                                number = 'เอ็ด';
                            }
                        }
                    } else {
                        if (s == '1') {
                            number = 'เอ็ด';
                        }
                    }
                }
                result = result + number + position;   // จะเก็บจากหลักที่มากที่สุด ก่อน เช่น ห้าร้อย แล้ววนลูปอีกรอบ เก็บ ห้าสิบ   สาม
            }
        }
        if (i == 0) {
            if (input != '00') {  // ถ้าป้อนจำนวนถึงหลักล้าน input จะมีค่าเป็นตัวเลขหลักล้าน เป็นต้นไป เช่น 123,456,789 input คือ 123
                result = result + 'ล้าน';  //result มีค่าเป็นตัวอักษร หนึ่งร้อยยี่สิบสามล้าน
            }
        } else if (i == 1) {
            if (input != '0' && input != '00') {
                result = result + 'บาท';
                if (inputs[2] == '00') {  // กรณีเป็นจำนวนเต็ม
                    result = result + 'ถ้วน'; // เก็บค่า ถ้วน ต่อท้ายจำนวนเงิน 
                }
            }
        } else {
            if (input != '00') {  // กรณีมีเศษสตางค์
                result = result + 'สตางค์';
            }
        }
    }// end for

    return result;
}

/************************************** About Other Function ******************************/

var gen_date = new Date();
var gen_time = gen_date.getTime();

var CheckCookieLogin = function () {
    return function () {
        var page = "";
        if (getQueryString("P") != "") {
            page = getQueryString("P");
        }

        if (ART.IsCheckLogin && $.inArray(page, ART.IgnorePageCheckLogin) == -1) {
            var UserDetail = getCookie(ART.DefaultCookieUserDetail);
            if (UserDetail == "0") {
                UIkit.modal('#Modal_Login').show();
            }
        }
    };
}();

function LoadPage(page, queryString, mainpage) {
    ReloadTable();
    if (page != '') {
        //if ((getCookie("LockScreen") + '') == 'true') {
        //    window.location.href = 'LockScreen.html';
        //} else {
        var url = "default.html?P=" + page;
        if (mainpage != undefined && mainpage != null && mainpage != '') {
            url = mainpage + "?P=" + page;
        }
        var contenturl = page + '.html';
        if (queryString != '') {
            url += '&' + queryString;
            contenturl += '?' + queryString + '&v=' + gen_time;
        }
        else {
            contenturl += '?v=' + gen_time;
        }
        if (page != 'Error') {
            window.history.pushState(contenturl, contenturl, url);
        }
        LoadPageOnly(contenturl, mainpage);
        //}
    }
    $body.addClass('sidebar_main_hiding').removeClass('sidebar_main_active sidebar_main_open');
    $body.removeClass('sidebar_main_hiding');
    $html.css('overflow', '');
    UnloadTable();
}

function LoadPageOnly(url, mainpage) {
	$.get(url, function (data) {
		data = data.replaceAll('.js', '.js?v=' + gen_time);
		data = data.replaceAll('.css', '.css?v=' + gen_time);
		data = data.replaceAll('<script>pageScript</script>', '<script type="text/javascript">$.ajax({ "async": true,"success": function () { setTimeout(function() { CheckPage(); },0); }});</script>');
		$("#page_content").html(data);
		$.UIkit.init();
		$(window).scrollTop(0);
	}).fail(function () {
		LoadPage("PageNotFound", "", mainpage);
	});
}

window.onpopstate = function (e) {
    if (e.state) {
        var strparam = e.state.toString();
        if (strparam.indexOf("?") != -1) {
            var arrurl = strparam.split("?");
            var arrparam = arrurl[1].split("&");
            if (arrparam.length > 0) {
                for (var i = 0; i <= arrparam.length - 1; i++) {
                    if (arrparam[i].indexOf("RowIDMenu=") != -1) {
                        ART.ARTSetFocusMenuNav(arrparam[i].replace("RowIDMenu=", ""));
                        ART.strLoadNav(arrparam[i].replace("RowIDMenu=", ""));
                    }
                }
            }
        }

        LoadPageOnly(e.state);
    }
};

window.onerror = function (error_msg, url, line_number, column, errorObj) {
    deleteCookie('Error');

    var objData = {
        'error_msg': error_msg,
        'url': url,
        'line_number': line_number,
        'column': column,
        'errorObj': errorObj.stack
    };
    setCookie('Error', JSON.stringify(objData), 1);

    //console.log(history.state);
    //history.replaceState("Error.html", "Error.html", "default.html?P=Error");
    //history.go(0);
}

function CheckPage() {
    var arrurl = document.URL.split("P=");
    var retval = {};
    if (arrurl.length == 2) {
        var params = {
            "ROW_ID_ES_M_MODULE": ART.RowID_ES_M_Module,
            "URL": arrurl[1]
        };
        console.log(params);
        var jsonauth = ART.ARTLoadDataPub(ART.UrlSetting, 'pub/check_auth', params).DATA;
        retval = jsonauth;
        if (jsonauth != undefined && jsonauth != null) {
            console.log('access=' + jsonauth.CAN_A + ', add=' + jsonauth.CAN_C + ', update=' + jsonauth.CAN_U + ', delete=' + jsonauth.CAN_D);
            if (jsonauth.CAN_A) {
                var arrAction = ['add', 'update', 'save', 'delete']
                var arrValue = [jsonauth.CAN_C,
                                jsonauth.CAN_U,
                                (jsonauth.CAN_C || jsonauth.CAN_U),
                                jsonauth.CAN_D]

                for (var i = 0; i <= arrAction.length - 1; i++) {
                    if (!arrValue[i]) {
                        if (arrAction[i] == 'save') {
                            if (!arrValue[0] && !arrValue[1]) {
                                $("#page_content").find("[data-action='" + arrAction[i] + "']").each(function () {
                                    $(this).remove();
                                });
                            }
                        }
                        else {
                            $("#page_content").find("[data-action='" + arrAction[i] + "']").each(function () {
                                $(this).remove();
                            });
                        }
                    }
                }
            } else {
                LoadPage("NotAuthorize", "");
            }
        }
    }
    return retval;
}

window.onload = function () {
    var elements = document.getElementsByTagName('*'),
		i;
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
            fragment(elements[i], elements[i].getAttribute('data-include'));
        }
    }
}





function fragment(el, url) {
    var localTest = /^(?:file):/,
        xmlhttp = new XMLHttpRequest(),
        status = 0;

    xmlhttp.onreadystatechange = function () {
        /* if we are on a local protocol, and we have response text, we'll assume
*  				things were sucessful */
        if (xmlhttp.readyState == 4) {
            status = xmlhttp.status;
        }
        if (localTest.test(location.href) && xmlhttp.responseText) {
            status = 200;
        }
        if (xmlhttp.readyState == 4 && status == 200) {
            el.outerHTML = xmlhttp.responseText;
        }
    }

    try {
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } catch (err) {
        /* todo catch error */
    }
}

/************************************************************************************************************/



function getFileName(url) {
    var path = window.location.pathName;
    var file = path.replace(/^.*\/(\w{2})\.html$/i, "$1");
    return file ? file : "undefined";
}



// ********************************************************************************************************************************


$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


 function find_listrow_id(row_id){  // ใช้ตัดคำหา id ที่ส่งมา
         var position = row_id.indexOf("_");
         var str = row_id.substring(position+1);
         return str
}  




function ConitionSwitch(status,id,nameid){    // function ใช้เปลี่ยนสีปุ่มกดแบบ switch
    var name_id = nameid || '';
     $("#"+name_id+id).find("a").removeClass();
    if(status == true || status == "true" || status == "Normal"){
        $("#"+name_id+id).find("a").addClass("greenbtn"); 
        $("#txtarea_"+id).addClass("hidebtn");
    }else if(status == false || status == "false" || status == "AbNormal"){
         $("#"+name_id+id).find("a").addClass("redbtn");
         $("#txtarea_"+id).removeClass("hidebtn");
    }else if(status == undefined || status == "undefined" || status == "NoData" || status == "NoEquipment"){
         $("#"+name_id+id).find("a").addClass("greybtn");
         $("#txtarea_"+id).addClass("hidebtn");
    }else{
        console.log("else meaJS");
    }
}

/**************** CheckSaveStatus**********************/

function CheckSaveStatus(savestatus) {
    if (savestatus != "draft") {
        return  "";
    } else {
        return "ร่าง";
    }
}


function fragment(el, url) {
    var localTest = /^(?:file):/,
        xmlhttp = new XMLHttpRequest(),
        status = 0;

    xmlhttp.onreadystatechange = function () {
        /* if we are on a local protocol, and we have response text, we'll assume
*  				things were sucessful */
        if (xmlhttp.readyState == 4) {
            status = xmlhttp.status;
        }
        if (localTest.test(location.href) && xmlhttp.responseText) {
            status = 200;
        }
        if (xmlhttp.readyState == 4 && status == 200) {
            el.outerHTML = xmlhttp.responseText;
        }
    }

    try {
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } catch (err) {
        /* todo catch error */
    }
}

/************************************************************************************************************/



function getFileName(url) {
    var path = window.location.pathName;
    var file = path.replace(/^.*\/(\w{2})\.html$/i, "$1");
    return file ? file : "undefined";
}



// ********************************************************************************************************************************


$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


 function find_listrow_id(row_id){  // ใช้ตัดคำหา id ที่ส่งมา
         var position = row_id.indexOf("_");
         var str = row_id.substring(position+1);
         return str
}  




function ConitionSwitch(status,id,nameid){    // function ใช้เปลี่ยนสีปุ่มกดแบบ switch
    var name_id = nameid || '';
     $("#"+name_id+id).find("a").removeClass();
    if(status == true || status == "true" || status == "Normal"){
        $("#"+name_id+id).find("a").addClass("greenbtn"); 
        $("#txtarea_"+id).addClass("hidebtn");
    }else if(status == false || status == "false" || status == "AbNormal"){
         $("#"+name_id+id).find("a").addClass("redbtn");
         $("#txtarea_"+id).removeClass("hidebtn");
    }else if(status == undefined || status == "undefined" || status == "NoData" || status == "NoEquipment"){
         $("#"+name_id+id).find("a").addClass("greybtn");
         $("#txtarea_"+id).addClass("hidebtn");
    }else{
        console.log("else meaJS");
    }
}

/**************** CheckSaveStatus**********************/

function CheckSaveStatus(savestatus) {
    if (savestatus != "draft") {
        return  "";
    } else {
        return "ร่าง";
    }
}



var ART = ART || {};
///***  Local ***/
ART.UseMockupAPI = false;
ART.Host = $(location).attr('host');
ART.Url = "http://" + ART.Host + "/mot-solution/MOTService/api/";
ART.ImgUrl = "http://" + ART.Host + "/mot-solution/MOTService/upload/";
ART.ImgRootPath = "../MOTService/";
//********************//
ART.RowID_ES_M_Module = 1;
ART.LoadingDiv = "";

ART.config_ext_doc = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx','pdf'];
ART.config_ext_mov = ['mp4', 'flv', 'mpg', 'mpeg', 'mov', 'mp3', 'wav'];
ART.config_ext_img = ['jpg', 'gif', 'png', 'jpeg'];

/****************************************************************/

ART.templateUrl = "../assets/templates";
infuser.defaults.templateUrl = ART.templateUrl;

/****************************************************************/

ART.UrlLogin = "";
ART.UrlSetting = "";

ART.IsCheckLogin = true;
ART.DefaultCookieUserDetail = "UserDetail";
ART.IgnorePageCheckLogin = [];

/****************************************************************/

ART.fn_CheckLogin = function () {
    if (window.location.href.indexOf("index.html?ID=") != -1 ||
        window.location.href.indexOf("P=index&ID=") != -1 ||
        window.location.href.indexOf("authen.html?ID=") != -1) {
        var TokenID = '';
        if (getQueryString("ID") != '') {
            ART.ARTLoadData('pub/check_token', { "ID": getQueryString("ID") }, function (jsondata) {
                var objData = jsondata;
                if (objData.STATUS == 'complete') {
                    setCookie(ART.DefaultCookieUserDetail, JSON.stringify(objData.DATA), 1);
                    if (window.location.href.indexOf("P=index&ID=") != -1) {
                        window.location.href = 'default.html?P=index';
                    } else {
                        window.location.href = 'index.html';
                    }
                } else {
                    window.location.href = ART.UrlLogin;
                }
            });
        } else {
            window.location.href = ART.UrlLogin;
        }
    } else if (window.location.href.indexOf("login.html") == -1) {
        var UserDetail = getCookie(ART.DefaultCookieUserDetail);
        if (UserDetail == "0") {
            window.location.href = ART.UrlLogin;
        } else {
            ART.ARTLoadData('pub/check_token', { "ID": getTokenID() }, function (jsondata) {
                var objData = jsondata;
                if (objData.STATUS == 'not_authorize') {
                    deleteCookie(ART.DefaultCookieUserDetail);
                    window.location.href = ART.UrlLogin;
                }
            });
        }
    }
}

ART.fn_Logout = function () {
    deleteCookie(ART.DefaultCookieUserDetail);
            window.location.href = ART.UrlLogin;
}

ART.fn_ModuleLink = function (obj) {
    switch (document.location.hostname) {
        case 'localhost':
            if (obj.LINK_LOCAL.indexOf('?') == -1) {
                window.open(obj.LINK_LOCAL + '?ID=' + getTokenID());
            } else {
                window.open(obj.LINK_LOCAL + '&ID=' + getTokenID());
            }
            break;
        default:
            if (obj.LINK.indexOf('?') == -1) {
                window.open(obj.LINK + '?ID=' + getTokenID());
            } else {
                window.open(obj.LINK + '&ID=' + getTokenID());
            }
            break;
    }
}

ART.fn_LoadProfile = function () {

}

ART.fn_Profile = function () {
    $('#divProfile').load('../assets/templates/profile/profile.html', function () {
        UIkit.modal('#Modal_Profile').show();
    });
}

ART.fn_CallbackWebScan;

ART.fn_OpenWebScanFile = function (fn) {
   
}

function fn_SendFileWebScan(objData) {
    $.unblockUI();

    if (typeof ART.fn_CallbackWebScan == 'function') {
        ART.fn_CallbackWebScan(objData);
    }
}

function scrollToElement(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top - 150
    }, 1000);
}

ART.fn_ErrorFocus = function () {
    var objError = $("input.parsley-error,select.parsley-error").first();
    if (objError.length > 0) {
        if (objError[0].tagName == 'INPUT') {
            if (objError[0].type == 'text') {
                if (objError[0].className == "input-select-value parsley-error") {
                    scrollToElement(objError[0].nextElementSibling);
                } else {
                    $("input.parsley-error").first().focus();
                }
            } else if (objError[0].type == 'checkbox' || objError[0].type == 'radio') {
                scrollToElement(objError[0].nextElementSibling);
            }
        } else if (objError[0].tagName == 'SELECT') {
            scrollToElement(objError[0].nextElementSibling);
        }
    }
}

function getUserDetail(cname) {
    var cookie_name = ART.DefaultCookieUserDetail || "UserDetail";
    if (cname != undefined && cname != null && cname != '') {
        cookie_name = cname;
    }
    var UserDetail = getCookie(cookie_name);
    
    if (!(UserDetail == "0")) {
        return JSON.parse(UserDetail)[0];
    } else {
        return {};
    }
}

function getTokenID(cname) {
    var cookie_name = ART.DefaultCookieUserDetail || "UserDetail";
    if (cname != undefined && cname != null && cname != '') {
        cookie_name = cname;
    }
    var strTokenID = "";
    var UserDetail = getCookie(cookie_name);
   
    if (!(UserDetail == "0")) {
        strTokenID = JSON.parse(UserDetail)[0].TOKEN_ID;
    }
    return strTokenID;
}

function getUserID(cname) {
    var cookie_name = ART.DefaultCookieUserDetail || "UserDetail";
    if (cname != undefined && cname != null && cname != '') {
        cookie_name = cname;
    }
    var strUserID = "";
    var UserDetail = getCookie(cookie_name);
    if (!(UserDetail == "0")) {
        strUserID = JSON.parse(UserDetail)[0].RowID;
    }
    return strUserID;
}

//******************************* GetLocation ******************/
function getLocation(_cb) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            sessionStorage.setItem("LAT", position.coords.latitude);
            sessionStorage.setItem("LONG", position.coords.longitude);

            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            _cb({ "status": "complete", "desc": "", "LAT": position.coords.latitude, "LONG": position.coords.longitude });
            }, function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        _cb({ "status": "error", "desc": "User denied the request for Geolocation." });
                        break;
                    case error.POSITION_UNAVAILABLE:
                        _cb({ "status": "error", "desc": "Location information is unavailable." });
                        break;
                    case error.TIMEOUT:
                        _cb({ "status": "error", "desc": "The request to get user location timed out." });
                        break;
                    case error.UNKNOWN_ERROR:
                        _cb({ "status": "error", "desc": "An unknown error occurred." });
                        break;
                }
            });
  
    } else {
        console.log('c');
        return { "status": "error", "desc": "Geolocation is not supported by this browser." };
    }
}



// ************************************************ About Api *****************************************

var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

function checkUndefined(objValue, objDefaultValue) {
    if (typeof objValue === "undefined" || objValue == undefined || objValue == "undefined") {
        return objDefaultValue;
    }
    else {
        return objValue;
    }
}



function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert(ARTLANG('MsgWelcome') + user);
    } else {
        user = prompt(ARTLANG('MsgEnterName'), "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}



ART.RemoveColumn = function (sdata, colremove) {

    delete sdata["errors"];
    delete sdata["isAnyMessageShown"];
    delete sdata["isValid"];

    for (var i in colremove) {
        delete sdata["" + colremove[i] + ""];
    }
    return sdata;
}


// ******************************************* About Navigate *****************************************

ART.strLoadNav = ko.observable('-1');

ART.ARTSetFocusMenuNav = function (rowid) {
    //rowid = ',' + rowid + ',';
    //Metronic.scrollTop();

    //var menuContainer = $('.page-sidebar ul');
    //var pageContent = $('.page-content');
    //var pageContentBody = $('.page-content .page-content-body');

    //menuContainer.children('li.active').removeClass('active');
    //menuContainer.children('arrow.open').removeClass('open');

    //var objli = $(".page-sidebar a:contains('" + rowid + "')").parents("li");
    //$(objli).parents("li").each(function () {
    //    $(this).addClass('active');
    //    $(this).children('a > span.arrow').addClass('open');
    //});
    //$(objli).addClass('active');
}


function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

function SetLink(alink, aparam, aRowIDMenu, aRowIDParentMenu) {
    alink = alink || '';
    aparam = aparam || '';
    aRowIDMenu = aRowIDMenu || '';
    aRowIDParentMenu = aRowIDParentMenu || '';

    ART.ARTSetFocusMenuNav(aRowIDParentMenu);
    LoadPage(alink, aparam);
    ART.strLoadNav(aRowIDMenu);
}

function getBinary() {
    return 'ffd8ffe000114a464946000101010000000000000affdb004300080606070605080707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c1c2837292c30313434341f27393d38323c2e333432ffdb0043010909090c0b0c180d0d1832211c213232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffc000110800f0014003012200021101031101ffda000c03010002110311003f00f2c16e492c491f4a4f2942b6133cf02a45dc549de323b523ef2bc37d287713f4180285c15e4f0714a6de30bc8fff005d39fe51ce4e0f34ddc338ce7fc690276d8698d4b0dcb9f4f6a5016352077edd69e5891d3000e7341400023a8a365762f41a403b76a0c9a70015b0aa41ee7d283818627afb5341009da79ce29fc8ab3ea2ed0b850091eb8a44c6e27691ee694b1dfea08c7e349e61e88dbb9e73ff00eaa3526c2b463277af7cfe1484296180003d29f1b004e738c77a6a323676e081c120d0d31b62850bcb26e0ddf3d28c023e5c7e1cd38e147de2a71f9d00337f13648eadcff3a4acd0b56862a6074e053582ee20af07be38a91948e00fc738a708c648cf3d714276ea2b5dd8836003804fa714ec2e72c4923a6074a7a1da02f43eb9a5565c9f9783d69a6c6a2ae302aab118f7c8a5223248dbdfad2ae7962d81d80c703de83b98608048e3d451bbb02d3615235e067207af41f4a7b01b40c9c5440e08033d7d69fbc2e5738c7b526812ee0a8aab80807d6808b81d0fae29490c0601ebc9cd27cabcf200345dec1beb61f903a8fa526f201000e4d26fe40cf07da8daac0f3c7b53e51dd0f45c8c8c669e220c4107071d4d363da8bb5738ed4ec9604f61ed4b5b82b88abb587cb839c6e14a54293ce3de90124f5e2958a0382dc1e94f50df41701875a53f2f738a43c0c75a504123b71de9301370ebd48a0b12410339a0158f240c93cd37712dc8e68b6a215770c938c8a9b76e42d9c8a8c01bb2391e94e73b41c600f4352cb57631d77019c027ad5360e9d18fcbc7ad5b762c3eee3351b1561839231d00a105ba151d8c60f279f7ce29924854631c7a9ed560ae189cf41dc55673b9c8279f4aa40ae96a590db1769193ed4c74c9527f0c1a8d14e377f163a9a1c92576a9e0f38ab71d74262db76648e8323976f4c9ce6937053938071e951c8a58679c1ec2a37242e48db9e319a957ea165d89cbee39183e99a40ec48e49c751501666c16271da9fb89f9b18c7008349a17a0f2ce4e33f2fa53800015e873d4543d57716ebe9fe34e2ac3041ca375e7914ec16d6e4bba22d827e6ef4c0e00f9700fa1a8885573f29cf7dc314e3f31dca074e7da92ba04efa8f42ece4bee00f4c54d9215109355627e0f3f993536f38e41e3ad17ec27a8f52b9ea4fb9a911cb29c1c907a9e9506e249ea01e9c52a31c36d391e98a6ee3ba2424282796f6a6890a9241e49c01480e18f1df9a6b920fca7209f4a9421ea43b163bbe94a482796efc5376c8a000a3e638eb4f0a475ebefdaaae87a11392662ac7b54aab9c7231513ed0fb59b934eda2323a81da8e604fa13124e323e940e382c588a66f1b802062845266207d739a9d4131cc0065c9033d877a78607201e48efcd47203d4a8e2915558eeda73eb9e2a93d01f71c072031da0f4e69e30a98ddf4f7a683c63ad0cc76818566c7a52bf704efb0be68c8c707be29cacbc9f9b3eb51638cf183cf14e2ff27ca781de9b8df61a69326dcb953b8119a08c49d6a00d9038e4fbe0d4a0f000c9c71cd165ba1264b838c753e9512fccb93f77b734b963d4633fa50a4670c00cf5e78a9d46b71e080011c8c5331df919a09c70bd3b507015720e7daa9213f305665391d3de9e1d769ddcfe34c0485e8452637739207b50d742aec71990f19cf351ab15dc40ebd29490bf2fe94c605870381e8695bb02b8d6c9073927bfa9a81b6aeec1008a987ddc372ddbdea0650d939dc4f4a3d464a53e5217af634d11e0e4be7be68689d9be53c638349b56263824e473b8e6aefa5c9b2e83245c2e7793dc8c546630e3be40a7317dd851843ea2938039c06f527ad4ead58942bc65b80d8603a74a448b770d80339e6972cc42ba83819e454b904f3d3e945dd8357a91ba966c039229591ce00271efde90118c90300e339a906d18382c7e8695ec36c88c58600bf27a9c9a7342b9e58039e3239a9c264e7664e69c6219ce3393dfb50d292d41ab95840d8ea739ce4d48212546d63c75a919021c050067207bd48b804aecc77e29b1dac42b01202b1cf3d338a0c6546e3c11c6e153ba0603d073488378237823e9475b86a46c84e31d7b0feb4c1195ce4e1b3c7a559c1c64738ef4a57249031c75a340b26cac10ae496c91e9d053ca1da70c79ef526cdc99f971ec3ad3c0e30063da930d080c28304e09cf14a632ec39e3e94637b83d48a95c79401c1e7b8e94aec1dec462319e48247346d05f82727b9e95216571c2e07d690fca557a0ed47a0bd04319c64b8e3a531177673d49eb5295f9872707b52940b82300f6a77637b11b46d9c6ec01edd694a0e3e6208e3229d80cdc9fc2948393c281f5eb4d362e844c32a5738cf7a455fa118a74bf310476ee05377f183920fb52682e22a658ed39f7ef53ee03008fc4d4782b8c67e952a8dc41229bd816fa815f9477e69ad8238e0fae29fb580e991dce7a52100f3bb06a6fa8eda8d4523a9393d334f6cf14ddad9c9a710588f4f7aa6030ae17683c53864703047ad0ec768071f8537824e09fa0352f70b75124c9e4f6a6b0181b73fca946f504e38cf7eb4c6e589e738c53616446ce4b10464f4e05364c81f74f34adc0dbd07ae2ab4c64da016229f2bb15a1718f9887191f8d461599b69fba3ad3c03cee27247a0e0d30364e0b727a73d69dec0d59d86c883036b6403de985428c87ed9c119a74ce4a8e32ca7a74a858eee768273ce7bd0b623c87ed72a70df363afb5294f972082c47ad3496518f940c75a7964560460e7a67ad4b6ba8ef762a94f950119faf3f954db5bcdda79cfbf4a40362eec1c1ec475a781f2976e1a9a7a0b5ea3892a4856393eb4f5dd81b88c0e99ef49bb2bdc2e7a67ad2ab024e06587a8c52d47610ab039e7269e1001d3ea6930dbb8c1cd3d7392071d88a2e1b8a532327a67352843d7924fad31b2adc0c8a90edc82393f4a77d013b89e5066c7f2a42b800039a936e1b238c8f5cd3c280c323814b61b6442208776464d4124673c0c55d2a4b6368c7bd24c988bb52b892d4cc4186249c73c71d2a43e637ca0803a8ef4a58ed21b03d6ac5b405977904827a7a53bdb70b5c64569b796ebd7029d241c8dadf87ad5c30ed652727d00ed43ae3a1e28b0ca9e5b6704e38e293c84dc0b0e957421c8f5ed51b4685b1c9ef46a8572b3c4a5b2a79ee2a29236006300d5c308c9ec3d86290a00807bd17b03453d995391934d8d7e6ebc0eb5759391c7e38a6329c10492dd33ed542499587762df283d314ec657b60d3c29e46dfd3ad376903d076e6a58d5869c291838a69c6fe0d23290c0939349b7e7cb73f4a61657dc95b6819cfb66908c80c06734ac7200dbc1149cb74238ed42b03b8df9b072b8146320738a52581191c9a8dc9dc36839ce39a346c6380c9cef6c0f4e951b60f5e4fa835223606d61d69ae097c139e3afa50c1ad0a9248390771fa0cfe551ca1bcb19e47b0ab12011f214935039050ff093db3424c76b3dcb2c1882993cf5c53638f04a90dd3800e69465c962b8f4e7ad2bbb15f978f5cf6a2e909f72b90ccc72a719ebd6930ec0045e9eb534ae4aed5231e98aaecca06368e7bd4bd497bea2ed2dd48c9e829023b950719078c526efe3008f7c53d5cac8accbd7a669cac81bd6e5a05820db924520ea012793d3de8dcdb06319f7142fde24e416ea339c50b4dc7cc891907cbc77e39a50a7258b1cfa1a4c7ca06e3c77ef4e53c1c6702815ee0aac1854abcf2a3907907bd3572720fd6a5660a00cf26806ec2b633c838a70070001d7d690f2006ce0fb54833f260719c1a4d0d0982473d7353a6ec1c8ce3da903003057e94f42724f18a7713d58eda46d38e292480e381c1e6a40ddb823353e0f419a4d32ac6148841201e73d056a5a4588802a703b556910fdac051c935ab1c602f4cfd4d56b60e847e580db7b535976b818c8f5a94a81c8e69082e31819f4a4040d0ee1bb3c0f7a85948e0753d4d5ac838fe1f6e94c7183c0cff5a2ec5ca4782b818c8a8e420a82573ed8a9c80c323af71e951c9953d88f4a340bb2209c67a71517cf920fcd8ab00e33ce09a8d9829181f8d34f51df5212bcf7cd46e9b492493f87153f25ce58608e29a72d9c364639a42bb2b4880e3070d498c8ea73e94b2aaf042f43512b3162719fa53d2c175b136d63821a9641839c7349e671c726958ee5ec09a5a80c3f376208a692578c75f5a712036771c629bcb3ee2dc8e9420d5a18dbc10dd80e47ad21258678047b52b06cb61873ea6a3182a471c7bd0c1214b864e7af4aacf1824bed3903b538ae32cbd714d0e8c4fcc485f5a1b29596e49b811b57f84f3c529cb0c67a73c5261172033638e076a8bcc6438cfca4e32473557be827b5d0f7e7a230c0a8028e7232bdb8a7cdb5f682dd391c6734d3cbe7923a6284ba93af4137e4e0e76f602a78802ca496207ad46383b80cf6ea39a7c4599bfba7d2a35bd90bd4b395c8c7071d290f007400f19e78a6b2e180cfe229e7eee501c7bd3ba435a2143724134fc2b3e4ff002a88e0f2d9f6a91095fae7814d8d2d49576eec0e062a40c0e4f4c0ec6a15273827b7414fcf960e01c7b525e616bee4f1e5b04938f714f0704e0d468e7a93c54c0392a002df4192680b6a380ee7f0a9919467839a89589f97dff2a9d723919c500d13469b8ee1f2f1c8f5a9b606c7cd83d454098c8393c8e953fcdb78fd6907a94e38c9bb24f15a023001eb54d30b70c49e7b0ab424f93192727b530eb717604191d3bd46cbf3820d3d890396ebda9a77363e5e3b9a2d629f71aeb90180fa9a8d80ce3153053b7afe1519c11d467de80229576af078a8d82e0e4e49a793d3e5073d4fa535bea001fad089e9a91be58600031db14c2a005c2e07a01c549cb723b53091d8e3b509822b903a85c1a0a9c50c58b600c0f614e620003900d2be80d9138c74f4e4540a39cf1f4ab2dbb69c62ab2afcf9dbce7a53076dc7e013fd33438c8c13de9a061c9f7e94e6239ce293d58d46e46770523ae7a669ac08e41e69cd86e7ae3a738c5461493cf5f5cd50bd0460a47cc326a3da54e77702a42768c926a26386cf506a6fae817132003f3126a093046720363f1a964c678393d7350c83e5c6483df8aaf5172b4cb585fe2ce7d306a09946ef99b3fcaadb0381b49c63d7a546c8c48e3381d68d56a5eccaaebb5381d39a500eec01dbbfa54cd1123a027a5089872486c0e39a443f2212111777e5cd4908620951ce290a8ce501001e066a78810c30051a87a8b8dca01c6ecf6a976009f302707b520ce08001c9eb52f000c1ed43f21a642ebb89ea17dc629ea88cc392053c918c1e3775a76dc100038a1eab506dec11aa0c8ce5a94c6369f98fd2948206157db38a91571c9e0ff5a03618a813951c9a950160a09a5504f247d6a45e393c034697d58add455c9e9c76ab11ae14eea600378c0e3b1a99558927b7d68d03d072aedefc54c30c460918f5a8c6ecf0141a567738f97f01536bb1a446a30ec4b139ee7935310aa405ce7d698158e39eb5212c32323f0aad87a8a4e782338a617038cf3e80d387cfd7033dea33165be9de8d83a0f2c02a8ef4d62bb80200f6a6b0cb01d0629002ce40e7d3349b12435f6e32a718a8a4000cf52695c90d8278a8cb36e008e29a01a41071920535a31824b7eb4ad90c1b6e4f4a46e40c600a2cc2e0c0838cfcbed51385e33fcea40a792c6985b9071d7b50088c95119da08a8410006e4d4d3921782307b5418ca8ec4d0ee16628258e4751eb4c76c73c9cd20072704e2976ed6272707b1a7604dbd869e3823a9a42d96ce79ec3148dc163bcd0c4b7cd9e9c63145ee26eec633e73c0249e86a2e8707b77a95b00363767d41a80a9da786e7be38345fa9492ea31989dd8c607bd44d86fba30bdb1531458e3041ebc9e3afe3555ddb96c118a77bb27d4d6dd85c29e3d0d4522ab1ce48cf5c548085523239ed8e951b0049001241fca95b52da4c6c91e00c1007af5a43b300798777b03cd2bb05c8241ee4544c464b229c76c351d2c2bdf41d8c1da4118fd6ac4790a32081eb9aad1019cc99271ebc559126c20120fa0cd297e22b58930bb3e56352600d996da3e95089376090067a034fc8246e6001f534f5d98ddf624df9639208edc735204000c9208e9cd423fd95efeb4aad93b79c6695b5b0acf6275cfbe33e9d69e814751d4f7a8d59b19033da9f9dca01c83d68bd9d85724c01d4f1ec29e1b3801863de981b000c64f7a6a80704e690f5e85889b24e0e4fb54c8dc649e7bd5551b581e99a9978196e95432c16e3b1cfb53b383c1e9512b020e509a78c9c6000295c4ddc7ae19b6e78149b8ab703bd337904e0722919d8b03ce3d0531ec4c705813d73d29030e7a81ef4d0d92090298cfbbae76d242e83e520f43c0a8c64966078c718a18e00dbfad0d263a106900d61c6323351b0ce589e4548c46dc9e3e950c8413c0e0f5c50b616c19c0cf240a8b38c6189e6a4c91819c0a63003000efc1a2f71a10330273914d25588ce69c4e081eb519009f97b502b6a4531eb83c1a84b0c1c03d3b54928258f3c76e298b90a3d0fa53d077e8264803029aeb919e7934fdad484ee1c9e73c714ae264636e0e78f6a466182318e6948dad9009f5143e42fcb8fc4553dee1a5f4236242fd7a8a854e2462858d4c01c8ea052b04ce57ef1eb9eb422acfa1598bb9c1dc4f7c542ca14ba15c71c1353c919dfbf351c87603941d7ad3ba432f803690477e2a2de4138007ae6a55525482719ef50edc101b381c7d6a5bee4bdb522932a7700377b1a6ee04ed60558e3000cfeb52c8a471d71d3b5336bb283bb91d4669dfb06b6b8d56e028eb9c751cd4e5c8db95230339aaeb92d8c839e73d2ad2920007a9ee6937712d44e18e413cf7ec2a50fb0aaf07dea2e36727049ec29d8c630783d9a9ec36878c8077727b54a186c01413ebdaa22cca982c467be6951970005e477a5a8244cac381b8fa1f6a797084e4e3eb51023610a3691c9a713bc63bd0f51bb327f3036319208ce69c1f681fa544a361181914af962b81c7ae6975d082ce410093cf6a54979dad93f5a803857c1f4f4e94e186201fbb4daea534cb9e69fe1e9edda904871c93cfa543b829039031d8d2b30fa629682270f804fad30c849e00f4f6a8c6e0bc1c0cfa530c8548ce79a698dad0b024032338fc68deadc735016054614e695724024e00a77d01f726dcaa0e5be94d6753cae39f5a88e33d680d9181806a7d43725662bcd46cf93d39f4a6b3e3a63207434ccf3927b7e54d075b0e69039db8e69a370e07eb4dc100907e99a767ae33ef479205bd818aeff998063fad34939f9579f5a55f5dd91d38e29acdb9cfa0a12d42c93229090473cd424e14f5cd4b28f7c7bd4672339e87de9ea2bea20e075268c0183d4d381c124a9c01eb4842e4b11cf614bd03a11480649dc314336d5076f247734f6e57920fa003a526718c818029ab0eeada0d2d919600923a0a8a6c9c15e077f6a99940c360fd2a22c4f05383d0e334d31a18c7cc1c3741d2abbc85b7211923b75ab25428c608cd44c369257803fce3153a0cbe57209c61aa1900e0e3e60715331eb8e4fbd42700e0a91ed4ef70e9a0c94131e79ebd8d204c827a1c74eb5310554820814d0adce1783c70696e66ae42b1b4720395c1eb818feb53852f8e71edeb4cd8bbc6e1c818eb52e559876e3b53f41dbb0df29830c63e949b0a93c9383526304b83dba52a1e413d3f2a616232ac4076191e9536dc0057078a47393caf1ec6a40a30a49391d33521e62293b718c67a8a7ed6c8c63a77a56cf041c63b7b50a03020e719eb40f5be8291f2e473c714a030e9d3bd280011cf00718a50727a60fbd090b6d002e79e49a7206270c70280b9ce58d08a41f973c537a0d0a3703918fc69fc9c03e9d41a4001eb8a43ce415073d0648fd6969b05c717ca70723eb4849001fbde82824260eddbedd69588db9e7342d862f6c91f8669926e241048140e4753ed4a7823b63bd085e821ddb79edeb4a01073bff0f4a18ee41dc9e38a682ab92321ba734268169a03632475f5349b7601df34360e4a8fc334d624609e78a2da8087739c12401d314bcfdefc283c9073cfb5285185c9c8a760b0a00e3d0521197c638eb4ee840c6453090d81c83ef5295c5a90cff330190a3dea32a40ea19a966556278c1f514ccec39079a760d3a8e04b67247d334dc9dd8dbc629c013923057f5a42c410001c9a3d4a5710e08ea29cb808dd38e9ef51b60939e39f4a760fd40a188256240e463d6a1c0cee2c4fa8e69cf210a78e3b6698191d39c9fe9420d861e012aa719c1c7351c987e438c8a95b038ea0fa5577243119e3a522b776344a13db8fd6987a01b81fa53f9e76b700544cdb509c6df539abd7b923b042939ce68c6d6183dbad394131fcd8e47e546303db1d6a760774228079c03e94ee4f55245048c6e1934e5258e71ce3b8a1aea82c2c6428e9934640e4f7e9426fe4ecdbe99eff0091a7380395e4f7cd0da0d10d0ab9e3208a9100192d5161b39c673522ee38dc78a177250e6277f5ebda9c383c8c73d2980924e053f706049073da9149d90e2a00cf34bb3af3c76a40c7039fa52860074cfe345920d6e212371079c7a53c60609c814c56c75e99a373640c134f5b0683998939eddb146ecb724f14027041e08fc6936f2181fa517d7501ee7246395f7a6b600c824fb0a424ff007a8277ede7140bc878c9193e9c0a33851c8cfbd460927e5e39a5258f19e6818e07382c78f6a5da0f38e6a23b8139e47bd0186ce7e61dc1142498ae4b8c646073519e467391e94a5b38032286c32e31f8d2bd98c68e7a741eb4b9209f4a42a30327b7514abf30e0d36160271907a9e94cc1cfb8ef4f27032581a6120b104e28bf615ec42c080c473ef9a8d47cd924e7d40a1fef9c734c1bc81b9be503b503d37241f7b23a9e338a0f7fe74d246770e86985b0080680bea3b201e79fc29464000b123d4f14c8d091c9ebd3148cc72776062851ec031f1ce33c77c5315fe60a08e4647ad2e7391bb83cd44ccc0962063a03c0fd69d90362b33636f19cf5a8a446623eee473c8a732fca3be7af34c7c0edfad295d32b45aa35be6518c800d21cb6368229482549e9480973c2e3df355bb1798d24827b7d697000c639349b89527a807d29cb1f420fd054ebd49d50297381d40a5e84120f269b9002f38c8c8a9076ef819029f418abbb236f209e7341619c134024000f18348cb819c7079eb4b50e82e09e4938cf4a3918c9cfa638a5c2e463278ef4104e493814c48149ec081ee314fce40f5a8f219c018dc3d69ca0e4e3b520bbb0a07bf3ef4f0df210714c0483cf5cf7a76ec1c9c5160ba132a31820f7a72b649c3734dc92d8c60528e33d39a3a8efa8fcb05cf1c9e69b93e99fc680f8c77349d091cd312771c0e73d707a8a696c05e0f5a18e48e948d9db8047d2818e0d91c9c1a681827249cf7a00c0c9c1edcf5a173ce7a63814059f41e7900e338ee680703078351824f03eb4a3691ea3d6905871c161c8ce738cf34b9c00003d3b76a63119009e33c52b37cdc1e946bd000329fbd9fad28240e9f8d3383ce48f5e29c1b2a327145afb05bb06dcb65b1f9714c3b492769cd2b95271d78f5a69c05a05a111c6460e0934636aec0463d297696181d475a611919e00fa669dee3683db8c76f6a6bc7f20e8477e28ea7b9e79e29b2364f0cca07519201ff1a1f613b820c8c6ee3a102895115b71208ed4a8c39db838a63805b2ca7eb8e28764c2f7d88a4457195a648a06d006e006768e00fc29d8dcc72081d88a405871c6e346da0ec46c32a495239e9402157eef4e41a52caab924e475cf7a88be598066dde98ed46fb8d246ba961c31a56c01ea7db8a42c7b720d19231c75ea4d36c2c9a1371e46ce3b538939190dee28c125b69a76ee305707d739a9bf527618501209e169d9c8f973ed40e48f51da82792776074c628761e8394e4f39e295493cb0cf3c0a68e0648c9a4f99877c66857063893d3a1f5a53ce324e4d2edce0e7a534e7770ddba1346ec962b0f9864fe9472a724f14756c3631f5a085c609e281f414e0aee2df88a5233caaf3eb4c38ea33d3f3a7630301bb7229356dc3c83cc039046071cd2f3bb38fcea30ad92bb453c061d4e4d5680388ce0e70694b1ea4f4a6125b39eb4abd064120548013bba75346369e70d4dda092d92b93d2941248e3029f989262f00e31d7d294e428ebd718a37139e9d69323f8b38f6a352d2ea0430cf00508cac371607df39a40e54824fe14ace5fe62320fad277ea2429018fd0d20c1e7774ed8a4dc073cd3483b483d5bde9a0438b027bd30a2a838fd295368c293d3b9a71da067033eb4ddc5d46a952003d4d22955241ebef4a3e5192064530866937738ed8a4deba86bd47139cf3c77a8d542640276fa673cd38e63c8cfe14c2731e7207d295c771013bf19a0673f310314c562a49c71db8a00c9e739cf5aa6fa206484104b0c007b544406185cf4ce2890395da18af3d719a63060d9dd9e28b5d89f7136fa671ee2a32bc1d8d93df8c538b301838e7a014c2142b83cf182692bf52b7d110c80614fe84f348493cab019eb814a54fdd319fc0678a8d9090549c01cf3d855db4d07668db76001d809f6a446ddce052160321813c5206e30cd53715b42461853ce3dc5303862319e9e94d725429dc31e80d01c939033ef491322519273410493bb919e9519dc5b8fcc53c6783d31479a1dbb0f25481cf4a4638c107f0a8c10493dc1a566040eb4f615dbd097df2727d29a410dcb7d78a8dfd4124f6a512e00dc08278c1a2d7025241c6ec5346d0bbb2719a8d0872493c8ec694367be71ef45ba3169b930c75c8a69396e0530b0419e84f5a0051c92013c8c9eb493d46c786249e0e31d4d293b98fcc40f6a8998eec76c707340603819068eb71ea89158061edeb48cdf3f2700d30b67b60fa539b38c8f4ef492b13a8e2c5540efeb8a4dc0af2df81a6eee0739c75e28cb1edc76e29a452155881b9ce3e94a1812d91f4c53369c71823d7342be40c63d0e29dd09a561d9c914a1c29c7cde9814dce0e0b61bebd29739ea39a5a5835b6a3f9078c0cd0df29ce69a1cf4cd37792c508f7cd0906a1907ad221cf39ef4aafb587ca06ef439a14eedc091b87a8a35e80239dac79a40c36f7c6290b166c03c67a50cc321508c77c8a4161c3391b8e7df18a491300303cd372ddc8c76e2924906d014e4f7a767d06ddc62e72c09c7e94f5dabf55eb4d56f941c9271d29bbbf2c73c53b8eead61cfb5c9e081f5fe950ba0dd9dc07af38a1db3ce3249f5c0fce90b10bf2f53c1a5aa64b8dd0631d0648f7c8a8643f30c3904f5cf6a919bcb8c82496278a894b22e4af1ee2a9b5d4ab6829e0727d38a8db952a5ce3bd39b6b64e72c3f4a85dba7a7af7a77049d8d40472bd33d48f5a14107e57181d2a10c30491ce280f9042f7e462a5e8f416e4c4ee6c7ca1bd97340e01519c67ad40253e61cf5e9814e0d952413cf5f4a485727ced50c4f14f8d8b2838c67ad41f747538073d697cc24f1f5c537aec3d09c124b6473ed4dc83d4542b212090d82c781d696460adb8d2f507d98f4651271b980e7e94e67e493c0ea2ab33ede7ae7dea42c177649e47714498ac892360c0f0073d69ca17271f962ab292771e9cf4149e60039c67da9dc5d342c090eec75ed4f0dc6deddeab8938cb61703ad2ac84f71b7d4d2bea3d16e4e30580423143e4b7bf4e2a062c3856cfa01ce68f336a64e4b1ec06286f4b8f544cefb48c9e3a5216057e63c540b3b337232a7d69fe661718fca9ea24efa0a5f1d0e57da9dbb237679a80b313c631485d410339cd1be8877bad09c39d9f375f6a53818da78f4a863900040e589a5f330e0b6067d075a7613253875fbe05316411f4cfe34c66dec0aff00faa9aef8caf73e86a6cdb1d9963cc0324e707d2959b1c8191eb5595f2370edd4f5a7094b0c0c60fb52db615ac580dc70323d7d29164c024e0007b75355fce0149e719c7e34a920da095fa1a76b6c80959c7a8a6f99f30538c7d6a379415e879e39f5a6b0503764fe7fe146a0fd49c30fef7d050c57393c1ed50798a8a7914d0f93ce42e3a50eeac0f72cee1823bfbd46cfb4f3c9f61513c8a00064191dcf1485894cee1cfbf5a1a77d41df61e003f3f42783ef4cde0fca79c9e38a85e42abdb39e71424c183638e0f0474a76ea1e63f70cec0a093c75a617508c8cdd3a522b755e873f8e6a2918123a6ef6a15dee0926f5246c6c1f3f4ed5132ae782ac6943011f4018f5e7ad465f3c1249c55596c87b5cffd9';
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4();
}

function getAge(fromdate, todate) {

    fromdate = ConvertStringToDate(fromdate);
  //  console.log(fromdate);
   // console.log(todate);

    if (todate) todate = new Date(todate);
    else todate = new Date();

    var age = [], fromdate = new Date(fromdate),
    y = [todate.getFullYear(), fromdate.getFullYear()],
    ydiff = y[0] - y[1],
    m = [todate.getMonth(), fromdate.getMonth()],
    mdiff = m[0] - m[1],
    d = [todate.getDate(), fromdate.getDate()],
    ddiff = d[0] - d[1];

    if (mdiff < 0 || (mdiff === 0 && ddiff < 0))--ydiff;
    if (mdiff < 0) mdiff += 12;
    if (ddiff < 0) {
        fromdate.setMonth(m[1] + 1, 0);
        ddiff = fromdate.getDate() - d[1] + d[0];
        --mdiff;
    }
    if (ydiff > 0) age.push(ydiff + ' ปี' + (ydiff > 1 ? ' ' : ' '));
    if (mdiff > 0) age.push(mdiff + ' เดือน' + (mdiff > 1 ? '' : ''));
    if (ddiff > 0) age.push(ddiff + ' วัน' + (ddiff > 1 ? '' : ''));
    if (age.length > 1) age.splice(age.length - 1, 0, ' ');
    return age.join('');
}

function getEmployeeName() {
    var strEmployeeName = "";
    strEmployeeName = Base64.decode(getCookie("EmployeeName"));
    if (strEmployeeName == "0") {
        return "";
    }
    else {
        return strEmployeeName;
    }
}





var ART = ART || {};

ART.ARTHeader = function () {
    var headers = {};
    var TokenID = getTokenID();

    if (TokenID != "0") {
        headers.Authorization = 'Bearer ' + TokenID;
    }

    return headers;
}

/********************************************* About Load Data *********************************/

ART.ARTLoadDataAll = function (art_url, url, data, fn_Callback, arg_Callback, art_headers) {
    ReloadTable();
    data = (data != null && data != undefined) ? data : {};
    var _cb = (typeof fn_Callback == 'function') ? fn_Callback : function () { console.error('INVALID CALLBACK!'); };
    var ret_data = {};

    if (ART.UseMockupAPI) {
        $.ajax({
            "type": "get",
            "dataType": 'json',
            "async": false,
            "jsonpCallback": "JSON_CALLBACK",
            "jsonp": "callback",
            "contentType": "application/json; charset=utf-8",
            "headers": art_headers,
            "url": art_url + url,
            "success": function (jsondata) {
                if (fn_Callback != null && fn_Callback != undefined) {
                    _cb(jsondata, arg_Callback);
                } else {
                    ret_data = jsondata;
                }
            },
            "error": function (xhr, textStatus, error) {
                console.log(url + "==" + textStatus);
                if (fn_Callback != null && fn_Callback != undefined) {
                    _cb({});
                }
            }
        });
    } else {
        $.ajax({
            "type": "post",
            "dataType": 'json',
            "async": false,
            "jsonpCallback": "JSON_CALLBACK",
            "jsonp": "callback",
            "contentType": "application/json; charset=utf-8",
            "data": JSON.stringify(data),
            "headers": art_headers,
            "url": art_url + url,
            "success": function (jsondata) {
                if (fn_Callback != null && fn_Callback != undefined) {
                    _cb(jsondata, arg_Callback);
                } else {
                    ret_data = jsondata;
                }
            },
            "error": function (xhr, textStatus, error) {
                console.log(url + "==" + textStatus);
                if (fn_Callback != null && fn_Callback != undefined) {
                    _cb({});
                }
            }
        });
    }
    UnloadTable();
    if (fn_Callback == null || fn_Callback == undefined) {
        return ret_data;
    }
}

ART.ARTLoadData = function (url, data, fn_Callback, arg_Callback) {
    return ART.ARTLoadDataAll(ART.Url, url, data, fn_Callback, arg_Callback, ART.ARTHeader());
}

ART.ARTLoadDataPub = function (art_url, url, data, fn_Callback, arg_Callback) {
    return ART.ARTLoadDataAll(art_url, url, data, fn_Callback, arg_Callback, ART.ARTHeader());
}

ART.ARTLoadDataOther = function (tokenid, url, data, fn_Callback, arg_Callback) {
    var art_headers = {};
    if (tokenid != "") {
        art_headers.Authorization = 'Bearer ' + tokenid;
    }
    return ART.ARTLoadDataAll(ART.Url, url, data, fn_Callback, arg_Callback, art_headers);
}

/**************************************** About Insert/Update Data *******************************/

ART.ARTInsertUpdateDataAll = function (art_url, url, data, fn_Callback, arg_Callback, showtoast, msg, art_headers ,fn_Callback_failed) {
    var msgsaveerror = "Error!!";
    if (showtoast == undefined) {
        showtoast = true;
    }

    ReloadTable();
    var _cb = (typeof fn_Callback == 'function') ? fn_Callback : function () { console.error('INVALID CALLBACK!') };

    $.ajax({
        "type": "post",
        "dataType": 'json',
        "async": false,
        "jsonpCallback": "JSON_CALLBACK",
        "jsonp": "callback",
        "headers": art_headers,
        "data": JSON.stringify(data),
        "contentType": "application/json; charset=utf-8",
        "url": art_url + url,
        "success": function (jsondata) {
            strstatus = getJSONDataStatus(jsondata);
            if (strstatus == 'complete') {
                if (showtoast) {
                    makeToast(msg, strstatus);
                }
                _cb(jsondata, arg_Callback);
            } else if (strstatus == 'failed') {
                if (showtoast) {
                    makeToast(jsondata.DESCRIPTION, strstatus);
                }
                if(typeof fn_Callback_failed == 'function') 
                {
                    fn_Callback_failed(jsondata);
                }
                // 
            } else {
                if (showtoast) {
                    makeToast(JSON.stringify(msgsaveerror), 'error');
                }
            }
        },
        "error": function (xhr, textStatus, error) {
            if (showtoast) {
                makeToast(JSON.stringify(msgsaveerror), 'error');
            }
        }

    });
    UnloadTable();
}

ART.ARTInsertData = function (url, data, fn_Callback, arg_Callback, showtoast,fn_Callback_failed) {
    return ART.ARTInsertUpdateDataAll(ART.Url, url, data, fn_Callback, arg_Callback, showtoast, "Save Complete", ART.ARTHeader(),fn_Callback_failed);
}

ART.ARTUpdateData = function (url, data, fn_Callback, arg_Callback, showtoast,fn_Callback_failed) {
    return ART.ARTInsertUpdateDataAll(ART.Url, url, data, fn_Callback, arg_Callback, showtoast, "Save Complete", ART.ARTHeader(),fn_Callback_failed);
}


ART.ARTInsertDataPub = function (art_url, url, data, fn_Callback, arg_Callback, showtoast,fn_Callback_failed) {
    return ART.ARTInsertUpdateDataAll(art_url, url, data, fn_Callback, arg_Callback, showtoast, "Save Complete", ART.ARTHeader(),fn_Callback_failed);
}

ART.ARTUpdateDataPub = function (art_url, url, data, fn_Callback, arg_Callback, showtoast,fn_Callback_failed) {
    return ART.ARTInsertUpdateDataAll(art_url, url, data, fn_Callback, arg_Callback, showtoast, "Save Complete", ART.ARTHeader(),fn_Callback_failed);
}

ART.ARTUpdateDataOther = function (tokenid, url, data, fn_Callback, arg_Callback, showtoast,fn_Callback_failed) {
    var art_headers = {};
    if (tokenid != "") {
        art_headers.Authorization = 'Bearer ' + tokenid;
    }
    return ART.ARTInsertUpdateDataAll(ART.Url, url, data, fn_Callback, arg_Callback, showtoast, "Save Complete", art_headers,fn_Callback_failed);
}

/******************************************* About Delete Data **********************************/

ART.ARTDeleteDataAll = function (art_url, url, data, fn_Callback, arg_Callback, showtoast) {
    var msgdeleteerror = "Error";
    if (showtoast == undefined) {
        showtoast = true;
    }

    ReloadTable();
    var _cb = (typeof fn_Callback == 'function') ? fn_Callback : function () { console.error('INVALID CALLBACK!') };

    $.ajax({
        "type": "post",
        "dataType": 'json',
        "async": false,
        "jsonpCallback": "JSON_CALLBACK",
        "jsonp": "callback",
        "headers": ART.ARTHeader(),
        "contentType": "application/json; charset=utf-8",
        "url": art_url + url,
        "data": JSON.stringify(data),
        "success": function (jsondata) {
            strstatus = getJSONDataStatus(jsondata);
            if (strstatus == 'complete') {
                if (showtoast) {
                    makeToast("Delete complete", strstatus);
                }
                _cb(jsondata, arg_Callback);
            } else if (strstatus == 'failed') {
                if (showtoast) {
                    makeToast(jsondata.DESCRIPTION, strstatus);
                }
            } else {
                if (showtoast) {
                    makeToast(JSON.stringify(msgdeleteerror), 'error');
                }
            }
        },
        "error": function (msg) {
            console.log(msg);
            if (showtoast) {
                makeToast(JSON.stringify(msgdeleteerror), 'error');
            }
        }
    });
    UnloadTable();
}

ART.ARTDeleteData = function (url, data, fn_Callback, arg_Callback, showtoast) {
    return ART.ARTDeleteDataAll(ART.Url, url, data, fn_Callback, arg_Callback, showtoast);
}

ART.ARTDeleteDataPub = function (art_url, url, data, fn_Callback, arg_Callback, showtoast) {
    return ART.ARTDeleteDataAll(art_url, url, data, fn_Callback, arg_Callback, showtoast);
}

/****************************************** About Get JSON Data **********************************/

function getJSONDataStatus(objData) {
    var strstatus = "";
    strstatus = objData.STATUS;
    return strstatus;
}

function getJSONData(objData) {
    var retdata = [];
    retdata = objData.DATA;
    return retdata;
}

function getJSONDataDescription(objData) {
    var strDescription = "";
    strDescription = objData.DESCRIPTION;
    return strDescription;
}

function makeToast(msg, status) {
    if (status == 'complete') {
        UIkit.notify(msg, { status: 'success', pos: 'top-right', timeout: 3000 });
    } else if (status == 'failed' || status == 'error') {
        UIkit.notify(msg, { status: 'danger', pos: 'top-right', timeout: 3000 });
    } else {
        UIkit.notify(msg, { pos: 'top-right', timeout: 3000 });
    }
}

/********************************************* Reload / Unload *********************************/

var Layout = function () {
    return {
        // main function to initiate the theme
        init: function () {
            // IMPORTANT!!!: Do not modify the core handlers call order.

        },

        blockUI: function (el, centerY) {
            // console.log(el);
            jQuery(el).block({
                message: '<div class="sk-cube-grid">  <div class="sk-cube sk-cube1"></div>  <div class="sk-cube sk-cube2"></div>  <div class="sk-cube sk-cube3"></div>  <div class="sk-cube sk-cube4"></div>  <div class="sk-cube sk-cube5"></div>  <div class="sk-cube sk-cube6"></div>  <div class="sk-cube sk-cube7"></div>  <div class="sk-cube sk-cube8"></div>  <div class="sk-cube sk-cube9"></div></div>',
                centerY: false,
                css: {
                    top: '0%',
                    border: 'none',
                    padding: '10px',
                    opacity: 1,
                    backgroundColor: 'none',
                    baseZ: 20000

                },
                overlayCSS: {
                    backgroundColor: '#F1F1F1',
                    opacity: 0.6,
                    cursor: 'wait'
                }
            });
        },

        // wrapper function to  un-block element(finish loading)
        unblockUI: function (el) {
            jQuery(el).unblock({
                onUnblock: function () {
                    jQuery(el).removeAttr("style");
                }
            });
        },
        // public function to fix the sidebar and content height accordingly
        fixContentHeight: function () {
            handleSidebarAndContentHeight();
        },

        initFixedSidebarHoverEffect: function () {
            handleFixedSidebarHoverEffect();
        },

        initFixedSidebar: function () {
            handleFixedSidebar();
        },

        getLayoutImgPath: function () {
            return layoutImgPath;
        },

        getLayoutCssPath: function () {
            return layoutCssPath;
        }
    };
}();

function ReloadTable(objDivID) {
    if (ART.LoadingDiv != "") {
        objDivID = ART.LoadingDiv;
    }

    if (objDivID == undefined) {
        objDivID = "#content-div";
    }

    Layout.blockUI($(objDivID));
}

function UnloadTable(objDivID) {
    if (ART.LoadingDiv != "") {
        objDivID = ART.LoadingDiv;
    }

    if (objDivID == undefined) {
        objDivID = "#content-div";
    }

    setTimeout(function () { Layout.unblockUI($(objDivID)); }, 1000);
}
var ART = ART || {};

// ************************************************ About Api *****************************************

var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert(ARTLANG('MsgWelcome') + user);
    } else {
        user = prompt(ARTLANG('MsgEnterName'), "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

// ******************************************* About Grid *****************************************
var defaultPageSize = 50;

ART.dataGrid = function (params, obj) {
    var self = this;
    if (obj != undefined) {
        self = obj;
    }

    params = params || {};

    //  console.log(params);

    self.PKKey = params.PKKey || 'RowID';
    self.Type = params.Type || '';
    self.RowID = ko.observable(params.RowID || '0');
    self.loadUrl = params.loadUrl || '';
    self.addUrl = params.addUrl || '';

    self.addAdditionalParam = params.addAdditionalParam || {};

    self.addUpdateParam = params.addUpdateParam || '';
    self.updateUrl = params.updateUrl || '';
    self.deleteUrl = params.deleteUrl || '';
    self.modalName = params.modalName || '';
    self.Title = ko.observable(params.title || '');
    self.data = params.data || [];
    self.isLoadCompleteGrid = ko.observable('');
    self.isUpdate = ko.observable('');
    self.isUpdateCol = ko.observable('');
    self.isReload = ko.observable('true');
    self.txtSearch = ko.observable('');
    self.istxtSearchReload = ko.observable('false');
    self.arrColumn = ko.observableArray([]);
    self.arrFormColumn = ko.observableArray([]);
    self.arrAction = ko.observableArray([]);
    self.currentData = ko.observable({});
    self.oData = {};
    self.oldSort = '';
    self.defaultTableWidth = '100%';
    self.tableWidth = ko.observable(self.defaultTableWidth);

    self.show_column_no = ko.observable((params.show_column_no != undefined ? params.show_column_no : true));

    self.grid = new ART.configGrid(params, self);
    self.jsondata = ko.observableArray([]);
    self.gencolumn = ko.observable('true');
    self.editMode = '';
    self.IsNotRunSelectAll = ko.observable('true');
    self.GridData = ko.observableArray([]);

    // *** สำหรับโหลดข้อมูลทีละหน้า ***
    self.isRemoteData = params.isRemoteData || '';
    self.remoteDataUrl = params.remoteDataUrl || '';
    self.remoteDataParams = ko.observable(params.remoteDataParams || {});
    self.remote = {
        totalRecords: ko.observable(params.totalRecords || 0),
        sortColumn: ko.observable(params.sortColumn || ''),
        sortDirection: ko.observable(params.sortDirection || ''),
        changeSort: ko.observable(''),
        searchText: ko.observable(params.searchText || '')
    }

    self.remote.changeSort.subscribe(function (newValue) {
        //console.log('sortDirection && sortColumn');
        self.remote.fnLoadData();
    });

    self.grid.currentPage.subscribe(function (newValue) {
        //console.log('pageNo');
        self.remote.fnLoadData();
    });

    self.grid.pageSize.subscribe(function (newValue) {
        //console.log('pageSize');
        if (self.isRemoteData == 'true') {
            self.remote.fnLoadData();
        } else {
            self.fn_FilterData();
        }
    });

    self.remote.fnLoadData = function () {
        //console.log('loadData');
        if (self.isRemoteData == 'true') {
            var objSearch = self.remoteDataParams() || {};
            objSearch.SORTING = self.remote.sortDirection();
            objSearch.ORDERBY = self.remote.sortColumn();
            objSearch.PAGENO = self.grid.currentPage();
            objSearch.PAGESIZE = self.grid.pageSize();
            objSearch.SEARCH_DATA = self.remote.searchText();

            self.txtSearch(self.remote.searchText());
            var jsondata = ART.ARTLoadData(self.remoteDataUrl,
                                           objSearch).DATA || [];
            if (jsondata.length > 0) {
                self.remote.totalRecords(jsondata[0].TOTALRECORD);
            } else {
                self.remote.totalRecords(0);
            }
            self.refreshData(jsondata);
        }
    }

    self.arrData = ko.computed(function () {
        if (self.isReload()) {
            if (self.loadUrl != '') {
                jsondata = ART.ARTLoadData(self.loadUrl, {});
            } else {
                jsondata = self.data;
            }

            result = jsondata.template.data || [];
            self.GridData(result);
            gridcol = jsondata.template.gridcolumn || [];
            for (var i = 0; i <= gridcol.length - 1; i++) {
                if (gridcol[i].atype == 'checkboxall' || gridcol[i].atype == 'render_checkboxall') {
                    for (var j = 0; j <= result.length - 1; j++) {
                        if (result[j][gridcol[i].afieldname] == undefined || result[j][gridcol[i].afieldname] == null) {
                            result[j][gridcol[i].afieldname] = ko.observable(false);
                        } else {
                            result[j][gridcol[i].afieldname] = ko.observable((result[j][gridcol[i].afieldname].toString().toLowerCase() == 'true'));
                        }
                    }
                }
            }
            SetJSONValue(jsondata);
            return result;
        }
    });

    function SetJSONValue(jsondata) {
        self.Title(jsondata.template.formname || '');
        if (self.gencolumn()) {
            self.arrFormColumn(jsondata.template.formcolumn || []);
            for (var i = 0; i <= self.arrFormColumn().length - 1; i++) {
                //       console.log(self.arrFormColumn()[i].afieldname);
                if (self.arrFormColumn()[i].avisible == 'true' &&
                    self.arrFormColumn()[i].areadonly == 'false' &&
                    self.arrFormColumn()[i].arequire == 'true') {
                    self.currentData()[self.arrFormColumn()[i].afieldname] = ko.observable(null).extend({ required: true });

                } else {
                    self.currentData()[self.arrFormColumn()[i].afieldname] = ko.observable(null);
                }
            }
            self.arrColumn(jsondata.template.gridcolumn);
            for (var i = 0; i <= self.arrColumn().length - 1; i++) {
                self.arrColumn()[i].aclassvisible = ko.observable(self.arrColumn()[i].avisible == 'true' ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove');
            }
            self.isUpdateCol('true');
        }
        self.editMode = jsondata.template.editmode;

        self.arrAction(jsondata.template.action || []);
        self.checkaction = ko.utils.arrayFilter(self.arrAction(), function (item) {
            return item.visible == 'true';
        });

        if (self.isRemoteData != 'true') {
            self.grid.currentPage(1);
        }
        self.isReload('');
        self.gencolumn('');
    }

    self.fn_SetRemoteParams = function (params) {
        self.remoteDataParams(params);
    }

    self.fn_RefreshGrid = function () {
        //console.log('fn_RefreshGrid');
        if (self.isRemoteData == 'true') {
            //console.log('searchText');
            self.remote.searchText(self.txtSearch());
            self.grid.currentPage(1);
            if (self.grid.currentPage() == 1) {
                self.remote.fnLoadData();
            }
        } else {
            self.refreshData();
        }
    }

    self.refreshData = function (jsondata, columndata) {
        if (jsondata != null && jsondata != undefined) {
            self.data.template.data = jsondata;
        }
        if (columndata != null && columndata != undefined) {
            self.data.template.gridcolumn = columndata;
            self.gencolumn('true');
        }
        self.isReload('true');
        self.fn_FilterData();
    }

    self.arrActionCount = ko.computed(function () {
        var datanew = ko.mapping.toJS(ko.utils.arrayFilter(self.arrAction(), function (item) {
            return item.visible == 'true';
        }));
        return datanew.length;
    });

    self.filteredData = ko.observableArray([]);
    self.fn_FilterData = function () {
        //console.log('fn_FilterData');
        if (self.txtSearch().length > 1 && self.isRemoteData != 'true') {
            var regX = new RegExp(self.txtSearch(), "g");
            var data = [];
            ko.utils.arrayFilter(self.arrData(), function (item) {
                var isFound = false;
                ko.utils.arrayFilter(ko.mapping.toJS(self.arrColumn), function (row) {
                    var isCheckRender = false;
                    if (row.afieldname != '' && row.afieldname != null && row.afieldname != undefined) {
                        var value = item[row.afieldname];
                        if (value != '' && value != null && value != undefined) {
                            value = ko.mapping.toJS(value);
                            var isFilter = false;
                            var newvalue = '';
                            if (row.atype == 'date') {
                                isFilter = true;
                                newvalue = ConvertJSDateToDateStringEN(moment(value)._d, 'DD MMM YYYY');
                            } else if (row.atype == 'datetime') {
                                isFilter = true;
                                newvalue = ConvertJSDateToDateStringEN(moment(value)._d, 'DD MMM YYYY HH:mm');
                            } else if (row.atype == 'number') {
                                isFilter = true;
                                var decimal = row.aprecision || 0;
                                newvalue = formatNumber(parseFloat(value), decimal);
                            } else if (row.atype == 'text' || row.atype == 'render') {
                                isFilter = true;
                                newvalue = value;
                            }
                            if (isFilter == true) {
                                if (JSON.stringify(newvalue).toLowerCase().indexOf(self.txtSearch().toLowerCase().trim()) > -1) {
                                    isFound = true;
                                }
                            }
                        } else {
                            if (row.atype == 'render') {
                                isCheckRender = true;
                            }
                        }
                    } else {
                        if (row.atype == 'render') {
                            isCheckRender = true;
                        }
                    }

                    if (isCheckRender == true) {
                        value = row.arender;
                        var arender = value || '';
                        var aparam = row.aparam || '';

                        if (aparam != '') {
                            var arraparam = aparam.split(",");
                            if (arraparam.length > 0) {
                                for (var i = 0; i <= arraparam.length - 1; i++) {
                                    arender = arender.replace("{" + i + "}", item[arraparam[i]]);
                                }
                            }
                        }

                        value = arender;

                        var div = document.createElement("div");
                        div.innerHTML = value;

                        if (JSON.stringify(div.textContent || div.innerText || "").toLowerCase().indexOf(self.txtSearch().toLowerCase().trim()) > -1) {
                            isFound = true;
                        }
                    }
                });
                if (isFound == true) {
                    data.push(item);
                }
            });

            self.grid.totalPage(Math.ceil(ko.mapping.toJS(data).length / self.grid.pageSize()));
            self.grid.totalItems(ko.mapping.toJS(data).length);

            self.filteredData(data);
            self.filteredData.valueHasMutated();
        } else {
            if (self.arrData() != undefined && self.arrData() != null) {
                if (self.isRemoteData == 'true') {
                    self.grid.totalItems(self.remote.totalRecords());
                    self.grid.totalPage(Math.ceil(self.remote.totalRecords() / self.grid.pageSize()));
                } else {
                    self.grid.totalItems(self.arrData().length);
                    self.grid.totalPage(Math.ceil(self.arrData().length / self.grid.pageSize()));
                }

                if (self.isUpdate() == 'true') {
                    if (self.grid.oldPage() > self.grid.totalPage()) {
                        self.grid.currentPage(self.grid.totalPage());
                    } else {
                        self.grid.currentPage(self.grid.oldPage());
                    }
                    self.isUpdate('');
                }

                self.filteredData(self.arrData());
                self.filteredData.valueHasMutated();
            } else {
                self.filteredData([]);
                self.filteredData.valueHasMutated();
            }
        }
        self.fn_PagedItems();
    }

    self.pagedItems = ko.observableArray([]);
    self.fn_PagedItems = function () {
        //console.log('fn_PagedItems');
        if (self.isRemoteData == 'true') {
            self.pagedItems(self.filteredData());
            self.pagedItems.valueHasMutated();
        } else {
            var array = self.filteredData();
            var indexOfFirstItemOnCurrentPage = (((self.grid.currentPage() * 1) - 1) * (self.grid.pageSize() * 1)) || 0;
            //console.log(self.grid.currentPage(), indexOfFirstItemOnCurrentPage, self.grid.pageSize(), array.length);
            if (indexOfFirstItemOnCurrentPage > array.length) {
                indexOfFirstItemOnCurrentPage = 0;
                self.grid.currentPage(1);
            }

            var pageArray = array.slice(indexOfFirstItemOnCurrentPage, indexOfFirstItemOnCurrentPage + (self.grid.pageSize() * 1));
            self.pagedItems(pageArray);
            self.pagedItems.valueHasMutated();
        }
    }

    self.showHideColumn = function (data) {
        //alert(JSON.stringify(data));
        var id = self.arrColumn().indexOf(data);
        self.arrColumn()[id].avisible = (self.arrColumn()[id].avisible == 'true' ? 'false' : 'true');
        self.arrColumn()[id].aclassvisible(self.arrColumn()[id].avisible == 'true' ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove');
        self.isUpdateCol('true');
    }

    self.arrVisibleCol = ko.computed(function () {
        if (self.isUpdateCol()) {
            var data = JSON.parse(JSON.stringify(self.arrColumn()));
            var datanew = ko.mapping.toJS(ko.utils.arrayFilter(data, function (item) {
                return item.avisible == 'true';
            }));

            var total_width = 0;
            var total_col = 0;
            var isPercent = false;
            for (var i = 0; i <= datanew.length - 1; i++) {
                if (datanew[i].awidth != null && datanew[i].awidth != undefined && datanew[i].awidth != '') {
                    total_col += 1;
                    total_width += parseFloat(datanew[i].awidth);
                    if (datanew[i].awidth.indexOf('%') != -1) {
                        isPercent = true;
                    }
                }
            }
            if (datanew.length == total_col && isPercent == false) {
                if (self.show_column_no()) {
                    total_width += 50;
                }
                //for (var k = 0; k <= self.arrAction().length - 1; k++) {
                //    if (self.arrAction()[k].visible == 'true' && self.arrAction()[k].method == 'update') {
                //        total_width += 50;
                //    }
                //    if (self.arrAction()[k].visible == 'true' && self.arrAction()[k].method == 'delete') {
                //        total_width += 50;
                //    }
                //}
                self.tableWidth(total_width.toString() + 'px');
                self.tableWidth.valueHasMutated();
            } else {
                self.tableWidth(self.defaultTableWidth);
                self.tableWidth.valueHasMutated();
            }

            self.isUpdateCol('');

            return datanew;
        }
    });

    self.addData = function (data) {
        //console.log("addData");
        //alert('Insert: Data');

        if (self.editMode == 'modal') {
            for (var i = 0; i <= self.arrFormColumn().length - 1; i++) {
                self.currentData()[self.arrFormColumn()[i].afieldname](null);
            }
            self.currentData()[self.PKKey](0);
            if (self.Type == 'Master') {
                self.currentData()["Flag"](self.RowID());
                self.currentData()["ParentID"](0);
            }
            $(self.modalName).openModal();//modal('show');
        } else if (self.editMode == 'inline') {

        } else {
            LoadPage(self.addUrl, self.addUpdateParam);
        }
    }
    //-- Caution data.RowID is "RowID" only not "rowid" or "Rowid"

    self.editData = function (data) {
        //   console.log('Edit: PKKey -->' + data[self.PKKey]);
        if (self.editMode == 'modal') {
            var editdata = ko.utils.arrayFilter(self.arrData(), function (item) {
                //console.log(item[self.PKKey], data[self.PKKey]);
                return (item[self.PKKey] == data[self.PKKey]);
            });

            if (editdata.length > 0) {
                self.oData = editdata[0];
                for (var i = 0; i <= self.arrFormColumn().length - 1; i++) {
                    self.currentData()[self.arrFormColumn()[i].afieldname](editdata[0][self.arrFormColumn()[i].afieldname]);
                }
                $(self.modalName).openModal();
                //$(self.modalName).modal('show');
            }
            //console.log(data);
        } else if (self.editMode == 'inline') {

        } else {
            var updateParam = self.addUpdateParam;
            if (updateParam != '') {
                updateParam += '&';
            }
            updateParam += self.PKKey + '=' + data[self.PKKey]
            LoadPage(self.updateUrl, updateParam);
        }
    }

    self.errors = ko.validation.group(self.currentData(), { deep: true });

    self.validationModel = ko.validatedObservable(self.currentData());

    // is the validationModel valid?   
    // what are the error messages?


    self.saveData = function (data) {
        var result = ko.validation.group(self.currentData(), { deep: true });

        //  console.log(self.validationModel.isValid());
        //   console.log(ko.validation.group(self.currentData()));
        // console.log( self.validationModel.isValid())
        //console.log(self.validationModel.errors())
        //console.log(self.errors().length);
        // alert('Save: PKKey -->' + data[self.PKKey]);
        // Materialize.toast('Save Complete', 4000)
        if (self.validationModel.isValid()) {
            UIkit.modal.confirm("Confirm save", function () {
                // will be executed on confirm.
                if (data[self.PKKey]() != 0) {
                    // แก้ไขข้อมูล
                    var newdata = JSON.parse(JSON.stringify(ko.mapping.toJS(self.currentData())));
                    var fieldname = ',' + self.PKKey + ',';
                    var file = [];
                    if (self.Type == 'Master') {
                        fieldname = ',' + self.PKKey + ',Flag,ParentID,';
                    }
                    //console.log(self.oData);
                    for (var i = 0; i <= self.arrFormColumn().length - 1; i++) {
                        if (self.arrFormColumn()[i].atype == 'select') {
                            if (newdata[self.arrFormColumn()[i].afieldname] == undefined) {
                                newdata[self.arrFormColumn()[i].afieldname] = null;
                            }
                        }
                        if (self.arrFormColumn()[i].atype == 'file' || self.arrFormColumn()[i].atype == 'fileimage') {
                            file.push(self.arrFormColumn()[i].afieldname);
                        }
                    }
                    //console.log(newdata);
                    $.each(newdata, function (key, element) {
                        //alert('key: ' + key + '\n' + 'value: ' + element);
                        if (self.oData[key] == element && fieldname.indexOf(',' + key + ',') == -1) {
                            delete newdata[key]; // ลบ field ที่ไม่ได้แก้ไขออก
                        }
                        delete newdata['errors'];
                    });

                    //    console.log(self.updateUrl);
                    var dataurl = self.updateUrl + '/' + newdata[self.PKKey];

                    ART.ARTUpdateDataCallback(dataurl, ko.mapping.toJS(newdata), self.UpdateDataComplete, null, file);

                } else {
                    // เพิ่มข้อมูล
                    var newdata = JSON.parse(JSON.stringify(ko.mapping.toJS(self.currentData())));
                    //         console.log(self.oData);
                    var file = [];
                    for (var i = 0; i <= self.arrFormColumn().length - 1; i++) {
                        if (self.arrFormColumn()[i].atype == 'select') {
                            if (newdata[self.arrFormColumn()[i].afieldname] == undefined) {
                                newdata[self.arrFormColumn()[i].afieldname] = null;
                            }
                        }
                        if (self.arrFormColumn()[i].atype == 'file' || self.arrFormColumn()[i].atype == 'fileimage') {
                            file.push(self.arrFormColumn()[i].afieldname);
                        }
                    }
                    //console.log(newdata);
                    $.each(newdata, function (key, element) {
                        //alert('key: ' + key + '\n' + 'value: ' + element);
                        if (key == self.PKKey || element == null) {
                            delete newdata[key]; // ลบ field ที่ไม่ได้แก้ไขออก
                        }
                    });

                    for (key in self.addAdditionalParam) {
                        newdata[key] = self.addAdditionalParam[key];

                    }

                    delete newdata['errors'];
                    //      console.log(self.addUrl);

                    ART.ARTInsertDataCallback(self.addUrl, newdata, self.InsertDataComplete, null, file);
                }
            });
        } else {
            result.showAllMessages();
        }
    }

    self.InsertDataComplete = function (jsondata) {
        console.log(jsondata);
        strStatus = getJSONDataStatus(jsondata);
        jsondata = getJSONDataFromReturn(jsondata);

        if (strStatus == 'complete') {
            //   console.log(jsondata.data[0]);
            self.arrData().push(jsondata[0]);
            self.addUpdateComplete();
            $(self.modalName).closeModal()
        }
    }

    self.UpdateDataComplete = function (jsondata) {
        strStatus = getJSONDataStatus(jsondata);
        jsondata = getJSONDataFromReturn(jsondata);
        if (strStatus == 'complete') {
            var id = self.arrData().indexOf(self.oData);
            self.arrData()[id] = jsondata[0];
            self.addUpdateComplete();
            $(self.modalName).closeModal()
        }
    }


    self.addUpdateComplete = function () {
        self.grid.oldPage((self.grid.currentPage() == 0 ? 1 : self.grid.currentPage()));
        ART.fn_SearchGrid(self);
        self.isUpdate('true');
    }

    self.deleteData = function (data) {
        //alert('Delete: PKKey -->' + data[self.PKKey]);
        UIkit.modal.confirm("ยืนยันการลบข้อมูล", function () {
            // will be executed on confirm.
            var editdata = ko.utils.arrayFilter(self.arrData(), function (item) {
                //console.log(item.RowID, data.RowID);
                return (item[self.PKKey] == data[self.PKKey]);
            });
            //  console.log(editdata);
            var dataurl = self.deleteUrl + '/' + data[self.PKKey];
            var col = self.PKKey;
            if (ART.ARTDeleteData(dataurl, { col: data[self.PKKey] })) {
                var id = self.arrData().indexOf(editdata[0]);
                //      console.log(id);
                self.arrData().splice(id, 1);
                self.addUpdateComplete();
            } else {
                //      console.log('xxx');
            }
        });
    }


    self.selectAll = function (data, event) {
        //console.log('selectAll');
        self.IsNotRunSelectAll('');
        ko.utils.arrayForEach(self.arrData(), function (item) {
            if (event.target.checked)
                item[data.afieldname](true);
            else
                item[data.afieldname](false);
        });
        self.IsNotRunSelectAll('true');
        return true;
    }

    self.isLoadCompleteGrid('true');

    return self;
}

ART.configGrid = function (params, parent_self) {
    var self = this;
    params = params || {};
    self.defaultPageSize = params.defaultPageSize || params.data.defaultPageSize || defaultPageSize;

    self.oldPage = ko.observable(1);
    self.currentPage = ko.observable(1);
    self.totalPage = ko.observable(0);
    self.pageSize = ko.observable(self.defaultPageSize);
    self.totalItems = ko.observable(0);

    self.moveNext = function () {
        if (self.currentPage() != self.totalPage()) {
            self.currentPage(self.currentPage() + 1);
            if (parent_self.isLoadCompleteGrid() == 'true') {
                parent_self.fn_PagedItems();
            }
        }
    };

    self.movePrev = function () {
        if (self.currentPage() != 1) {
            self.currentPage(self.currentPage() - 1);
            if (parent_self.isLoadCompleteGrid() == 'true') {
                parent_self.fn_PagedItems();
            }
        }
    };

    self.moveFirst = function () {
        if (self.currentPage() != 1) {
            self.currentPage(1);
            if (parent_self.isLoadCompleteGrid() == 'true') {
                parent_self.fn_PagedItems();
            }
        }
    };

    self.moveLast = function () {
        if (self.currentPage() != self.totalPage()) {
            self.currentPage(self.totalPage());
            if (parent_self.isLoadCompleteGrid() == 'true') {
                parent_self.fn_PagedItems();
            }
        }
    };

    self.indexOfFirstItem = ko.computed(function () {
        return (((self.currentPage() * 1) - 1) * (self.pageSize() * 1));
    })

    return self;
}

ART.sortCol = function (data, self, sorttype) {
    var sort = '';

    if (self.oldSort == data) {
        //มากไปน้อย
        sort = 'desc';
        self.arrData().sort(function (l, r) {
            if (sorttype == 'number') {
                if (!l.hasOwnProperty(data) ||
                !r.hasOwnProperty(data)) {
                    return 0;
                }

                var a = l[data];
                var b = r[data];
                if (l[data] != '' && l[data] != null && l[data] != undefined) {
                    a = parseFloat(l[data]);
                } else {
                    a = null;
                }

                if (r[data] != '' && r[data] != null && r[data] != undefined) {
                    b = parseFloat(r[data]);
                } else {
                    b = null;
                }

                if (a > b) {
                    return -1;
                } else if (a < b) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return (l[data] > r[data] ? -1 : 1);
            }
        });
        self.oldSort = '';
    } else {
        //น้อยไปมาก
        sort = 'asc';
        self.arrData().sort(function (l, r) {
            if (sorttype == 'number') {
                if (!l.hasOwnProperty(data) ||
                !r.hasOwnProperty(data)) {
                    return 0;
                }

                var a = l[data];
                var b = r[data];
                if (l[data] != '' && l[data] != null && l[data] != undefined) {
                    a = parseFloat(l[data]);
                } else {
                    a = null;
                }

                if (r[data] != '' && r[data] != null && r[data] != undefined) {
                    b = parseFloat(r[data]);
                } else {
                    b = null;
                }

                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            } else {
                return (l[data] > r[data] ? 1 : -1);
            }
        });
        self.oldSort = data;
    }

    self.remote.sortDirection(sort.toUpperCase());
    self.remote.sortColumn(data);
    self.remote.changeSort(data + ' ' + sort.toUpperCase());

    ART.fn_SearchGrid(self);
}

ART.fn_SearchGrid = function (self) {
    self.istxtSearchReload('true');
    var search = self.txtSearch();
    self.txtSearch('xxx');
    self.txtSearch(search);
    self.istxtSearchReload('false');
    self.fn_FilterData();
}

//*************************************************** Display ************************************************

ko.bindingHandlers.colTitle = {
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var asort = allBindings().sorting != undefined ? allBindings().sorting : (viewModel.asorting != undefined ? (viewModel.asorting == 'true') : true);
        //var avisible = allBindings().visible != undefined ? allBindings().visible : (viewModel.avisible != undefined ? (viewModel.avisible == 'true') : true);
        var afieldname = allBindings().sortCol || viewModel.afieldname || '';
        var awidth = allBindings().width != undefined ? allBindings().width : (viewModel.awidth != undefined ? viewModel.awidth : '');

        $(element).html(value);
        if (awidth != '') {
            $(element).attr('width', awidth);
        }

        var adata_action = viewModel.data_action || '';
        if (adata_action != '') {
            $(element).attr('data-action', adata_action);
        }

        var atype = viewModel.atype || '';
        var atitle = viewModel.atitle || '';
        if (atype == 'checkboxall') {
            if (atitle != '') {
                atitle += '<br/>';
            }
            // console.log(bindingContext.$index());
            $(element).html(atitle + '<input type="checkbox"  data-bind="click: $root.selectAll" id="chkall_' + bindingContext.$index() + '" /><label  for="chkall_' + bindingContext.$index() + '"></label>');
            asort = false;
        }
        if (asort == true && afieldname != '') {
            $(element).attr('class', 'sorting');
            var asorttype = viewModel.asorttype || 'string';

            ko.applyBindingsToNode(element, {
                click: function () {
                    var oldclass = $(element).attr('class');
                    var objtr = $(element).parent()[0];
                    for (var i = 0; i <= objtr.cells.length - 1; i++) {
                        if (objtr.cells[i].className != '') {
                            objtr.cells[i].className = 'sorting';
                        }
                    }
                    if (oldclass == 'sorting') {
                        $(element).attr('class', 'sorting_asc');
                    } else if (oldclass == 'sorting_asc') {
                        $(element).attr('class', 'sorting_desc');
                    } else if (oldclass == 'sorting_desc') {
                        $(element).attr('class', 'sorting_asc');
                    }
                    var self = bindingContext.$parent == undefined ? bindingContext.$data : bindingContext.$parent;
                    ART.sortCol(afieldname, self, asorttype);
                }
            });
        }
    }
};

ko.bindingHandlers.colData = {
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var atype = allBindings().colType || '';
        var newdate = '';

        var awidth = allBindings().width != undefined ? allBindings().width : (viewModel.awidth != undefined ? viewModel.awidth : '');
        if (awidth != '') {
            $(element).attr('style', 'white-space: normal !important; word-wrap: break-word; max-width: ' + awidth + ';');
        }

        if (atype == 'link') {
            var alink = allBindings().colLink || '';
            var aparam = allBindings().colParam || '';
            var aRowIDMenu = allBindings().colRowIDMenu || '';
            var aRowIDParentMenu = allBindings().colRowIDParentMenu || '';

            if (aparam != '') {
                var arraparam = aparam.split(",");
                if (arraparam.length > 0) {
                    aparam = arraparam[0];
                    for (var i = 1; i <= arraparam.length - 1; i++) {
                        aparam = aparam.replace("{" + (i - 1) + "}", bindingContext.$parent[arraparam[i]]);
                    }
                }
            }

            var strfunction = 'ART.ARTSetFocusMenuNav(' + aRowIDParentMenu + ');';
            strfunction += ' LoadPage(\'' + alink + '\',\'' + aparam + '\');';
            strfunction += ' ART.strLoadNav(\'' + aRowIDMenu + '\');';

            value = '<a onclick="' + strfunction + '" style="cursor:pointer;"><i class="fa fa-edit (alias)"></i></a>'
        } else if (atype == 'checkbox') {
            var strValue = '';
            if (value != undefined) {
                if (value.toString().toLowerCase() == 'true') {
                    strValue = ' checked';
                }
            }

            var areadonly = allBindings().colReadOnly || 'false';
            var strReadonly = '';
            if (areadonly == 'true') {
                strReadonly = ' onclick="return false"';
            }

            value = '<input type="checkbox"' + strValue + strReadonly + ' data-bind="checked: $parent[$data.afieldname]" id="chkid_' + allBindings().colFieldname + '_' + bindingContext.$parentContext.$index() + '_' + bindingContext.$parent.ROW_ID + '"/><label  for="chkid_' + allBindings().colFieldname + '_' + bindingContext.$parentContext.$index() + '_' + bindingContext.$parent.ROW_ID + '"></label>';
        } else if (atype == 'checkboxall') {
            var achkvisible = allBindings().colchkVisible || '';
            //console.log(bindingContext);
            if (achkvisible != '') {
                if (bindingContext.$parent[achkvisible]) {
                    value = '<input type="checkbox" data-bind="checked: $parent[$data.afieldname]" id="chkid_' + allBindings().colFieldname + '_' + bindingContext.$parentContext.$index() + '_' + bindingContext.$parent.ROW_ID + '"/><label  for="chkid_' + allBindings().colFieldname + '_' + bindingContext.$parentContext.$index() + '_' + bindingContext.$parent.ROW_ID + '"></label>';
                } else {
                    value = '';
                }
            } else {
                value = '<input type="checkbox" data-bind="checked: $parent[$data.afieldname]" id="chkid_' + allBindings().colFieldname + '_' + bindingContext.$parentContext.$index() + '_' + bindingContext.$parent.ROW_ID + '"/><label  for="chkid_' + allBindings().colFieldname + '_' + bindingContext.$parentContext.$index() + '_' + bindingContext.$parent.ROW_ID + '"></label>';
            }
        } else if (atype == 'image') {
            //var aimgurl = allBindings().colImgUrl || (ART.ImgUrl + 'assets/artiligent/img/spacer.gif');
            var aimgurl = value || (ART.ImgUrl + 'assets/artiligent/img/spacer.gif');
            var awidth = allBindings().colImgWidth || '60';
            var aheight = allBindings().colImgHeight || '60';

            if (aimgurl != '') {
                var strWidth = '';
                if (awidth != '') {
                    strWidth = ' width="' + awidth + '"';
                }
                var strHeight = '';
                if (aheight != '') {
                    strHeight = ' height="' + aheight + '"';
                }

                value = '<img src="' + aimgurl + '"' + strWidth + strHeight + ' />'
            } else {
                value = '';
            }
        } else if (atype == 'imagebinary') {
            var aimgurl = allBindings().colImgUrl || getBinary();
            var awidth = allBindings().colImgWidth || '60';
            var aheight = allBindings().colImgHeight || '60';

            if (aimgurl != '') {
                var strWidth = '';
                if (awidth != '') {
                    strWidth = ' width="' + awidth + '"';
                }
                var strHeight = '';
                if (aheight != '') {
                    strHeight = ' height="' + aheight + '"';
                }

                value = '<img src="data:image/jpeg;base64,' + hexToBase64(aimgurl) + '"' + strWidth + strHeight + ' />'
            } else {
                value = '';
            }
        } else if (atype == 'render' || atype == 'render_checkboxall') {
            var arender = allBindings().colRender || '';
            var aparam = allBindings().colParam || '';

            if (aparam != '') {
                var arraparam = aparam.split(",");
                if (arraparam.length > 0) {
                    for (var i = 0; i <= arraparam.length - 1; i++) {
                        arender = arender.replace("{" + i + "}", bindingContext.$parent[arraparam[i]]);
                    }
                }
            }

            value = arender;
        } else if (atype == 'date') {
            if (value != '' && value != null && value != undefined) {
                value = ConvertJSDateToDateStringEN(moment(value)._d, 'DD MMM YYYY');
            } else {
                value = '';
            }
        } else if (atype == 'datetime') {
            if (value != '' && value != null && value != undefined) {
                value = ConvertJSDateToDateStringEN(moment(value)._d, 'DD MMM YYYY HH:mm');
            } else {
                value = '';
            }
        } else if (atype == 'number') {
            if ((value + '') != '' && value != null && value != undefined) {
                var decimal = allBindings().decimal || 0;
                value = formatNumber(parseFloat(value), decimal);
            } else {
                value = '';
            }
        } else {
            if (value != '' && value != null && value != undefined) {

            } else {
                value = '';
            }
        }

        $(element).html(value);
    }
};

function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

function SetLink(alink, aparam, aRowIDMenu, aRowIDParentMenu) {
    alink = alink || '';
    aparam = aparam || '';
    aRowIDMenu = aRowIDMenu || '';
    aRowIDParentMenu = aRowIDParentMenu || '';

    ART.ARTSetFocusMenuNav(aRowIDParentMenu);
    LoadPage(alink, aparam);
    ART.strLoadNav(aRowIDMenu);
}

ko.bindingHandlers.render = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).html(value);
    }
};

//*************************************************** Controls Textbox ************************************************

ko.bindingHandlers.textBox = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).on('blur', function () {
            var value = valueAccessor();
            var newvalue = ko.utils.unwrapObservable(value);
            if (newvalue != null && newvalue != undefined && newvalue != '') {
				value(newvalue.toString().trim());
				value.valueHasMutated();
			}
        });

        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    }
}

ko.bindingHandlers.numeric_text = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).on('touchstart', function () {
            $(this).attr('type', 'number');
            $(this).attr('inputmode', 'numeric');
            $(this).attr('pattern', '[0-9]*');
        });

        $(element).on('keydown blur', function () {
            $(this).attr('type', 'text');
        });

        var value = valueAccessor();
        value.extend({
            required: {
                onlyIf: function () {
                    return (value() != null && value() != undefined && value() != '');
                }
            },
            pattern: {
                params: /^[0-9]+$/,
                message: 'กรุณากรอกเฉพาะตัวเลขเท่านั้น'
            },
            notify: 'always'
        });

        var length = allBindingsAccessor().length;
        if (ko.unwrap(length) != null) {
            value.extend({
                required: {
                    onlyIf: function () {
                        return (value() != null && value() != undefined && value() != '');
                    }
                },
                validation: {
                    validator: function (val) {
                        var str = val

                        if (str == null || str == undefined || str == '') {
                            return true;
                        } else {
                            if ((str + '').length == length) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    },
                    message: 'กรุณากรอกข้อมูลจำนวน ' + length + ' หลักเท่านั้น'
                },
                notify: 'always'
            });
        }

        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    }
}

ko.bindingHandlers.email = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).attr("placeholder", "example: mot@mot.go.th");

        var value = valueAccessor();
        value.extend({
            required: {
                onlyIf: function () {
                    return (value() != null && value() != undefined && value() != '');
                }
            },
            pattern: {
                params: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'รูปแบบอีเมล์ไม่ถูกต้อง'
            },
            notify: 'always'
        });

        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    }
}

ko.bindingHandlers.url = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $(element).attr("placeholder", "example: http://www.mot.go.th/");

        var value = valueAccessor();
        value.extend({
            required: {
                onlyIf: function () {
                    return (value() != null && value() != undefined && value() != '');
                }
            },
            pattern: {
                params: /^(http|https):\/\/\S+(\/\S+)*(\/)?$/,
                message: 'รูปแบบเว็บไซต์ไม่ถูกต้อง'
            },
            notify: 'always'
        });

        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    }
}

ko.bindingHandlers.card_id = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        $.mask.definitions['~'] = "[+-]";

        var interceptor = ko.computed({
            read: function () {
                var value = valueAccessor();
                var div = document.createElement('div');
                $(div).val(value());
                return $(div).mask("*-****-****9-99-9").val();
            },
            write: function (newValue) {
                var value = valueAccessor();
                value($(element).mask());
                value.valueHasMutated();
            }
        }).extend({ notify: 'always' });

        if (element.tagName.toLowerCase() == 'input') {
            var value = valueAccessor();
            value.extend({
                required: {
                    onlyIf: function () {
                        return (value() != null && value() != undefined && value() != '');
                    }
                },
                validation: {
                    validator: function (val) {
                        val = ko.unwrap(val);
                        if (val == null || val == undefined || val == '') {
                            return true;
                        } else {
                            var str = val.replace(/-/g, '');
                            str = str.replace(/^\s*|\s*$/g, '');

                            if (isNaN(str)) {
                                return false;
                            } else {
                                if (str.length == 13) {
                                    var sum = 0;
                                    for (var i = 0; i < str.length - 1; i++) sum += (eval(str.charAt(i)) * (str.length - i));
                                    sum %= 11;

                                    if (sum == 0) {
                                        if (eval(str.substring(12, 13)) == 1) {
                                            return true;
                                        }
                                    } else if (sum == 1) {
                                        if (eval(str.substring(12, 13)) == 0) {
                                            return true;
                                        }
                                    } else if (eval(str.substring(12, 13)) == (11 - sum)) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return false;
                                }
                            }
                        }
                    },
                    message: 'รูปแบบเลขประจำตัวประชาชนไม่ถูกต้อง'
                },
                notify: 'always'
            });

            $(element).mask("9-9999-99999-99-9");

            var span = document.createElement('span');
            span.className = 'parsley-error';
            $(element).after(span);
            ko.applyBindingsToNode(span, { validationMessage: valueAccessor() });

            ko.applyBindingsToNode(element, {
                value: interceptor,
                validationElement: valueAccessor()
            });
        } else {
            ko.applyBindingsToNode(element, {
                text: interceptor
            });
        }
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    }
}

//********************************************* Controls Numeric Textbox **********************************************

ko.bindingHandlers.numeric = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);

        $(element).on('touchstart', function () {
            $(this).attr('type', 'number');
            $(this).attr('inputmode', 'numeric');
            $(this).attr('pattern', '[0-9]*');
        });

        $(element).on('keydown blur', function () {
            $(this).attr('type', 'text');
        });

        $(element).css('text-align', 'right');
     
        var interceptor = ko.computed({
            read: function () {
                var value = valueAccessor();
                var decimal = allBindingsAccessor().decimal || 0;
                var format = allBindingsAccessor().format;
                var newvalue = ko.unwrap(value);

                // -? = ไม่มี - หรือมี - แค่หนึ่งเท่านั้น
                // \d = ตัวเลข มีค่าเท่ากับ [0-9]
                // %? = ไม่มี % หรือมี % แค่หนึ่งเท่านั้น
                var regex_all = new RegExp(/-?\d%?/);
                var regex_number_percent = new RegExp(/-?\d%/);

                if (regex_all.test(newvalue)) {
                    if (regex_number_percent.test(newvalue)) {
                        newvalue = (newvalue + '').replace(/\%/g, '').replace(/,/g, '');
                        if (!isNaN(parseFloat(newvalue))) {
                            return formatNumber(parseFloat(newvalue), decimal, format) + '%';
                        }
                    } else {
                        if (!isNaN(parseFloat(newvalue))) {
                            newvalue = (newvalue + '').replace(/,/g, '');
                            return formatNumber(parseFloat(newvalue), decimal, format);
                        }
                    }
                }
            },
            write: function (newValue) {
                var value = valueAccessor();
                if ($.trim(newValue) == '' || newValue == null) {
                    value(null);
                } else {
                    // -? = ไม่มี - หรือมี - แค่หนึ่งเท่านั้น
                    // \d = ตัวเลข มีค่าเท่ากับ [0-9]
                    // %? = ไม่มี % หรือมี % แค่หนึ่งเท่านั้น
                    var regex_all = new RegExp(/-?\d%?/);
                    var regex_number_percent = new RegExp(/-?\d%/);

                    var min = allBindingsAccessor().min;
                    var max = allBindingsAccessor().max;

                    if (regex_all.test(newValue)) {
                        if (regex_number_percent.test(newValue)) {
                            newValue = (newValue + '').replace(/\%/g, '').replace(/,/g, '');
                            if (!isNaN(parseFloat(newValue))) {
                                var val = numeral().unformat(newValue);  
                                var num = allBindingsAccessor().num;

                                if (ko.unwrap(num) != null) {
                                    val = (ko.unwrap(num) * val) / 100;

                                    if (ko.unwrap(min) != null) {
                                        if (numeral().unformat(val) < ko.unwrap(min)) {
                                            val = ko.unwrap(min);
                                        }
                                    }
                                    if (ko.unwrap(max) != null) {
                                        if (numeral().unformat(val) > ko.unwrap(max)) {
                                            val = ko.unwrap(max);
                                        }
                                    }

                                    if (val != value()) {
                                        value(val);
                                    }
                                } else {
                                    value(val + '%');
                                }
                            } else {
                                value(null);
                            }
                        } else {
                            if (!isNaN(parseFloat(newValue))) {
                                var val = numeral().unformat(newValue);
                               
                                if (ko.unwrap(min) != null) {
                                    if (numeral().unformat(newValue) < ko.unwrap(min)) {
                                        val = ko.unwrap(min);
                                    }
                                }
                                if (ko.unwrap(max) != null) {
                                    if (numeral().unformat(newValue) > ko.unwrap(max)) {
                                        val = ko.unwrap(max);
                                    }
                                }

                                if (val != value()) {
                                    value(val);
                                }
                            } else {
                                value(null);
                            }
                        }
                    }
                }
                value.valueHasMutated();
            }
        }).extend({ notify: 'always' });

        if (element.tagName.toLowerCase() == 'input')
            ko.applyBindingsToNode(element, {
                value: interceptor
            });
        else
            ko.applyBindingsToNode(element, {
                text: interceptor
            });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    }
}

function formatNumber(value, decimal, format) {
    var strprecision = '';
    if (format == null) {
        format = '0,0';
    }

    for (var i = 0; i < decimal; i++) {
        strprecision += '0';
    }

    if (strprecision != '') {
        format += '.' + strprecision;
    }
    return numeral(ko.unwrap(value)).format(format);
}

//*************************************************** Controls Datepicker & Datetimepicker ************************************************

ko.bindingHandlers.date = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).html(ConvertJsonToDateStringTH(value,"DD MMM YYYY"));
    }
}

ko.bindingHandlers.datetime = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).html(ConvertJsonToDateStringTH(value, "DD MMM YYYY HH:mm"));
    }
}

ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var default_format = "DD/MM/YYYY";
        var format = allBindingsAccessor().format || "DD MMM YYYY";
        var default_locale = 'en';
        var pikaday;

        moment.locale(false);
        moment.locale(default_locale);

        if (element.tagName.toLowerCase() == 'input') {
            var defaultDate;
            var value = valueAccessor();
            if (ko.unwrap(value) == undefined || ko.unwrap(value) == null || ko.unwrap(value) == "") {
                defaultDate = null;
            } else {
                var newValue = ConvertJSDateToDateStringEN(moment(ko.unwrap(value))._d, default_format);
                newValue = moment(ConvertDateStringToJSDate(newValue, default_format)).format();

                defaultDate = moment(newValue)._d;
            }

            $(element).attr('class', 'pikaday');
            $(element).css('width', '130px');
            
            var obj_i = $('<i class="fa fa-calendar fa-lg" style="padding: 3px"></i>');
            obj_i.click(function (e) {
                e.stopPropagation();
                $(element).pikaday('show');
            });
            obj_i.insertAfter($(element));

            pikaday = $(element).pikaday({
                'format': default_format,
                'display_format': format,
                'defaultDate': defaultDate,
                'setDefaultDate': (defaultDate != null ? true : false)
            }, moment);
        }

        var interceptor = ko.computed({
            read: function () {
                var value = valueAccessor();
                if (ko.unwrap(value) == undefined || ko.unwrap(value) == null || ko.unwrap(value) == "") {
                    return null;
                } else {
                    var newValue = ConvertJSDateToDateStringEN(moment(ko.unwrap(value))._d, default_format);
                    newValue = moment(ConvertDateStringToJSDate(newValue, default_format)).format();
                    if (ko.isObservable(value)) {
                        value(newValue);
                        value.valueHasMutated();
                    } else {
                        value = newValue;
                    }

                  //  if (default_locale == 'th') {
                  //      return ConvertJSDateToDateStringEN(moment(ko.unwrap(value))._d, format);
                  //  } else {
                        return ConvertJSDateToDateStringEN(moment(ko.unwrap(value))._d, format);
                  //  }
                }
            },
            write: function (newValue) {
                var value = valueAccessor();
                if (newValue == undefined || newValue == null || newValue == "") {
                    value(null);
                } else {
                    if (ConvertDateStringToJSDate(newValue, default_format) != 'Invalid Date') {
                        value(moment(ConvertDateStringToJSDate(newValue, default_format)).format());
                    } else if (ConvertDateStringToJSDate(newValue, format) != 'Invalid Date') {
                        value(moment(ConvertDateStringToJSDate(newValue, format)).format());
                    } else {
                        value(null);
                    }
                    //value(ConvertJSDateToJson(ConvertDateStringToJSDate(newValue, default_format)));
                }
                value.valueHasMutated();
            }
        }).extend({ notify: 'always' });

        if (element.tagName.toLowerCase() == 'input') {
            ko.applyBindingsToNode(element, {
                value: interceptor,
                validationElement: valueAccessor()
            });
        } else {
            ko.applyBindingsToNode(element, {
                text: interceptor
            });
        }
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    }
}

ko.bindingHandlers.daterangepicker = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var default_format = "DD/MM/YYYY";
        var format = allBindingsAccessor().format || "DD MMM YYYY";
        var default_locale = 'en';
        moment.locale(false);
        moment.locale(default_locale);

        var objDaterangePicker = {};
        var listItem;

        objDaterangePicker.fn_DisplayDaterange = function (start, end) {
            if (start != '' && end != '') {
               // if (default_locale == 'th') {
              //      $(element).find('span').html(ConvertJSDateToDateStringEN(moment(start)._d, format) + ' - ' + ConvertJSDateToDateStringEN(moment(end)._d, format));
              //  } else {
                    $(element).find('span').html(ConvertJSDateToDateStringEN(moment(start)._d, format) + ' - ' + ConvertJSDateToDateStringEN(moment(end)._d, format));
             //   }
            } else {
                $(element).find('span').html('');
            }
        }

        objDaterangePicker.fn_ChangeDaterange = function () {
            var date_from = allBindingsAccessor().date_from;
            var date_to = allBindingsAccessor().date_to;

            if (ko.unwrap(date_from) == undefined || ko.unwrap(date_from) == null || ko.unwrap(date_from) == "") {
                date_from = '';
            } else {
                date_from = moment(ko.unwrap(date_from))._d;
            }
            if (ko.unwrap(date_to) == undefined || ko.unwrap(date_to) == null || ko.unwrap(date_to) == "") {
                date_to = '';
            } else {
                date_to = moment(ko.unwrap(date_to))._d;
            }

            objDaterangePicker.fn_DisplayDaterange(date_from, date_to);

            if (allBindingsAccessor().date_from.isValid != undefined) {
                if ($(element).attr('class').indexOf("btn md-btn-primary divdaterangepicker") != -1) {
                    $(element).attr('class', (!allBindingsAccessor().date_from.isValid() ? 'btn md-btn-primary divdaterangepicker parsley-error' : 'btn md-btn-primary divdaterangepicker'));
                }
            }

            $(daterange).data('daterangepicker').setStartDate(date_from);
            $(daterange).data('daterangepicker').setEndDate(date_to);

            if (date_from == '' && date_to == '') {
                $(daterange).data('daterangepicker').hideCalendars();
            }
        }

        allBindingsAccessor().date_from.subscribe(function (newValue) {
            objDaterangePicker.fn_ChangeDaterange();
        });

        allBindingsAccessor().date_to.subscribe(function (newValue) {
            objDaterangePicker.fn_ChangeDaterange();
        });

        if (allBindingsAccessor().date_from.isValid != undefined) {
            allBindingsAccessor().date_from.isValid.subscribe(function (newValue) {
                if ($(element).attr('class').indexOf("btn md-btn-primary divdaterangepicker") != -1) {
                    $(element).attr('class', (!allBindingsAccessor().date_from.isValid() ? 'btn md-btn-primary divdaterangepicker parsley-error' : 'btn md-btn-primary divdaterangepicker'));
                }
            });
        }

        $(element).attr('class', 'btn md-btn-primary divdaterangepicker');
        $(element).css('width', '300px');
        $(element).css('background-color', 'transparent');
        $(element).css('border', '1px solid #9e9e9e');
        $(element).css('color', '#444444');

        var date_from = allBindingsAccessor().date_from;
        var date_to = allBindingsAccessor().date_to;

        if (ko.unwrap(date_from) == undefined || ko.unwrap(date_from) == null || ko.unwrap(date_from) == "") {
            date_from = '';
        } else {
            date_from = moment(ko.unwrap(date_from))._d;
        }
        if (ko.unwrap(date_to) == undefined || ko.unwrap(date_to) == null || ko.unwrap(date_to) == "") {
            date_to = '';
        } else {
            date_to = moment(ko.unwrap(date_to))._d;
        }

        var option_daterange = {
            startDate: date_from,
            endDate: date_to,
            showDropdowns: true,
            showWeekNumbers: true,
            timePicker: false,
            timePickerIncrement: 1,
            timePicker12Hour: true,
            applyClass: "md-btn-primary",
            ranges: {
                'Clear': [null, null],
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                'Last 7 days': [moment().subtract('days', 6), moment()],
                'Last 30 days': [moment().subtract('days', 29), moment()],
                'This month': [moment().startOf('month'), moment().endOf('month')],
                'Previous month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            },
            format: default_format,
            separator: ' to ',
            locale: {
                applyLabel: 'ok',
                cancelLabel: 'Close',
                fromLabel: 'Between',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                clearRangeLabel: 'Clear',
                daysOfWeek: ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
                monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                firstDay: 1
            }
        }

        var daterange = $(element).daterangepicker(
            option_daterange,
            function (start, end) {
                if (start._isValid && end._isValid) {
                    allBindingsAccessor().date_from(moment(start.format('YYYY-MM-DD')).format());
                    allBindingsAccessor().date_from.valueHasMutated();
                    allBindingsAccessor().date_to(moment(end.format('YYYY-MM-DD')).format());
                    allBindingsAccessor().date_to.valueHasMutated();
                } else {
                    allBindingsAccessor().date_from("");
                    allBindingsAccessor().date_from.valueHasMutated();
                    allBindingsAccessor().date_to("");
                    allBindingsAccessor().date_to.valueHasMutated();
                }

                objDaterangePicker.fn_ChangeDaterange();
            }
        );

        $(".ranges ul li").click(function () {
            listItem = $(this).text();
        });

        $(daterange).on('apply.daterangepicker', function (ev, picker) {
            if (listItem == option_daterange.locale.clearRangeLabel) {
                allBindingsAccessor().date_from("");
                allBindingsAccessor().date_from.valueHasMutated();
                allBindingsAccessor().date_to("");
                allBindingsAccessor().date_to.valueHasMutated();

                objDaterangePicker.fn_ChangeDaterange();
            }
        });

        //Set the initial state of the picker label
        objDaterangePicker.fn_ChangeDaterange();
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    }
}

ko.bindingHandlers.timepicker = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var format_date = "YYYY-MM-DD";
        var format_datetime = "YYYY-MM-DD HH:mm";
        var format = allBindingsAccessor().format || "HH:mm";
        var placement = allBindingsAccessor().placement || "bottom";
        var default_locale = 'en';
        var clockpicker;

        moment.locale(false);
        moment.locale(default_locale);

        if (element.tagName.toLowerCase() == 'input') {
            $(element).attr('class', 'clockpicker');
            $(element).css('width', '70px');
            
            var obj_i = $('<i class="fa fa-clock-o fa-lg" style="padding: 3px"></i>');
            obj_i.click(function (e) {
                e.stopPropagation();
                $(element).clockpicker('show').clockpicker('toggleView', 'hours');
            });
            obj_i.insertAfter($(element));

            clockpicker = $(element).clockpicker({
                autoclose: true,
                placement: placement,
                donetext: 'Done'
            });
        }

        var interceptor = ko.computed({
            read: function () {
                var value = valueAccessor();
                if (ko.unwrap(value) == undefined || ko.unwrap(value) == null || ko.unwrap(value) == "") {
                    return null;
                } else {
                    return ConvertJSDateToDateStringEN(moment(ko.unwrap(value))._d, format);
                }
            },
            write: function (newValue) {
                var value = valueAccessor();
                if (newValue == undefined || newValue == null || newValue == "") {
                    value(null);
                } else {
                    var currdate = ConvertJSDateToDateStringEN(getCurrentDateTime(), format_date);
                    if (moment(ConvertDateStringToJSDate(currdate + " " + newValue, format_datetime)).format() != 'Invalid date') {
                        value(moment(ConvertDateStringToJSDate(currdate + " " + newValue, format_datetime)).format());
                    } else {
                        value(moment(ConvertDateStringToJSDate(currdate + " 00:00", format_datetime)).format());
                    }
                }
                value.valueHasMutated();
            }
        }).extend({ notify: 'always' });

        if (element.tagName.toLowerCase() == 'input') {
            ko.applyBindingsToNode(element, {
                value: interceptor,
                validationElement: valueAccessor()
            });
        } else {
            ko.applyBindingsToNode(element, {
                text: interceptor
            });
        }
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    }
}

//*************************************************** Controls Colorpicker ************************************************

ko.bindingHandlers.colorpicker = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var value = valueAccessor();
        var objDiv;
        var objInput;

        if (element.tagName.toLowerCase() == 'input') {
            var options = {
                format: "hex",
                color: value()
            };

            objDiv = $($(element)[0].parentElement);
            objDiv.colorpicker(options);
            objDiv.css('width', '160px');

            objInput = $(element);
            objInput.colorpicker(options);
            objInput.css('width', '130px');
        }

        var interceptor = ko.computed({
            read: function () {
                var value = valueAccessor();
                if (value() != null && value() != undefined && value() != '') {
                    objInput.colorpicker('setValue', value());
                }
                return ko.unwrap(value);
            },
            write: function (newValue) {
                var value = valueAccessor();
                if (newValue == undefined || newValue == null || newValue == "") {
                    value(null);
                } else {
                    value(newValue);
                }
                value.valueHasMutated();
            }
        }).extend({ notify: 'always' });

        if (element.tagName.toLowerCase() == 'input') {
            ko.applyBindingsToNode(element, {
                value: interceptor,
                validationElement: valueAccessor()
            });
        } else {
            ko.applyBindingsToNode(element, {
                text: interceptor
            });
        }
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

    }
}

//***************************************************************************************************

ko.utils.setValue = function (property, newValue) {
    if (ko.isObservable(property))
        property(newValue);
    else
        property = newValue;
};

ko.bindingHandlers.select2 = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var objSelect2 = {};

        var obj = valueAccessor(),
            allBindings = allBindingsAccessor(),
            lookupKey = allBindings.lookupKey;

        obj.escapeMarkup = function (m) {
            return m;
        };

        $.fn.select2.defaults.defaults.escapeMarkup = obj.escapeMarkup;

        if ("selectedOptions" in allBindings) {
            var selected = ko.utils.unwrapObservable(allBindings.selectedOptions);
            $(element).val(selected).select2(obj);
            
            if (ko.validation.utils.isValidatable(allBindings.selectedOptions)) {
                var objSelect = $($(element)[0].parentElement).find('select');
                //objSelect.after('<span class="parsley-error"></span>');

                objSelect2.fnCheckValidate = function () {
                    if (allBindings.selectedOptions.isValid()) {
                        objSelect.attr('class', 'select2 select2-hidden-accessible');
                    } else {
                        objSelect.attr('class', 'select2 parsley-error select2-hidden-accessible');
                    }
                }

                allBindings.selectedOptions.isValid.subscribe(function (newValue) {
                    objSelect2.fnCheckValidate();
                });

                allBindings.selectedOptions.isModified.subscribe(function (newValue) {
                    objSelect2.fnCheckValidate();
                });
            }

            allBindings.selectedOptions(selected);
            allBindings.selectedOptions.valueHasMutated();
        } else {
            var selected = ko.utils.unwrapObservable(allBindings.value);
            allBindings.value(selected);
            allBindings.value.valueHasMutated();

            $(element).select2(obj);
        }

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).select2('destroy');
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        // Add New Riw
        var obj = valueAccessor(),
        allBindings = allBindingsAccessor();

        if ("selectedOptions" in allBindings) {
            $(element).select2('val', ko.utils.unwrapObservable(allBindings.selectedOptions));
            $(element).select2("data", ko.utils.unwrapObservable(allBindings.selectedOptions));
            $(element).trigger('change');
        } else {
            var selectedID = ko.utils.unwrapObservable(allBindings.value);
            $(element).select2('val', selectedID);
            $(element).trigger('change');
        }
    }
};

ko.bindingHandlers.dropzone = {
    init: function (element, valueAccessor) {
        var value = ko.unwrap(valueAccessor());

        var options = {
            maxFileSize: 15,
            createImageThumbnails: true,
        };

        $.extend(options, value);
        Dropzone.autoDiscover = false;
        $(element).addClass('dropzone');
        new Dropzone(element, options); // jshint ignore:line
    }
};

/*************************** Checkbox 1= true , 0 = false ***********************/

ko.bindingHandlers.NumChecked = {
    update: function (element, valueAccesor) {
        var func = valueAccesor();
        if (typeof (func) == 'function' && func() == true)
            func(1);
        else if ((typeof (func) == 'function'))
            func(0);
    }
};
/*************************** ko_autocomplete***********************/

ko.bindingHandlers.ko_autocomplete = {
    init: function (element, params) {
        $(element).autoComplete(params());
    },
    update: function (element, params) {
        $(element).autoComplete("option", "source", params().source);
    }
};

/*************************** ko_enterkey***********************/

ko.bindingHandlers.enterkey = {
    init: function (element, valueAccessor, allBindings, viewModel) {
        var callback = valueAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                callback.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

//******************************************************* Controls Fileupload ********************************************

function SaveToDisk(fileURL, fileName) {
    // ex. SaveToDisk('http://localhost/mot/demo-dev/app/upload/test_upload/aaa.png');
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || fileURL;
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0,
                            false, false, false, false, 0, null);
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    } else if (!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, "_blank");
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}

function bytesToSize(bytes) {
    if (bytes == 0) return '0 Byte';
    var k = 1024;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

function sizeToBytes(size) {
    if (size == '') return 0;
    var arr = size.split(' ');
    var k = 1024;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (arr.length == 2) {
        for (var i = 0; i <= sizes.length - 1; i++) {
            if (arr[1] == sizes[i]) {
                return parseFloat(arr[0]) * Math.pow(k, i);
            }
        }
    }
    return 0;
}

function loadFile(FileURL) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", FileURL);
    // xhr.responseType = 'arraybuffer';
    var base64 = arrayBufferToBase64(xhr.response);
    return "data:" + xhr.getResponseHeader("Content-Type") + ";base64," + base64;

    /* xhr.onload = function (e) {
         if (this.status == 200) {
             var base64 = arrayBufferToBase64(this.response);
             return "data:" + this.getResponseHeader("Content-Type") + ";base64," + base64;
         } else {
             return null;
         }
     };*/
    xhr.send();
}

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

function openFileUpload(File, FileURL) {
    var strFile = '';
    var ext = '';
    var isBase64 = false;
    if (File == null || File == '') {
        //window.open(FileURL);
        strFile = FileURL;
        ext = strFile.substr((strFile.lastIndexOf('.') + 1));
    } else {
        //window.open(File);
        strFile = File;
        if (strFile.indexOf('base64') != -1) {
            isBase64 = true;

            if (strFile.indexOf('data:application/pdf') != -1) {
                ext = 'data:application/pdf';
            }
        } else {
            if (FileURL != null && FileURL != '') {
                strFile = FileURL;
                ext = strFile.substr((strFile.lastIndexOf('.') + 1));
            }
        }
    }

    if (ext == 'pdf' || ext == 'data:application/pdf') {
        openPDFViewer(strFile);
    } else {
        if (isBase64) {
            var blob = dataURLToBlob(strFile);

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob);
            } else {
                var url = URL.createObjectURL(blob);
                window.open(url);
            }
        } else {
            var filename = strFile.substr((strFile.lastIndexOf('/') + 1));
            strFile = strFile.replace(filename, "");
            window.open(strFile + encodeURIComponent(filename));
        }
    }
}

function checkSpecialChars(fileOnlyName) {
    // ขาดเคส \ 
    if ((/[<>:"\/\\|?*]+/g).test(fileOnlyName)) {
        alert(fileOnlyName + ' มีตัวอักษรที่ระบบไม่รองรับ มีดังนี้ \\\/:*?"<>|');
        return false;
    }
    return true;
}

//************************* Controls Fileupload V1 ************************

ko.bindingHandlers.fileImage = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var amultiple = allBindingsAccessor().amultiple || 'false';
        var config_ext = allBindingsAccessor().ext || ['gif', 'png', 'jpg', 'jpeg'];

        var value = valueAccessor();
        var arrfile = ko.mapping.toJS(value);
        value(arrfile);
        value.valueHasMutated();

        ko.utils.registerEventHandler(element, "change", function () {
            var file = element.files[0].name;
            var size = element.files[0].size;
            var url = element.value;
            var ext = file.substr((file.lastIndexOf('.') + 1));
            ext = ext.toString().toLowerCase();
            if ($.inArray(ext, config_ext) == -1) {
                $(element).val('');
                UIkit.modal.alert('แนบไฟล์เอกสารได้เฉพาะ ' + config_ext.toString());
            } else {
                var observable = valueAccessor();
                var value = [];
                if (amultiple == 'true') {
                    value = ko.utils.unwrapObservable(valueAccessor()) || [];
                }

                var r = new FileReader();
                r.onload = function () {
                    var binimage = r.result;
                    value.push({ File: binimage, DisplayFileName: file, FileName: file, FileSize: size, FileURL: url });

                    observable(value)
                    $(element).val('');
                };
                r.readAsDataURL(element.files[0]);
            }
        });
    }
}

ko.bindingHandlers.fileUpload = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        bindingFileUpload(element, valueAccessor, allBindingsAccessor, false);
    }
}

//************************* Controls Fileupload V2 ************************

ko.bindingHandlers.fileImagev2 = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var amultiple = allBindingsAccessor().amultiple || 'false';
        var config_ext = allBindingsAccessor().ext || ['gif', 'png', 'jpg', 'jpeg'];

        var server_url = (ko.isObservable(allBindingsAccessor().server_url) ? ko.mapping.toJS(allBindingsAccessor().server_url) : allBindingsAccessor().server_url) || '';
        var folder_name = (ko.isObservable(allBindingsAccessor().folder_name) ? ko.mapping.toJS(allBindingsAccessor().folder_name) : allBindingsAccessor().folder_name) || '';
        var value = valueAccessor();
        var arrfile = ko.mapping.toJS(value);
        value(loadFileUploadv2(arrfile, server_url, folder_name));
        value.valueHasMutated();

        ko.utils.registerEventHandler(element, "change", function () {
            var file = element.files[0].name;
            var size = element.files[0].size;
            var url = element.value;
            var ext = file.substr((file.lastIndexOf('.') + 1));
            ext = ext.toString().toLowerCase();
            if ($.inArray(ext, config_ext) == -1) {
                $(element).val('');
                UIkit.modal.alert('แนบไฟล์เอกสารได้เฉพาะ ' + config_ext.toString());
            } else {
                var observable = valueAccessor();
                var value = [];
                if (amultiple == 'true') {
                    value = ko.utils.unwrapObservable(valueAccessor()) || [];
                }

                var r = new FileReader();
                r.onload = function () {
                    var binimage = r.result;
                    value.push({ File: binimage, DisplayFileName: file, FileName: file, FileSize: size, FileURL: url });

                    observable(value)
                    $(element).val('');
                };
                r.readAsDataURL(element.files[0]);
            }
        });
    }
}

ko.bindingHandlers.fileUploadv2 = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        bindingFileUpload(element, valueAccessor, allBindingsAccessor, true);
    }
}

function loadFileUploadv2(arrfile, server_url, folder_name) {
    if (arrfile != null) {
        if (arrfile.length > 0) {
            for (var i = 0; i <= arrfile.length - 1; i++) {
                arrfile[i].FileURL = server_url + folder_name + '/' + arrfile[i].FileName;
            }
        }
    }
    return arrfile;
}

//************************* Controls Fileupload ************************

function showThumbnailPreview(File, FileURL, FileName) {
    File = (ko.isObservable(File) ? ko.mapping.toJS(File) : File);
    FileURL = (ko.isObservable(FileURL) ? ko.mapping.toJS(FileURL) : FileURL);
    FileName = (ko.isObservable(FileName) ? ko.mapping.toJS(FileName) : FileName);

    var ext = FileName.substr((FileName.lastIndexOf('.') + 1));
    ext = ext.toString().toLowerCase();
    console.log(ext)
    var thumbnail_preview = null;
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) != -1) {
        if (File != null && File != '') {
            thumbnail_preview = FileURL;
        } else {
            if (FileURL == FileName) {
                thumbnail_preview = '';
            } else {
                thumbnail_preview = FileURL;
            }
        }
    } else if ($.inArray(ext, ['pdf']) != -1) {
        thumbnail_preview = '../../assets/img/fileupload/file_pdf.png';
    } else if ($.inArray(ext, ['xls', 'xlsx']) != -1) {
        thumbnail_preview = '../../assets/img/fileupload/file_excel.png';
    } else if ($.inArray(ext, ['doc', 'docx']) != -1) {
        thumbnail_preview = '../../assets/img/fileupload/file_word.png';
    } else {
        thumbnail_preview = '../../assets/img/fileupload/file_other.png';
    }
    console.log(thumbnail_preview)
    return thumbnail_preview;
}

function deleteFileUpload(dataFileUpload, dataDelFile, objDel) {
    var rowindex = dataFileUpload().indexOf(objDel);
    var objfile = dataFileUpload()[rowindex];
    if (objfile.File == null || objfile.File == '') {
        if (dataDelFile() != '') {
            dataDelFile(dataDelFile() + ',' + objfile.FileName);
        } else {
            dataDelFile(dataDelFile() + objfile.FileName);
        }
        dataDelFile.valueHasMutated();
    }
    dataFileUpload().splice(rowindex, 1);
    dataFileUpload.valueHasMutated();
}

/* Utility function to convert a canvas to a BLOB */
function dataURLToBlob(dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = parts[1];

        return new Blob([raw], { type: contentType });
    }

    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}

function bindingFileUpload(element, valueAccessor, allBindingsAccessor, isFileUploadV2) {
    var del_file = allBindingsAccessor().delfile;
    var amultiple = allBindingsAccessor().amultiple || 'false';
    var config_ext = allBindingsAccessor().ext || ['doc', 'docx', 'xls', 'xlsx', 'pdf', 'txt', 'gif', 'png', 'jpg', 'jpeg'];
    var config_limit_size = allBindingsAccessor().limit_size || '2 MB';
    var config_file_limit = allBindingsAccessor().file_limit || 5;
    var is_resize_image = allBindingsAccessor().is_resize_image;
    var is_huge_file = allBindingsAccessor().is_huge_file;

    if (amultiple == 'true') {
        $(element).prop('multiple', 'multiple');
    }

    var value = valueAccessor();
    var arrfile = ko.mapping.toJS(value);
    if (isFileUploadV2 == true) {
        var server_url = (ko.isObservable(allBindingsAccessor().server_url) ? ko.mapping.toJS(allBindingsAccessor().server_url) : allBindingsAccessor().server_url) || '';
        var folder_name = (ko.isObservable(allBindingsAccessor().folder_name) ? ko.mapping.toJS(allBindingsAccessor().folder_name) : allBindingsAccessor().folder_name) || '';
        value(loadFileUploadv2(arrfile, server_url, folder_name));
    } else {
        value(arrfile);
    }
    value.valueHasMutated();

    valueAccessor().subscribe(function (newValue) {
        var fileupload = ko.utils.unwrapObservable(valueAccessor()) || [];
        var isdisabled = (amultiple == 'true' && fileupload.length == config_file_limit);
        var isdisabled_img = (fileupload.length == config_file_limit);
        $(element).prop('disabled', isdisabled);
        if ($(element).parent().attr('class').indexOf("file-field img-input") != -1) {
            $(element).parent().attr('class', (isdisabled_img ? 'file-field img-input-disable' : 'file-field img-input'));
        }
        if ($(element).parent().attr('class').indexOf("file-field btn md-btn-primary") != -1) {
            $(element).parent().attr('class', (isdisabled ? 'file-field btn md-btn-primary file-input-disable' : 'file-field btn md-btn-primary'));
        }
        var objBtnWebScan = $(element).parent().parent().find('.btn.md-btn-primary.webscan');
        if (objBtnWebScan.length > 0) {
            if (objBtnWebScan.attr('class').indexOf("btn md-btn-primary webscan") != -1) {
                objBtnWebScan.attr('class', (isdisabled ? 'btn md-btn-primary webscan file-input-disable' : 'btn md-btn-primary webscan'));
                objBtnWebScan.prop('disabled', isdisabled);
            }
        }
    });

    ko.utils.registerEventHandler(element, "change", function () {
        var fileupload = ko.utils.unwrapObservable(valueAccessor()) || [];
        var file_count = 0;
        var strError = '';
        var strFileExt_Error = '';
        var strFileSize_Error = '';
        var strFileCount_Error = '';
        var objElement = element;

        if ((amultiple == 'true' && (fileupload.length < config_file_limit)) || amultiple == 'false') {
            for (var k = 0; k <= objElement.files.length - 1; k++) {
                var file = objElement.files[k].name;
                var size = objElement.files[k].size;
                var url = objElement.value.replace(objElement.value.substr((objElement.value.lastIndexOf('\\') + 1)), file);
                var ext = file.substr((file.lastIndexOf('.') + 1));
                ext = ext.toString().toLowerCase();

                if ((amultiple == 'true' && ((fileupload.length + file_count) < config_file_limit)) || amultiple == 'false') {
                    if ($.inArray(ext, config_ext) == -1) {
                        if (strFileExt_Error != '') {
                            strFileExt_Error += ', ';
                        }
                        strFileExt_Error += file;
                    } else {
                        //console.log(sizeToBytes(config_limit_size));
                        //console.log(bytesToSize(sizeToBytes(config_limit_size)));
                        if (size > sizeToBytes(config_limit_size)) {
                            if (strFileSize_Error != '') {
                                strFileSize_Error += ', ';
                            }
                            strFileSize_Error += file;
                        } else {
                            // checkSpecialChars = true แสดงว่าไม่มีตัวอักษรที่ระบบไม่รองรับ \/:*?"<>|
                            if (checkSpecialChars(file)) {
                                file_count += 1;

                                var observable = valueAccessor();
                                var value = [];
                                if (amultiple == 'true') {
                                    value = ko.utils.unwrapObservable(valueAccessor()) || [];
                                } else {
                                    if (observable().length > 0) {
                                        if (observable()[0].File == null || observable()[0].File == "") {
                                            deleteFileUpload(observable, del_file, observable()[0]);
                                        }
                                    }
                                }

                                readFileUpload(objElement.files[k], is_resize_image, objElement, value, observable, is_huge_file);
                            }
                        }
                    }
                } else {
                    if (strFileCount_Error != '') {
                        strFileCount_Error += ', ';
                    }
                    strFileCount_Error += file;
                }
            }

            $(element).val('');
            if (strFileExt_Error != '') {
                strError += 'ไม่สามารถแนบไฟล์ ' + strFileExt_Error + ' ได้ แนบไฟล์เอกสารได้เฉพาะ ' + config_ext.toString();
            }
            if (strFileSize_Error != '') {
                if (strError != '') {
                    strError += ' และ'
                }
                strError += 'ไม่สามารถแนบไฟล์ ' + strFileSize_Error + ' ได้ เนื่องจากขนาดไฟล์ไม่ควรเกิน ' + config_limit_size;
            }
            if (strFileCount_Error != '') {
                if (strError != '') {
                    strError += ' และ'
                }
                strError += 'ไม่สามารถแนบไฟล์ ' + strFileCount_Error + ' เพิ่มได้ เนื่องจากจำนวนไฟล์เกิน ' + config_file_limit + ' ไฟล์';
            }
            if (strError != '') {
                UIkit.modal.alert(strError);
            }
        } else {
            UIkit.modal.alert('ไม่สามารถแนบไฟล์เพิ่มได้ เนื่องจากจำนวนไฟล์เกิน ' + config_file_limit + ' ไฟล์');
        }
    });
}

function readFileUpload(objfile, is_resize_image, objElement, value, observable, is_huge_file) {
    var file = objfile.name;
    var size = objfile.size;
    var url = objElement.value.replace(objElement.value.substr((objElement.value.lastIndexOf('\\') + 1)), file);
    var ext = file.substr((file.lastIndexOf('.') + 1));
    var file_type = objfile.type;

    if (is_resize_image == true) {
        var r = new FileReader();
        r.onload = function () {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var img = new Image();
            img.onload = function () {
                // Resize the image
                //console.log('resize');
                if (this.width > 800) {
                    var maxWidth = this.width;
                    var maxHeight = this.height;
                    var width = 800;
                    var aspectW = width / maxWidth;

                    this.width = 800;
                    this.height = (aspectW * maxHeight);
                }
                canvas.width = this.width;
                canvas.height = this.height;

                context.drawImage(img, 0, 0, this.width, this.height);

                var arr = r.result.toString().split(',');
                if (arr.length > 1) {
                    var filetype = arr[0].replace('data:', '').replace(';base64', '');

                    var dataUrl = canvas.toDataURL(filetype, 1);
                    var resizedImage = dataURLToBlob(dataUrl);
                    size = resizedImage.size;

                    var binimage = canvas.toDataURL();
                    value.push({
                        File: binimage,
                        DisplayFileName: file,
                        FileName: file,
                        FileSize: size,
                        FileURL: url
                    });

                    observable(value);
                    observable.valueHasMutated();
                    //$(element).val('');
                }
            }
            img.src = r.result;
        };
        r.readAsDataURL(objfile);
    } else if (is_huge_file == true) {
        //console.log('non resize');
        if (size > 0) {
            ReloadTable();

            var chunk;
            var chunk_size = 1024 * 1024 * 20; // 20MB;
            var range_start = 0;
            var range_end = range_start + chunk_size;
            var base64 = '';
            var index = 0;
            var objFileList = [];

            var r = new FileReader();
            r.onload = function (e) {
                var binimage = e.target.result;
                base64 = binimage.substr(binimage.indexOf(',') + 1);

                index += 1;

                var objNewFile = [];
                objNewFile.push({
                    File: "data:" + file_type + ";base64," + base64,
                    DisplayFileName: file,
                    FileName: file + '.part_' + index,
                    FileSize: size,
                    FileURL: url
                });

                var json_upload = {
                    FILE_NAME: file,
                    FILE_UPLOAD: objNewFile,
                    FILE_COUNT: index,
                    IS_COMPLETE: "0"
                }
                ART.ARTLoadDataPub(ART.UrlUploadAPI, 'upload_file', json_upload, function (jsondata1) {
                    if (jsondata1.length > 0) {
                        objFileList.push(jsondata1[0].FileName);
                    }

                    if (range_end < size) {
                        range_start += chunk_size;
                        slicefile();
                    } else {
                        var json_upload = {
                            FILE_NAME: file,
                            FILE_UPLOAD: objFileList,
                            FILE_COUNT: index,
                            IS_COMPLETE: "1"
                        }
                        ART.ARTLoadDataPub(ART.UrlUploadAPI, 'upload_file', json_upload, function (jsondata2) {
                            if (jsondata2.length > 0) {
                                value.push({
                                    File: jsondata2[0].FILE,
                                    DisplayFileName: file,
                                    FileName: jsondata2[0].FILE_NAME,
                                    FileSize: size,
                                    FileURL: jsondata2[0].FILE_URL
                                });
                                observable(value);
                                observable.valueHasMutated();

                                UnloadTable();
                            }
                        })
                    }
                })
            };

            function slice(file, start, end) {
                var slice = file.mozSlice ? file.mozSlice :
                            file.webkitSlice ? file.webkitSlice :
                            file.slice ? file.slice : noop;
                return slice.bind(file)(start, end);
            }

            function noop() {

            }

            function slicefile() {
                range_end = range_start + chunk_size;
                if (size - range_end < 0) {
                    range_end = size;
                }

                var chunk_file = slice(objfile, range_start, range_end);
                r.readAsDataURL(chunk_file);
            }

            slicefile();
        } else {
            var r = new FileReader();
            r.onload = function () {
                var binimage = r.result;

                value.push({
                    File: binimage,
                    DisplayFileName: file,
                    FileName: file,
                    FileSize: size,
                    FileURL: url
                });

                observable(value);
                observable.valueHasMutated();
            };
            r.readAsDataURL(objfile);
        }
    } else {
        var r = new FileReader();
        r.onload = function () {
            var binimage = r.result;

            value.push({
                File: binimage,
                DisplayFileName: file,
                FileName: file,
                FileSize: size,
                FileURL: url
            });

            observable(value);
            observable.valueHasMutated();
        };
        r.readAsDataURL(objfile);
    }
}

//************************* Controls Fileupload From Web Scan ************************

function uploadFromWebScan(obj, objFile) {
    var fileupload = ko.utils.unwrapObservable(obj.file) || [];
    var amultiple = (obj.multiple != null ? obj.multiple.toString() : null) || 'false';
    var config_ext = obj.ext || ['doc', 'docx', 'xls', 'xlsx', 'pdf', 'txt', 'gif', 'png', 'jpg', 'jpeg'];
    var config_limit_size = obj.limit_size || '2 MB';
    var config_file_limit = obj.file_limit || 5;

    if ((amultiple == 'true' && (fileupload.length < config_file_limit)) || amultiple == 'false') {
        var file = objFile.FileName;
        var size = objFile.FileSize;
        var url = "";
        var ext = file.substr((file.lastIndexOf('.') + 1));
        ext = ext.toString().toLowerCase();
        if ($.inArray(ext, config_ext) == -1) {
            UIkit.modal.alert('แนบไฟล์เอกสารได้เฉพาะ ' + config_ext.toString());
        } else {
            //console.log(sizeToBytes(config_limit_size));
            //console.log(bytesToSize(sizeToBytes(config_limit_size)));
            if (size > sizeToBytes(config_limit_size)) {
                UIkit.modal.alert('ขนาดไฟล์ไม่ควรเกิน ' + config_limit_size);
            } else {
                var observable = obj.file;
                var value = [];
                if (amultiple == 'true') {
                    value = ko.utils.unwrapObservable(obj.file) || [];
                }

                var binimage = objFile.File;

                value.push({
                    File: binimage,
                    DisplayFileName: file,
                    FileName: file,
                    FileSize: size,
                    FileURL: url
                });

                observable(value)
            }
        }
    } else {
        UIkit.modal.alert('ไม่สามารถแนบไฟล์เพิ่มได้ เนื่องจากจำนวนไฟล์เกิน ' + config_file_limit + ' ไฟล์');
    }
}

//******************************************************* Controls MultiSelect ********************************************

ko.bindingHandlers.multiselect = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var left_header = allBindingsAccessor().left_header || '';
        var right_header = allBindingsAccessor().right_header || '';
        var search_text = allBindingsAccessor().search_text || '';

        InitialMultiSelect($(element), left_header, right_header, search_text);

        ko.computed(function () {
            var data = ko.mapping.toJS(allBindingsAccessor().options);
            var value = allBindingsAccessor().optionsValue;
            var text = allBindingsAccessor().optionsText;
            var selected_fieldname = allBindingsAccessor().optionsSelected;

            var seleted = [];
            ko.utils.arrayMap(data, function (item) {
                if (item[selected_fieldname]) {
                    seleted.push(item[value]);
                }
            });
            allBindingsAccessor().selectedOptions(seleted);
            allBindingsAccessor().selectedOptions.valueHasMutated();
            ReloadMultiSelect($(element), data, value, text, seleted);
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor) {

    }
};

function InitialMultiSelect(obj, selectableHeader, selectionHeader, placeholder) {
    selectableHeader = selectableHeader || "";
    selectionHeader = selectionHeader || "";
    placeholder = placeholder || "";
    var ddl = obj.multiSelect({
        selectableHeader: selectableHeader + "<br /><input type='text' style='margin: 10px 0px 10px 0px; width: 100%;' class='search-input' autocomplete='off' placeholder='" + ARTLANG('Find') + " \"" + placeholder + "\"'>",
        selectionHeader: selectionHeader + "<br /><input type='text' style='margin: 10px 0px 10px 0px; width: 100%;' class='search-input' autocomplete='off' placeholder='" + ARTLANG('Find') + " \"" + placeholder + "\"'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
            .on('keydown', function (e) {
                if (e.which === 40) {
                    that.$selectableUl.focus();
                    return false;
                }
            });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
            .on('keydown', function (e) {
                if (e.which == 40) {
                    that.$selectionUl.focus();
                    return false;
                }
            });
        },
        afterSelect: function () {
            this.qs1.cache();
            this.qs2.cache();
        },
        afterDeselect: function () {
            this.qs1.cache();
            this.qs2.cache();
        }
    });
    return ddl;
}

function ReloadMultiSelect(obj, data, value, text, selectedvalue) {
    obj.multiSelect('reload', { data: data, value: value, text: text, selectedvalue: selectedvalue });
}

//******************************************************* Controls Select Tree ********************************************

ko.bindingHandlers.select2tree = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var objTree = {
            isLoad: true,
            isClickItem: false,
            isSetValue: false,
            options: allBindingsAccessor().select2tree || {}
        };

        objTree.options.data = objTree.options.options() || [];
        objTree.options.field_value = objTree.options.optionsValue || '';
        objTree.options.field_text = objTree.options.optionsText || '';
        objTree.options.display_text = objTree.options.optionsDisplayText || objTree.options.optionsText || '';
        objTree.options.caption = objTree.options.optionsCaption || '';
        objTree.options.field_parent_value = objTree.options.optionsParentValue || '';
        objTree.options.model = objTree.options.model || '';
        objTree.options.select_level = objTree.options.select_level || '';
        objTree.options.isShowTree = (objTree.options.isShowTree ? objTree.options.isShowTree : false);
        objTree.options.width = objTree.options.width || '';
        objTree.options.height = objTree.options.height || '';
        objTree.options.minExpandLevel = objTree.options.minExpandLevel || 2;
        objTree.options.selectMode = objTree.options.selectMode || 2;

        // ************** About Function For Manage Data **************

        objTree.fnSelectTreeSetData = function (options) {
            var data_tree = [];
            if (options.caption) {
                if (!options.multiple) {
                    data_tree.push({ "key": "", "title": options.caption, "display_title": options.caption });
                }
            }
            if (options.data) {
                if (options.data.length > 0) {
                    var datanew = ko.utils.arrayFilter(options.data, function (item) {
                        return item[options.field_parent_value] == 0;
                    });

                    for (var i = 0; i <= datanew.length - 1; i++) {
                        var row = {
                            "key": datanew[i][options.field_value],
                            "title": datanew[i][options.field_text],
                            "display_title": datanew[i][options.display_text]
                        };

                        var children = objTree.fnSelectTreeFilterChild(options,
                                                                       datanew[i][options.field_value]);
                        if (children.length > 0) {
                            row.children = children
                        }

                        data_tree.push(row);
                    }
                }
            }
            return data_tree;
        }

        objTree.fnSelectTreeFilterChild = function (options, rowid_parent) {
            var children = [];
            ko.utils.arrayFilter(options.data, function (item) {
                if (item[options.field_parent_value] == rowid_parent) {
                    var row_children = {
                        "key": item[options.field_value],
                        "title": item[options.field_text],
                        "display_title": item[options.display_text]
                    };

                    var children2 = objTree.fnSelectTreeFilterChild(options,
                                                                    item[options.field_value]);
                    if (children2.length > 0) {
                        row_children.children = children2
                    }

                    children.push(row_children);
                };
            });
            return children;
        }

        // ************** About Manage Data **************

        objTree.data_tree = objTree.fnSelectTreeSetData(objTree.options) || [];

        // ************** About Set Template Select Tree **************

        if (objTree.options.isShowTree == true) {
            $(element).append('<input type="text" class="input-select-value" style="display:none" data-bind="value: ' + objTree.options.model + '">' +
                                '<span class="select2-container select2-container--default"' + (objTree.options.width != '' ? ' style="width:' + objTree.options.width + ' !important"' : '') + '>' +
                                    '<span class="selection">' +
                                        '<input type="search" placeholder="ค้นหา..." class="select2-search__field" ' + (objTree.options.width != '' ? ' style="width:' + objTree.options.width + '"' : '') + ' tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">' +
                                        '<div class="tFilter select2-results"></div>' +
                                    '</span>' +
                                '</span>');
        } else {
            $(element).append('<input type="text" class="input-select-value" style="display:none" data-bind="value: ' + objTree.options.model + '">' +
                              '<span class="select2-container select2-container--default">' +
                                    '<span class="selection">' +
                                        '<span class="select2-selection select2-selection--single">' +
                                            '<span class="select2-selection__rendered">' +
                                                '<div class="input-select-text" style="width:100%; height:28px;">' + (objTree.options.multiple ? '' : objTree.options.caption) + '</div>' +
                                            '</span>' +
                                            '<span class="input-select-arrow select2-selection__arrow" role="presentation"><b role="presentation"></b></span>' +
                                        '</span>' +
                                    '</span>' +
                                '</span>' +
                                '<span class="dropdown_tree select2tree-container select2-container--default select2-container--open" style="position: absolute; display:none;">' +
                                    '<span class="dropdown_tree_select select2-dropdown select2-dropdown--below" dir="ltr">' +
                                        '<span class="select2-search select2-search--dropdown">' +
                                            '<input type="search" placeholder="" class="select2-search__field" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">' +
                                        '</span>' +
                                        '<div class="tFilter select2-results"></div>' +
                                    '</span>' +
                                ' </span>');
        }

        var obj_fancy_tree;
        var input_select = $(element).find('.input-select-text');
        var input_select_arrow = $(element).find('.input-select-arrow');
        var input_select_value = $(element).find('input[type=text].input-select-value');
        var input_search = $(element).find('input[type=search]');
        var dropdown_tree = $(element).find('.dropdown_tree');
        var dropdown_tree_select = $(element).find('.dropdown_tree_select');
        var div_filter_tree = $(element).find('.tFilter');

        // ************** About Fancytree **************

        obj_fancy_tree = div_filter_tree.fancytree({
            selectMode: objTree.options.selectMode, // 1 single , 2 multi , 3 multi-hierachy
            checkbox: objTree.options.multiple,
            minExpandLevel: objTree.options.minExpandLevel,
            extensions: ["filter"],
            quicksearch: true,
            source: objTree.data_tree,
            filter: {
                autoApply: true,  // Re-apply last filter if lazy data is loaded
                counter: false,  // Show a badge with number of matching child nodes near parent icons
                fuzzy: false,  // Match single characters in order, e.g. 'fb' will match 'FooBar'
                hideExpandedCounter: true,  // Hide counter badge, when parent is expanded
                highlight: true,  // Highlight matches by wrapping inside <mark> tags
                mode: "hide"  // Grayout unmatched nodes (pass "hide" to remove unmatched node instead)
            },
            activeVisible: true,
            activate: function (event, data) {
                //alert("activate " + data.node);
                if (objTree.options.multiple) {
                    data.node.setActive(false);
                    data.node.setSelected(!data.node.isSelected());
                }
            },
            select: function () {
                objTree.isClickItem = true;
                if (objTree.options.multiple) {
                    var nodes = tree.getSelectedNodes();
                    var strtext = '';
                    var strval = [];
                    for (var i = 0; i <= nodes.length - 1; i++) {
                        strtext += (strtext.length > 0 ? ', ' : '') + nodes[i].data.display_title;
                        strval.push(nodes[i].key);
                    }

                    input_select.html(strtext);
                    input_select_value.val(JSON.stringify(strval));

                    if (!objTree.isSetValue) {
                        objTree.options.value(strval);
                        objTree.options.value.valueHasMutated();
                    }
                }
                objTree.isClickItem = false;
            },
            click: function (event, data) {
                //msg = ", targetType=" + data.targetType ? ": " + ", targetType=" + data.targetType : "";
                //console.log("Event('" + event.type + "', node=" + data.node + ")" + msg);

                objTree.isClickItem = true;
                if (!objTree.options.multiple) {
                    if (data.targetType == 'title') {
                        if (objTree.options.select_level != '') {
                            if ((',' + objTree.options.select_level + ',').indexOf(',' + (data.node.getLevel() - 1) + ',') != -1 || data.node.key == '' || data.node.key == '0') {
                                input_select.html(data.node.data.display_title);
                                input_select_value.val(data.node.key);
                                dropdown_tree.hide();

                                if (!objTree.isSetValue) {
                                    objTree.options.value(data.node.key);
                                    objTree.options.value.valueHasMutated();
                                }
                            } else {
                                data.node.setActive(false);
                                data.node.setSelected(false);
                                return false;
                            }
                        } else {
                            input_select.html(data.node.data.display_title);
                            input_select_value.val(data.node.key);
                            dropdown_tree.hide();

                            if (!objTree.isSetValue) {
                                objTree.options.value(data.node.key);
                                objTree.options.value.valueHasMutated();
                            }
                        }
                    }
                }
                objTree.isClickItem = false;
            }
        });
        obj_fancy_tree.find('ul').addClass('select2-results__options');
        var tree = obj_fancy_tree.fancytree("getTree");

        // ************** About TREE **************

        if (objTree.options.isShowTree == true) {
            var strStyle = '';
            if (objTree.options.height != '') {
                strStyle += ' max-height:' + objTree.options.height + ';';
            }
            if (objTree.options.width != '') {
                strStyle += ' width:' + objTree.options.width + ';';
            }
            if (strStyle != '') {
                obj_fancy_tree.find('ul').attr('style', strStyle);
            }
        }

        // ************** About Expand Node **************

        objTree.fnExpandNode = function () {
            tree.visit(function (node) {
                if (objTree.options.select_level != '') {
                    if ((',' + objTree.options.select_level + ',').indexOf(',' + (node.getLevel() - 1) + ',') == -1) {
                        if (node.key != '' && node.key != '0') {
                            $($(node)[0].span).find('.fancytree-title').attr('style', 'color: #9e9e9e');
                        }
                        node.unselectable = true;
                        node.render();
                    }
                }
            });
            return false;
        }

        objTree.fnExpandNode();

        // ************** About Hide Dropdown **************

        $(document).mouseup(function (e) {
            $.each(dropdown_tree, function (key, value) {
                if (!$(value).is(e.target) // if the target of the click isn't the container...
                    && $(value).has(e.target).length === 0) // ... nor a descendant of the container
                {
                    $(value).hide();
                }
            });
        });

        // ************** About Input Select **************

        if (objTree.options.isShowTree == false) {
            input_select.click(function () {
                dropdown_tree.show();
                input_search.focus();

                dropdown_tree_select.attr('style', 'width: ' + input_select_value.context.offsetWidth + 'px;');
                dropdown_tree.attr('style', 'position: absolute; display:block;');
            });

            input_select_arrow.click(function () {
                dropdown_tree.show();
                input_search.focus();
            });
        }

        // ************** About Input Search **************

        input_search.keyup(function (e) {
            var n,
                opts = {
                    autoExpand: $("#autoExpand").is(":checked"),
                    leavesOnly: $("#leavesOnly").is(":checked")
                },
                match = $(this).val();

            if (e && e.which === $.ui.keyCode.ESCAPE || $.trim(match) === "") {
                tree.clearFilter();
                return;
            }

            if ($("#tree_filter_regex").is(":checked")) {
                // Pass function to perform match
                n = tree.filterNodes(function (node) {
                    return new RegExp(match, "i").test(node.data.display_title);
                }, opts);
            } else {
                // Pass a string to perform case insensitive matching
                n = tree.filterNodes(match, opts);
            }
        });

        // ************** About Set Init Value & Change Value **************

        objTree.fnSetValue = function (options) {
            if (options.multiple) {
                $.each(options.value(), function (index, value) {
                    var node = tree.getNodeByKey((value + "").toString());
                    if (node) {
                        node.setSelected(true);
                    }
                });

                var nodes = tree.getSelectedNodes();
                var strtext = '';
                var strval = [];
                for (var i = 0; i <= nodes.length - 1; i++) {
                    strtext += (strtext.length > 0 ? ', ' : '') + nodes[i].data.display_title;
                    strval.push(nodes[i].key);
                }

                input_select.html(strtext);
                input_select_value.val(JSON.stringify(strval));
            } else {
                var node = tree.getNodeByKey((options.value() + "").toString());
                if (node) {
                    node.setSelected(true);
                    node.setActive(true);

                    input_select.html(node.data.display_title);
                    input_select_value.val(node.key);
                }
            }
        }

        objTree.fnClearValue = function (options) {
            tree.visit(function (node) {
                node.setSelected(false);
            });
            return false;
        }

        //// ************** About Change Value **************

        objTree.options.value.subscribe(function (newValue) {
            if (!objTree.isClickItem) {
                objTree.isSetValue = true;
                objTree.fnClearValue(this.options);
                objTree.fnSetValue(this.options);
                objTree.isSetValue = false;
            }
        }, objTree);

        objTree.options.options.subscribe(function (data) {
            objTree.options.data = objTree.options.options() || [];
            objTree.data_tree = objTree.fnSelectTreeSetData(objTree.options) || [];
            tree.reload(objTree.data_tree);
            objTree.fnExpandNode();

            if (objTree.options.multiple) {
                input_select.html('');
                input_select_value.val('[]');

                objTree.options.value([]);
                objTree.options.value.valueHasMutated();
            } else {
                input_select.html('');
                input_select_value.val('');

                objTree.options.value('');
                objTree.options.value.valueHasMutated();
            }
        });

        objTree.fnSetValue(objTree.options);
        objTree.isLoad = false;

        if (objTree.options.multiple) {
            $(element).contextMenu({
                selector: "span.fancytree-title",
                items: {
                    "select": {
                        name: "เลือกทั้งหมด", icon: "select",
                        callback: function (key, opt) {
                            var node = $.ui.fancytree.getNode(opt.$trigger);
                            node.setSelected(true);
                            var children = node.children;
                            for (i = 0; i <= children.length - 1; i++) {
                                children[i].setSelected(true);
                            }
                        },
                        icon: function (opt, $itemElement, itemKey, item) {
                            // Set the content to the menu trigger selector and add an bootstrap icon to the item.
                            $itemElement.html('<i class="fa fa-check-square-o"></i> เลือกทั้งหมด');

                            // Add the context-menu-icon-updated class to the item
                            return 'context-menu-icon-select';
                        }
                    },
                    "unselect": {
                        name: "ไม่เลือกทั้งหมด", icon: "unselect",
                        callback: function (key, opt) {
                            var node = $.ui.fancytree.getNode(opt.$trigger);
                            node.setSelected(false);
                            var children = node.children;
                            for (i = 0; i <= children.length - 1; i++) {
                                children[i].setSelected(false);
                            }
                        },
                        icon: function (opt, $itemElement, itemKey, item) {
                            // Set the content to the menu trigger selector and add an bootstrap icon to the item.
                            $itemElement.html('<i class="fa fa-square-o"></i> ไม่เลือกทั้งหมด');

                            // Add the context-menu-icon-updated class to the item
                            return 'context-menu-icon-unselect';
                        }
                    }
                },
                callback: function (itemKey, opt) {
                    var node = $.ui.fancytree.getNode(opt.$trigger);
                    alert("select " + itemKey + " on " + node);
                }
            });
        }
    },
    update: function (element, valueAccessor, allBindingsAccessor) {

    }
};

//******************************************************* Controls Grid Tree ********************************************

ko.bindingHandlers.gridtree = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var objGridTree = {
            options: allBindingsAccessor().gridtree || {}
        };
        objGridTree.options.data = objGridTree.options.data_grid() || [];
        objGridTree.options.column = objGridTree.options.data_grid_column || [];
        objGridTree.options.field_value = objGridTree.options.field_value || '';
        objGridTree.options.field_text = objGridTree.options.field_text || '';
        objGridTree.options.field_parent_value = objGridTree.options.field_parent_value || '';
        objGridTree.options.model_data = objGridTree.options.model_data_grid || '';
        objGridTree.options.model_data_column = objGridTree.options.model_data_grid_column || '';

        // ************** about function for manage data **************

        objGridTree.fnGridTreeSetData = function (options) {
            var data_tree = [];
            if (options.data) {
                if (options.data.length > 0) {
                    var datanew = ko.utils.arrayFilter(options.data, function (item) {
                        return (item[options.field_parent_value] == "0");
                    });

                    for (var i = 0; i <= datanew.length - 1; i++) {
                        var row = ko.mapping.toJS(datanew[i]);
                        row.title = datanew[i][options.field_text];

                        var children = objGridTree.fnGridTreeFilterChild(options,
                                                                         datanew[i][options.field_value]);
                        if (children.length > 0) {
                            row.children = children;
                        }

                        data_tree.push(row);
                    }
                }
            }
            return data_tree;
        }

        objGridTree.fnGridTreeFilterChild = function (options, rowid_parent) {
            var children = [];
            ko.utils.arrayFilter(options.data, function (item) {
                if (item[options.field_parent_value] == rowid_parent) {
                    var row_children = ko.mapping.toJS(item);
                    row_children.title = item[options.field_text];

                    var children2 = objGridTree.fnGridTreeFilterChild(options,
                                                                      item[options.field_value]);
                    if (children2.length > 0) {
                        row_children.children = children2;
                    }

                    children.push(row_children);
                }
            });
            return children;
        }

        // ************** about manage data **************

        objGridTree.data_tree = objGridTree.fnGridTreeSetData(objGridTree.options) || [];

        // ************** About Set Template Select Tree **************

        var strColGroup = '';
        var strRowHeader = '';
        var strRowDetail = '';
        for (var col = 0; col <= objGridTree.options.column.length - 1; col++) {
            strColGroup += '<col width="' + (objGridTree.options.column[col].awidth || '*') + '">';
            strRowHeader += '<th>' + objGridTree.options.column[col].atitle + '</th>';
            strRowDetail += '<td style="white-space: normal !important"></td>';
        }

        $(element).append('<div class="dataTables_wrapper">' +
                                '<div class="uk-overflow-container" style="padding-bottom: 10px;">' +
                                    '<table class="uk-table grid_tree">' +
                                        '<colgroup>' +
                                            '<!-- ko foreach: ' + objGridTree.options.model_data_column + ' -->' +
                                                '<col data-bind="attr: { width: ($data.awidth || \'*\')}">' +
                                            '<!-- /ko -->' +
                                        '</colgroup>' +
                                        '<thead>' +
                                            '<tr>' +
                                                '<!-- ko foreach: ' + objGridTree.options.model_data_column + ' -->' +
                                                    '<th><span data-bind="text: $data.atitle"></span></th>' +
                                                '<!-- /ko -->' +
                                            '</tr>' +
                                        '</thead>' +
                                        '<tbody>' +
                                            '<tr>' +
                                                strRowDetail +
                                            '</tr>' +
                                        '</tbody>' +
                                    '</table>' +
                                '</div>' +
                            '</div>');

        var obj_fancy_grid_tree;
        var tb_grid_tree = $(element).find('.grid_tree');

        obj_fancy_grid_tree = tb_grid_tree.fancytree({
            checkbox: false,
            titlesTabbable: true,
            quicksearch: true,
            source: [],
            extensions: ["edit", "dnd", "table", "gridnav"],
            dnd: {
                preventVoidMoves: true,
                preventRecursiveMoves: true,
                autoExpandMS: 400,
                dragStart: function (node, data) {
                    //return true;
                    return false; // no drag
                },
                dragEnter: function (node, data) {
                    // return ["before", "after"];
                    return true;
                },
                dragDrop: function (node, data) {
                    data.otherNode.moveTo(node, data.hitMode);
                }
            },
            edit: {
                triggerStart: ["f2", "shift+click", "mac+enter"],
                close: function (event, data) {
                    if (data.save && data.isNew) {
                        $("#tree").trigger("nodeCommand", { cmd: "addSibling" });
                    }
                }
            },
            table: {
                indentation: 20,
                //nodeColumnIdx: 2,
                nodeColumnIdx: 0, //Node Column
                checkboxColumnIdx: 0
            },
            gridnav: {
                autofocusInput: false,
                handleCursorKeys: true
            },

            lazyLoad: function (event, data) {
                //data.result = {url: "mot/data.json"};
            },
            createNode: function (event, data) {
                var node = data.node,
                $tdList = $(node.tr).find(">td");

                if (node.isFolder()) {
                    // $tdList.eq(2).prop("colspan", 6).nextAll().remove();
                    // $tdList.eq(0).prop("colspan", 4).nextAll().remove();
                    $tdList.eq(0).nextAll().empty();
                }
            },
            renderColumns: function (event, data) {
                var node = data.node,
                    $tdList = $(node.tr).find(">td");

                for (var col = 1; col <= objGridTree.options.column.length - 1; col++) {
                    $tdList.eq(col).addClass(objGridTree.options.column[col].aclass);

                    if (objGridTree.options.column[col].atype == 'render') {
                        var arender = objGridTree.options.column[col].arender;
                        var aparam = objGridTree.options.column[col].aparam || '';

                        if (aparam != '') {
                            var arraparam = aparam.split(",");
                            if (arraparam.length > 0) {
                                for (var i = 0; i <= arraparam.length - 1; i++) {
                                    arender = arender.replaceAll("{" + i + "}", node.data[arraparam[i]]);
                                }
                            }
                        }
                        $tdList.eq(col).html(arender);

                        $tdList.eq(col).find("a[data-command='action']").click(function () {
                            $parent = node.data;
                        });
                    } else {
                        $tdList.eq(col).html(node.data[objGridTree.options.column[col].afieldname]);
                    }
                }
            }
        });
        var tree = obj_fancy_grid_tree.fancytree("getTree");

        // ************** About Expand Node **************

        objGridTree.fnExpandNode = function () {
            tree.visit(function (node) {
                node.setExpanded(true);
            });
            return false;
        }

        tree.reload(objGridTree.data_tree);
        objGridTree.fnExpandNode();

        // ************** About Change Value **************

        objGridTree.options.data_grid.subscribe(function (data) {
            objGridTree.options.data = objGridTree.options.data_grid() || [];
            objGridTree.data_tree = objGridTree.fnGridTreeSetData(objGridTree.options) || [];

            tree.reload(objGridTree.data_tree);
            objGridTree.fnExpandNode();
        });

    },
    update: function (element, valueAccessor, allBindingsAccessor) {

    }
};



	function DisplayCurrency(value, digits) {
		var returnString = '';
		var RoundValue = '';
		var CentValue = '';
		var i, j, nTen;
		var strValue = '';
		
		var strRawValue = Math.abs(value.toString().replace(/\$|\,/g,'')) + ''
		var dotPosition = strRawValue.indexOf('.');
		if (dotPosition > -1) {
			RoundValue = strRawValue.substring(0,dotPosition);
			CentValue = strRawValue.substring(dotPosition,strRawValue.length) + '';
		}else{
			RoundValue = strRawValue;
		}

		if (digits) {
			if (CentValue.length-1 > digits){
				nTen = 1;
				for(i=0;i<digits;i++){
					nTen = nTen*10;
				}
				CentValue = (Math.round(parseFloat(CentValue)*nTen)/nTen).toString();
				if (parseFloat(CentValue) >= 1) {
					RoundValue = (parseFloat(RoundValue)+1).toString();
				}

				CentValue = CentValue.substring(1); //remove first 0 from 0.xxx
			} 
			
			if (CentValue == '') {
				CentValue = '.';
			}

			j=digits - (CentValue.length-1);
			for (i=0;i<j;i++) {
				CentValue = CentValue+"0";
			}
		}

		if (RoundValue.length > 0) {		
			var strValue = RoundValue;
			
			for (i=0;i < (strValue.length / 3);i++) {
				if (strValue.length > (i+1)*3) {
					returnString = ','+strValue.substring(strValue.length-((i+1)*3),strValue.length-(i*3)) + returnString;
				} else {
					returnString = strValue.substring(0,strValue.length-(i*3)) + returnString;
				}
			}
		}
		
		returnString = returnString + '' + CentValue;
		
		if ((getNumber(value) < 0) & (getNumber(returnString) > 0)) {
			returnString = '-' + returnString;
		}
		
		return returnString;	
	}
			
			function FormatNumber(obj,num,dot,strsign) {
				//alert(obj)
			strsign = '';
			num = num.toString().replace(/\$|\,/g,'');
			if(isNaN(num))
						num = "0";
						sign = (num == (num = Math.abs(num)));
						num = Math.floor(num*100+0.50000000001);
						cents = num%100;
						num = Math.floor(num / 100).toString();
			if(cents<10)
				cents = "0" + cents;
			for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
						num = num.substring(0,num.length-(4*i+3))+','+
						num.substring(num.length-(4*i+3));
						if (dot == 1)
						{
						obj.value =  (((sign)?'':'-') + num)+strsign;
						}
						else
						{
						obj.value =  (((sign)?'':'-') + num + '.' + cents)+strsign;
						}
			}
			
	function FormatNumber1(value, digits) {
		var returnString = '';
		var RoundValue = '';
		var CentValue = '';
		var i, j, nTen;
		var strValue = '';
		
		var strRawValue = Math.abs(value.toString().replace(/\$|\,/g,'')) + ''
		var dotPosition = strRawValue.indexOf('.');
		if (dotPosition > -1) {
			RoundValue = strRawValue.substring(0,dotPosition);
			CentValue = strRawValue.substring(dotPosition,strRawValue.length);
		}else{
			RoundValue = strRawValue;
		}

		if (digits) {
			if (CentValue.length-1 > digits){
				nTen = 1;
				for(i=0;i<digits;i++){
					nTen = nTen*10;
				}
				CentValue = (Math.round(parseFloat(CentValue)*nTen)/nTen).toString();
				if (parseFloat(CentValue) >= 1) {
					RoundValue = (parseFloat(RoundValue)+1).toString();
				}

				CentValue = CentValue.substring(1); //remove first 0 from 0.xxx
			} 
			
			if (CentValue == '') {
				CentValue = '.';
			}

			j=digits - (CentValue.length-1);
			for (i=0;i<j;i++) {
				CentValue = CentValue+"0";
			}
		}

		if (RoundValue.length > 0) {		
			var strValue = RoundValue;
			
			for (i=0;i < (strValue.length / 3);i++) {
				if (strValue.length > (i+1)*3) {
					returnString = ','+strValue.substring(strValue.length-((i+1)*3),strValue.length-(i*3)) + returnString;
				} else {
					returnString = strValue.substring(0,strValue.length-(i*3)) + returnString;
				}
			}
		}
		
		returnString = returnString + '' + CentValue;
		
		if ((getNumber(value) < 0) & (getNumber(returnString) > 0)) {
			returnString = '-' + returnString;
		}
		//alert(returnString)
		return 	returnString;	
	}

	function getNumber(val) {
		if (!val) {
			return 0;
		}

		if (val.length <= 0) {
			return 0;
		}
		//Regular Expression
		var t = /,/g;
		val = val + '';
		val = val.replace(t,'');
		
		if (isNaN(val)) {
			//alert("NaN : " + val + " : 0");
			return 0;
		} else {
			//alert("Num : " + val + " : " + parseFloat(val));
			return parseFloat(val);
		}
}

function CompareValue(obj, val, valCompare, OperatorCompare) {
    if (OperatorCompare == ">") {
        if (val > valCompare) {
            obj.value = valCompare;
            val = valCompare;
         }
     } else if (OperatorCompare == "<") {
         if (val < valCompare) {
             obj.value = valCompare;
             val = valCompare;
         }
    }
    return val
}

function CalculateFormula(objtxt, digits) {
    var value = objtxt.value;
    try {
        if (value != '') {
            value = value.toString().replace(/,/g, '');
            objtxt.value = FormatNumber1(eval(value), digits);
        }
    } catch (e) {
        objtxt.value = '';
    }
}

//check ให้สามารถ key ได้เฉพาะตัวเลขอย่างเดียว
function checkIsInteger(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field accepts numbers only."
        return false
    }
    status = ""
    return true
}

var ART = ART || {};

ART.ARTReportOptions = function () {
    // Specify necessary options for the viewer
    var options = new Stimulsoft.Viewer.StiViewerOptions();
    options.height = "100%";
    options.appearance.scrollbarsMode = true;
    options.toolbar.showDesignButton = true;
    options.toolbar.printDestination = Stimulsoft.Viewer.StiPrintDestination.Direct;
    options.appearance.htmlRenderMode = Stimulsoft.Report.Export.StiHtmlExportMode.Table;
    return options;
}