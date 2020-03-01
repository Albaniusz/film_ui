(function() {
	tinymce.create('tinymce.plugins.NMCMSPlugin', {
		init : function(ed, url) {
			ed.addCommand('mceNMCMSLink', function() {
				ed.windowManager.open({
					file : '/admin/cms/tinymce/link/',
					width : 650,
					height : 425,					
					inline : 1
				},
				{
					plugin_url : url
				});
			});
			ed.addButton('NMCMSLink', {
				title : 'nmcms.link_desc',
				cmd : 'mceNMCMSLink',
				image : url + '/img/link.gif'
			});
			ed.addShortcut('ctrl+k', 'nmcms.link_desc', 'mceNMCMSLink');
			ed.onNodeChange.add(function(ed, cm, n, co) {
				cm.setDisabled('NMCMSLink', co && n.nodeName != 'A');
				cm.setActive('NMCMSLink', n.nodeName == 'A');
			});
			ed.addCommand('mceNMCMSImage', function() {
				// Internal image object like a flash placeholder
				if (ed.dom.getAttrib(ed.selection.getNode(), 'class').indexOf('mceItem') != -1) {
					return;
				}
				ed.windowManager.open({
					file : url + '/image.htm',
					width : 670,
					height : 560,
					inline : 1
				}, {
					plugin_url : url
				});
			});
			ed.addButton('NMCMSImage', {
				title : 'nmcms.image_desc',
				cmd : 'mceNMCMSImage',
				image : url + '/img/image.gif'
			});
		},
		getInfo : function() {
			return {
				longname : 'NMMCMS plugin',
				author : 'Filip Turkiewicz',
				authorurl : '',
				infourl : '',
				version : '1.0.0'
			};
		}
	});
	tinymce.PluginManager.add('NMCMS', tinymce.plugins.NMCMSPlugin);
})();