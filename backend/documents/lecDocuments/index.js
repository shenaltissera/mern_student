module.exports = ({lecId,lecFname,lecLname,nic,dob,email,cNumber,address,summary,aQualification,Rmembership,Rdate }) => {
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
             border: 2px solid black;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
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
             <table cellpadding="0" cellspacing="0" style="font-family:verdana">
                <tr class="top">
                   <td colspan="2">
                      <table style="font-family:verdana">
                         <tr>
                            <td class="title"><img  src="../images/longpic.png"
                               style="width:100%; max-width:156px;"></td>
                            <td  style="text-align:right">
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table style="font-family:verdana">
                         <tr>
                            <td>
                              Lecturer ID: ${lecId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">

                </tr>
                <tr class="item">
                   <td width="30%">First Name:</td>
                   <td>${lecFname}</td>
                </tr>
                <tr class="item">
                   <td>Last Name:</td>
                   <td>${lecLname}</td>
                </tr>
                <tr class="item">
                   <td>Nic Number:</td>
                   <td>${nic}</td>
                </tr>
                <tr class="item">
                   <td>Date Of Birth:</td>
                   <td>${dob}</td>
                </tr>
                <tr class="item">
                   <td>E-mail:</td>
                   <td>${email}</td>
                </tr>
                <tr class="item">
                   <td>Contact Number:</td>
                   <td>${cNumber}</td>
                </tr>
                <tr class="item">
                   <td>Address:</td>
                   <td>${address}</td>
                </tr>
             
                <tr class="item">
                   <td>Career Summary:</td>
                   <td>${summary}</td>
                </tr>
                <tr class="item">
                   <td>Acedemic Qualifications:</td>
                   <td>${aQualification}</td>
                </tr>
                <tr class="item">
                   <td>Research interests and memberships:</td>
                   <td>${Rmembership}</td>
                </tr>
                <tr class="item">
                   <td>Registration Date:</td>
                   <td>${Rdate}</td>
                </tr>
             </table>
             <br />
          </div>
       </body>
    </html>
    `;
};