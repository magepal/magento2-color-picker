/**
 * Copyright © MagePal LLC. All rights reserved.
 * See COPYING.txt for license details.
 * https://www.magepal.com | support@magepal.com
 */

define(["jquery", "jquery/colorpicker/js/colorpicker", "domReady!"], function ($) {
    return function (config, element) {
        var $el = $(element);
        $el.css("backgroundColor", config.color);
        $el.ColorPicker({
            color: config.color,
            onChange: function (hsb, hex, rgb) {
                $el.css("backgroundColor", "#" + hex).val("#" + hex);
            }
        });
    }
})
