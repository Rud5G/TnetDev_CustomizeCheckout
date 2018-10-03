define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rate-service',
        'TnetDev_CustomizeCheckout/js/model/shipping-rate-processor/custom-address', // %custom shipping rate processor%
        'Magento_Checkout/js/model/shipping-save-processor',
        'TnetDev_CustomizeCheckout/js/model/shipping-save-processor/custom' // %custom shipping save processor%
    ],
    function (
        Component,
        shippingRateService,
        customShippingRateProcessor,
        shippingSaveProcessor,
        customShippingSaveProcessor
    ) {
        'use strict';

        /** Register rate processor */
        shippingRateService.registerProcessor('custom-address', customShippingRateProcessor);

        /** Register save shipping address processor */
        shippingSaveProcessor.registerProcessor('custom-address', customShippingSaveProcessor);

        /** Add view logic here if needed */
        return Component.extend({});
    }
);