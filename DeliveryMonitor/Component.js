sap.ui.define([
        'sap/ui/core/UIComponent'
    ],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("com.fahmaih.samples.deliverymonitor.Component", {

            metadata : {
                manifest : "json"
            },

            init : function () {
                // set device model
                var deviceModel = new sap.ui.model.json.JSONModel({
                    isTouch : sap.ui.Device.support.touch,
                    isNoTouch : !sap.ui.Device.support.touch,
                    isPhone : sap.ui.Device.system.phone,
                    isNoPhone : !sap.ui.Device.system.phone,
                    listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
                    listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
                });
                deviceModel.setDefaultBindingMode("OneWay");
                this.setModel(deviceModel, "device");

                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();
            }
        });

    });
