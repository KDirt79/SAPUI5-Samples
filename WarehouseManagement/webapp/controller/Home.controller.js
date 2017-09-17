sap.ui.define([
        'jquery.sap.global',
        'fahmaih/samples/warehouse/controller/BaseController',
        'sap/ui/model/json/JSONModel'
    ],
    function (jQuery, BaseController, JSONModel) {
        "use strict";
    
        return BaseController.extend('fahmaih.samples.warehouse.controller.Home', {
            onInit : function () {
                var oModel = new sap.ui.model.json.JSONModel({
                        "Transactions": [
                            {
                                "icon": "sap-icon://inbox",
                                "title": "Putaway",
                                "number": "4"
                            },
                            {
                                "icon": "sap-icon://shipping-status",
                                "title": "Picking",
                                "number": "3"
                            },
                            {
                                "icon": "sap-icon://repost",
                                "title": "Stock Transfer",
                                "number": "2"
                            }
                        ]
                });
                this.getView().setModel(oModel);
            },
            onPress : function (oEvent) {
                //this.getRouter().navTo(oEvent.getSource().getProperty("title"), {});
                switch(oEvent.getSource().getProperty("title")) {
                    case "Picking":
                        this.getRouter().navTo("Picking", {} );
                        break;
                    case "Putaway":
                        this.getRouter().navTo("Putaway", {} );
                        break;
                    case "Stock Transfer":
                        this.getRouter().navTo("StockTransfer", {} );
                        break;
                    default:
                        break;
                }
            },
            onDisplayNotFound : function (oEvent) {
                //display the "notFound" target without changing the hash
                this.getRouter().getTargets().display("notFound", {
				    fromTarget : "home"
                });
            }
        })
    });