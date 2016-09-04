jQuery.sap.require("com.fahmaih.samples.deliverymonitor.util.Formatter");

sap.ui.define([
        'com/fahmaih/samples/deliverymonitor/controller/BaseController'
    ], function (BaseController) {
    return BaseController.extend("com.fahmaih.samples.deliverymonitor.controller.Delivery", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("DeliveryIndex").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(oEvent) {
            var oArgs, oView;

            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

            oView.bindElement({
                path : "Deliveries/" + oArgs.Index,
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function (oEvent) {
                        oView.setBusy(true);
                    },
                    dataReceived: function (oEvent) {
                        oView.setBusy(false);
                    }
                }
            });

        },
        _onBindingChange: function(oEvent) {
            if (!this.getView().getBindingContext()) {
                this.getRouter().getTargets().display("notFound");
            }
        }
    })
})
