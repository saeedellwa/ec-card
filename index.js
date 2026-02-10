// index.js
// This script powers the employee card generator form. It collects
// values from the inputs, constructs a JSON object for insertion
// into data.js, and generates a link to the dynamic employee page.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('employeeForm');
  const output = document.getElementById('output');
  const linkEl = document.getElementById('link');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Helper to fetch and trim values
    const getVal = (id) => document.getElementById(id).value.trim();
    // Build an employee object with all form fields
    const employee = {
      ecNo: getVal('ecNo'),
      name: getVal('name'),
      ecDate: getVal('ecDate'),
      birthDate: getVal('birthDate'),
      passportNo: getVal('passportNo'),
      passportIssueDate: getVal('passportIssueDate'),
      passportExpireDate: getVal('passportExpireDate'),
      visaNo: getVal('visaNo'),
      visaIssueDate: getVal('visaIssueDate'),
      visaExpireDate: getVal('visaExpireDate'),
      referralNo: getVal('referralNo'),
      recruitingAgency: getVal('recruitingAgency'),
      employer: getVal('employer'),
      country: getVal('country'),
      bmetNo: getVal('bmetNo'),
      gender: getVal('gender'),
      bloodGroup: getVal('bloodGroup'),
      nid: getVal('nid'),
      passportName: getVal('passportName'),
      passportNo1: getVal('passportNo1'),
      // The photo field can be a file name (for server hosted files)
      // or a data URI (for inline images). The front-end will
      // automatically detect and use whichever is provided.
      photo: getVal('photo'),
    };
    // Compose JSON snippet and append a trailing comma for easy copying
    const snippet = JSON.stringify(employee, null, 2);
    output.value = snippet + ',';
    // Construct the link to the employee page, reusing the current path
    const url = new URL(window.location.href);
    const basePath = url.pathname.replace(/index\.html$/, '');
    const link = basePath + 'employee.html?ecNo=' + encodeURIComponent(employee.ecNo);
    linkEl.textContent = 'Link: ' + link;
  });
});
