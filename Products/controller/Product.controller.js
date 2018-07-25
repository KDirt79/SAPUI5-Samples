jQuery.sap.require("com.fahmaih.samples.products.util.Formatter");

sap.ui.define([
        'com/fahmaih/samples/products/controller/BaseController',
        "sap/m/PDFViewer",
        'sap/m/GroupHeaderListItem'
    ], function (BaseController, PDFViewer, GroupHeaderListItem) {
    return BaseController.extend("com.fahmaih.samples.products.controller.Product", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("ProductIndex").attachMatched(this._onRouteMatched, this);
            this._pdfViewer = new PDFViewer();
	    this.getView().addDependent(this._pdfViewer);
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
                    title = this.getView().getModel("i18n").getResourceBundle().getText("HazardStatements");
                    break;
                case "P":
                    title = this.getView().getModel("i18n").getResourceBundle().getText("PrecautionaryStatements"); //"Sicherheitshinweise";
                    break;
                case "U":
                    title = this.getView().getModel("i18n").getResourceBundle().getText("EUHStatements"); //"Zusätzliche Angaben";
                    break;
                case "R":
                    title = this.getView().getModel("i18n").getResourceBundle().getText("RiskPhrases"); //"Risiken";
                    break;
                case "S":
                    title = this.getView().getModel("i18n").getResourceBundle().getText("SecurityPhrases"); //"Sicherheitsratschläge";
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
            var oContext = oEvent.getSource().getBindingContext();
            var oItemSelect = oEvent.getParameter("listItem");
            var sSource = "msds/0000001007-deDE.pdf";
            this._pdfViewer.setSource(sSource);
            this._pdfViewer.setTitle("MSDS");
            this._pdfViewer.open();
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
