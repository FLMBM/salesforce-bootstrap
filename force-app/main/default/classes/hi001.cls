public without sharing class hi001 {


    @AuraEnabled
    public static List<Account> getAccount(){

        return [Select Id, Name, BillingStreet, Type From Account];

    }


    // 


}
