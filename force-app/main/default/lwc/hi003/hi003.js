import { LightningElement, track } from "lwc";

import getAccount from "@salesforce/apex/hi001.getAccount";


const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'BillingStreet', fieldName: 'BillingStreet' },
    { label: 'Type', fieldName: 'Type'}
];


export default class Hi003 extends LightningElement {


    @track
    _accounts = [];

// 

    connectedCallback() {

        this.retrieveAccount();
        
    }


    async retrieveAccount() {
        
        this._accounts = await getAccount();
    }
    
}