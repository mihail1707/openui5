sap.ui.define(["sap/ui/integration/Designtime", "sap/m/Slider", "sap/m/Switch"
], function (Designtime, Slider, Switch) {
	"use strict";

	var AdvancedDesigntime = Designtime.extend("card.test.AdvancedDesigntime");
	AdvancedDesigntime.prototype.create = function () {
		return {
			form: {
				items: {
					"string": {
						"manifestpath": "/sap.card/configuration/parameters/string/value",
						"defaultValue": "StringValue",
						"type": "string",
						"translatable": true,
						"required": true
					},
					"stringLabel": {
						"manifestpath": "/sap.card/configuration/parameters/stringLabel/value",
						"defaultValue": "StringValue",
						"type": "string",
						"label": "Direct String Label",
						"translatable": true
					},
					"stringLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/stringLabelTrans/value",
						"type": "string",
						"label": "{i18n>TRANSLATED_STRING_LABEL}",
						"translatable": true
					},
					"stringWithDescription": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithDescription/value",
						"type": "string",
						"label": "String with description",
						"description": "Description",
						"translatable": true
					},
					"stringWithLongDescription": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithLongDescription/value",
						"type": "string",
						"label": "String with long description",
						"description": "A very long description text that should wrap into the next line",
						"translatable": true
					},
					"stringWithTranslatedValue": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithTranslatedValue/value",
						"type": "string",
						"label": "String with translated value",
						"translatable": true
					},
					"stringWithTranslatedDTDefaultValue": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithTranslatedDTDefaultValue/value",
						"type": "string",
						"label": "String with translated value",
						"defaultValue": "{i18n>TRANSLATED_STRING_VALUE}",
						"translatable": true
					},
					"integer": {
						"manifestpath": "/sap.card/configuration/parameters/integer/value",
						"defaultValue": 1,
						"type": "integer",
						"visualization": {
							"type": Slider,
							"settings": {
								"value": "{currentSettings>value}",
								"min": 0,
								"max": 10,
								"width": "100%",
								"showAdvancedTooltip": true,
								"showHandleTooltip": false,
								"inputsAsTooltips": true
							}
						}
					},
					"integerLabel": {
						"manifestpath": "/sap.card/configuration/parameters/integerLabel/value",
						"defaultValue": 1,
						"type": "integer",
						"label": "Direct Integer Label"
					},
					"integerLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/integerLabelTrans/value",
						"defaultValue": 1,
						"type": "integer",
						"label": "{i18n>TRANSLATED_INTEGER_LABEL}"
					},
					"number": {
						"manifestpath": "/sap.card/configuration/parameters/number/value",
						"defaultValue": 1.5,
						"type": "number"
					},
					"numberLabel": {
						"manifestpath": "/sap.card/configuration/parameters/numberLabel/value",
						"defaultValue": 1.5,
						"type": "number",
						"label": "Direct number Label"
					},
					"numberLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/numberLabelTrans/value",
						"defaultValue": 1.5,
						"type": "number",
						"label": "{i18n>TRANSLATED_NUMBER_LABEL}"
					},
					"boolean": {
						"manifestpath": "/sap.card/configuration/parameters/boolean/value",
						"defaultValue": false,
						"type": "boolean",
						"visualization": {
							"type": Switch,
							"settings": {
								"state": "{currentSettings>value}",
								"customTextOn": "Yes",
								"customTextOff": "No"
							}
						}
					},
					"booleanLabel": {
						"manifestpath": "/sap.card/configuration/parameters/booleanLabel/value",
						"defaultValue": true,
						"type": "boolean",
						"label": "Direct Boolean Label"
					},
					"booleanLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/booleanLabelTrans/value",
						"defaultValue": false,
						"type": "boolean",
						"label": "{i18n>TRANSLATED_BOOLEAN_LABEL}"
					},
					"date": {
						"manifestpath": "/sap.card/configuration/parameters/date/value",
						"defaultValue": "2020-09-02",
						"type": "date"
					},
					"dateLabel": {
						"manifestpath": "/sap.card/configuration/parameters/dateLabel/value",
						"defaultValue": "2020-09-02",
						"type": "date",
						"label": "Direct Date Label"
					},
					"dateLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/dateLabelTrans/value",
						"defaultValue": "2020-09-02",
						"type": "date",
						"label": "{i18n>TRANSLATED_DATE_LABEL}"
					},
					"dateTime": {
						"manifestpath": "/sap.card/configuration/parameters/dateTime/value",
						"defaultValue": "2020-09-02T11:21:51.470Z",
						"type": "datetime"
					},
					"dateTimeLabel": {
						"manifestpath": "/sap.card/configuration/parameters/dateTimeLabel/value",
						"defaultValue": "2020-09-02T11:21:51.470Z",
						"type": "datetime",
						"label": "Direct Date Time Label"
					},
					"dateTimeLabelTrans": {
						"manifestpath": "/sap.card/configuration/parameters/dateTimeLabelTrans/value",
						"defaultValue": "2020-09-02T11:21:51.470Z",
						"type": "datetime",
						"label": "{i18n>TRANSLATED_DATETIME_LABEL}"
					},
					"stringWithStaticList": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithStaticList/value",
						"type": "string",
						"values": {
							"data": {
								"json": [
									{ "text": "text1", "key": "key1", "additionalText": "addtext1", "icon": "sap-icon://accept" },
									{ "text": "text2", "key": "key2", "additionalText": "addtext2", "icon": "sap-icon://cart" },
									{ "text": "text3", "key": "key3", "additionalText": "addtext3", "icon": "sap-icon://zoom-in" }
								],
								"path": "/"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringWithRequestList": {
						"manifestpath": "/sap.card/configuration/parameters/stringWithRequestList/value",
						"type": "string",
						"values": {
							"data": {
								"request": {
									"url": "./stringWithRequestList.json"
								},
								"path": "/"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringArray": {
						"manifestpath": "/sap.card/configuration/parameters/stringArray/value",
						"label": "String Array",
						"defaultValue": ["key1", "key2"],
						"type": "string[]",
						"values": {
							"data": {
								"json": [
									{ "text": "text1", "key": "key1", "additionalText": "addtext1", "icon": "sap-icon://accept" },
									{ "text": "text2", "key": "key2", "additionalText": "addtext2", "icon": "sap-icon://cart" },
									{ "text": "text3", "key": "key3", "additionalText": "addtext3", "icon": "sap-icon://zoom-in" }
								],
								"path": "/"
							},
							"item": {
								"text": "{text}",
								"key": "{key}",
								"additionalText": "{additionalText}",
								"icon": "{icon}"
							}
						}
					},
					"stringArrayNoValues": {
						"manifestpath": "/sap.card/configuration/parameters/stringArrayNoValues/value",
						"label": "String Array With No Values",
						"defaultValue": ["key1", "key2"],
						"type": "string[]"
					}
				}
			},
			preview: {
				modes: "Abstract"
			}
		};
	};
	return AdvancedDesigntime;
});


