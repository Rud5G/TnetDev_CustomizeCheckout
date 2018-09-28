<?php

namespace TnetDev\CustomizeCheckout\Plugin\Block\Checkout;

class LayoutProcessorPlugin
{
    /**
     * Add custom field to shipping
     *
     * @param \Magento\Checkout\Block\Checkout\LayoutProcessor $subject
     * @param array $jsLayout
     * @return array
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterProcess(
        \Magento\Checkout\Block\Checkout\LayoutProcessor $subject,
        $jsLayout
    ) {

        $customAttributeCode = 'custom_field';
        $customField = [
            'component' => 'Magento_Ui/js/form/element/abstract',
            'config' => [
                // customScope is used to group elements within a single form (e.g. they can be validated separately)
                'customScope' => 'shippingAddress.custom_attributes',
                'customEntry' => null,
                'template' => 'ui/form/field',
                'elementTmpl' => 'ui/form/element/input',
//                'tooltip' => [
//                    'description' => 'this is what the field is for',
//                ],
            ],
            'dataScope' => sprintf('shippingAddress.custom_attributes.%s', $customAttributeCode),
            'label' => 'Custom Attribute',
            'provider' => 'checkoutProvider',
            'sortOrder' => 9999,
            'validation' => [
                'required-entry' => false
            ],
            'options' => [
                ''
            ],
            'filterBy' => null,
            'customEntry' => null,
            'visible' => true,
        ];

        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children'][$customAttributeCode] = $customField;

        return $jsLayout;
    }
}