sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";
    return Controller.extend("com.fahmaih.samples.products.controller.BaseController", {
        onInit: function () {},
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },
        handleNavBack: function (oEvent) {
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            }
            else {
                this.getRouter().navTo("Home", {}, true /*no history*/ );
            }
        }
    });
});
