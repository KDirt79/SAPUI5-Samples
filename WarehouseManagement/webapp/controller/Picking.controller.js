sap.ui.define([
        'jquery.sap.global',
        'fahmaih/samples/warehouse/controller/BaseController',
        'sap/ui/model/json/JSONModel',
        'sap/ui/model/Filter',
        'sap/m/GroupHeaderListItem'
    ],
    function (jQuery, BaseController, JSONModel, Filter, GroupHeaderListItem) {
        return BaseController.extend('fahmaih.samples.warehouse.controller.Picking', {
            onInit : function () {
                var sPath = jQuery.sap.getModulePath("fahmaih.samples.warehouse.model", "/deliveries.json");
                var oModel = new JSONModel(sPath);
                this.getView().setModel(oModel);
            },
            onSearch : function (oEvent) {
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter("DelivNumb", sap.ui.model.FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }
                var list = this.getView().byId("idPickList");
                var binding = list.getBinding("items");
                binding.filter(aFilters, "Application");
            },
            onListItemPress : function (oEvent) {
                var oContext = oEvent.getSource().getBindingContext();
                this.getRouter().navTo("Delivery", {
                    DelivNumb: oContext.getProperty("DelivNumb")
                });
            },
            getGroupHeader : function (oGroup){
                return new GroupHeaderListItem( {                    
                    title: oGroup.key,
                    upperCase: false
                } );
            }
        })
    });