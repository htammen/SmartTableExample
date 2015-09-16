jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
jQuery.sap.require("sap.m.TablePersoController");

sap.ui.core.mvc.Controller.extend("com.tammenit.smarttbl.view.Master", {
	_oCatalog: null,
	_oResourceBundle: null,

	onInit: function() {
		this._oView = this.getView();
		this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
		this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
		this._oRouter = this._oComponent.getRouter();
		this._oCatalog = this.byId("catalogTable");
	},

	onNavBack: function() {
		window.history.go(-1);
	},

	// --- List Handling

	// Handler method for the table search.
	onSearchPressed: function() {
		var sValue = this.byId("searchField").getValue();
		var oFilter = new sap.ui.model.Filter("",
			sap.ui.model.FilterOperator.Contains, sValue);
		var oBinding = this.byId("catalogTable").getBinding("items");
		oBinding.filter([oFilter]);
	}

});