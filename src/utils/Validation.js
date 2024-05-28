const emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const panFormat = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

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

export const PaymentValidations = (Data) => {
    if (Data?.name === '' || Data?.name === undefined) {
        return { status: false, msg: "Please Enter Your Full Name", field: 'name' };
    }
    if (Data?.email === '' || Data?.email === undefined) {
        return { status: false, msg: "Please Enter E-mail", field: 'email' };
    }else if (!emailFormat.test(Data?.email)) {
        return { status: false, msg: "Please Enter Valid E-mail", field: 'email' };
    }
    if((Data?.phoneNumber === '' || Data?.phoneNumber === undefined) && Data?.phoneNumber !== 10){
        return { status: false,msg: "Please Enter Phone Number" ,field: 'phoneNumber'}
    }
    if (Data?.panNumber === '' || Data?.panNumber === undefined) {
        return { status: false, msg: "Please Enter PAN number", field: 'panNumber' };
    }
    else if (!panFormat.test(Data?.panNumber)) {
        return { status: false, msg: "Please Enter Valid PAN number", field: 'panNumber' };
    }
    if (Data?.address === '' || Data?.address === undefined) {
        return { status: false, msg: "Please Enter Your Address", field: 'address' };
    }
    if ((Data?.monthlyAmount === '' || Data?.monthlyAmount === undefined || Data?.monthlyAmount == 0) && Data?.monthlyChildrenCount > 0 && Data?.pageType === 'thirdPage') {
        return { status: false, msg: "Please Enter Amount", field: 'monthlyAmount' };
    }
    if ((Data?.monthlyChildrenCount === '' || Data?.monthlyChildrenCount === undefined || Data?.monthlyChildrenCount == 0) && Data?.monthlyAmount > 0  && Data?.pageType === 'thirdPage') {
        return { status: false, msg: "Please Specify number of children you would like to support monthly", field: 'monthlyAmount' };
    }
    if ((Data?.yearlyAmount === '' || Data?.yearlyAmount === undefined || Data?.yearlyAmount == 0) && Data?.yearlyChildrenCount > 0 && Data?.pageType === 'thirdPage') {
        return { status: false, msg: "Please Enter Amount", field: 'yearlyAmount' };
    }
    if ((Data?.yearlyChildrenCount === '' || Data?.yearlyChildrenCount === undefined || Data?.yearlyChildrenCount == 0) && Data?.yearlyAmount > 0 && Data?.pageType === 'thirdPage') {
        return { status: false, msg: "Please Specify number of children you would like to support yearly", field: 'yearlyAmount' };
    }

    return { status: true, msg: '' };
}