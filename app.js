/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Rackspace Web Team
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
});

jQuery(function($) {

	var getSubdomain = function(domain) {
	    if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(domain)) {
	        // Looks like an IP address, so return as-is.
	        return domain;
	    }
	    var parts = domain.split(".");
	    if (parts.length <= 2) {
	        return parts.join(".");
	    } else {
	        return parts.slice(0, -2).join(".");
	    }
	};

	var domain = getSubdomain(window.location.hostname);
	    var doonyTitleLink = $('#jenkins-home-link');
	    if (doonyTitleLink.length === 0) {
	        doonyTitleLink = $("#top-panel a").first();
	        doonyTitleLink.html("<div id='doony-title'>" + domain + "</div>");
	    } else {
	        doonyTitleLink.html(domain);
	        if (doonyTitleLink.parent("td").length === 0) {
	            // ugh, hack
	            doonyTitleLink.addClass("new-header-link");
	        }
	    }

	var color = colors[Math.abs(hashCode(domain)) % colors.length];
	$("#top-panel, #header").css('background-color', color);
});
