sap.ui.define([
        'fahmaih/samples/warehouse/controller/BaseController'
    ],
    function (BaseController) {
        return BaseController.extend('fahmaih.samples.warehouse.controller.Delivery', {
            onInit : function () {
                console.log("onInit");
                var oRouter = this.getRouter();
                oRouter.getRoute("Delivery").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function(oEvent) {
                var oArgs, oView;
                
                console.log("_onRouteMatched");

                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();

                oView.bindElement({
                    path : "/Deliveries/1", // + oArgs.DelivNumb,
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
                console.log("_onBindingChange");
                if (!this.getView().getBindingContext()) {
                    this.getRouter().getTargets().display("notFound");
                }
            }
        })
    });