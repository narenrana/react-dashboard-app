
export function getColDef() {
    return [
         {headerName: "".toUpperCase(), field: "f_id", checkboxSelection:true, headerCheckboxSelection: true, width:30},
        {headerName: "Name".toUpperCase(), field: "first_name"},
        {headerName: "Company Name".toUpperCase(), field: "company_name"},
        {headerName: "Email".toUpperCase(), field: "email"},
        {headerName: "Work Phone".toUpperCase(), field: "mobile"},
        {headerName: "GST Treatment".toUpperCase(), field: "gst_treatment"},
        {headerName: "Receivables".toUpperCase(), field: "outstanding_receivable_amount"},
        {headerName: "Payable".toUpperCase(), field: "outstanding_payable_amount"},
        {headerName: "Company Website".toUpperCase(), field: "cf_website"},

        {headerName: "Company Website".toUpperCase(), field: "cf_website"},
        {headerName: "Contact Type".toUpperCase(), field: "contact_type"},
        {headerName: "GST Number".toUpperCase(), field: "gst_no"},
        {headerName: "Vendor Name".toUpperCase(), field: "vendor_name"},
        {headerName: "Contact Name".toUpperCase(), field: "contact_name"},
        {headerName: "Coreated Time".toUpperCase(), field: "created_time"},
        {headerName: "Currency".toUpperCase(), field: "currency_code"},
    ];
}

export function getData(data) {
    const contacts= data.contacts || [];
    return contacts.map(val => {
        return {...val};
    });
}

