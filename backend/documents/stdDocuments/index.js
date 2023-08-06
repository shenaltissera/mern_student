module.exports = ({ registrationNo, student_full_name,Name_with_initials,date_of_addmission,class_name,course_name,date_of_birth,nic,email,address,telephone,gender,religion,nationality,gurdian_name,gurdian_contact_number,gurdian_email,gurdian_occupation,date,bank_name,branch,payment_date }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 2px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Tahoma', 'Verdana', 'sans-serif',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: left;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0"  style="font-family:verdana; font-size:12px">
                <tr class="top">
                   <td colspan="2">
                      <table style="text-align:left">
                         <tr>
                            <td class="title"><img  src=""
                               style="width:100%; max-width:156px;"></td>
                            <td style="text-align:right">
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td style="text-align:left">
                               Registration number: ${registrationNo}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Student Detail:</td>
                   <td>Value</td>
                </tr>
                <tr class="item">
                   <td width="30%">Student Full Name:</td>
                   <td>${student_full_name}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Name With Initials:</td>
                   <td>${Name_with_initials}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Date Of Admission:</td>
                   <td>${date_of_addmission}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Class Name:</td>
                   <td>${class_name}</td>
                </tr><tr class="item">
                <td width="30%">Course Name:</td>
                <td>${course_name}</td>
             </tr>
             <tr class="item">
                   <td width="30%">Date Of Birth:</td>
                   <td>${date_of_birth}</td>
                </tr>
                <tr class="item">
                   <td width="30%">NIC:</td>
                   <td>${nic}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Email:</td>
                   <td>${email}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Address:</td>
                   <td>${address}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Telephone:</td>
                   <td>${telephone}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Gender:</td>
                   <td>${gender}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Religion:</td>
                   <td>${religion}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Nationality:</td>
                   <td>${nationality}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Gurdian Name:</td>
                   <td>${gurdian_name}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Date:</td>
                   <td>${date}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Bank Name:</td>
                   <td>${bank_name}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Branch Name:</td>
                   <td>${branch}</td>
                </tr>
                <tr class="item">
                   <td width="30%">Payment Date:</td>
                   <td>${payment_date}</td>
                </tr>
             </table>
             <br />
             
          </div>
       </body>
    </html>
    `;
};