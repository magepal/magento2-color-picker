<a href="https://www.magepal.com" title="Magento Extensions" ><img src="https://image.ibb.co/dHBkYH/Magepal_logo.png" width="100" align="right" title="Magento Custom Modules" /></a>

# MagePal Magento 2 System.xml Color Picker:

![Magento 2 System.xml Color Picker](https://user-images.githubusercontent.com/1415141/103137294-b1ae6580-4695-11eb-960f-f8ada7c94516.png)

### Installation

#### Step 1

##### Using Composer (recommended)

```
composer require magepal/magento2-color-picker
```

##### Manually
* Download the extension
* Unzip the file
* Create a folder {Magento 2 root}/app/code/MagePal/ColorPicker
* Copy the content from the unzip folder


#### Step 2 - Enable extension ("cd" to {Magento root} folder)
```
  php -f bin/magento module:enable --clear-static-content MagePal_ColorPicker
  php -f bin/magento setup:upgrade
```


### Usage
```xml
<field id="color_picker" translate="label" type="text" sortOrder="2" showInDefault="1" showInWebsite="1" showInStore="1">
    <label>Color Picker</label>
    <frontend_model>MagePal\ColorPicker\Model\Config\Source\ColorPicker</frontend_model>
</field>
```

---
- [Custom SMTP](https://www.magepal.com/magento2/extensions/custom-smtp.html)
- [Catalog Hover Image for Magento](https://www.magepal.com/magento2/extensions/catalog-hover-image-for-magento.html)
- [Enhanced Success Page for Magento 2](https://www.magepal.com/magento2/extensions/enhanced-success-page.html)
- [Enhanced Transactional Emails for Magento 2](https://www.magepal.com/magento2/extensions/enhanced-transactional-emails.html)
- [Google Tag Manager](https://www.magepal.com/magento2/extensions/google-tag-manager.html) 
- [Enhanced E-commerce](https://www.magepal.com/magento2/extensions/enhanced-ecommerce-for-google-tag-manager.html) 
- [Reindex](https://www.magepal.com/magento2/extensions/reindex.html) 
- [Custom Shipping Method](https://www.magepal.com/magento2/extensions/custom-shipping-rates-for-magento-2.html) 
- [Preview Order Confirmation](https://www.magepal.com/magento2/extensions/preview-order-confirmation-page-for-magento-2.html)
- [Guest to Customer](https://www.magepal.com/magento2/extensions/guest-to-customer.html) 
- [Admin Form Fields Manager](https://www.magepal.com/magento2/extensions/admin-form-fields-manager-for-magento-2.html) 
- [Customer Dashboard Links Manager](https://www.magepal.com/magento2/extensions/customer-dashboard-links-manager-for-magento-2.html) 
- [Lazy Loader](https://www.magepal.com/magento2/extensions/lazy-load.html) 
- [Order Confirmation Page Miscellaneous Scripts](https://www.magepal.com/magento2/extensions/order-confirmation-miscellaneous-scripts-for-magento-2.html)
- [HTML Minifier for Magento2](https://www.magepal.com/magento2/extensions/html-minifier.html)

© MagePal LLC. | [www.magepal.com](https://www.magepal.com)
