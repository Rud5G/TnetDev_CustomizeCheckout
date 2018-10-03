define([
    'Magento_Ui/js/form/element/single-checkbox',
    'mage/translate'
], function (AbstractField, $t) {
    'use strict';

    return AbstractField.extend({
        defaults: {
            streetLabels: [$t('Company / Section / Unit'), $t('Post Sector Type'), $t('Post Sector')],
            modules: {
                street: '${ $.parentName }.street',
                city: '${ $.parentName }.city',
                country: '${ $.parentName }.country_id'
            }
        },

        updateStreetLabels: function () {
            if (this.value()) {
                this.street().elems.each(function (street, key) {
                    this.street().elems()[key].set('label', this.streetLabels[key]);
                }.bind(this));
            } else {
                this.street().elems.each(function (street, key) {
                    this.street().elems()[key].set('label', '');
                }.bind(this));
            }
        },

        updateCity: function () {
            if (this.value()) {
                this.city().value('Kyiv');
                this.city().disabled(true);
            } else {
                this.city().value('');
                this.city().disabled(false);
            }
        },

        updateCountry: function () {
            if (this.value()) {
                this.country().value('UA');
                this.country().disabled(true);
            } else {
                this.country().value('');
                this.country().disabled(false);
            }
        },

        onCheckedChanged: function () {
            this._super();
            this.updateStreetLabels();
            this.updateCity();
            this.updateCountry();
        }
    });
});