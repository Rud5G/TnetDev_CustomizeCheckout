var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'TnetDev_CustomizeCheckout/js/view/shipping-payment-mixin': true,
            },
            'Magento_Checkout/js/view/payment': {
                'TnetDev_CustomizeCheckout/js/view/shipping-payment-mixin': true,
            },
        },
    },
};
