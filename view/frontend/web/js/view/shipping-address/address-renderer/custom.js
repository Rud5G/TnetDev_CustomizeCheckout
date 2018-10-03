define([
    'ko',
    'uiComponent',
    'Magento_Checkout/js/action/select-shipping-address',
    'Magento_Checkout/js/model/quote'
], function(ko, Component, selectShippingAddressAction, quote) {
    'use strict';
    return Component.extend({
        defaults: {
            // template: 'Magento_Checkout/shipping-address/address-renderer/default'
            template: 'TnetDev_CustomizeCheckout/shipping-address/address-renderer/custom'
        },

        initProperties: function () {
            this._super();
            this.isSelected = ko.computed(function() {
                var isSelected = false;
                var shippingAddress = quote.shippingAddress();
                if (shippingAddress) {
                    isSelected = shippingAddress.getKey() == this.address().getKey(); //eslint-disable-line eqeqeq
                }
                return isSelected;
            }, this);

            return this;
        },

        /** Set selected customer shipping address  */
        selectAddress: function() {
            selectShippingAddressAction(this.address());
        },

        /** additional logic required for this renderer  **/

    });
});