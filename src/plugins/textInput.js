bb.textInput = {
    apply: function(elements) {
        if (bb.device.isBB5()) {
            for (var i = 0; i < elements.length; i++) {
                var outerElement = elements[i];
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                var outerElement = elements[i],
                    style = 'bb-bb7-input';
                
                if (bb.device.isHiRes) {
                    style = style + ' bb-bb7-input-hires';
                } else {
                    style = style + ' bb-bb7-input-lowres';
                }
                // Apply our style
                outerElement.setAttribute('class', style);
            }
        }
    }
};
