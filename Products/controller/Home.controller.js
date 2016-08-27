sap.ui.define([
        'com/fahmaih/samples/products/controller/BaseController',
        'sap/ui/model/Filter',
        'sap/m/GroupHeaderListItem',
        'sap/m/MessageToast'
    ], function (BaseController, Filter, GroupHeaderListItem, MessageToast) {
    return BaseController.extend("com.fahmaih.samples.products.controller.Home", {
        onInit: function () {},
        handleListItemPress: function(oEvent) {
            var oContext = oEvent.getSource().getBindingContext();
            this.getRouter().navTo("ProductIndex", {
                Index: oContext.getProperty("Index")
            });
        },
        grouper: function(oGroup) {
            return {
                key: oGroup.oModel.getProperty(oGroup.sPath+"/Manufacturer/Name")
            };
        },
        getGroupHeader: function (oGroup){
            return new GroupHeaderListItem( {
                title: oGroup.key,
                upperCase: false
            } );
        },
        handleSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Description", sap.ui.model.FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            var list = this.getView().byId("idProductList");
            var binding = list.getBinding("items");
            binding.filter(aFilters, "Application");
        }
    })
})
