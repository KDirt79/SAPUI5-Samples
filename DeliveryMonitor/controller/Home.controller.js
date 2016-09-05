jQuery.sap.require("com.fahmaih.samples.deliverymonitor.util.Formatter");

sap.ui.define([
        'com/fahmaih/samples/deliverymonitor/controller/BaseController'
    ], function (BaseController) {
    return BaseController.extend("com.fahmaih.samples.deliverymonitor.controller.Home", {
        onInit: function () {},
        handleItemPress: function(oEvent) {
            var oContext = oEvent.getSource().getBindingContext();
            console.log(oContext.getProperty("Index"));
            this.getRouter().navTo("DeliveryIndex", {
                Index: oContext.getProperty("Index")
            });
        }
    })
})
