jQuery.sap.declare("com.fahmaih.samples.products.util.Formatter");

com.fahmaih.samples.products.util.Formatter = {
    uppercaseFirstChar : function(sStr) {
		return sStr.charAt(0).toUpperCase() + sStr.slice(1);
	},
    countryCode : function(sStr) {
        switch(sStr) {
            case "DE":
                return "Deutschland";
                break;
            case "BE":
                return "Belgien";
                break;
            case "NL":
                return "Niederlande";
                break;
            case "US":
                return "USA";
                break;
            default:
                return sStr;
                break;
        }
    },
    languageCode : function(sStr) {
        switch(sStr) {
            case "de":
                return "Deutsch";
                break;
            case "en":
                return "Englisch";
                break;
            default:
                return sStr;
                break;
        }
    }
}
