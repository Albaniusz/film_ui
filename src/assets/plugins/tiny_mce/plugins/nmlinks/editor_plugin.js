(function() {
	tinymce.create('tinymce.plugins.NMlinksPlugin', {
		init : function(ed, url) {
			// Register command
			ed.addCommand('mceNMlinks', function() {
				ed.windowManager.open({
					file : rootAdminUrl + 'cms/tinymce/links/',
					width : 360 + parseInt(ed.getLang('nmlinks.delta_width', 0)),
					height : 230 + parseInt(ed.getLang('nmlinks.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register button
			ed.addButton('nmlinks', {
				title : 'nmlinks.desc',
				cmd : 'mceNMlinks',
				image : url + '/images/link.gif'
			});

			// Add shortcut
			ed.addShortcut('ctrl+k', 'nmlinks.desc', 'mceNMlinks');

			// Add a node change handler
			ed.onNodeChange.add(function(ed, cm, n, co) {
				cm.setDisabled('nmlinks', co && n.nodeName != 'A');
				cm.setActive('nmlinks', n.nodeName == 'A');
			});
		},

		getInfo : function() {
			return {
				longname : '',
				author : '',
				authorurl : '',
				infourl : '',
				version : ''
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('nmlinks', tinymce.plugins.NMlinksPlugin);
})();
