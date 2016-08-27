jQuery.sap.require("com.fahmaih.samples.products.util.Formatter");

sap.ui.define([
        'com/fahmaih/samples/products/controller/BaseController',
        'sap/m/GroupHeaderListItem'
    ], function (BaseController, GroupHeaderListItem) {
    return BaseController.extend("com.fahmaih.samples.products.controller.Product", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("ProductIndex").attachMatched(this._onRouteMatched, this);
        },
        grouper: function(oGroup) {
            return {
                key: oGroup.oModel.getProperty(oGroup.sPath + "/Type")
            };
        },
        getGroupHeader: function (oGroup){
            var title;
            switch(oGroup.key) {
                case "H":
                    title = "Gefahrenhinweise";
                    break;
                case "P":
                    title = "Sicherheitshinweise";
                    break;
                case "U":
                    title = "Zusätzliche Angaben";
                    break;
                case "R":
                    title = "Risiken";
                    break;
                case "S":
                    title = "Sicherheitsratschläge";
                    break;
                default:
                    title = "";
                    break;
            };
            return new GroupHeaderListItem( {
                title: title,
                upperCase: false
            } );
        },
        handleItemPress: function(oEvent) {

        },
        _onRouteMatched: function(oEvent) {
            var oArgs, oView;

            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

            oView.bindElement({
                path : "/Product/" + oArgs.Index,
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
