const beianOptions = {
    debug: false,
    align: "left",
	ICP: "",
    NISMSP: {
        text: "",
        url: "",
        code: "",
    },
};

function buildBeian() {
	var beian = "";

    // NISMSP
    if (beianOptions.NISMSP && beianOptions.NISMSP.text.length >= 0 && (beianOptions.NISMSP.code.length !== 0 || beianOptions.NISMSP.url.length !== 0)) {
        beian += '<a style="text-decoration: none; color: #34495e; font-size: 15px; font-weight: 400;" href="';
        if (beianOptions.NISMSP.code) {
            beian += 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + beianOptions.NISMSP.code + '" ';
        } else if (beianOptions.NISMSP.url) {
            beian += beianOptions.NISMSP.url;
        } else {
        }
        beian += 'target="_blank">';
        beian += '<img style="width: 15px; height: 15px;" src="http://www.beian.gov.cn/img/new/gongan.png" alt="全国互联网安全" />' + beianOptions.NISMSP.text + '</a>';
        beian += '&nbsp;&nbsp;'
    }

    // ICP
    if (beianOptions.ICP) {
        beian += '<a style="text-decoration: none; color: #34495e; font-size: 15px; font-weight: 400;" href="https://beian.miit.gov.cn/" target="_blank">' + beianOptions.ICP + '</a>';
    }

    beian = beian ? '<div id="beian" style="text-align: ' + beianOptions.align + ';">' + beian + '</div>' : "";
	return beian
}

function plugin(hook, vm) {
    hook.doneEach(function() {
		var _beian = document.getElementById("beian");
        beian_debug("_beian")
        beian_debug(_beian)
		if (!_beian) {
            // find all footer elem
            var _footer = document.getElementsByTagName("footer");
            beian_debug("_footer")
            beian_debug(_footer.length)

            if (!_footer.length) {
                // add a footer
                beian_debug("add a footer")
                var node = document.getElementById("main").parentNode;
                var footer = "";
                footer += '<footer id="beianFooter"></footer>';
                node.innerHTML += footer;
            }

            // get first footer elem
            var _footer = document.getElementsByTagName("footer");
            var node = _footer[0];
			if (!node) {
				beian_error("node not found!");
				return
			}

            // add new item to node
            var beian = undefined;
			node.innerHTML += beian ? beian : buildBeian();
		}
	})
}

function beian_debug(msg) {
	if (beianOptions.debug) console.log("[beian] log: " + msg)
}
function beian_error(msg) {
	console.error("[beian] err: " + msg)
}

window.$docsify.beian = Object.assign(beianOptions, window.$docsify.beian);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)