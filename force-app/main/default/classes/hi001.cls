public with sharing class hi001 {



    public static List<Account> getAccount(){

        return [Select Id, Name, BillingStreet, Type From Account];

    }


    // 


}
