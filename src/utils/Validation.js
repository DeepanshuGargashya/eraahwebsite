const emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const contactFormValidation = (Data) => {

    if (Data?.fName === '' || Data?.fName === undefined) {
        return { status: false, msg: "Please Enter First Name", field: 'fName' };
    }

    if (Data?.lName === '' || Data?.lName === undefined) {
        return { status: false, msg: "Please Enter Last Name", field: 'lName' };
    }
    if (Data?.ngoName === '' || Data?.ngoName === undefined) {
        return { status: false, msg: "Please Enter NGO Name", field: 'ngoName' };
    }
    if (Data?.ngoAIM === '' || Data?.ngoAIM === undefined) {
        return { status: false, msg: "Please Enter NGO AIM", field: 'ngoAIM' };
    }

    if (Data?.email === '' || Data?.email === undefined) {
        return { status: false, msg: "Please Enter E-mail", field: 'email' };
    }
    else if (!emailFormat.test(Data?.email)) {
        return { status: false, msg: "Please Enter Valid E-mail", field: 'email' };
    }

    if((Data?.contactus === '' || Data?.contactus === undefined) && Data?.contactus > 10){
        return { status: false,msg: "Please Enter Phone Number" ,field: 'contactus'}
    }

    if (Data?.sectionofsociety === '' || Data?.sectionofsociety === undefined ) {
        return { status: false, msg: "Please Enter Section of Society you Help", field: 'sectionofsociety' };
    }
    if (Data?.helpu === '' || Data?.helpu === undefined ) {
        return { status: false, msg: "Please Enter How can we Help you", field: 'helpu' };
    }

    return { status: true, msg: '' };

}