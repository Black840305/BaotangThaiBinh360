// Garden Gnome Software - Skin
// Pano2VR 7.1.6/20966
// Filename: 
// Generated 2024-12-06T15:55:55

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu_left', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu_right', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_back', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_back_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_desc_in_maps', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_auto_rot', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('shift_left_slider', 1, 0, { ignoreInState: 1  });
	player.addVariable('width_share_container', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('node_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('kb_accessibility', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, true, { ignoreInState: 0  });
	player.addVariable('categories_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('categories_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('resp_phone_1', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_2', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_3', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_categories_1', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_4', 2, false, { ignoreInState: 1  });
	player.addVariable('menu_open', 2, false, { ignoreInState: 1  });
	player.addVariable('menu_touch', 2, false, { ignoreInState: 1  });
	player.addVariable('menu_cloner', 1, 0, { ignoreInState: 0  });
	player.addVariable('category_var', 0, "", { ignoreInState: 0  });
	player.addVariable('open_tag', 0, "", { ignoreInState: 0  });
	player.addVariable('close_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('category_visible', 2, true, { ignoreInState: 1  });
	player.addVariable('category_follow', 2, true, { ignoreInState: 1  });
	player.addVariable('dayNightState', 2, false, { ignoreInState: 0  });
	player.addVariable('dayNight_hide', 2, true, { ignoreInState: 0  });
	player.addVariable('isDay', 2, true, { ignoreInState: 0  });
	player.addVariable('Show_hide_main_controller', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_Image', 2, false, { ignoreInState: 0  });
	player.addVariable('object', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('3d_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('modelID', 0, "", { ignoreInState: 0  });
	player.addVariable('var2', 1, 0, { ignoreInState: 0  });
	player.addVariable('var3', 1, 0, { ignoreInState: 0  });
	player.addVariable('var4', 1, 0, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_share') == false)) && 
				((player.getVariableValue('vis_phone_languages') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_opt_back_available = {};
		me._variable_opt_back_available.ggCurrentLogicState = -1;
		me._variable_opt_back_available.logicBlock = function() {
			var newLogicState_opt_back_available;
			if (
				((player.getVariableValue('opt_back') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicState_opt_back_available = 0;
			}
			else {
				newLogicState_opt_back_available = -1;
			}
			if (me._variable_opt_back_available.ggCurrentLogicState != newLogicState_opt_back_available) {
				me._variable_opt_back_available.ggCurrentLogicState = newLogicState_opt_back_available;
				if (me._variable_opt_back_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_back_available', true);
				}
				else {
					player.setVariableValue('opt_back_available', false);
				}
			}
		}
		me._variable_opt_info_available = {};
		me._variable_opt_info_available.ggCurrentLogicState = -1;
		me._variable_opt_info_available.logicBlock = function() {
			var newLogicState_opt_info_available;
			if (
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicState_opt_info_available = 0;
			}
			else {
				newLogicState_opt_info_available = -1;
			}
			if (me._variable_opt_info_available.ggCurrentLogicState != newLogicState_opt_info_available) {
				me._variable_opt_info_available.ggCurrentLogicState = newLogicState_opt_info_available;
				if (me._variable_opt_info_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_info_available', true);
				}
				else {
					player.setVariableValue('opt_info_available', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_1 = {};
		me._variable_resp_phone_1.ggCurrentLogicState = -1;
		me._variable_resp_phone_1.logicBlock = function() {
			var newLogicState_resp_phone_1;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_1 = 0;
			}
			else {
				newLogicState_resp_phone_1 = -1;
			}
			if (me._variable_resp_phone_1.ggCurrentLogicState != newLogicState_resp_phone_1) {
				me._variable_resp_phone_1.ggCurrentLogicState = newLogicState_resp_phone_1;
				if (me._variable_resp_phone_1.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_1', true);
				}
				else {
					player.setVariableValue('resp_phone_1', false);
				}
			}
		}
		me._variable_resp_phone_2 = {};
		me._variable_resp_phone_2.ggCurrentLogicState = -1;
		me._variable_resp_phone_2.logicBlock = function() {
			var newLogicState_resp_phone_2;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_2 = 0;
			}
			else {
				newLogicState_resp_phone_2 = -1;
			}
			if (me._variable_resp_phone_2.ggCurrentLogicState != newLogicState_resp_phone_2) {
				me._variable_resp_phone_2.ggCurrentLogicState = newLogicState_resp_phone_2;
				if (me._variable_resp_phone_2.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_2', true);
				}
				else {
					player.setVariableValue('resp_phone_2', false);
				}
			}
		}
		me._variable_resp_phone_3 = {};
		me._variable_resp_phone_3.ggCurrentLogicState = -1;
		me._variable_resp_phone_3.logicBlock = function() {
			var newLogicState_resp_phone_3;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_3 = 0;
			}
			else {
				newLogicState_resp_phone_3 = -1;
			}
			if (me._variable_resp_phone_3.ggCurrentLogicState != newLogicState_resp_phone_3) {
				me._variable_resp_phone_3.ggCurrentLogicState = newLogicState_resp_phone_3;
				if (me._variable_resp_phone_3.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_3', true);
				}
				else {
					player.setVariableValue('resp_phone_3', false);
				}
			}
		}
		me._variable_resp_phone_4 = {};
		me._variable_resp_phone_4.ggCurrentLogicState = -1;
		me._variable_resp_phone_4.logicBlock = function() {
			var newLogicState_resp_phone_4;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_4 = 0;
			}
			else {
				newLogicState_resp_phone_4 = -1;
			}
			if (me._variable_resp_phone_4.ggCurrentLogicState != newLogicState_resp_phone_4) {
				me._variable_resp_phone_4.ggCurrentLogicState = newLogicState_resp_phone_4;
				if (me._variable_resp_phone_4.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_4', true);
				}
				else {
					player.setVariableValue('resp_phone_4', false);
				}
			}
		}
		el=me._binhtrangmen_3d=document.createElement('div');
		el.ggId="BinhTrangMen_3D";
		el.ggDx=0;
		el.ggDy=-0.13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) - 0.13%);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._binhtrangmen_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._binhtrangmen_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._binhtrangmen=document.createElement('div');
		els=me._binhtrangmen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="BinhTrangMen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._binhtrangmen.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\".\/loadModel\/3dmodel.html?modelID=Binh trang men\"  width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\" ><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._binhtrangmen.ggUpdateText();
		el.appendChild(els);
		me._binhtrangmen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._binhtrangmen.ggUpdatePosition=function (useTransition) {
		}
		me._binhtrangmen_3d.appendChild(me._binhtrangmen);
		el=me._close_btn0=document.createElement('div');
		els=me._close_btn0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn0.style.transition='transform 0s';
				if (me._close_btn0.ggCurrentLogicStateScaling == 0) {
					me._close_btn0.ggParameter.sx = 1.1;
					me._close_btn0.ggParameter.sy = 1.1;
					me._close_btn0.style.transform=parameterToTransform(me._close_btn0.ggParameter);
					skin.updateSize(me._close_btn0);
				}
				else {
					me._close_btn0.ggParameter.sx = 1;
					me._close_btn0.ggParameter.sy = 1;
					me._close_btn0.style.transform=parameterToTransform(me._close_btn0.ggParameter);
					skin.updateSize(me._close_btn0);
				}
			}
		}
		me._close_btn0.logicBlock_scaling();
		me._close_btn0.onclick=function (e) {
			me._binhtrangmen_3d.style.transition='none';
			me._binhtrangmen_3d.style.visibility='hidden';
			me._binhtrangmen_3d.ggVisible=false;
		}
		me._close_btn0.onmouseenter=function (e) {
			me.elementMouseOver['close_btn0']=true;
			me._close_btn0.logicBlock_scaling();
		}
		me._close_btn0.onmouseleave=function (e) {
			me.elementMouseOver['close_btn0']=false;
			me._close_btn0.logicBlock_scaling();
		}
		me._close_btn0.ggUpdatePosition=function (useTransition) {
		}
		me._binhtrangmen_3d.appendChild(me._close_btn0);
		me.divSkin.appendChild(me._binhtrangmen_3d);
		el=me._chandenthoimac_3d=document.createElement('div');
		el.ggId="ChandenThoiMac_3D";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chandenthoimac_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._chandenthoimac_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._chandenthoimac=document.createElement('div');
		els=me._chandenthoimac__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ChanDenThoiMac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._chandenthoimac.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\".\/loadModel\/3dmodel.html?modelID=Chan Den Thoi Mac\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\"><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._chandenthoimac.ggUpdateText();
		el.appendChild(els);
		me._chandenthoimac.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._chandenthoimac.ggUpdatePosition=function (useTransition) {
		}
		me._chandenthoimac_3d.appendChild(me._chandenthoimac);
		el=me._close_btn1=document.createElement('div');
		els=me._close_btn1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn1.style.transition='transform 0s';
				if (me._close_btn1.ggCurrentLogicStateScaling == 0) {
					me._close_btn1.ggParameter.sx = 1.1;
					me._close_btn1.ggParameter.sy = 1.1;
					me._close_btn1.style.transform=parameterToTransform(me._close_btn1.ggParameter);
					skin.updateSize(me._close_btn1);
				}
				else {
					me._close_btn1.ggParameter.sx = 1;
					me._close_btn1.ggParameter.sy = 1;
					me._close_btn1.style.transform=parameterToTransform(me._close_btn1.ggParameter);
					skin.updateSize(me._close_btn1);
				}
			}
		}
		me._close_btn1.logicBlock_scaling();
		me._close_btn1.onclick=function (e) {
			me._chandenthoimac_3d.style.transition='none';
			me._chandenthoimac_3d.style.visibility='hidden';
			me._chandenthoimac_3d.ggVisible=false;
		}
		me._close_btn1.onmouseenter=function (e) {
			me.elementMouseOver['close_btn1']=true;
			me._close_btn1.logicBlock_scaling();
		}
		me._close_btn1.onmouseleave=function (e) {
			me.elementMouseOver['close_btn1']=false;
			me._close_btn1.logicBlock_scaling();
		}
		me._close_btn1.ggUpdatePosition=function (useTransition) {
		}
		me._chandenthoimac_3d.appendChild(me._close_btn1);
		me.divSkin.appendChild(me._chandenthoimac_3d);
		el=me._chanden_3d=document.createElement('div');
		el.ggId="ChanDen_3D";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chanden_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._chanden_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._chanden=document.createElement('div');
		els=me._chanden__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ChanDen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._chanden.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\".\/loadModel\/3dmodel.html?modelID=Chan Den\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\"><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._chanden.ggUpdateText();
		el.appendChild(els);
		me._chanden.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._chanden.ggUpdatePosition=function (useTransition) {
		}
		me._chanden_3d.appendChild(me._chanden);
		el=me._close_btn2=document.createElement('div');
		els=me._close_btn2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn2.style.transition='transform 0s';
				if (me._close_btn2.ggCurrentLogicStateScaling == 0) {
					me._close_btn2.ggParameter.sx = 1.1;
					me._close_btn2.ggParameter.sy = 1.1;
					me._close_btn2.style.transform=parameterToTransform(me._close_btn2.ggParameter);
					skin.updateSize(me._close_btn2);
				}
				else {
					me._close_btn2.ggParameter.sx = 1;
					me._close_btn2.ggParameter.sy = 1;
					me._close_btn2.style.transform=parameterToTransform(me._close_btn2.ggParameter);
					skin.updateSize(me._close_btn2);
				}
			}
		}
		me._close_btn2.logicBlock_scaling();
		me._close_btn2.onclick=function (e) {
			me._chanden_3d.style.transition='none';
			me._chanden_3d.style.visibility='hidden';
			me._chanden_3d.ggVisible=false;
		}
		me._close_btn2.onmouseenter=function (e) {
			me.elementMouseOver['close_btn2']=true;
			me._close_btn2.logicBlock_scaling();
		}
		me._close_btn2.onmouseleave=function (e) {
			me.elementMouseOver['close_btn2']=false;
			me._close_btn2.logicBlock_scaling();
		}
		me._close_btn2.ggUpdatePosition=function (useTransition) {
		}
		me._chanden_3d.appendChild(me._close_btn2);
		me.divSkin.appendChild(me._chanden_3d);
		el=me._daurong_3d=document.createElement('div');
		el.ggId="DauRong_3D";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._daurong_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._daurong_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._daurong=document.createElement('div');
		els=me._daurong__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="DauRong";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._daurong.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\".\/loadModel\/3dmodel.html?modelID=Dau Rong\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\"><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._daurong.ggUpdateText();
		el.appendChild(els);
		me._daurong.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._daurong.ggUpdatePosition=function (useTransition) {
		}
		me._daurong_3d.appendChild(me._daurong);
		el=me._close_btn3=document.createElement('div');
		els=me._close_btn3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn3'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn3.style.transition='transform 0s';
				if (me._close_btn3.ggCurrentLogicStateScaling == 0) {
					me._close_btn3.ggParameter.sx = 1.1;
					me._close_btn3.ggParameter.sy = 1.1;
					me._close_btn3.style.transform=parameterToTransform(me._close_btn3.ggParameter);
					skin.updateSize(me._close_btn3);
				}
				else {
					me._close_btn3.ggParameter.sx = 1;
					me._close_btn3.ggParameter.sy = 1;
					me._close_btn3.style.transform=parameterToTransform(me._close_btn3.ggParameter);
					skin.updateSize(me._close_btn3);
				}
			}
		}
		me._close_btn3.logicBlock_scaling();
		me._close_btn3.onclick=function (e) {
			me._daurong_3d.style.transition='none';
			me._daurong_3d.style.visibility='hidden';
			me._daurong_3d.ggVisible=false;
		}
		me._close_btn3.onmouseenter=function (e) {
			me.elementMouseOver['close_btn3']=true;
			me._close_btn3.logicBlock_scaling();
		}
		me._close_btn3.onmouseleave=function (e) {
			me.elementMouseOver['close_btn3']=false;
			me._close_btn3.logicBlock_scaling();
		}
		me._close_btn3.ggUpdatePosition=function (useTransition) {
		}
		me._daurong_3d.appendChild(me._close_btn3);
		me.divSkin.appendChild(me._daurong_3d);
		el=me._maychieuphim_3d=document.createElement('div');
		el.ggId="MayChieuPhim_3D";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._maychieuphim_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._maychieuphim_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._maychieuphim=document.createElement('div');
		els=me._maychieuphim__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="MayChieuPhim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._maychieuphim.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\".\/loadModel\/3dmodel.html?modelID=May Chieu Phim\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\"\nborder : none><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._maychieuphim.ggUpdateText();
		el.appendChild(els);
		me._maychieuphim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._maychieuphim.ggUpdatePosition=function (useTransition) {
		}
		me._maychieuphim_3d.appendChild(me._maychieuphim);
		el=me._close_btn4=document.createElement('div');
		els=me._close_btn4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn4'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn4.style.transition='transform 0s';
				if (me._close_btn4.ggCurrentLogicStateScaling == 0) {
					me._close_btn4.ggParameter.sx = 1.1;
					me._close_btn4.ggParameter.sy = 1.1;
					me._close_btn4.style.transform=parameterToTransform(me._close_btn4.ggParameter);
					skin.updateSize(me._close_btn4);
				}
				else {
					me._close_btn4.ggParameter.sx = 1;
					me._close_btn4.ggParameter.sy = 1;
					me._close_btn4.style.transform=parameterToTransform(me._close_btn4.ggParameter);
					skin.updateSize(me._close_btn4);
				}
			}
		}
		me._close_btn4.logicBlock_scaling();
		me._close_btn4.onclick=function (e) {
			me._maychieuphim_3d.style.transition='none';
			me._maychieuphim_3d.style.visibility='hidden';
			me._maychieuphim_3d.ggVisible=false;
		}
		me._close_btn4.onmouseenter=function (e) {
			me.elementMouseOver['close_btn4']=true;
			me._close_btn4.logicBlock_scaling();
		}
		me._close_btn4.onmouseleave=function (e) {
			me.elementMouseOver['close_btn4']=false;
			me._close_btn4.logicBlock_scaling();
		}
		me._close_btn4.ggUpdatePosition=function (useTransition) {
		}
		me._maychieuphim_3d.appendChild(me._close_btn4);
		me.divSkin.appendChild(me._maychieuphim_3d);
		el=me._ngaitho_3d=document.createElement('div');
		el.ggId="NgaiTho_3D";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ngaitho_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ngaitho_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._ngaitho=document.createElement('div');
		els=me._ngaitho__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="NgaiTho";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ngaitho.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\".\/loadModel\/3dmodel.html?modelID=Ngai tho\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\"><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ngaitho.ggUpdateText();
		el.appendChild(els);
		me._ngaitho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ngaitho.ggUpdatePosition=function (useTransition) {
		}
		me._ngaitho_3d.appendChild(me._ngaitho);
		el=me._close_btn5=document.createElement('div');
		els=me._close_btn5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn5'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn5.style.transition='transform 0s';
				if (me._close_btn5.ggCurrentLogicStateScaling == 0) {
					me._close_btn5.ggParameter.sx = 1.1;
					me._close_btn5.ggParameter.sy = 1.1;
					me._close_btn5.style.transform=parameterToTransform(me._close_btn5.ggParameter);
					skin.updateSize(me._close_btn5);
				}
				else {
					me._close_btn5.ggParameter.sx = 1;
					me._close_btn5.ggParameter.sy = 1;
					me._close_btn5.style.transform=parameterToTransform(me._close_btn5.ggParameter);
					skin.updateSize(me._close_btn5);
				}
			}
		}
		me._close_btn5.logicBlock_scaling();
		me._close_btn5.onclick=function (e) {
			me._ngaitho_3d.style.transition='none';
			me._ngaitho_3d.style.visibility='hidden';
			me._ngaitho_3d.ggVisible=false;
		}
		me._close_btn5.onmouseenter=function (e) {
			me.elementMouseOver['close_btn5']=true;
			me._close_btn5.logicBlock_scaling();
		}
		me._close_btn5.onmouseleave=function (e) {
			me.elementMouseOver['close_btn5']=false;
			me._close_btn5.logicBlock_scaling();
		}
		me._close_btn5.ggUpdatePosition=function (useTransition) {
		}
		me._ngaitho_3d.appendChild(me._close_btn5);
		me.divSkin.appendChild(me._ngaitho_3d);
		el=me._trongdongnho_3d=document.createElement('div');
		el.ggId="TrongDongNho_3D";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 100px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._trongdongnho_3d.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._trongdongnho_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._trongdongnho=document.createElement('div');
		els=me._trongdongnho__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TrongDongNho";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(95% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(95% - 100px) + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._trongdongnho.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe\nsrc=\".\/loadModel\/3dmodel.html?modelID=Trong Dong Nho\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder=\"0\"><\/iframe>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._trongdongnho.ggUpdateText();
		el.appendChild(els);
		me._trongdongnho.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._trongdongnho.ggUpdatePosition=function (useTransition) {
		}
		me._trongdongnho_3d.appendChild(me._trongdongnho);
		el=me._close_btn6=document.createElement('div');
		els=me._close_btn6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._close_btn6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_btn6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0.2%;';
		hs+='top : 0.2%;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._close_btn6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_btn6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['close_btn6'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._close_btn6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._close_btn6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._close_btn6.style.transition='transform 0s';
				if (me._close_btn6.ggCurrentLogicStateScaling == 0) {
					me._close_btn6.ggParameter.sx = 1.1;
					me._close_btn6.ggParameter.sy = 1.1;
					me._close_btn6.style.transform=parameterToTransform(me._close_btn6.ggParameter);
					skin.updateSize(me._close_btn6);
				}
				else {
					me._close_btn6.ggParameter.sx = 1;
					me._close_btn6.ggParameter.sy = 1;
					me._close_btn6.style.transform=parameterToTransform(me._close_btn6.ggParameter);
					skin.updateSize(me._close_btn6);
				}
			}
		}
		me._close_btn6.logicBlock_scaling();
		me._close_btn6.onclick=function (e) {
			me._trongdongnho_3d.style.transition='none';
			me._trongdongnho_3d.style.visibility='hidden';
			me._trongdongnho_3d.ggVisible=false;
		}
		me._close_btn6.onmouseenter=function (e) {
			me.elementMouseOver['close_btn6']=true;
			me._close_btn6.logicBlock_scaling();
		}
		me._close_btn6.onmouseleave=function (e) {
			me.elementMouseOver['close_btn6']=false;
			me._close_btn6.logicBlock_scaling();
		}
		me._close_btn6.ggUpdatePosition=function (useTransition) {
		}
		me._trongdongnho_3d.appendChild(me._close_btn6);
		me.divSkin.appendChild(me._trongdongnho_3d);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi'+
			'AzNiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNlMjMwMzg7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxsaW5lIHgyPSIyNS41IiB5MT0iMTMuNSIgeTI9IjIyLjUiIHgxPSIzNC41IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4Mj0iMzQuNSIgeTE9IjEzLjUiIHkyPSIyMi41IiB4MT0iMjUuNSIgY2xhc3M9InN0MCIvPgo8'+
			'L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi'+
			'AzNiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxsaW5lIHgyPSIyNS41IiB5MT0iMTMuNSIgeTI9IjIyLjUiIHgxPSIzNC41IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4Mj0iMzQuNSIgeTE9IjEzLjUiIHkyPSIyMi41IiB4MT0iMjUuNSIgY2xhc3M9InN0MCIvPgo8'+
			'L3N2Zz4K';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._sounds_off.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._sounds_off.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._sounds_off.style.transition='';
				if (me._sounds_off.ggCurrentLogicStateTabIndex == 0) {
					me._sounds_off.setAttribute('tabindex', '-1');
				}
				else {
					me._sounds_off.setAttribute('tabindex', '0');
				}
			}
		}
		me._sounds_off.logicBlock_tabindex();
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi'+
			'AzNiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNlMjMwMzg7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxwYXRoIGQ9Ik0yOC42LDcuNGM1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi'+
			'AzNiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxwYXRoIGQ9Ik0yOC42LDcuNGM1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) - 60px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._sounds_on.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._sounds_on.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._sounds_on.style.transition='';
				if (me._sounds_on.ggCurrentLogicStateTabIndex == 0) {
					me._sounds_on.setAttribute('tabindex', '-1');
				}
				else {
					me._sounds_on.setAttribute('tabindex', '0');
				}
			}
		}
		me._sounds_on.logicBlock_tabindex();
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._controller_1=document.createElement('div');
		el.ggId="controller_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 9.96px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_3') == true)) || 
				((player.getOS() == 6)) || 
				((player.getOS() == 5))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_1.style.transition='opacity 0s';
				if (me._controller_1.ggCurrentLogicStateVisible == 0) {
					me._controller_1.style.visibility=(Number(me._controller_1.style.opacity)>0||!me._controller_1.style.opacity)?'inherit':'hidden';
					me._controller_1.ggVisible=true;
				}
				else if (me._controller_1.ggCurrentLogicStateVisible == 1) {
					me._controller_1.style.visibility=(Number(me._controller_1.style.opacity)>0||!me._controller_1.style.opacity)?'inherit':'hidden';
					me._controller_1.ggVisible=true;
				}
				else {
					me._controller_1.style.visibility=(Number(me._controller_1.style.opacity)>0||!me._controller_1.style.opacity)?'inherit':'hidden';
					me._controller_1.ggVisible=true;
				}
			}
		}
		me._controller_1.logicBlock_visible();
		me._controller_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller_1.style.transition='opacity 0s';
				if (me._controller_1.ggCurrentLogicStateAlpha == 0) {
					me._controller_1.style.visibility=me._controller_1.ggVisible?'inherit':'hidden';
					me._controller_1.style.opacity=1;
				}
				else {
					me._controller_1.style.visibility=me._controller_1.ggVisible?'inherit':'hidden';
					me._controller_1.style.opacity=1;
				}
			}
		}
		me._controller_1.logicBlock_alpha();
		me._controller_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._exit_fullscreen=document.createElement('div');
		el.ggId="exit_fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d60d30;';
		hs+='border : 2px solid #d60d30;';
		hs+='border-radius : 50px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._exit_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exit_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._exit_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._exit_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._exit_fullscreen.style.transition='background-color 0s, border-color 0s';
				if (me._exit_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._exit_fullscreen.style.visibility=(Number(me._exit_fullscreen.style.opacity)>0||!me._exit_fullscreen.style.opacity)?'inherit':'hidden';
					me._exit_fullscreen.ggVisible=true;
				}
				else {
					me._exit_fullscreen.style.visibility="hidden";
					me._exit_fullscreen.ggVisible=false;
				}
			}
		}
		me._exit_fullscreen.logicBlock_visible();
		me._exit_fullscreen.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['exit_fullscreen'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._exit_fullscreen.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._exit_fullscreen.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._exit_fullscreen.style.transition='background-color 0s, border-color 0s';
				if (me._exit_fullscreen.ggCurrentLogicStateBackgroundColor == 0) {
					me._exit_fullscreen.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._exit_fullscreen.style.backgroundColor="rgba(214,13,48,1)";
				}
			}
		}
		me._exit_fullscreen.logicBlock_backgroundcolor();
		me._exit_fullscreen.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['exit_fullscreen'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._exit_fullscreen.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._exit_fullscreen.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._exit_fullscreen.style.transition='background-color 0s, border-color 0s';
				if (me._exit_fullscreen.ggCurrentLogicStateBorderColor == 0) {
					me._exit_fullscreen.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._exit_fullscreen.style.borderColor="rgba(214,13,48,1)";
				}
			}
		}
		me._exit_fullscreen.logicBlock_bordercolor();
		me._exit_fullscreen.onmouseenter=function (e) {
			me.elementMouseOver['exit_fullscreen']=true;
			me._exit_fullscreen.logicBlock_backgroundcolor();
			me._exit_fullscreen.logicBlock_bordercolor();
		}
		me._exit_fullscreen.onmouseleave=function (e) {
			me.elementMouseOver['exit_fullscreen']=false;
			me._exit_fullscreen.logicBlock_backgroundcolor();
			me._exit_fullscreen.logicBlock_bordercolor();
		}
		me._exit_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._exitfullscreen=document.createElement('div');
		els=me._exitfullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxwYXRoIGQ9Ik0yNC41ODYgMjcuNDE0TDI5LjE3MiAzMkwzMiAyOS4xNzJMMjcuNDE0IDI0LjU4NkwzMiAyMEgyMFYzMkwyNC41ODYgMjcuNDE0WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiA8cGF0aCBkPSJNMCAxMkgxMlYwTDcuNDE0IDQuNTg2TDIuODc1IDAuMDQzTDAuMDQ3IDIuODcxTDQuNTg2IDcuNDE0TDAgMTJaIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KIDxwYXRoIGQ9Ik'+
			'0wIDI5LjE3MkwyLjgyOCAzMkw3LjQxNCAyNy40MTRMMTIgMzJWMjBIMEw0LjU4NiAyNC41ODZMMCAyOS4xNzJaIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KIDxwYXRoIGQ9Ik0yMCAxMkgzMkwyNy40MTQgNy40MTRMMzEuOTYxIDIuODcxTDI5LjEzMyAwLjA0M0wyNC41ODYgNC41ODZMMjAgMFYxMloiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4K';
		me._exitfullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="exitfullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._exitfullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exitfullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._exitfullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._exitfullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._exitfullscreen.style.transition='';
				if (me._exitfullscreen.ggCurrentLogicStateVisible == 0) {
					me._exitfullscreen.style.visibility=(Number(me._exitfullscreen.style.opacity)>0||!me._exitfullscreen.style.opacity)?'inherit':'hidden';
					me._exitfullscreen.ggVisible=true;
				}
				else {
					me._exitfullscreen.style.visibility="hidden";
					me._exitfullscreen.ggVisible=false;
				}
			}
		}
		me._exitfullscreen.logicBlock_visible();
		me._exitfullscreen.onclick=function (e) {
			player.exitFullscreen();
		}
		me._exitfullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._exit_fullscreen.appendChild(me._exitfullscreen);
		me._controller_1.appendChild(me._exit_fullscreen);
		el=me._fullscreen_enter=document.createElement('div');
		el.ggId="FullScreen_Enter";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d60d30;';
		hs+='border : 2px solid #d60d30;';
		hs+='border-radius : 50px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter.style.transition='background-color 0s, border-color 0s';
				if (me._fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter.style.visibility="hidden";
					me._fullscreen_enter.ggVisible=false;
				}
				else {
					me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter.logicBlock_visible();
		me._fullscreen_enter.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['fullscreen_enter'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._fullscreen_enter.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._fullscreen_enter.style.transition='background-color 0s, border-color 0s';
				if (me._fullscreen_enter.ggCurrentLogicStateBackgroundColor == 0) {
					me._fullscreen_enter.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._fullscreen_enter.style.backgroundColor="rgba(214,13,48,1)";
				}
			}
		}
		me._fullscreen_enter.logicBlock_backgroundcolor();
		me._fullscreen_enter.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['fullscreen_enter'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._fullscreen_enter.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._fullscreen_enter.style.transition='background-color 0s, border-color 0s';
				if (me._fullscreen_enter.ggCurrentLogicStateBorderColor == 0) {
					me._fullscreen_enter.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._fullscreen_enter.style.borderColor="rgba(214,13,48,1)";
				}
			}
		}
		me._fullscreen_enter.logicBlock_bordercolor();
		me._fullscreen_enter.onmouseenter=function (e) {
			me.elementMouseOver['fullscreen_enter']=true;
			me._fullscreen_enter.logicBlock_backgroundcolor();
			me._fullscreen_enter.logicBlock_bordercolor();
		}
		me._fullscreen_enter.onmouseleave=function (e) {
			me.elementMouseOver['fullscreen_enter']=false;
			me._fullscreen_enter.logicBlock_backgroundcolor();
			me._fullscreen_enter.logicBlock_bordercolor();
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		el=me._fulllscreen=document.createElement('div');
		els=me._fulllscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxwYXRoIGQ9Ik0yNy40MTQgMjQuNTg2TDIyLjgyOCAyMEwyMCAyMi44MjhMMjQuNTg2IDI3LjQxNEwyMCAzMkgzMlYyMEwyNy40MTQgMjQuNTg2WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiA8cGF0aCBkPSJNMTIgMEgwVjEyTDQuNTg2IDcuNDE0TDkuMTI5IDExLjk1M0wxMS45NTcgOS4xMjVMNy40MTQgNC41ODZMMTIgMFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgogPHBhdGggZD'+
			'0iTTEyIDIyLjgyOEw5LjE3MiAyMEw0LjU4NiAyNC41ODZMMCAyMFYzMkgxMkw3LjQxNCAyNy40MTRMMTIgMjIuODI4WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiA8cGF0aCBkPSJNMzIgMEgyMEwyNC41ODYgNC41ODZMMjAuMDQzIDkuMTI1TDIyLjg3MSAxMS45NTNMMjcuNDE0IDcuNDE0TDMyIDEyVjBaIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
		me._fulllscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Fulllscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fulllscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fulllscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fulllscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fulllscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fulllscreen.style.transition='';
				if (me._fulllscreen.ggCurrentLogicStateVisible == 0) {
					me._fulllscreen.style.visibility="hidden";
					me._fulllscreen.ggVisible=false;
				}
				else {
					me._fulllscreen.style.visibility=(Number(me._fulllscreen.style.opacity)>0||!me._fulllscreen.style.opacity)?'inherit':'hidden';
					me._fulllscreen.ggVisible=true;
				}
			}
		}
		me._fulllscreen.logicBlock_visible();
		me._fulllscreen.onclick=function (e) {
			player.enterFullscreen();
		}
		me._fulllscreen.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_enter.appendChild(me._fulllscreen);
		me._controller_1.appendChild(me._fullscreen_enter);
		el=me._home=document.createElement('div');
		el.ggId="Home";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d60d30;';
		hs+='border : 2px solid #d60d30;';
		hs+='border-radius : 50px;';
		hs+='height : 35px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['home'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._home.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._home.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._home.style.transition='background-color 0s, border-color 0s';
				if (me._home.ggCurrentLogicStateBackgroundColor == 0) {
					me._home.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._home.style.backgroundColor="rgba(214,13,48,1)";
				}
			}
		}
		me._home.logicBlock_backgroundcolor();
		me._home.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['home'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._home.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._home.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._home.style.transition='background-color 0s, border-color 0s';
				if (me._home.ggCurrentLogicStateBorderColor == 0) {
					me._home.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._home.style.borderColor="rgba(214,13,48,1)";
				}
			}
		}
		me._home.logicBlock_bordercolor();
		me._home.onmouseenter=function (e) {
			me.elementMouseOver['home']=true;
			me._home.logicBlock_backgroundcolor();
			me._home.logicBlock_bordercolor();
		}
		me._home.onmouseleave=function (e) {
			me.elementMouseOver['home']=false;
			me._home.logicBlock_backgroundcolor();
			me._home.logicBlock_bordercolor();
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		el=me._home0=document.createElement('div');
		els=me._home0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMC'+
			'AxLS40NSAxLTF6Ii8+Cjwvc3ZnPgo=';
		me._home0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="home";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home0.onclick=function (e) {
			player.openNext("{node6}",player.hotspot.target);
		}
		me._home0.ggUpdatePosition=function (useTransition) {
		}
		me._home.appendChild(me._home0);
		me._controller_1.appendChild(me._home);
		el=me._maps=document.createElement('div');
		el.ggId="Maps";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d60d30;';
		hs+='border : 2px solid #d60d30;';
		hs+='border-radius : 50px;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._maps.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._maps.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['maps'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._maps.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._maps.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._maps.style.transition='background-color 0s, border-color 0s';
				if (me._maps.ggCurrentLogicStateBackgroundColor == 0) {
					me._maps.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._maps.style.backgroundColor="rgba(214,13,48,1)";
				}
			}
		}
		me._maps.logicBlock_backgroundcolor();
		me._maps.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['maps'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._maps.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._maps.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._maps.style.transition='background-color 0s, border-color 0s';
				if (me._maps.ggCurrentLogicStateBorderColor == 0) {
					me._maps.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._maps.style.borderColor="rgba(214,13,48,1)";
				}
			}
		}
		me._maps.logicBlock_bordercolor();
		me._maps.onmouseenter=function (e) {
			me.elementMouseOver['maps']=true;
			me._maps.logicBlock_backgroundcolor();
			me._maps.logicBlock_bordercolor();
		}
		me._maps.onmouseleave=function (e) {
			me.elementMouseOver['maps']=false;
			me._maps.logicBlock_backgroundcolor();
			me._maps.logicBlock_bordercolor();
		}
		me._maps.ggUpdatePosition=function (useTransition) {
		}
		el=me._map=document.createElement('div');
		els=me._map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0iTTE0LjY1IDQuOThsLTUtMS43NWMtLjQyLS4xNS0uODgtLjE1LTEuMy0uMDFMNC4zNiA0LjU2QzMuNTUgNC44NCAzIDUuNiAzIDYuNDZ2MTEuODVjMCAxLjQxIDEuNDEgMi4zNyAyLjcyIDEuODZsMi45My0xLjE0Yy4yMi0uMDkuNDctLjA5LjY5LS4wMWw1IDEuNzVjLjQyLjE1Ljg4LjE1IDEuMy'+
			'4wMWwzLjk5LTEuMzRjLjgxLS4yNyAxLjM2LTEuMDQgMS4zNi0xLjlWNS42OWMwLTEuNDEtMS40MS0yLjM3LTIuNzItMS44NmwtMi45MyAxLjE0Yy0uMjIuMDgtLjQ2LjA5LS42OS4wMXpNMTUgMTguODlsLTYtMi4xMVY1LjExbDYgMi4xMXYxMS42N3oiLz4KPC9zdmc+Cg==';
		me._map__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.onclick=function (e) {
			player.setVariableValue('vis_floorplan', true);
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._maps.appendChild(me._map);
		me._controller_1.appendChild(me._maps);
		me.divSkin.appendChild(me._controller_1);
		el=me._screentint_phone_1=document.createElement('div');
		el.ggId="screentint_phone_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(100px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone_1.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone_1.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone_1.style.visibility=me._screentint_phone_1.ggVisible?'inherit':'hidden';
					me._screentint_phone_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone_1.style.opacity == 0.0) { me._screentint_phone_1.style.visibility="hidden"; } }, 305);
					me._screentint_phone_1.style.opacity=0;
				}
			}
		}
		me._screentint_phone_1.logicBlock_alpha();
		me._screentint_phone_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone1=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone1.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_phone', false);
		}
		me._close_popup_phone1.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone1']=true;
			me._btn_close_popup_phone1.logicBlock_visible();
		}
		me._close_popup_phone1.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone1']=false;
			me._btn_close_popup_phone1.logicBlock_visible();
		}
		me._close_popup_phone1.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone1=document.createElement('div');
		els=me._btn_close_popup_phone1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIHgyPSI4IiB5MT0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjQiIHgyPSIyNCIgeTE9IjgiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi'+
			'AzNiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjciIHgyPSI5IiB5MT0iOSIgeDE9IjI3IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjciIHgyPSIyNyIgeTE9IjkiIHgxPSI5IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone1.style.transition='';
				if (me._btn_close_popup_phone1.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone1.style.visibility="hidden";
					me._btn_close_popup_phone1.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone1.style.visibility=(Number(me._btn_close_popup_phone1.style.opacity)>0||!me._btn_close_popup_phone1.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone1.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone1.logicBlock_visible();
		me._btn_close_popup_phone1.onmouseenter=function (e) {
			me._btn_close_popup_phone1__img.style.visibility='hidden';
			me._btn_close_popup_phone1__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone1']=true;
		}
		me._btn_close_popup_phone1.onmouseleave=function (e) {
			me._btn_close_popup_phone1__img.style.visibility='inherit';
			me._btn_close_popup_phone1__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone1']=false;
		}
		me._btn_close_popup_phone1.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone1.appendChild(me._btn_close_popup_phone1);
		me._screentint_phone_1.appendChild(me._close_popup_phone1);
		el=me._thumbnail_scroller_phone1=document.createElement('div');
		els=me._thumbnail_scroller_phone1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 50%;';
		hs+='margin-left : -82.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 165px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone1.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone1.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone1.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone1.ggScrollPosX = (me._thumbnail_scroller_phone1__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone1.ggScrollPosX = Math.max(me._thumbnail_scroller_phone1.ggScrollPosX, 0);
			me._thumbnail_scroller_phone1.ggScrollPosX = Math.min(me._thumbnail_scroller_phone1.ggScrollPosX, me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone1__horScrollFg.style.left = me._thumbnail_scroller_phone1.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosX / (me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone1__content.style.left = -(Math.round((me._thumbnail_scroller_phone1.ggContentWidth * (1.0 - me._thumbnail_scroller_phone1.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosXPercent = (me._thumbnail_scroller_phone1__horScrollFg.offsetLeft / me._thumbnail_scroller_phone1__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone1.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone1.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone1.ggScrollPosX >= me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone1.ggScrollPosX = Math.min(me._thumbnail_scroller_phone1.ggScrollPosX, me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone1.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone1.ggScrollPosX = Math.max(me._thumbnail_scroller_phone1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone1__horScrollFg.style.left = me._thumbnail_scroller_phone1.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosX / (me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone1__content.style.left = -(Math.round((me._thumbnail_scroller_phone1.ggContentWidth * (1.0 - me._thumbnail_scroller_phone1.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosXPercent = (me._thumbnail_scroller_phone1__horScrollFg.offsetLeft / me._thumbnail_scroller_phone1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone1.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone1.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone1.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone1.ggScrollPosY = (me._thumbnail_scroller_phone1__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone1.ggScrollPosY = Math.max(me._thumbnail_scroller_phone1.ggScrollPosY, 0);
			me._thumbnail_scroller_phone1.ggScrollPosY = Math.min(me._thumbnail_scroller_phone1.ggScrollPosY, me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone1__vertScrollFg.style.top = me._thumbnail_scroller_phone1.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosY / (me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone1__content.style.top = -(Math.round((me._thumbnail_scroller_phone1.ggContentHeight * (1.0 - me._thumbnail_scroller_phone1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosYPercent = (me._thumbnail_scroller_phone1__vertScrollFg.offsetTop / me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone1.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone1.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone1.ggScrollPosY >= me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone1.ggScrollPosY = Math.min(me._thumbnail_scroller_phone1.ggScrollPosY, me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone1.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone1.ggScrollPosY = Math.max(me._thumbnail_scroller_phone1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone1__vertScrollFg.style.top = me._thumbnail_scroller_phone1.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosY / (me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone1__content.style.top = -(Math.round((me._thumbnail_scroller_phone1.ggContentHeight * (1.0 - me._thumbnail_scroller_phone1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosYPercent = (me._thumbnail_scroller_phone1__vertScrollFg.offsetTop / me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone1.ggHPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone1.clientWidth - (me._thumbnail_scroller_phone1.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone1.clientWidth - (me._thumbnail_scroller_phone1.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone1.ggHPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone1.ggVPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone1.clientHeight - (me._thumbnail_scroller_phone1.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone1.clientHeight - (me._thumbnail_scroller_phone1.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone1.ggVPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone1.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone1.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone1.ggScrollByX(me._thumbnail_scroller_phone1.ggDragInertiaX);
				me._thumbnail_scroller_phone1.ggScrollByY(me._thumbnail_scroller_phone1.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone1__content.onmouseup = null;
			me._thumbnail_scroller_phone1__content.onmousemove = null;
			me._thumbnail_scroller_phone1__content.ontouchend = null;
			me._thumbnail_scroller_phone1__content.ontouchmove = null;
			me._thumbnail_scroller_phone1__content.onpointerup = null;
			me._thumbnail_scroller_phone1__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone1.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone1.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone1.ggDragStartY) > 10) me._thumbnail_scroller_phone1.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone1.ggDragLastX) * me._thumbnail_scroller_phone1.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone1.ggDragLastY) * me._thumbnail_scroller_phone1.ggVPercentVisible;
			me._thumbnail_scroller_phone1.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone1.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone1.ggDragLastX = eventX;
			me._thumbnail_scroller_phone1.ggDragLastY = eventY;
			me._thumbnail_scroller_phone1.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone1.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone1.ggDragLastX = me._thumbnail_scroller_phone1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone1.ggDragLastY = me._thumbnail_scroller_phone1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone1__content.onmouseup = me._thumbnail_scroller_phone1__content.mousetouchend;
			me._thumbnail_scroller_phone1__content.ontouchend = me._thumbnail_scroller_phone1__content.mousetouchend;
			me._thumbnail_scroller_phone1__content.onmousemove = me._thumbnail_scroller_phone1__content.mousetouchmove;
			me._thumbnail_scroller_phone1__content.ontouchmove = me._thumbnail_scroller_phone1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone1__content.onpointerup = me._thumbnail_scroller_phone1__content.ontouchend;
				me._thumbnail_scroller_phone1__content.onpointermove = me._thumbnail_scroller_phone1__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone1__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone1__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone1.ggScrollPosY = 0;
		me._thumbnail_scroller_phone1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone1.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone1.ggScrollByY(me._thumbnail_scroller_phone1.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone1.ggDragLastY;
				me._thumbnail_scroller_phone1.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone1.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone1.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone1.ggScrollByY(me._thumbnail_scroller_phone1.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone1.ggDragLastY;
				me._thumbnail_scroller_phone1.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone1.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone1__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone1.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone1.ggScrollPosY / me._thumbnail_scroller_phone1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone1.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone1__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone1__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone1.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone1__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone1__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone1.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone1.ggVertScrollVisible) {
					me._thumbnail_scroller_phone1.ggAvailableWidth = me._thumbnail_scroller_phone1.clientWidth - 8;
					if (me._thumbnail_scroller_phone1.ggHorScrollVisible) {
						me._thumbnail_scroller_phone1.ggAvailableHeight = me._thumbnail_scroller_phone1.clientHeight - 8;
						me._thumbnail_scroller_phone1.ggAvailableHeightWithScale = me._thumbnail_scroller_phone1.getBoundingClientRect().height - me._thumbnail_scroller_phone1__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone1__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone1.ggAvailableHeight = me._thumbnail_scroller_phone1.clientHeight;
						me._thumbnail_scroller_phone1.ggAvailableHeightWithScale = me._thumbnail_scroller_phone1.getBoundingClientRect().height;
						me._thumbnail_scroller_phone1__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone1__vertScrollBg.style.height = me._thumbnail_scroller_phone1.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone1.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone1.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone1.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone1.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone1.ggVPercentVisible);
					me._thumbnail_scroller_phone1__vertScrollFg.style.height = me._thumbnail_scroller_phone1.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone1.ggScrollPosY = me._thumbnail_scroller_phone1.ggScrollPosYPercent * me._thumbnail_scroller_phone1.ggAvailableHeight;
					me._thumbnail_scroller_phone1.ggScrollPosY = Math.min(me._thumbnail_scroller_phone1.ggScrollPosY, me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone1__vertScrollFg.style.top = me._thumbnail_scroller_phone1.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosY / (me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone1__content.style.top = -(Math.round((me._thumbnail_scroller_phone1.ggContentHeight * (1.0 - me._thumbnail_scroller_phone1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone1.ggAvailableWidth = me._thumbnail_scroller_phone1.clientWidth;
					me._thumbnail_scroller_phone1.ggScrollPosY = 0;
					me._thumbnail_scroller_phone1.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone1__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone1.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone1.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone1);
					me._thumbnail_scroller_phone1.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 166;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone1__content.appendChild(me._node_cloner_phone);
		me._screentint_phone_1.appendChild(me._thumbnail_scroller_phone1);
		me.divSkin.appendChild(me._screentint_phone_1);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._keyboard_shortcuts=document.createElement('div');
		el.ggId="keyboard_shortcuts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._keyboard_shortcuts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._keyboard_shortcuts.ggUpdatePosition=function (useTransition) {
		}
		el=me._key_up=document.createElement('div');
		el.ggId="key_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Up');
		el.style.transformOrigin='50% 50%';
		me._key_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_up.onmousedown=function (e) {
			me.elementMouseDown['key_up']=true;
		}
		me._key_up.onmouseup=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.onmouseleave=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_up']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeTiltLog(0.3,true);
				}
			}
		}
		me._key_up.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_up);
		el=me._key_down=document.createElement('div');
		el.ggId="key_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Down');
		el.style.transformOrigin='50% 50%';
		me._key_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_down.onmousedown=function (e) {
			me.elementMouseDown['key_down']=true;
		}
		me._key_down.onmouseup=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.onmouseleave=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_down']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeTiltLog(-0.3,true);
				}
			}
		}
		me._key_down.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_down);
		el=me._key_left=document.createElement('div');
		el.ggId="key_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Left');
		el.style.transformOrigin='50% 50%';
		me._key_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_left.onmousedown=function (e) {
			me.elementMouseDown['key_left']=true;
		}
		me._key_left.onmouseup=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.onmouseleave=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_left']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changePanLog(0.3,true);
				}
			}
		}
		me._key_left.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_left);
		el=me._key_right=document.createElement('div');
		el.ggId="key_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Right');
		el.style.transformOrigin='50% 50%';
		me._key_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_right.onmousedown=function (e) {
			me.elementMouseDown['key_right']=true;
		}
		me._key_right.onmouseup=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.onmouseleave=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_right']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changePanLog(-0.3,true);
				}
			}
		}
		me._key_right.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_right);
		el=me._key_s=document.createElement('div');
		el.ggId="key_s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'S');
		el.style.transformOrigin='50% 50%';
		me._key_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_s.onmousedown=function (e) {
			me.elementMouseDown['key_s']=true;
		}
		me._key_s.onmouseup=function (e) {
			me.elementMouseDown['key_s']=false;
		}
		me._key_s.onmouseleave=function (e) {
			me.elementMouseDown['key_s']=false;
		}
		me._key_s.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_s']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeFovLog(0.3,true);
				}
			}
		}
		me._key_s.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_s);
		el=me._key_a=document.createElement('div');
		el.ggId="key_a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'A');
		el.style.transformOrigin='50% 50%';
		me._key_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_a.onmousedown=function (e) {
			me.elementMouseDown['key_a']=true;
		}
		me._key_a.onmouseup=function (e) {
			me.elementMouseDown['key_a']=false;
		}
		me._key_a.onmouseleave=function (e) {
			me.elementMouseDown['key_a']=false;
		}
		me._key_a.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_a']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeFovLog(-0.3,true);
				}
			}
		}
		me._key_a.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_a);
		me.divSkin.appendChild(me._keyboard_shortcuts);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 500ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 505);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_floorplan', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
				me._phone_popup_title.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._phone_popup_title.ggUpdateText();
			me._phone_popup_title.ggTextDiv.scrollTop = 0;
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzVjZmYyZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4Mj0iOCIgeTI9IjI0IiB5MT0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4Mj0iMjQiIHkyPSIyNCIgeTE9IjgiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4Mj0iOCIgeTI9IjI0IiB5MT0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4Mj0iMjQiIHkyPSIyNCIgeTE9IjgiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		el=me._phone_popup_title=document.createElement('div');
		els=me._phone_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="phone_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._phone_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._phone_popup_title.ggUpdateText();
		el.appendChild(els);
		me._phone_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._phone_popup_title);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_popup_text_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_text_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_text_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_text_phone.style.transition='';
				if (me._info_popup_text_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_text_phone.style.visibility=(Number(me._info_popup_text_phone.style.opacity)>0||!me._info_popup_text_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_text_phone.ggVisible=true;
				}
				else {
					me._info_popup_text_phone.style.visibility="hidden";
					me._info_popup_text_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_text_phone.logicBlock_visible();
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._info_popup_text_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 129px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 119px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 130;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone1.ggUpdating == true) return;
			me._node_cloner_phone1.ggUpdating = true;
			var el=me._node_cloner_phone1;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone1.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone1.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone1.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone1.parentNode.parentNode.clientWidth) : me._node_cloner_phone1.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone1.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone1.offsetLeft) * me._node_cloner_phone1.ggNumRepeat / 100.0) / me._node_cloner_phone1.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone1.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone1.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone1.ggWidth + 'px';
				parameter.height=me._node_cloner_phone1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone1.ggNodeCount = me._node_cloner_phone1.ggNumFilterPassed;
			me._node_cloner_phone1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone1.parentNode && me._node_cloner_phone1.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone1.childNodes.length; i++) {
				var child=me._node_cloner_phone1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone1.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone1.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone1);
		me._safe_area_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggCurrentLogicStateVisible = -1;
		me._floorplan_el_phone.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
		}
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._floorplan_el_phone.ggMarkerInstances.length; i++) {
				me._floorplan_el_phone.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._floorplan_el_phone.ggUpdateConditionResize();
		}
		me._safe_area_phone.appendChild(me._floorplan_el_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._safe_area_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((4px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#3c3c3c';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-13px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 2 + 0) * percent);
					playheadpos += -13;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(90,90,90,0.392157) ' + currPos +'%, rgba(90,90,90,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(90,90,90,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(92,255,47,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.ggParameter.sx=1.5;me._video_file_popup_phone_play.ggParameter.sy=1.5;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_file_popup_phone_play);}, 350);
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.ggParameter.sx=1;me._video_file_popup_phone_play.ggParameter.sy=1;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			skin.updateSize(me._video_file_popup_phone_play);
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #5cff2f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseenter=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=true;
			me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_file_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_phone_play.onmouseleave=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=false;
			me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_file_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_popup_phone_play_icon_active=document.createElement('div');
		els=me._video_file_popup_phone_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIxIiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_file_popup_phone_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_phone_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_file_popup_phone_play_icon_active.style.visibility=me._video_file_popup_phone_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_file_popup_phone_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_file_popup_phone_play_icon_active.style.opacity == 0.0) { me._video_file_popup_phone_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_file_popup_phone_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_file_popup_phone_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon_active);
		el=me._video_file_popup_phone_play_icon=document.createElement('div');
		els=me._video_file_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiLz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_phone_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_file_popup_phone_play_icon.style.opacity == 0.0) { me._video_file_popup_phone_play_icon.style.visibility="hidden"; } }, 205);
					me._video_file_popup_phone_play_icon.style.opacity=0;
				}
				else {
					me._video_file_popup_phone_play_icon.style.visibility=me._video_file_popup_phone_play_icon.ggVisible?'inherit':'hidden';
					me._video_file_popup_phone_play_icon.style.opacity=1;
				}
			}
		}
		me._video_file_popup_phone_play_icon.logicBlock_alpha();
		me._video_file_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon);
		me._safe_area_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.ggParameter.sx=1.5;me._video_url_popup_phone_play.ggParameter.sy=1.5;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_url_popup_phone_play);}, 350);
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.ggParameter.sx=1;me._video_url_popup_phone_play.ggParameter.sy=1;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			skin.updateSize(me._video_url_popup_phone_play);
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #5cff2f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseenter=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=true;
			me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_url_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_phone_play.onmouseleave=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=false;
			me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_url_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_popup_phone_play_icon_active=document.createElement('div');
		els=me._video_url_popup_phone_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIxIiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_url_popup_phone_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_phone_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_url_popup_phone_play_icon_active.style.visibility=me._video_url_popup_phone_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_url_popup_phone_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_url_popup_phone_play_icon_active.style.opacity == 0.0) { me._video_url_popup_phone_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_url_popup_phone_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_url_popup_phone_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon_active);
		el=me._video_url_popup_phone_play_icon=document.createElement('div');
		els=me._video_url_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiLz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_phone_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_url_popup_phone_play_icon.style.opacity == 0.0) { me._video_url_popup_phone_play_icon.style.visibility="hidden"; } }, 205);
					me._video_url_popup_phone_play_icon.style.opacity=0;
				}
				else {
					me._video_url_popup_phone_play_icon.style.visibility=me._video_url_popup_phone_play_icon.ggVisible?'inherit':'hidden';
					me._video_url_popup_phone_play_icon.style.opacity=1;
				}
			}
		}
		me._video_url_popup_phone_play_icon.logicBlock_alpha();
		me._video_url_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon);
		me._safe_area_phone.appendChild(me._video_url_popup_phone_play);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._languages=document.createElement('div');
		el.ggId="languages";
		el.ggDx=0;
		el.ggDy=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) - 80px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_phone_languages') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._languages.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._languages.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._languages.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._languages.ggCurrentLogicStatePosition == 0) {
					me._languages.style.left = 'calc(50% - (300px / 2))';
					me._languages.style.top = 'calc(50% - (180px / 2))';
				}
				else {
					me._languages.style.left='calc(50% - ((300px + 0px) / 2) + 0px)';
					me._languages.style.top='calc(50% - ((180px + 0px) / 2) - 80px)';
				}
			}
		}
		me._languages.logicBlock_position();
		me._languages.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('vis_phone_languages') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._languages.ggCurrentLogicStateAlpha == 0) {
					me._languages.style.visibility=me._languages.ggVisible?'inherit':'hidden';
					me._languages.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages.style.opacity == 0.0) { me._languages.style.visibility="hidden"; } }, 505);
					me._languages.style.opacity=0;
				}
			}
		}
		me._languages.logicBlock_alpha();
		me._languages.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_bg=document.createElement('div');
		el.ggId="languages_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_bg.ggUpdatePosition=function (useTransition) {
		}
		me._languages.appendChild(me._languages_bg);
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 21px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 124px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller__content.onmouseup = null;
			me._languages_scroller__content.onmousemove = null;
			me._languages_scroller__content.ontouchend = null;
			me._languages_scroller__content.ontouchmove = null;
			me._languages_scroller__content.onpointerup = null;
			me._languages_scroller__content.onpointermove = null;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller__content.onmouseup = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.ontouchend = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.onmousemove = me._languages_scroller__content.mousetouchmove;
			me._languages_scroller__content.ontouchmove = me._languages_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._languages_scroller__content.onpointerup = me._languages_scroller__content.ontouchend;
				me._languages_scroller__content.onpointermove = me._languages_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._languages_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 254px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._languages_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 254px; height: 5px; background-color: rgba(255,255,255,0.705882); pointer-events: auto;');
		me._languages_scroller.ggScrollPosX = 0;
		me._languages_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaX *= 0.96;
					me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
					if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._languages_scroller.ggDragLastX;
				me._languages_scroller.ggDragInertiaX = diffX;
				me._languages_scroller.ggDragLastX = e.clientX;
				me._languages_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaX *= 0.96;
					me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
					if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._languages_scroller.ggDragLastX;
				me._languages_scroller.ggDragInertiaX = diffX;
				me._languages_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._languages_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._languages_scroller.ggScrollWidth;
			if (e.offsetX < me._languages_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._languages_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._languages_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._languages_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._languages_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._languages_scroller.ggScrollByXSmooth(30 * me._languages_scroller.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 95px;';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._languages_scroller.ggScrollPosX / me._languages_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._languages_scroller__horScrollBg.style.visibility = 'inherit';
					me._languages_scroller__horScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggHorScrollVisible = true;
				} else {
					me._languages_scroller__horScrollBg.style.visibility = 'hidden';
					me._languages_scroller__horScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggHorScrollVisible = false;
				}
				if(me._languages_scroller.ggHorScrollVisible) {
					me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 5;
					if (me._languages_scroller.ggVertScrollVisible) {
						me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 5;
						me._languages_scroller.ggAvailableWidthWithScale = me._languages_scroller.getBoundingClientRect().width - me._languages_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
						me._languages_scroller.ggAvailableWidthWithScale = me._languages_scroller.getBoundingClientRect().width;
					}
					me._languages_scroller__horScrollBg.style.width = me._languages_scroller.ggAvailableWidth + 'px';
					me._languages_scroller.ggHPercentVisible = contentWidth != 0 ? me._languages_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._languages_scroller.ggHPercentVisible > 1.0) me._languages_scroller.ggHPercentVisible = 1.0;
					me._languages_scroller.ggScrollWidth = Math.round(me._languages_scroller__horScrollBg.offsetWidth * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller__horScrollFg.style.width = me._languages_scroller.ggScrollWidth + 'px';
					me._languages_scroller.ggScrollPosX = me._languages_scroller.ggScrollPosXPercent * me._languages_scroller.ggAvailableWidth;
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
					if (me._languages_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
						me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
					me._languages_scroller.ggScrollPosX = 0;
					me._languages_scroller.ggScrollPosXPercent = 0.0;
					me._languages_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 4;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 125;
		el.ggHeight = 22;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumRows = 0;
			curNumRows = me._languages_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if ((el.ggNumRows == curNumRows) && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._languages.appendChild(me._languages_scroller);
		el=me._languages_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="languages_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_top.onclick=function (e) {
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_phone_languages', false);
		}
		me._languages_top.onmouseenter=function (e) {
			me.elementMouseOver['languages_top']=true;
			me._languages_close_btn.logicBlock_visible();
			me._languages_close_btn_active.logicBlock_visible();
		}
		me._languages_top.onmouseleave=function (e) {
			me.elementMouseOver['languages_top']=false;
			me._languages_close_btn.logicBlock_visible();
			me._languages_close_btn_active.logicBlock_visible();
		}
		me._languages_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_close_btn=document.createElement('div');
		els=me._languages_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzVjZmYyZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB4Mj0iOCIgeTI9IjI0IiB5MT0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB4Mj0iMjQiIHkyPSIyNCIgeTE9IjgiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._languages_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="languages_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._languages_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['languages_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_close_btn.style.transition='';
				if (me._languages_close_btn.ggCurrentLogicStateVisible == 0) {
					me._languages_close_btn.style.visibility="hidden";
					me._languages_close_btn.ggVisible=false;
				}
				else {
					me._languages_close_btn.style.visibility=(Number(me._languages_close_btn.style.opacity)>0||!me._languages_close_btn.style.opacity)?'inherit':'hidden';
					me._languages_close_btn.ggVisible=true;
				}
			}
		}
		me._languages_close_btn.logicBlock_visible();
		me._languages_close_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._languages_close_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._languages_close_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._languages_close_btn.style.transition='';
				if (me._languages_close_btn.ggCurrentLogicStateTabIndex == 0) {
					me._languages_close_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._languages_close_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._languages_close_btn.logicBlock_tabindex();
		me._languages_close_btn.onclick=function (e) {
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_phone_share', false);
		}
		me._languages_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._languages_top.appendChild(me._languages_close_btn);
		el=me._languages_close_btn_active=document.createElement('div');
		els=me._languages_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxsaW5lIHkyPSIyNyIgc3'+
			'Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4MT0iMjciIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHgyPSI5IiB5MT0iOSIgc3Ryb2tlPSIjZmZmZmZmIi8+CiA8bGluZSB5Mj0iMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeDE9IjkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHgyPSIyNyIgeTE9IjkiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K';
		me._languages_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="languages_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._languages_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['languages_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_close_btn_active.style.transition='';
				if (me._languages_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._languages_close_btn_active.style.visibility=(Number(me._languages_close_btn_active.style.opacity)>0||!me._languages_close_btn_active.style.opacity)?'inherit':'hidden';
					me._languages_close_btn_active.ggVisible=true;
				}
				else {
					me._languages_close_btn_active.style.visibility="hidden";
					me._languages_close_btn_active.ggVisible=false;
				}
			}
		}
		me._languages_close_btn_active.logicBlock_visible();
		me._languages_close_btn_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._languages_close_btn_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._languages_close_btn_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._languages_close_btn_active.style.transition='';
				if (me._languages_close_btn_active.ggCurrentLogicStateTabIndex == 0) {
					me._languages_close_btn_active.setAttribute('tabindex', '-1');
				}
				else {
					me._languages_close_btn_active.setAttribute('tabindex', '0');
				}
			}
		}
		me._languages_close_btn_active.logicBlock_tabindex();
		me._languages_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._languages_top.appendChild(me._languages_close_btn_active);
		me._languages.appendChild(me._languages_top);
		me.divSkin.appendChild(me._languages);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 166px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : pointer;';
		hs+='height : 166px;';
		hs+='left : calc(50% - ((39px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((166px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_17=document.createElement('div');
		els=me._svg_17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxjaXJjbGUgY3g9IjEwIiByPSI5LjUiIHN0cm9rZT0iI2NiMjAyNyIgc3Ryb2tlLW9wYWNpdHk9IjEiIGN5PSIxMCIvPgogPHBhdGggZD0iTTE2LjY4MTggOS4zMDMwM0MxNi41IDguOTA5MDkgMTYuMTY2NyA4LjU3NTc2IDE1Ljc1NzYgOC4yODc4OEMxNS4xMzY0IDcuODQ4NDkgMTQuMjg3OSA3LjUgMTMuMjg3OSA3LjI1NzU4QzEyLjg2MzYgNy4xNTE1MiAxMi4zOTM5IDcuMDc1NzYgMTEuOTI0MiA3QzExLjcxMjEgNi41ID'+
			'ExLjQ4NDggNi4wNDU0NSAxMS4yMjczIDUuNjUxNTJDMTAuOTA5MSA1LjE2NjY3IDEwLjU3NTggNC43NTc1OCAxMC4yMTIxIDQuNDY5N0MxMC4wMzAzIDQuMzE4MTggOS44MzMzMyA0LjIxMjEyIDkuNjM2MzYgNC4xMjEyMUM5LjQzOTM5IDQuMDQ1NDUgOS4yMjcyNyA0IDkuMDE1MTUgNEM4LjkyNDI0IDQgOC44MzMzMyA0LjAxNTE1IDguNzQyNDMgNC4wMzAzQzguNDI0MjQgNC4wOTA5MSA4LjEzNjM2IDQuMjcyNzMgNy45MDkwOSA0LjVDNy41NjA2MSA0Ljg2MzY0IDcuMzMzMzMgNS4zNjM2NCA3LjE2NjY3IDUuOTY5N0M3IDYuNTc1NzYgNi45MjQyNCA3LjI4Nzg4IDYuOTI0MjQgOC4wNjA2MUM2'+
			'LjkyNDI0IDguODMzMzMgNyA5LjY4MTgyIDcuMTgxODIgMTAuNTQ1NUM3LjMwMzAzIDExLjE2NjcgNy40Njk3IDExLjc1NzYgNy42NTE1MiAxMi4zMDNDNi43ODc4OCAxMi4xNjY3IDYuMDE1MTUgMTEuOTU0NSA1LjM5Mzk0IDExLjY4MThDNC44MzMzMyAxMS40Mzk0IDQuMzc4NzkgMTEuMTUxNSA0LjA5MDkxIDEwLjg2MzZDMy45MzkzOSAxMC43MTIxIDMuODMzMzMgMTAuNTc1OCAzLjc3MjczIDEwLjQyNDJDMy43MTIxMiAxMC4yODc5IDMuNjY2NjcgMTAuMTUxNSAzLjY2NjY3IDEwQzMuNjY2NjcgOS44NjM2NCAzLjY5Njk3IDkuNzI3MjcgMy43NzI3MyA5LjU3NTc2QzMuODkzOTQgOS4zMzMzMy'+
			'A0LjEyMTIxIDkuMDYwNjEgNC40ODQ4NSA4LjgxODE4QzUgOC40NTQ1NSA1Ljc1NzU4IDguMTM2MzYgNi42NjY2NyA3LjkwOTA5QzYuNjY2NjcgNy42NjY2NyA2LjY4MTgyIDcuNDI0MjQgNi42OTY5NyA3LjE5Njk3QzYuMTIxMjEgNy4zMzMzMyA1LjYwNjA2IDcuNSA1LjEzNjM2IDcuNjk2OTdDNC41MTUxNSA3Ljk2OTcgNCA4LjI4Nzg4IDMuNjIxMjEgOC42NjY2N0MzLjQzOTM5IDguODYzNjQgMy4yNzI3MyA5LjA2MDYxIDMuMTY2NjcgOS4yODc4OEMzLjA2MDYxIDkuNTE1MTUgMyA5Ljc1NzU4IDMgMTBDMyAxMC4yNDI0IDMuMDYwNjEgMTAuNDg0OCAzLjE2NjY3IDEwLjcxMjFDMy4zNDg0OCAx'+
			'MS4xMDYxIDMuNjgxODIgMTEuNDM5NCA0LjEwNjA2IDExLjcyNzNDNC43MjcyNyAxMi4xNjY3IDUuNTc1NzYgMTIuNTE1MiA2LjU3NTc2IDEyLjc1NzZDNyAxMi44NjM2IDcuNDY5NyAxMi45NTQ1IDcuOTM5MzkgMTMuMDE1MkM4LjE1MTUyIDEzLjUxNTIgOC4zNzg3OSAxMy45Njk3IDguNjM2MzYgMTQuMzYzNkM4Ljk1NDU1IDE0Ljg0ODUgOS4yODc4OCAxNS4yNTc2IDkuNjUxNTIgMTUuNTQ1NUM5LjgzMzMzIDE1LjY5NyAxMC4wMzAzIDE1LjgwMyAxMC4yMjczIDE1Ljg5MzlDMTAuNDI0MiAxNS45Njk3IDEwLjYzNjQgMTYuMDE1MiAxMC44NDg1IDE2LjAxNTJDMTAuOTM5NCAxNi4wMTUyIDExLj'+
			'AzMDMgMTYgMTEuMTIxMiAxNS45ODQ5QzExLjQzOTQgMTUuOTI0MiAxMS43MjczIDE1Ljc0MjQgMTEuOTU0NSAxNS41MTUyQzEyLjMwMyAxNS4xNTE1IDEyLjUzMDMgMTQuNjUxNSAxMi42OTcgMTQuMDQ1NUMxMi43NzI3IDEzLjc3MjcgMTIuODMzMyAxMy40Njk3IDEyLjg2MzYgMTMuMTUxNUMxMi43ODc5IDEzLjE2NjcgMTIuNjk3IDEzLjE4MTggMTIuNjIxMiAxMy4xOTdDMTIuNDY5NyAxMy4yMjczIDEyLjMxODIgMTMuMjQyNCAxMi4xNjY3IDEzLjI3MjdDMTIuMTA2MSAxMy42ODE4IDEyIDE0LjA2MDYgMTEuODc4OCAxNC4zNjM2QzExLjc1NzYgMTQuNjY2NyAxMS42MjEyIDE0Ljg5MzkgMTEu'+
			'NDY5NyAxNS4wNDU1QzExLjM3ODggMTUuMTM2NCAxMS4yODc5IDE1LjE5NyAxMS4xOTcgMTUuMjQyNEwxMC44MzMzIDEzLjM5MzlDMTAuNjk3IDEzLjM5MzkgMTAuNTYwNiAxMy40MDkxIDEwLjQyNDIgMTMuNDA5MUwxMC44MDMgMTUuMzE4MkMxMC43MTIxIDE1LjMxODIgMTAuNjA2MSAxNS4yODc5IDEwLjUgMTUuMjQyNEMxMC4yNzI3IDE1LjE1MTUgMTAuMDE1MiAxNC45Njk3IDkuNzcyNzMgMTQuNjk3QzkuNDA5MDkgMTQuMzE4MiA5LjA2MDYxIDEzLjc3MjcgOC43NDI0MyAxMy4wOTA5QzkuMTM2MzYgMTMuMTIxMiA5LjU0NTQ2IDEzLjEzNjQgOS45NTQ1NSAxMy4xMzY0QzExLjgxODIgMTMuMT'+
			'M2NCAxMy41IDEyLjgxODIgMTQuNzQyNCAxMi4yODc5QzE1LjM2MzYgMTIuMDE1MiAxNS44Nzg4IDExLjY5NyAxNi4yNTc2IDExLjMxODJDMTYuNDM5NCAxMS4xMjEyIDE2LjYwNjEgMTAuOTI0MiAxNi43MTIxIDEwLjY5N0MxNi44MTgyIDEwLjQ2OTcgMTYuODc4OCAxMC4yMjczIDE2Ljg3ODggOS45ODQ4NUMxNi44NjM2IDkuNzcyNzMgMTYuODAzIDkuNTMwMyAxNi42ODE4IDkuMzAzMDNaTTE2LjA3NTggMTAuNDM5NEMxNS45NTQ1IDEwLjY4MTggMTUuNzI3MyAxMC45NTQ1IDE1LjM2MzYgMTEuMTk3QzE0LjgzMzMgMTEuNTc1OCAxNC4wNjA2IDExLjg5MzkgMTMuMTIxMiAxMi4xMjEyQzEyLjE4'+
			'MTggMTIuMzQ4NSAxMS4wOTA5IDEyLjQ4NDkgOS45MjQyNCAxMi40ODQ5QzkuNDA5MDkgMTIuNDg0OSA4Ljg5Mzk0IDEyLjQ1NDUgOC40MDkwOSAxMi40MDkxQzguMTgxODIgMTEuODAzIDcuOTg0ODUgMTEuMTM2NCA3Ljg0ODQ5IDEwLjQyNDJDNy42ODE4MiA5LjU5MDkxIDcuNjA2MDYgOC44MDMwMyA3LjYwNjA2IDguMDc1NzZDNy42MDYwNiA3LjEwNjA2IDcuNzQyNDMgNi4yNTc1OCA3Ljk4NDg1IDUuNjY2NjdDOC4xMDYwNiA1LjM2MzY0IDguMjQyNDMgNS4xMzYzNiA4LjM5Mzk0IDQuOTg0ODVDOC40ODQ4NSA0Ljg5Mzk0IDguNTc1NzYgNC44MTgxOCA4LjY2NjY3IDQuNzcyNzNMOS43MTIxMi'+
			'AxMC4wNjA2TDEwLjEzNjQgMTIuMjEyMUMxMC4yNzI3IDEyLjIxMjEgMTAuNDA5MSAxMi4yMTIxIDEwLjU0NTUgMTIuMTk3TDEwLjEwNjEgOS45Njk3TDkuMDYwNjEgNC42ODE4MkM5LjE1MTUyIDQuNjgxODIgOS4yNTc1OCA0LjcxMjEyIDkuMzQ4NDkgNC43NTc1OEM5LjU3NTc2IDQuODQ4NDggOS44MzMzMyA1LjAzMDMgMTAuMDc1OCA1LjMwMzAzQzEwLjQzOTQgNS42ODE4MiAxMC43ODc5IDYuMjI3MjcgMTEuMTA2MSA2LjkwOTA5QzEwLjcxMjEgNi44Nzg3OSAxMC4zMDMgNi44NjM2NCA5Ljg5Mzk0IDYuODYzNjRDOS44NDg0OSA2Ljg2MzY0IDkuODAzMDMgNi44NjM2NCA5Ljc1NzU4IDYuODYz'+
			'NjRMOS44OTM5NCA3LjU0NTQ2QzEwLjQwOTEgNy41NDU0NiAxMC45MjQyIDcuNTc1NzYgMTEuNDA5MSA3LjYyMTIxQzExLjYzNjQgOC4yMjcyNyAxMS44MzMzIDguODkzOTQgMTEuOTY5NyA5LjYwNjA2QzEyLjEzNjQgMTAuNDM5NCAxMi4yMTIxIDExLjIyNzMgMTIuMjEyMSAxMS45NTQ1QzEyLjIxMjEgMTEuOTg0OSAxMi4yMTIxIDEyIDEyLjIxMjEgMTIuMDE1MkMxMi4zNzg4IDExLjk4NDggMTIuNTMwMyAxMS45NTQ1IDEyLjY4MTggMTEuOTI0MkMxMi43NTc2IDExLjkwOTEgMTIuODE4MiAxMS44OTM5IDEyLjg5MzkgMTEuODc4OEMxMi44OTM5IDExLjEyMTIgMTIuODAzIDEwLjMwMyAxMi42Mz'+
			'Y0IDkuNDY5N0MxMi41MTUyIDguODQ4NDkgMTIuMzQ4NSA4LjI1NzU4IDEyLjE2NjcgNy43MTIxMkMxMy4wMzAzIDcuODQ4NDkgMTMuNzg3OSA4LjA2MDYxIDE0LjQyNDIgOC4zMzMzM0MxNC45ODQ4IDguNTc1NzYgMTUuNDM5NCA4Ljg2MzY0IDE1LjcyNzMgOS4xNTE1MkMxNS44Nzg4IDkuMzAzMDMgMTUuOTg0OSA5LjQzOTM5IDE2LjA0NTUgOS41OTA5MUMxNi4xMDYxIDkuNzI3MjcgMTYuMTUxNSA5Ljg2MzY0IDE2LjE1MTUgMTAuMDE1MkMxNi4xNjY3IDEwLjE1MTUgMTYuMTM2NCAxMC4yODc5IDE2LjA3NTggMTAuNDM5NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPGxp'+
			'bmUgeTI9IjE2LjA0MTYiIHkxPSI0LjcwNzExIiB4Mj0iNC43MDcwMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNjYjIwMjciIHgxPSIxNi4wNDE1IiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._svg_17__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 17";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 16.6px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_17.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_17);
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxjaXJjbGUgY3g9IjEwIiByPSI5LjUiIHN0cm9rZT0iI2NiMjAyNyIgc3Ryb2tlLW9wYWNpdHk9IjEiIGN5PSIxMCIvPgogPHBhdGggZD0iTTE2LjY4MTggOS4zMDMwM0MxNi41IDguOTA5MDkgMTYuMTY2NyA4LjU3NTc2IDE1Ljc1NzYgOC4yODc4OEMxNS4xMzY0IDcuODQ4NDkgMTQuMjg3OSA3LjUgMTMuMjg3OSA3LjI1NzU4QzEyLjg2MzYgNy4xNTE1MiAxMi4zOTM5IDcuMDc1NzYgMTEuOTI0MiA3QzExLjcxMjEgNi41ID'+
			'ExLjQ4NDggNi4wNDU0NSAxMS4yMjczIDUuNjUxNTJDMTAuOTA5MSA1LjE2NjY3IDEwLjU3NTggNC43NTc1OCAxMC4yMTIxIDQuNDY5N0MxMC4wMzAzIDQuMzE4MTggOS44MzMzMyA0LjIxMjEyIDkuNjM2MzYgNC4xMjEyMUM5LjQzOTM5IDQuMDQ1NDUgOS4yMjcyNyA0IDkuMDE1MTUgNEM4LjkyNDI0IDQgOC44MzMzMyA0LjAxNTE1IDguNzQyNDMgNC4wMzAzQzguNDI0MjQgNC4wOTA5MSA4LjEzNjM2IDQuMjcyNzMgNy45MDkwOSA0LjVDNy41NjA2MSA0Ljg2MzY0IDcuMzMzMzMgNS4zNjM2NCA3LjE2NjY3IDUuOTY5N0M3IDYuNTc1NzYgNi45MjQyNCA3LjI4Nzg4IDYuOTI0MjQgOC4wNjA2MUM2'+
			'LjkyNDI0IDguODMzMzMgNyA5LjY4MTgyIDcuMTgxODIgMTAuNTQ1NUM3LjMwMzAzIDExLjE2NjcgNy40Njk3IDExLjc1NzYgNy42NTE1MiAxMi4zMDNDNi43ODc4OCAxMi4xNjY3IDYuMDE1MTUgMTEuOTU0NSA1LjM5Mzk0IDExLjY4MThDNC44MzMzMyAxMS40Mzk0IDQuMzc4NzkgMTEuMTUxNSA0LjA5MDkxIDEwLjg2MzZDMy45MzkzOSAxMC43MTIxIDMuODMzMzMgMTAuNTc1OCAzLjc3MjczIDEwLjQyNDJDMy43MTIxMiAxMC4yODc5IDMuNjY2NjcgMTAuMTUxNSAzLjY2NjY3IDEwQzMuNjY2NjcgOS44NjM2NCAzLjY5Njk3IDkuNzI3MjcgMy43NzI3MyA5LjU3NTc2QzMuODkzOTQgOS4zMzMzMy'+
			'A0LjEyMTIxIDkuMDYwNjEgNC40ODQ4NSA4LjgxODE4QzUgOC40NTQ1NSA1Ljc1NzU4IDguMTM2MzYgNi42NjY2NyA3LjkwOTA5QzYuNjY2NjcgNy42NjY2NyA2LjY4MTgyIDcuNDI0MjQgNi42OTY5NyA3LjE5Njk3QzYuMTIxMjEgNy4zMzMzMyA1LjYwNjA2IDcuNSA1LjEzNjM2IDcuNjk2OTdDNC41MTUxNSA3Ljk2OTcgNCA4LjI4Nzg4IDMuNjIxMjEgOC42NjY2N0MzLjQzOTM5IDguODYzNjQgMy4yNzI3MyA5LjA2MDYxIDMuMTY2NjcgOS4yODc4OEMzLjA2MDYxIDkuNTE1MTUgMyA5Ljc1NzU4IDMgMTBDMyAxMC4yNDI0IDMuMDYwNjEgMTAuNDg0OCAzLjE2NjY3IDEwLjcxMjFDMy4zNDg0OCAx'+
			'MS4xMDYxIDMuNjgxODIgMTEuNDM5NCA0LjEwNjA2IDExLjcyNzNDNC43MjcyNyAxMi4xNjY3IDUuNTc1NzYgMTIuNTE1MiA2LjU3NTc2IDEyLjc1NzZDNyAxMi44NjM2IDcuNDY5NyAxMi45NTQ1IDcuOTM5MzkgMTMuMDE1MkM4LjE1MTUyIDEzLjUxNTIgOC4zNzg3OSAxMy45Njk3IDguNjM2MzYgMTQuMzYzNkM4Ljk1NDU1IDE0Ljg0ODUgOS4yODc4OCAxNS4yNTc2IDkuNjUxNTIgMTUuNTQ1NUM5LjgzMzMzIDE1LjY5NyAxMC4wMzAzIDE1LjgwMyAxMC4yMjczIDE1Ljg5MzlDMTAuNDI0MiAxNS45Njk3IDEwLjYzNjQgMTYuMDE1MiAxMC44NDg1IDE2LjAxNTJDMTAuOTM5NCAxNi4wMTUyIDExLj'+
			'AzMDMgMTYgMTEuMTIxMiAxNS45ODQ5QzExLjQzOTQgMTUuOTI0MiAxMS43MjczIDE1Ljc0MjQgMTEuOTU0NSAxNS41MTUyQzEyLjMwMyAxNS4xNTE1IDEyLjUzMDMgMTQuNjUxNSAxMi42OTcgMTQuMDQ1NUMxMi43NzI3IDEzLjc3MjcgMTIuODMzMyAxMy40Njk3IDEyLjg2MzYgMTMuMTUxNUMxMi43ODc5IDEzLjE2NjcgMTIuNjk3IDEzLjE4MTggMTIuNjIxMiAxMy4xOTdDMTIuNDY5NyAxMy4yMjczIDEyLjMxODIgMTMuMjQyNCAxMi4xNjY3IDEzLjI3MjdDMTIuMTA2MSAxMy42ODE4IDEyIDE0LjA2MDYgMTEuODc4OCAxNC4zNjM2QzExLjc1NzYgMTQuNjY2NyAxMS42MjEyIDE0Ljg5MzkgMTEu'+
			'NDY5NyAxNS4wNDU1QzExLjM3ODggMTUuMTM2NCAxMS4yODc5IDE1LjE5NyAxMS4xOTcgMTUuMjQyNEwxMC44MzMzIDEzLjM5MzlDMTAuNjk3IDEzLjM5MzkgMTAuNTYwNiAxMy40MDkxIDEwLjQyNDIgMTMuNDA5MUwxMC44MDMgMTUuMzE4MkMxMC43MTIxIDE1LjMxODIgMTAuNjA2MSAxNS4yODc5IDEwLjUgMTUuMjQyNEMxMC4yNzI3IDE1LjE1MTUgMTAuMDE1MiAxNC45Njk3IDkuNzcyNzMgMTQuNjk3QzkuNDA5MDkgMTQuMzE4MiA5LjA2MDYxIDEzLjc3MjcgOC43NDI0MyAxMy4wOTA5QzkuMTM2MzYgMTMuMTIxMiA5LjU0NTQ2IDEzLjEzNjQgOS45NTQ1NSAxMy4xMzY0QzExLjgxODIgMTMuMT'+
			'M2NCAxMy41IDEyLjgxODIgMTQuNzQyNCAxMi4yODc5QzE1LjM2MzYgMTIuMDE1MiAxNS44Nzg4IDExLjY5NyAxNi4yNTc2IDExLjMxODJDMTYuNDM5NCAxMS4xMjEyIDE2LjYwNjEgMTAuOTI0MiAxNi43MTIxIDEwLjY5N0MxNi44MTgyIDEwLjQ2OTcgMTYuODc4OCAxMC4yMjczIDE2Ljg3ODggOS45ODQ4NUMxNi44NjM2IDkuNzcyNzMgMTYuODAzIDkuNTMwMyAxNi42ODE4IDkuMzAzMDNaTTE2LjA3NTggMTAuNDM5NEMxNS45NTQ1IDEwLjY4MTggMTUuNzI3MyAxMC45NTQ1IDE1LjM2MzYgMTEuMTk3QzE0LjgzMzMgMTEuNTc1OCAxNC4wNjA2IDExLjg5MzkgMTMuMTIxMiAxMi4xMjEyQzEyLjE4'+
			'MTggMTIuMzQ4NSAxMS4wOTA5IDEyLjQ4NDkgOS45MjQyNCAxMi40ODQ5QzkuNDA5MDkgMTIuNDg0OSA4Ljg5Mzk0IDEyLjQ1NDUgOC40MDkwOSAxMi40MDkxQzguMTgxODIgMTEuODAzIDcuOTg0ODUgMTEuMTM2NCA3Ljg0ODQ5IDEwLjQyNDJDNy42ODE4MiA5LjU5MDkxIDcuNjA2MDYgOC44MDMwMyA3LjYwNjA2IDguMDc1NzZDNy42MDYwNiA3LjEwNjA2IDcuNzQyNDMgNi4yNTc1OCA3Ljk4NDg1IDUuNjY2NjdDOC4xMDYwNiA1LjM2MzY0IDguMjQyNDMgNS4xMzYzNiA4LjM5Mzk0IDQuOTg0ODVDOC40ODQ4NSA0Ljg5Mzk0IDguNTc1NzYgNC44MTgxOCA4LjY2NjY3IDQuNzcyNzNMOS43MTIxMi'+
			'AxMC4wNjA2TDEwLjEzNjQgMTIuMjEyMUMxMC4yNzI3IDEyLjIxMjEgMTAuNDA5MSAxMi4yMTIxIDEwLjU0NTUgMTIuMTk3TDEwLjEwNjEgOS45Njk3TDkuMDYwNjEgNC42ODE4MkM5LjE1MTUyIDQuNjgxODIgOS4yNTc1OCA0LjcxMjEyIDkuMzQ4NDkgNC43NTc1OEM5LjU3NTc2IDQuODQ4NDggOS44MzMzMyA1LjAzMDMgMTAuMDc1OCA1LjMwMzAzQzEwLjQzOTQgNS42ODE4MiAxMC43ODc5IDYuMjI3MjcgMTEuMTA2MSA2LjkwOTA5QzEwLjcxMjEgNi44Nzg3OSAxMC4zMDMgNi44NjM2NCA5Ljg5Mzk0IDYuODYzNjRDOS44NDg0OSA2Ljg2MzY0IDkuODAzMDMgNi44NjM2NCA5Ljc1NzU4IDYuODYz'+
			'NjRMOS44OTM5NCA3LjU0NTQ2QzEwLjQwOTEgNy41NDU0NiAxMC45MjQyIDcuNTc1NzYgMTEuNDA5MSA3LjYyMTIxQzExLjYzNjQgOC4yMjcyNyAxMS44MzMzIDguODkzOTQgMTEuOTY5NyA5LjYwNjA2QzEyLjEzNjQgMTAuNDM5NCAxMi4yMTIxIDExLjIyNzMgMTIuMjEyMSAxMS45NTQ1QzEyLjIxMjEgMTEuOTg0OSAxMi4yMTIxIDEyIDEyLjIxMjEgMTIuMDE1MkMxMi4zNzg4IDExLjk4NDggMTIuNTMwMyAxMS45NTQ1IDEyLjY4MTggMTEuOTI0MkMxMi43NTc2IDExLjkwOTEgMTIuODE4MiAxMS44OTM5IDEyLjg5MzkgMTEuODc4OEMxMi44OTM5IDExLjEyMTIgMTIuODAzIDEwLjMwMyAxMi42Mz'+
			'Y0IDkuNDY5N0MxMi41MTUyIDguODQ4NDkgMTIuMzQ4NSA4LjI1NzU4IDEyLjE2NjcgNy43MTIxMkMxMy4wMzAzIDcuODQ4NDkgMTMuNzg3OSA4LjA2MDYxIDE0LjQyNDIgOC4zMzMzM0MxNC45ODQ4IDguNTc1NzYgMTUuNDM5NCA4Ljg2MzY0IDE1LjcyNzMgOS4xNTE1MkMxNS44Nzg4IDkuMzAzMDMgMTUuOTg0OSA5LjQzOTM5IDE2LjA0NTUgOS41OTA5MUMxNi4xMDYxIDkuNzI3MjcgMTYuMTUxNSA5Ljg2MzY0IDE2LjE1MTUgMTAuMDE1MkMxNi4xNjY3IDEwLjE1MTUgMTYuMTM2NCAxMC4yODc5IDE2LjA3NTggMTAuNDM5NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgo8L3N2'+
			'Zz4K';
		me._svg_21__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 21";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 16.6px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_21);
		el=me._svg_18=document.createElement('div');
		els=me._svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM3IDM3Ij4KIDxwYXRoIGQ9Ik0xOC41NTU1IDAuMDAwMjU4OTMxQzE1LjY2MDUgLTAuMDE1MTU1MiAxMi43NjM4IDAuNjU3NjIyIDEwLjExNTQgMi4wMjA1TDExLjI3NzQgNC4yNzg0MUMxNS41MTExIDIuMDk5NyAyMC40Nzg4IDEuOTY1MzUgMjQuNzk4NSAzLjg3MTczTDIzLjQ3ODEgNS40NjE1MUwzMS41NTM3IDcuNzE2NzhMMjcuODUzOSAwLjE5MzA0TDI2LjQ3MjggMS44NTY3N0MyMy45NzY0IDAuNjM1NzYzIDIxLjI2NjkgMC4wMTQ2OT'+
			'U0IDE4LjU1NTUgMC4wMDAyNTg5MzFaIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNjYjIwMjciLz4KIDxwYXRoIGQ9Ik0zNC44OTY5IDEwLjExNzJMMzIuNjM5IDExLjI3OTJDMzQuODE3NyAxNS41MTI4IDM0Ljk1MjEgMjAuNDgwNiAzMy4wNDU3IDI0LjgwMDJMMzEuNDU1OSAyMy40Nzk4TDI5LjIwMDYgMzEuNTU1NUwzNi43MjQ0IDI3Ljg1NTdMMzUuMDYwNyAyNi40NzQ1QzM3LjU4NTQgMjEuMzEyOCAzNy41MzYyIDE1LjI0NTkgMzQuODk2OSAxMC4xMTcyWiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+CiA8cGF0aCBkPSJNNS4zNjIxNCAyOS4yMDIxTDkuMDYxOTYgMzYuNzI1'+
			'OUwxMC40NDMxIDM1LjA2MjJDMTUuNjA0OSAzNy41ODY5IDIxLjY3MTggMzcuNTM3NyAyNi44MDA1IDM0Ljg5ODRMMjUuNjM4NSAzMi42NDA1QzIxLjQwNDggMzQuODE5MiAxNi40MzcgMzQuOTUzNiAxMi4xMTc0IDMzLjA0NzJMMTMuNDM3OCAzMS40NTc0TDUuMzYyMTQgMjkuMjAyMVoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTcuNzE1NDggNS4zNjI3OUwwLjE5MTczMyA5LjA2MjYxTDEuODU1NDYgMTAuNDQzOEMtMC42NjkyNDEgMTUuNjA1NSAtMC42MjAxMTcgMjEuNjcyNCAyLjAxOTE5IDI2LjgwMTFMNC4yNzcxMSAyNS42MzkxQzIuMDk4MzkgMjEuND'+
			'A1NSAxLjk2NDA0IDE2LjQzNzcgMy44NzA0MiAxMi4xMTgxTDUuNDYwMiAxMy40Mzg1TDcuNzE1NDggNS4zNjI3OVoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTM1IDM1TDIgMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNjYjIwMjciIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._svg_18__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 18";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 58.1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_18.onclick=function (e) {
			player.stopAutorotate();
			me._svg_18.style.transition='none';
			me._svg_18.style.visibility='hidden';
			me._svg_18.ggVisible=false;
			me._svg_8.style.transition='none';
			me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
			me._svg_8.ggVisible=true;
		}
		me._svg_18.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_18);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM3IDM3Ij4KIDxwYXRoIGQ9Ik0xOC41NTU1IDAuMDM0NDM4NkMxNS42NjA1IDAuMDE5MDI0NSAxMi43NjM4IDAuNjkxODAyIDEwLjExNTQgMi4wNTQ2OEwxMS4yNzc0IDQuMzEyNTlDMTUuNTExMSAyLjEzMzg4IDIwLjQ3ODggMS45OTk1MyAyNC43OTg1IDMuOTA1OUwyMy40NzgxIDUuNDk1NjlMMzEuNTUzNyA3Ljc1MDk2TDI3Ljg1MzkgMC4yMjcyMkwyNi40NzI4IDEuODkwOTVDMjMuOTc2NCAwLjY2OTk0MiAyMS4yNjY5IDAuMDQ4ODc1MS'+
			'AxOC41NTU1IDAuMDM0NDM4NloiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTM0Ljg5NjkgMTAuMTUxNEwzMi42MzkgMTEuMzEzM0MzNC44MTc3IDE1LjU0NyAzNC45NTIxIDIwLjUxNDggMzMuMDQ1NyAyNC44MzQ0TDMxLjQ1NTkgMjMuNTE0TDI5LjIwMDYgMzEuNTg5N0wzNi43MjQ0IDI3Ljg4OTlMMzUuMDYwNyAyNi41MDg3QzM3LjU4NTQgMjEuMzQ2OSAzNy41MzYyIDE1LjI4MDEgMzQuODk2OSAxMC4xNTE0WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+CiA8cGF0aCBkPSJNNS4zNjIxNSAyOS4yMzYzTDkuMDYxOTYgMzYuNzYwMUwxMC40'+
			'NDMxIDM1LjA5NjNDMTUuNjA0OSAzNy42MjEgMjEuNjcxOCAzNy41NzE5IDI2LjgwMDUgMzQuOTMyNkwyNS42Mzg1IDMyLjY3NDdDMjEuNDA0OCAzNC44NTM0IDE2LjQzNyAzNC45ODc4IDEyLjExNzQgMzMuMDgxNEwxMy40Mzc4IDMxLjQ5MTZMNS4zNjIxNSAyOS4yMzYzWiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+CiA8cGF0aCBkPSJNNy43MTU0OCA1LjM5Njk3TDAuMTkxNzMzIDkuMDk2NzhMMS44NTU0NiAxMC40Nzc5Qy0wLjY2OTI0MSAxNS42Mzk3IC0wLjYyMDExNyAyMS43MDY2IDIuMDE5MTkgMjYuODM1M0w0LjI3NzExIDI1LjY3MzNDMi4wOTgzOSAyMS40Mzk2IDEuOT'+
			'Y0MDQgMTYuNDcxOSAzLjg3MDQyIDEyLjE1MjJMNS40NjAyIDEzLjQ3MjdMNy43MTU0OCA1LjM5Njk3WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 58.1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_8.style.transition='';
				if (me._svg_8.ggCurrentLogicStateVisible == 0) {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
				else {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
			}
		}
		me._svg_8.logicBlock_visible();
		me._svg_8.onclick=function (e) {
			player.startAutorotate(0.1,4,3);
			me._svg_8.style.transition='none';
			me._svg_8.style.visibility='hidden';
			me._svg_8.ggVisible=false;
			me._svg_18.style.transition='none';
			me._svg_18.style.visibility=(Number(me._svg_18.style.opacity)>0||!me._svg_18.style.opacity)?'inherit':'hidden';
			me._svg_18.ggVisible=true;
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_8);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIgY2xhc3M9ImJpIGJpLWhlYWRzZXQtdnIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxwYXRoIGQ9Ik04IDEuMjQ4YzEuODU3IDAgMy41MjYuNjQxIDQuNjUgMS43OTRhNC45NzggNC45NzggMCAwIDEgMi41MTggMS4wOUMxMy45MDcgMS40ODIgMTEuMjk1IDAgOCAwIDQuNzUgMCAyLjEyIDEuNDguODQ0IDQuMTIyYTQuOTc5IDQuOTc5IDAgMCAxIDIuMjg5LTEuMDQ3QzQuMjM2IDEuODcyIDUuOTc0IDEuMjQ4IDggMS4yNDh6Ii8+Ci'+
			'A8cGF0aCBkPSJNMTIgMTJhMy45ODggMy45ODggMCAwIDEtMi43ODYtMS4xM2wtLjAwMi0uMDAyYTEuNjEyIDEuNjEyIDAgMCAwLS4yNzYtLjE2N0EyLjE2NCAyLjE2NCAwIDAgMCA4IDEwLjVjLS40MTQgMC0uNzI5LjEwMy0uOTM1LjIwMWExLjYxMiAxLjYxMiAwIDAgMC0uMjc3LjE2N2wtLjAwMi4wMDJBNCA0IDAgMSAxIDQgNGg4YTQgNCAwIDAgMSAwIDh6Ii8+Cjwvc3ZnPgo=';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.onclick=function (e) {
			player.toggleVR();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_6);
		el=me._svg_23=document.createElement('div');
		els=me._svg_23__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIgY2xhc3M9ImJpIGJpLWluZm8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxwYXRoIGQ9Im04LjkzIDYuNTg4LTIuMjkuMjg3LS4wODIuMzguNDUuMDgzYy4yOTQuMDcuMzUyLjE3Ni4yODguNDY5bC0uNzM4IDMuNDY4Yy0uMTk0Ljg5Ny4xMDUgMS4zMTkuODA4IDEuMzE5LjU0NSAwIDEuMTc4LS4yNTIgMS40NjUtLjU5OGwuMDg4LS40MTZjLS4yLjE3Ni0uNDkyLjI0Ni0uNjg2LjI0Ni0uMjc1IDAtLjM3NS0uMTkzLS4zMDQtLjUzM0'+
			'w4LjkzIDYuNTg4ek05IDQuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+Cjwvc3ZnPgo=';
		me._svg_23__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 23";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 8.3px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_23.onclick=function (e) {
			me._container_2.style.transition='none';
			me._container_2.style.visibility=(Number(me._container_2.style.opacity)>0||!me._container_2.style.opacity)?'inherit':'hidden';
			me._container_2.ggVisible=true;
		}
		me._svg_23.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_23);
		me._container_1.appendChild(me._rectangle_7);
		me.divSkin.appendChild(me._container_1);
		el=me._thumbnails_toggle=document.createElement('div');
		el.ggId="thumbnails_toggle";
		el.ggDx=-481;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 79px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 481px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_toggle.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnails_toggle.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_toggle.style.visibility="hidden";
					me._thumbnails_toggle.ggVisible=false;
				}
				else {
					me._thumbnails_toggle.style.visibility="hidden";
					me._thumbnails_toggle.ggVisible=false;
				}
			}
		}
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_toggle.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnails_toggle'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnails_toggle.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnails_toggle.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnails_toggle.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnails_toggle.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnails_toggle.style.backgroundColor="rgba(255,255,255,0.470588)";
				}
				else {
					me._thumbnails_toggle.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._thumbnails_toggle.logicBlock_backgroundcolor();
		me._thumbnails_toggle.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone_2') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_2', !player.getVariableValue('vis_thumbnails_2'));
			}
			if (
				(
					((player.getVariableValue('resp_phone_2') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone', true);
			}
		}
		me._thumbnails_toggle.onmouseenter=function (e) {
			me.elementMouseOver['thumbnails_toggle']=true;
			me._thumbnails_toggle.logicBlock_backgroundcolor();
		}
		me._thumbnails_toggle.onmouseleave=function (e) {
			me.elementMouseOver['thumbnails_toggle']=false;
			me._thumbnails_toggle.logicBlock_backgroundcolor();
		}
		me._thumbnails_toggle.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnails_toggle);
		el=me._thumbnail_menu_code_1=document.createElement('div');
		el.ggId="thumbnail_menu_code_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code_1);
		el=me._thumbnail_menu_2=document.createElement('div');
		els=me._thumbnail_menu_2__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 103px;';
		hs+='left : 50%;';
		hs+='margin-left : -91.5px;';
		hs+='margin-top : -51.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu_2.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu_2.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu_2.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu_2.ggScrollPosX = (me._thumbnail_menu_2__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu_2.ggScrollPosX = Math.max(me._thumbnail_menu_2.ggScrollPosX, 0);
			me._thumbnail_menu_2.ggScrollPosX = Math.min(me._thumbnail_menu_2.ggScrollPosX, me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth);
			me._thumbnail_menu_2__horScrollFg.style.left = me._thumbnail_menu_2.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu_2.ggScrollPosX / (me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth);
			me._thumbnail_menu_2__content.style.left = -(Math.round((me._thumbnail_menu_2.ggContentWidth * (1.0 - me._thumbnail_menu_2.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu_2.ggContentLeftOffset + 'px';
			me._thumbnail_menu_2.ggScrollPosXPercent = (me._thumbnail_menu_2__horScrollFg.offsetLeft / me._thumbnail_menu_2__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu_2.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu_2.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu_2.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu_2.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu_2.ggScrollPosX >= me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth)) {
					me._thumbnail_menu_2.ggScrollPosX = Math.min(me._thumbnail_menu_2.ggScrollPosX, me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu_2.ggScrollPosX <= 0)) {
					me._thumbnail_menu_2.ggScrollPosX = Math.max(me._thumbnail_menu_2.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_2__horScrollFg.style.left = me._thumbnail_menu_2.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu_2.ggScrollPosX / (me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth);
			me._thumbnail_menu_2__content.style.left = -(Math.round((me._thumbnail_menu_2.ggContentWidth * (1.0 - me._thumbnail_menu_2.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu_2.ggContentLeftOffset + 'px';
			me._thumbnail_menu_2.ggScrollPosXPercent = (me._thumbnail_menu_2__horScrollFg.offsetLeft / me._thumbnail_menu_2__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu_2.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu_2.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu_2.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu_2.ggScrollPosY = (me._thumbnail_menu_2__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu_2.ggScrollPosY = Math.max(me._thumbnail_menu_2.ggScrollPosY, 0);
			me._thumbnail_menu_2.ggScrollPosY = Math.min(me._thumbnail_menu_2.ggScrollPosY, me._thumbnail_menu_2__vertScrollBg.offsetHeight - me._thumbnail_menu_2__vertScrollFg.offsetHeight);
			me._thumbnail_menu_2__vertScrollFg.style.top = me._thumbnail_menu_2.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu_2.ggScrollPosY / (me._thumbnail_menu_2__vertScrollBg.offsetHeight - me._thumbnail_menu_2__vertScrollFg.offsetHeight);
			me._thumbnail_menu_2__content.style.top = -(Math.round((me._thumbnail_menu_2.ggContentHeight * (1.0 - me._thumbnail_menu_2.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu_2.ggContentTopOffset + 'px';
			me._thumbnail_menu_2.ggScrollPosYPercent = (me._thumbnail_menu_2__vertScrollFg.offsetTop / me._thumbnail_menu_2__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu_2.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu_2.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu_2.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu_2.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu_2.ggScrollPosY >= me._thumbnail_menu_2__vertScrollBg.offsetHeight - me._thumbnail_menu_2__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu_2.ggScrollPosY = Math.min(me._thumbnail_menu_2.ggScrollPosY, me._thumbnail_menu_2__vertScrollBg.offsetHeight - me._thumbnail_menu_2__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu_2.ggScrollPosY <= 0)) {
					me._thumbnail_menu_2.ggScrollPosY = Math.max(me._thumbnail_menu_2.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_2__vertScrollFg.style.top = me._thumbnail_menu_2.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu_2.ggScrollPosY / (me._thumbnail_menu_2__vertScrollBg.offsetHeight - me._thumbnail_menu_2__vertScrollFg.offsetHeight);
			me._thumbnail_menu_2__content.style.top = -(Math.round((me._thumbnail_menu_2.ggContentHeight * (1.0 - me._thumbnail_menu_2.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu_2.ggContentTopOffset + 'px';
			me._thumbnail_menu_2.ggScrollPosYPercent = (me._thumbnail_menu_2__vertScrollFg.offsetTop / me._thumbnail_menu_2__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu_2.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu_2.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu_2.ggHPercentVisible);
					me._thumbnail_menu_2.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu_2.clientWidth - (me._thumbnail_menu_2.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu_2.clientWidth - (me._thumbnail_menu_2.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu_2.ggHPercentVisible);
					me._thumbnail_menu_2.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu_2.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu_2.ggVPercentVisible);
					me._thumbnail_menu_2.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu_2.clientHeight - (me._thumbnail_menu_2.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu_2.clientHeight - (me._thumbnail_menu_2.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu_2.ggVPercentVisible);
					me._thumbnail_menu_2.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_menu_2__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_menu_2.ggDragInertiaX *= 0.96;
				me._thumbnail_menu_2.ggDragInertiaY *= 0.96;
				me._thumbnail_menu_2.ggScrollByX(me._thumbnail_menu_2.ggDragInertiaX);
				me._thumbnail_menu_2.ggScrollByY(me._thumbnail_menu_2.ggDragInertiaY);
				if (Math.abs(me._thumbnail_menu_2.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu_2.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_menu_2__content.onmouseup = null;
			me._thumbnail_menu_2__content.onmousemove = null;
			me._thumbnail_menu_2__content.ontouchend = null;
			me._thumbnail_menu_2__content.ontouchmove = null;
			me._thumbnail_menu_2__content.onpointerup = null;
			me._thumbnail_menu_2__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_menu_2.ggIsDragging = false; }, 100);
		}
		me._thumbnail_menu_2__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_menu_2.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_menu_2.ggDragStartY) > 10) me._thumbnail_menu_2.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_menu_2.ggDragLastX) * me._thumbnail_menu_2.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_menu_2.ggDragLastY) * me._thumbnail_menu_2.ggVPercentVisible;
			me._thumbnail_menu_2.ggDragInertiaX = -diffX;
			me._thumbnail_menu_2.ggDragInertiaY = -diffY;
			me._thumbnail_menu_2.ggDragLastX = eventX;
			me._thumbnail_menu_2.ggDragLastY = eventY;
			me._thumbnail_menu_2.ggScrollByX(-diffX);
			me._thumbnail_menu_2.ggScrollByY(-diffY);
		}
		me._thumbnail_menu_2__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu_2.ggDragLastX = me._thumbnail_menu_2.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu_2.ggDragLastY = me._thumbnail_menu_2.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu_2__content.onmouseup = me._thumbnail_menu_2__content.mousetouchend;
			me._thumbnail_menu_2__content.ontouchend = me._thumbnail_menu_2__content.mousetouchend;
			me._thumbnail_menu_2__content.onmousemove = me._thumbnail_menu_2__content.mousetouchmove;
			me._thumbnail_menu_2__content.ontouchmove = me._thumbnail_menu_2__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu_2__content.onpointerup = me._thumbnail_menu_2__content.ontouchend;
				me._thumbnail_menu_2__content.onpointermove = me._thumbnail_menu_2__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_menu_2__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_menu_2__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_menu_2__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_menu_2__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 840px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu_2__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 840px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._thumbnail_menu_2.ggScrollPosX = 0;
		me._thumbnail_menu_2.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu_2.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_2.ggDragInertiaX *= 0.96;
					me._thumbnail_menu_2.ggScrollByX(me._thumbnail_menu_2.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu_2.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu_2.ggDragLastX;
				me._thumbnail_menu_2.ggDragInertiaX = diffX;
				me._thumbnail_menu_2.ggDragLastX = e.clientX;
				me._thumbnail_menu_2.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu_2.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu_2.ggDragInertiaX *= 0.96;
					me._thumbnail_menu_2.ggScrollByX(me._thumbnail_menu_2.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu_2.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu_2.ggDragLastX;
				me._thumbnail_menu_2.ggDragInertiaX = diffX;
				me._thumbnail_menu_2.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu_2.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu_2.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu_2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu_2.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu_2__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu_2.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu_2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu_2.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu_2.ggScrollByXSmooth(30 * me._thumbnail_menu_2.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu_2__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu_2";
		el.ggDx=5.85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 17.25%;';
		hs+='height : 16.25%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 5.85%);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_2.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_2.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_2.style.visibility=me._thumbnail_menu_2.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_2.style.opacity == 0.0) { me._thumbnail_menu_2.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_2.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_2.logicBlock_alpha();
		me._thumbnail_menu_2.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu_2__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu_2__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu_2.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu_2__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu_2__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu_2.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu_2.ggHorScrollVisible) {
					me._thumbnail_menu_2.ggAvailableHeight = me._thumbnail_menu_2.clientHeight - 5;
					if (me._thumbnail_menu_2.ggVertScrollVisible) {
						me._thumbnail_menu_2.ggAvailableWidth = me._thumbnail_menu_2.clientWidth - 5;
						me._thumbnail_menu_2.ggAvailableWidthWithScale = me._thumbnail_menu_2.getBoundingClientRect().width - me._thumbnail_menu_2__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu_2.ggAvailableWidth = me._thumbnail_menu_2.clientWidth;
						me._thumbnail_menu_2.ggAvailableWidthWithScale = me._thumbnail_menu_2.getBoundingClientRect().width;
					}
					me._thumbnail_menu_2__horScrollBg.style.width = me._thumbnail_menu_2.ggAvailableWidth + 'px';
					me._thumbnail_menu_2.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu_2.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu_2.ggHPercentVisible > 1.0) me._thumbnail_menu_2.ggHPercentVisible = 1.0;
					me._thumbnail_menu_2.ggScrollWidth = Math.round(me._thumbnail_menu_2__horScrollBg.offsetWidth * me._thumbnail_menu_2.ggHPercentVisible);
					me._thumbnail_menu_2__horScrollFg.style.width = me._thumbnail_menu_2.ggScrollWidth + 'px';
					me._thumbnail_menu_2.ggScrollPosX = me._thumbnail_menu_2.ggScrollPosXPercent * me._thumbnail_menu_2.ggAvailableWidth;
					me._thumbnail_menu_2.ggScrollPosX = Math.min(me._thumbnail_menu_2.ggScrollPosX, me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth);
					me._thumbnail_menu_2__horScrollFg.style.left = me._thumbnail_menu_2.ggScrollPosX + 'px';
					if (me._thumbnail_menu_2.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu_2.ggScrollPosX / (me._thumbnail_menu_2__horScrollBg.offsetWidth - me._thumbnail_menu_2__horScrollFg.offsetWidth);
						me._thumbnail_menu_2__content.style.left = -(Math.round((me._thumbnail_menu_2.ggContentWidth * (1.0 - me._thumbnail_menu_2.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu_2.ggAvailableHeight = me._thumbnail_menu_2.clientHeight;
					me._thumbnail_menu_2.ggScrollPosX = 0;
					me._thumbnail_menu_2.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu_2.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu_2.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_menu_2);
					me._thumbnail_menu_2.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 182;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_menu_2__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu_2);
		el=me._thumbnail_menu_code=document.createElement('div');
		el.ggId="thumbnail_menu_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code);
		el=me._controller_3=document.createElement('div');
		el.ggId="controller_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 5.25%;';
		hs+='position : absolute;';
		hs+='right : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 3.33333%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._controller_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_3') == true)) || 
				((player.getOS() == 6)) || 
				((player.getOS() == 5))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_3.style.transition='opacity 0s';
				if (me._controller_3.ggCurrentLogicStateVisible == 0) {
					me._controller_3.style.visibility="hidden";
					me._controller_3.ggVisible=false;
				}
				else if (me._controller_3.ggCurrentLogicStateVisible == 1) {
					me._controller_3.style.visibility="hidden";
					me._controller_3.ggVisible=false;
				}
				else {
					me._controller_3.style.visibility=(Number(me._controller_3.style.opacity)>0||!me._controller_3.style.opacity)?'inherit':'hidden';
					me._controller_3.ggVisible=true;
				}
			}
		}
		me._controller_3.logicBlock_visible();
		me._controller_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller_3.style.transition='opacity 0s';
				if (me._controller_3.ggCurrentLogicStateAlpha == 0) {
					me._controller_3.style.visibility=me._controller_3.ggVisible?'inherit':'hidden';
					me._controller_3.style.opacity=1;
				}
				else if (me._controller_3.ggCurrentLogicStateAlpha == 1) {
					me._controller_3.style.visibility=me._controller_3.ggVisible?'inherit':'hidden';
					me._controller_3.style.opacity=1;
				}
				else {
					me._controller_3.style.visibility=me._controller_3.ggVisible?'inherit':'hidden';
					me._controller_3.style.opacity=1;
				}
			}
		}
		me._controller_3.logicBlock_alpha();
		me._controller_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_icon1=document.createElement('div');
		els=me._btn_thumbnails_icon1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZ3JpZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2UyMzAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMyIvPgogPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjMiLz4KIDxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9Ij'+
			'ciIHg9IjE0IiB5PSIxNCIvPgogPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMTQiLz4KPC9zdmc+Cg==';
		me._btn_thumbnails_icon1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_thumbnails_icon1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 78.5714%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((78.5714% + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._btn_thumbnails_icon1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbnails_icon1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbnails_icon1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbnails_icon1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbnails_icon1.style.transition='';
				if (me._btn_thumbnails_icon1.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbnails_icon1.style.visibility="hidden";
					me._btn_thumbnails_icon1.ggVisible=false;
				}
				else {
					me._btn_thumbnails_icon1.style.visibility="hidden";
					me._btn_thumbnails_icon1.ggVisible=false;
				}
			}
		}
		me._btn_thumbnails_icon1.logicBlock_visible();
		me._btn_thumbnails_icon1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone_2') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone_2') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_2', !player.getVariableValue('vis_thumbnails_2'));
			}
		}
		me._btn_thumbnails_icon1.ggUpdatePosition=function (useTransition) {
		}
		me._controller_3.appendChild(me._btn_thumbnails_icon1);
		me.divSkin.appendChild(me._controller_3);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((170px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEzLjA1OTA1IiBoZWlnaHQ9IjUwMC44OTU3MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEzLjA1OTA1IDUwMC44OTU3MSI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cG9seWdvbiBzdHlsZT0iZmlsbDojZTIzMDM4O3N0cm9rZTojZTIzMDM4O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0MHB4OyBzdHJva2Utb3BhY2l0eToxOyBmaWxsLW9wYWNpdHk6MSIgcG9pbnRzPSI0NjQuMTc5IDI4LjI3OCA0OD'+
			'QuNzc5IDQ5Ljc3OCAyNzUuNTI5IDI1MC4yNzggNDg0Ljc3OSA0NTAuNzg4IDQ2NC4xNzkgNDcyLjI3OCAyMzIuNDk5IDI1MC4yNzggNDY0LjE3OSAyOC4yNzgiLz4KICAgPHBvbHlnb24gc3R5bGU9ImZpbGw6I2UyMzAzODtzdHJva2U6I2UyMzAzODtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NDBweDsgc3Ryb2tlLW9wYWNpdHk6MTsgZmlsbC1vcGFjaXR5OjEiIHBvaW50cz0iMjYwLjU4OCAyOC42MjEgMjgxLjE4OCA1MC4xMjEgNzEuOTM4IDI1MC42MjEgMjgxLjE4OCA0NTEuMTMxIDI2MC41ODggNDcyLjYyMSAyOC45MDcgMjUwLjYyMSAyNjAuNTg4IDI4LjYyMSIvPgogIDwv'+
			'Zz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_9__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : 10.25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((29px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.onclick=function (e) {
			player.goBack(player.hotspot.target);
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._svg_9);
		el=me._svg_14=document.createElement('div');
		els=me._svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEzLjA1OTA1IiBoZWlnaHQ9IjUwMC44OTU3MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEzLjA1OTA1IDUwMC44OTU3MSI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cG9seWdvbiBzdHlsZT0iZmlsbDojZTIzMDM4O3N0cm9rZTojZTIzMDM4O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0MHB4OyBzdHJva2Utb3BhY2l0eToxOyBmaWxsLW9wYWNpdHk6MSIgcG9pbnRzPSI0OC44ODEgNDcyLjYxNyAyOC'+
			'4yODEgNDUxLjExNyAyMzcuNTMgMjUwLjYxNyAyOC4yODEgNTAuMTA3IDQ4Ljg4MSAyOC42MTcgMjgwLjU2MSAyNTAuNjE3IDQ4Ljg4MSA0NzIuNjE3Ii8+CiAgIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNlMjMwMzg7c3Ryb2tlOiNlMjMwMzg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjQwcHg7IHN0cm9rZS1vcGFjaXR5OjE7IGZpbGwtb3BhY2l0eToxIiBwb2ludHM9IjI1Mi40NzIgNDcyLjI3NSAyMzEuODcyIDQ1MC43NzUgNDQxLjEyMiAyNTAuMjc1IDIzMS44NzIgNDkuNzY1IDI1Mi40NzIgMjguMjc1IDQ4NC4xNTIgMjUwLjI3NSAyNTIuNDcyIDQ3Mi4yNzUiLz4KICA8L2c+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_14__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='position : absolute;';
		hs+='right : 10.25px;';
		hs+='top : calc(50% - ((29px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_14.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}",player.hotspot.target);
		}
		me._svg_14.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._svg_14);
		el=me._playpause_btn=document.createElement('div');
		el.ggId="Play\/pause_Btn";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #d60d30;';
		hs+='border-radius : 99px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : calc(50% - ((35px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._playpause_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._playpause_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTMgMCAyOCAyOCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPHRpdGxlPnBsYXk8L3'+
			'RpdGxlPgogPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz4KIDxkZWZzLz4KIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogIDxnIGlkPSJJY29uLVNldC1GaWxsZWQiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxOS4wMDAwMDAsIC01NzEuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CiAgIDxwYXRoIGQ9Ik00NDAuNDE1LDU4My41NTQgTDQyMS40MTgsNTcxLjMxMSBD'+
			'NDIwLjI5MSw1NzAuNzA0IDQxOSw1NzAuNzY3IDQxOSw1NzIuOTQ2IEw0MTksNTk3LjA1NCBDNDE5LDU5OS4wNDYgNDIwLjM4NSw1OTkuMzYgNDIxLjQxOCw1OTguNjg5IEw0NDAuNDE1LDU4Ni40NDYgQzQ0MS4xOTcsNTg1LjY0NyA0NDEuMTk3LDU4NC4zNTMgNDQwLjQxNSw1ODMuNTU0IiBpZD0icGxheSIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZDYxMTMwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_12__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_12__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTMgMCAyOCAyOCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPHRpdGxlPnBsYXk8L3'+
			'RpdGxlPgogPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz4KIDxkZWZzLz4KIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogIDxnIGlkPSJJY29uLVNldC1GaWxsZWQiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxOS4wMDAwMDAsIC01NzEuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CiAgIDxwYXRoIGQ9Ik00NDAuNDE1LDU4My41NTQgTDQyMS40MTgsNTcxLjMxMSBD'+
			'NDIwLjI5MSw1NzAuNzA0IDQxOSw1NzAuNzY3IDQxOSw1NzIuOTQ2IEw0MTksNTk3LjA1NCBDNDE5LDU5OS4wNDYgNDIwLjM4NSw1OTkuMzYgNDIxLjQxOCw1OTguNjg5IEw0NDAuNDE1LDU4Ni40NDYgQzQ0MS4xOTcsNTg1LjY0NyA0NDEuMTk3LDU4NC4zNTMgNDQwLjQxNSw1ODMuNTU0IiBpZD0icGxheSIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZDYxMTMwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_12__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_12.onclick=function (e) {
			player.stopAutorotate();
			me._svg_12.style.transition='none';
			me._svg_12.style.visibility='hidden';
			me._svg_12.ggVisible=false;
			me._svg_13.style.transition='none';
			me._svg_13.style.visibility=(Number(me._svg_13.style.opacity)>0||!me._svg_13.style.opacity)?'inherit':'hidden';
			me._svg_13.ggVisible=true;
		}
		me._svg_12.onmouseenter=function (e) {
			me._svg_12__img.style.visibility='hidden';
			me._svg_12__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_12']=true;
		}
		me._svg_12.onmouseleave=function (e) {
			me._svg_12__img.style.visibility='inherit';
			me._svg_12__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_12']=false;
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me._playpause_btn.appendChild(me._svg_12);
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCI+CiAgPHBhdGggZD0ibSAzIDEgaCAzIGMgMC41NTA3ODEgMCAxIDAuNDQ5MjE5IDEgMSB2IDEyIGMgMCAwLjU1MDc4MSAtMC40NDkyMTkgMSAtMSAxIGggLTMgYy'+
			'AtMC41NTA3ODEgMCAtMSAtMC40NDkyMTkgLTEgLTEgdiAtMTIgYyAwIC0wLjU1MDc4MSAwLjQ0OTIxOSAtMSAxIC0xIHogbSAwIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCIvPgogIDxwYXRoIGQ9Im0gMTAgMSBoIDMgYyAwLjU1MDc4MSAwIDEgMC40NDkyMTkgMSAxIHYgMTIgYyAwIDAuNTUwNzgxIC0wLjQ0OTIxOSAxIC0xIDEgaCAtMyBjIC0wLjU1MDc4MSAwIC0xIC0wLjQ0OTIxOSAtMSAtMSB2IC0xMiBjIDAgLTAuNTUwNzgxIDAuNDQ5MjE5IC0xIDEgLTEgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZDYxMTMwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_13__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_13__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCI+CiAgPHBhdGggZD0ibSAzIDEgaCAzIGMgMC41NTA3ODEgMCAxIDAuNDQ5MjE5IDEgMSB2IDEyIGMgMCAwLjU1MDc4MSAtMC40NDkyMTkgMSAtMSAxIGggLTMgYy'+
			'AtMC41NTA3ODEgMCAtMSAtMC40NDkyMTkgLTEgLTEgdiAtMTIgYyAwIC0wLjU1MDc4MSAwLjQ0OTIxOSAtMSAxIC0xIHogbSAwIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCIvPgogIDxwYXRoIGQ9Im0gMTAgMSBoIDMgYyAwLjU1MDc4MSAwIDEgMC40NDkyMTkgMSAxIHYgMTIgYyAwIDAuNTUwNzgxIC0wLjQ0OTIxOSAxIC0xIDEgaCAtMyBjIC0wLjU1MDc4MSAwIC0xIC0wLjQ0OTIxOSAtMSAtMSB2IC0xMiBjIDAgLTAuNTUwNzgxIDAuNDQ5MjE5IC0xIDEgLTEgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZDYxMTMwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_13__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		ela=me._svg_13__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCI+CiAgPHBhdGggZD0ibSAzIDEgaCAzIGMgMC41NTA3ODEgMCAxIDAuNDQ5MjE5IDEgMSB2IDEyIGMgMCAwLjU1MDc4MSAtMC40NDkyMTkgMSAtMSAxIGggLTMgYy'+
			'AtMC41NTA3ODEgMCAtMSAtMC40NDkyMTkgLTEgLTEgdiAtMTIgYyAwIC0wLjU1MDc4MSAwLjQ0OTIxOSAtMSAxIC0xIHogbSAwIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCIvPgogIDxwYXRoIGQ9Im0gMTAgMSBoIDMgYyAwLjU1MDc4MSAwIDEgMC40NDkyMTkgMSAxIHYgMTIgYyAwIDAuNTUwNzgxIC0wLjQ0OTIxOSAxIC0xIDEgaCAtMyBjIC0wLjU1MDc4MSAwIC0xIC0wLjQ0OTIxOSAtMSAtMSB2IC0xMiBjIDAgLTAuNTUwNzgxIDAuNDQ5MjE5IC0xIDEgLTEgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZDYxMTMwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_13__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggSubElementActive = ela;
		el.ggId="Svg 13";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_13.style.transition='';
				if (me._svg_13.ggCurrentLogicStateVisible == 0) {
					me._svg_13.style.visibility=(Number(me._svg_13.style.opacity)>0||!me._svg_13.style.opacity)?'inherit':'hidden';
					me._svg_13.ggVisible=true;
				}
				else {
					me._svg_13.style.visibility=(Number(me._svg_13.style.opacity)>0||!me._svg_13.style.opacity)?'inherit':'hidden';
					me._svg_13.ggVisible=true;
				}
			}
		}
		me._svg_13.logicBlock_visible();
		me._svg_13.onclick=function (e) {
			player.startAutorotate(0.1,4,3);
			me._svg_13.style.transition='none';
			me._svg_13.style.visibility='hidden';
			me._svg_13.ggVisible=false;
			me._svg_12.style.transition='none';
			me._svg_12.style.visibility=(Number(me._svg_12.style.opacity)>0||!me._svg_12.style.opacity)?'inherit':'hidden';
			me._svg_12.ggVisible=true;
		}
		me._svg_13.onmouseenter=function (e) {
			me._svg_13__img.style.visibility='hidden';
			me._svg_13__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_13']=true;
		}
		me._svg_13.onmousedown=function (e) {
			me._svg_13__imga.style.visibility='inherit';
			me._svg_13__imgo.style.visibility='hidden';
		}
		me._svg_13.onmouseup=function (e) {
			me._svg_13__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_13__img.style.visibility='inherit';
			} else {
				me._svg_13__imgo.style.visibility='inherit';
			}
		}
		me._svg_13.onmouseleave=function (e) {
			me._svg_13__img.style.visibility='inherit';
			me._svg_13__imgo.style.visibility='hidden';
			me._svg_13__imga.style.visibility='hidden';
			me.elementMouseOver['svg_13']=false;
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
		}
		me._playpause_btn.appendChild(me._svg_13);
		me._rectangle_1.appendChild(me._playpause_btn);
		me.divSkin.appendChild(me._rectangle_1);
		el=me._controller_2=document.createElement('div');
		el.ggId="controller_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle element.style { height: 20px; left: 10px; position: absolute; top: calc(50% - 10px); visibility: inherit; width: 20px; pointer-events: auto; transform-origin: 50% 50%; transition: transform 0.5s ease; transform: translate(0px 0px) rotate(0deg) scale(1 1); }";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 13px;';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='element.style { height: 20px; left: 10px; position: absolute; top: calc(50% - 10px); visibility: inherit; width: 20px; pointer-events: auto; transform-origin: 50% 50%; transition: transform 0.5s ease; transform: translate(0px, 0px) rotate(0deg) scale(1, 1); }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM0IDM1Ij4KIDxwYXRoIGQ9Ik0xOC40OTAzIDM0LjA1MjVIMTYuNDEzMkMxNC43MzMyIDM0LjA1MjUgMTMuMzY2NCAzMi42ODU3IDEzLjM2NjQgMzEuMDA1OFYzMC4zMDNDMTIuNjUyMiAzMC4wNzQ5IDExLjk1ODIgMjkuNzg2OCAxMS4yOTE2IDI5LjQ0MThMMTAuNzkzNiAyOS45Mzk4QzkuNTg3NDQgMzEuMTQ3NCA3LjY1NTM3IDMxLjExMiA2LjQ4NDI2IDI5LjkzOTRMNS4wMTYxOSAyOC40NzE0QzMuODQzMDEgMjcuMjk5NSAzLjgwOTI2ID'+
			'I1LjM2OCA1LjAxNjU3IDI0LjE2Mkw1LjUxNDE4IDIzLjY2NDRDNS4xNjkxOSAyMi45OTc4IDQuODgxMjEgMjIuMzA0IDQuNjUyOTcgMjEuNTg5NkgzLjk1MDMxQzIuMjcwNDEgMjEuNTg5NiAwLjkwMzU2NCAyMC4yMjI4IDAuOTAzNTY0IDE4LjU0MjlWMTYuNDY1N0MwLjkwMzU2NCAxNC43ODU3IDIuMjcwNDEgMTMuNDE4OSAzLjk1MDM4IDEzLjQxODlINC42NTMwM0M0Ljg4MTI4IDEyLjcwNDYgNS4xNjkyNiAxMi4wMTA4IDUuNTE0MjUgMTEuMzQ0MUw1LjAxNjI1IDEwLjg0NjJDMy44MDk2NSA5LjY0MDkgMy44NDI5NCA3LjcwOTI4IDUuMDE2NjQgNi41MzY4OEw2LjQ4NDg0IDUuMDY4NzRDNy42'+
			'NTg2NyAzLjg5MzMgOS41OTAyOCAzLjg2Mzk1IDEwLjc5NDEgNS4wNjkxM0wxMS4yOTE2IDUuNTY2NjdDMTEuOTU4MyA1LjIyMTc1IDEyLjY1MjIgNC45MzM3IDEzLjM2NjQgNC43MDU0NlY0LjAwMjhDMTMuMzY2NCAyLjMyMjgzIDE0LjczMzIgMC45NTYwNTUgMTYuNDEzMyAwLjk1NjA1NUgxOC40OTA0QzIwLjE3MDMgMC45NTYwNTUgMjEuNTM3MSAyLjMyMjgzIDIxLjUzNzEgNC4wMDI4VjQuNzA1NTJDMjIuMjUxNCA0LjkzMzcgMjIuOTQ1MyA1LjIyMTc1IDIzLjYxMTkgNS41NjY3NEwyNC4xMDk5IDUuMDY4NzRDMjUuMzE2MSAzLjg2MTExIDI3LjI0ODEgMy44OTY1MyAyOC40MTkzIDUuMDY5MT'+
			'lMMjkuODg3MyA2LjUzNzJDMzEuMDYwNSA3LjcwOTA5IDMxLjA5NDIgOS42NDA1MSAyOS44ODY5IDEwLjg0NjVMMjkuMzg5MyAxMS4zNDQxQzI5LjczNDMgMTIuMDEwOCAzMC4wMjIzIDEyLjcwNDYgMzAuMjUwNSAxMy40MTg5SDMwLjk1MzJDMzIuNjMzMiAxMy40MTg5IDM0IDE0Ljc4NTcgMzQgMTYuNDY1N1YxOC41NDI5QzM0IDIwLjIyMjggMzIuNjMzMiAyMS41ODk2IDMwLjk1MzIgMjEuNTg5NkgzMC4yNTA1QzMwLjAyMjMgMjIuMzAzOSAyOS43MzQzIDIyLjk5NzggMjkuMzg5MyAyMy42NjQ0TDI5Ljg4NzMgMjQuMTYyNEMzMS4wOTM5IDI1LjM2NzcgMzEuMDYwNiAyNy4yOTkzIDI5Ljg4Njkg'+
			'MjguNDcxN0wyOC40MTg3IDI5LjkzOTlDMjcuMjQ0OSAzMS4xMTUzIDI1LjMxMzMgMzEuMTQ0NyAyNC4xMDk1IDI5LjkzOTVMMjMuNjExOSAyOS40NDE5QzIyLjk0NTMgMjkuNzg2OSAyMi4yNTE0IDMwLjA3NDkgMjEuNTM3MSAzMC4zMDMyVjMxLjAwNTlDMjEuNTM3MSAzMi42ODU3IDIwLjE3MDQgMzQuMDUyNSAxOC40OTAzIDM0LjA1MjVaTTExLjYxNTggMjcuNDA1NEMxMi41NDE5IDI3Ljk1MzEgMTMuNTM4NyAyOC4zNjY5IDE0LjU3ODMgMjguNjM1MkMxNS4wMDY1IDI4Ljc0NTcgMTUuMzA1NyAyOS4xMzE5IDE1LjMwNTcgMjkuNTc0MVYzMS4wMDU4QzE1LjMwNTcgMzEuNjE2NCAxNS44MDI2ID'+
			'MyLjExMzMgMTYuNDEzMyAzMi4xMTMzSDE4LjQ5MDRDMTkuMTAxIDMyLjExMzMgMTkuNTk3OSAzMS42MTY0IDE5LjU5NzkgMzEuMDA1OFYyOS41NzQxQzE5LjU5NzkgMjkuMTMxOSAxOS44OTcxIDI4Ljc0NTcgMjAuMzI1MyAyOC42MzUyQzIxLjM2NSAyOC4zNjY5IDIyLjM2MTggMjcuOTUzMSAyMy4yODc5IDI3LjQwNTRDMjMuNjY4OSAyNy4xODAxIDI0LjE1NDEgMjcuMjQxNCAyNC40NjcxIDI3LjU1NDRMMjUuNDgxMiAyOC41Njg2QzI1LjkxODUgMjkuMDA2MyAyNi42MjA2IDI4Ljk5NjIgMjcuMDQ3MSAyOC41NjlMMjguNTE2MiAyNy4xQzI4Ljk0MTcgMjYuNjc1IDI4Ljk1NTkgMjUuOTcyOCAy'+
			'OC41MTY2IDI1LjUzNEwyNy41MDIxIDI0LjUxOTVDMjcuMTg5MSAyNC4yMDY1IDI3LjEyNzggMjMuNzIxMyAyNy4zNTMxIDIzLjM0MDNDMjcuOTAwOCAyMi40MTQzIDI4LjMxNDUgMjEuNDE3NSAyOC41ODI4IDIwLjM3NzdDMjguNjkzMyAxOS45NDk1IDI5LjA3OTUgMTkuNjUwNCAyOS41MjE2IDE5LjY1MDRIMzAuOTUzM0MzMS41NjM5IDE5LjY1MDQgMzIuMDYwOCAxOS4xNTM2IDMyLjA2MDggMTguNTQyOVYxNi40NjU3QzMyLjA2MDggMTUuODU1MSAzMS41NjM5IDE1LjM1ODIgMzAuOTUzMyAxNS4zNTgySDI5LjUyMTZDMjkuMDc5NCAxNS4zNTgyIDI4LjY5MzMgMTUuMDU5MSAyOC41ODI4IDE0Lj'+
			'YzMUMyOC4zMTQ1IDEzLjU5MTIgMjcuOTAwNyAxMi41OTQ0IDI3LjM1MzEgMTEuNjY4NEMyNy4xMjc4IDExLjI4NzQgMjcuMTg5MSAxMC44MDIyIDI3LjUwMjEgMTAuNDg5MkwyOC41MTYyIDkuNDc1MDNDMjguOTU0NiA5LjAzNzE1IDI4Ljk0MzIgOC4zMzUxNCAyOC41MTY2IDcuOTA5MDlMMjcuMDQ3NiA2LjQ0MDExQzI2LjYyMTggNi4wMTM3MyAyNS45MTk2IDYuMDAxMjYgMjUuNDgxNyA2LjQzOTcyTDI0LjQ2NzIgNy40NTQyN0MyNC4xNTQyIDcuNzY3MzMgMjMuNjY4OSA3LjgyODYxIDIzLjI4NzkgNy42MDMyN0MyMi4zNjE4IDcuMDU1NTYgMjEuMzY1MSA2LjY0MTc5IDIwLjMyNTQgNi4zNzM0'+
			'NkMxOS44OTcyIDYuMjYyOTkgMTkuNTk4IDUuODc2ODIgMTkuNTk4IDUuNDM0NjFWNC4wMDI4QzE5LjU5OCAzLjM5MjEzIDE5LjEwMTEgMi44OTUzIDE4LjQ5MDQgMi44OTUzSDE2LjQxMzNDMTUuODAyNyAyLjg5NTMgMTUuMzA1OCAzLjM5MjEzIDE1LjMwNTggNC4wMDI4VjUuNDM0NDhDMTUuMzA1OCA1Ljg3NjY5IDE1LjAwNjYgNi4yNjI4NiAxNC41Nzg0IDYuMzczMzRDMTMuNTM4NyA2LjY0MTY2IDEyLjU0MTkgNy4wNTU0MyAxMS42MTU4IDcuNjAzMTRDMTEuMjM0NyA3LjgyODQyIDEwLjc0OTYgNy43NjcxNCAxMC40MzY2IDcuNDU0MTRMOS40MjI0NyA2LjQzOTk4QzguOTg1MjQgNi4wMDIyMy'+
			'A4LjI4MzA0IDYuMDEyMzggNy44NTY2IDYuNDM5NTNMNi4zODc0OSA3LjkwODU3QzUuOTYyMDIgOC4zMzM1MiA1Ljk0NzggOS4wMzU3MiA2LjM4NzEgOS40NzQ1MUw3LjQwMTY1IDEwLjQ4OTFDNy43MTQ2NSAxMC44MDIxIDcuNzc1OTMgMTEuMjg3MyA3LjU1MDY1IDExLjY2ODJDNy4wMDI5NCAxMi41OTQzIDYuNTg5MjQgMTMuNTkxMSA2LjMyMDkxIDE0LjYzMDhDNi4yMTAzNyAxNS4wNTkgNS44MjQyIDE1LjM1ODEgNS4zODIwNiAxNS4zNTgxSDMuOTUwMzhDMy4zMzk3MSAxNS4zNTgyIDIuODQyODEgMTUuODU1IDIuODQyODEgMTYuNDY1N1YxOC41NDI5QzIuODQyODEgMTkuMTUzNSAzLjMzOTcx'+
			'IDE5LjY1MDQgMy45NTAzOCAxOS42NTA0SDUuMzgxOTlDNS44MjQyIDE5LjY1MDQgNi4yMTAzMSAxOS45NDk1IDYuMzIwODUgMjAuMzc3N0M2LjU4OTE3IDIxLjQxNzQgNy4wMDI5NCAyMi40MTQyIDcuNTUwNTkgMjMuMzQwMkM3Ljc3NTg2IDIzLjcyMTIgNy43MTQ1OCAyNC4yMDY0IDcuNDAxNTkgMjQuNTE5NEw2LjM4NzQzIDI1LjUzMzZDNS45NDkwMyAyNS45NzE1IDUuOTYwNDcgMjYuNjczNSA2LjM4NzA0IDI3LjA5OTVMNy44NTYwMiAyOC41Njg1QzguMjgxODEgMjguOTk0OSA4Ljk4NDA4IDI5LjAwNzQgOS40MjE5NiAyOC41Njg5TDEwLjQzNjQgMjcuNTU0M0MxMC42NjcxIDI3LjMyMzggMT'+
			'EuMTQ2OSAyNy4xMjgxIDExLjYxNTggMjcuNDA1NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTE3LjQ1MzcgMjQuNjU1OUMxMy41MTA5IDI0LjY1NTkgMTAuMzAzMiAyMS40NDgyIDEwLjMwMzIgMTcuNTA1NEMxMC4zMDMyIDEzLjU2MjcgMTMuNTEwOSAxMC4zNTUgMTcuNDUzNyAxMC4zNTVDMjEuMzk2NSAxMC4zNTUgMjQuNjA0MiAxMy41NjI3IDI0LjYwNDIgMTcuNTA1NEMyNC42MDQyIDIxLjQ0ODIgMjEuMzk2NSAyNC42NTU5IDE3LjQ1MzcgMjQuNjU1OVpNMTcuNDUzNyAxMi4yODA2QzE0LjU3MjcgMTIuMjgwNiAxMi4yMjg5IDE0LjYyNDUgMTIuMjI4'+
			'OSAxNy41MDU0QzEyLjIyODkgMjAuMzg2NCAxNC41NzI3IDIyLjczMDMgMTcuNDUzNyAyMi43MzAzQzIwLjMzNDcgMjIuNzMwMyAyMi42Nzg2IDIwLjM4NjQgMjIuNjc4NiAxNy41MDU0QzIyLjY3ODYgMTQuNjI0NSAyMC4zMzQ4IDEyLjI4MDYgMTcuNDUzNyAxMi4yODA2WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+Cjwvc3ZnPgo=';
		me._svg_15__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_15__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM0IDM1Ij4KIDxwYXRoIGQ9Ik0xOC40OTAzIDM0LjA1MjVIMTYuNDEzMkMxNC43MzMyIDM0LjA1MjUgMTMuMzY2NCAzMi42ODU3IDEzLjM2NjQgMzEuMDA1OFYzMC4zMDNDMTIuNjUyMiAzMC4wNzQ5IDExLjk1ODIgMjkuNzg2OCAxMS4yOTE2IDI5LjQ0MThMMTAuNzkzNiAyOS45Mzk4QzkuNTg3NDQgMzEuMTQ3NCA3LjY1NTM3IDMxLjExMiA2LjQ4NDI2IDI5LjkzOTRMNS4wMTYxOSAyOC40NzE0QzMuODQzMDEgMjcuMjk5NSAzLjgwOTI2ID'+
			'I1LjM2OCA1LjAxNjU3IDI0LjE2Mkw1LjUxNDE4IDIzLjY2NDRDNS4xNjkxOSAyMi45OTc4IDQuODgxMjEgMjIuMzA0IDQuNjUyOTcgMjEuNTg5NkgzLjk1MDMxQzIuMjcwNDEgMjEuNTg5NiAwLjkwMzU2NCAyMC4yMjI4IDAuOTAzNTY0IDE4LjU0MjlWMTYuNDY1N0MwLjkwMzU2NCAxNC43ODU3IDIuMjcwNDEgMTMuNDE4OSAzLjk1MDM4IDEzLjQxODlINC42NTMwM0M0Ljg4MTI4IDEyLjcwNDYgNS4xNjkyNiAxMi4wMTA4IDUuNTE0MjUgMTEuMzQ0MUw1LjAxNjI1IDEwLjg0NjJDMy44MDk2NSA5LjY0MDkgMy44NDI5NCA3LjcwOTI4IDUuMDE2NjQgNi41MzY4OEw2LjQ4NDg0IDUuMDY4NzRDNy42'+
			'NTg2NyAzLjg5MzMgOS41OTAyOCAzLjg2Mzk1IDEwLjc5NDEgNS4wNjkxM0wxMS4yOTE2IDUuNTY2NjdDMTEuOTU4MyA1LjIyMTc1IDEyLjY1MjIgNC45MzM3IDEzLjM2NjQgNC43MDU0NlY0LjAwMjhDMTMuMzY2NCAyLjMyMjgzIDE0LjczMzIgMC45NTYwNTUgMTYuNDEzMyAwLjk1NjA1NUgxOC40OTA0QzIwLjE3MDMgMC45NTYwNTUgMjEuNTM3MSAyLjMyMjgzIDIxLjUzNzEgNC4wMDI4VjQuNzA1NTJDMjIuMjUxNCA0LjkzMzcgMjIuOTQ1MyA1LjIyMTc1IDIzLjYxMTkgNS41NjY3NEwyNC4xMDk5IDUuMDY4NzRDMjUuMzE2MSAzLjg2MTExIDI3LjI0ODEgMy44OTY1MyAyOC40MTkzIDUuMDY5MT'+
			'lMMjkuODg3MyA2LjUzNzJDMzEuMDYwNSA3LjcwOTA5IDMxLjA5NDIgOS42NDA1MSAyOS44ODY5IDEwLjg0NjVMMjkuMzg5MyAxMS4zNDQxQzI5LjczNDMgMTIuMDEwOCAzMC4wMjIzIDEyLjcwNDYgMzAuMjUwNSAxMy40MTg5SDMwLjk1MzJDMzIuNjMzMiAxMy40MTg5IDM0IDE0Ljc4NTcgMzQgMTYuNDY1N1YxOC41NDI5QzM0IDIwLjIyMjggMzIuNjMzMiAyMS41ODk2IDMwLjk1MzIgMjEuNTg5NkgzMC4yNTA1QzMwLjAyMjMgMjIuMzAzOSAyOS43MzQzIDIyLjk5NzggMjkuMzg5MyAyMy42NjQ0TDI5Ljg4NzMgMjQuMTYyNEMzMS4wOTM5IDI1LjM2NzcgMzEuMDYwNiAyNy4yOTkzIDI5Ljg4Njkg'+
			'MjguNDcxN0wyOC40MTg3IDI5LjkzOTlDMjcuMjQ0OSAzMS4xMTUzIDI1LjMxMzMgMzEuMTQ0NyAyNC4xMDk1IDI5LjkzOTVMMjMuNjExOSAyOS40NDE5QzIyLjk0NTMgMjkuNzg2OSAyMi4yNTE0IDMwLjA3NDkgMjEuNTM3MSAzMC4zMDMyVjMxLjAwNTlDMjEuNTM3MSAzMi42ODU3IDIwLjE3MDQgMzQuMDUyNSAxOC40OTAzIDM0LjA1MjVaTTExLjYxNTggMjcuNDA1NEMxMi41NDE5IDI3Ljk1MzEgMTMuNTM4NyAyOC4zNjY5IDE0LjU3ODMgMjguNjM1MkMxNS4wMDY1IDI4Ljc0NTcgMTUuMzA1NyAyOS4xMzE5IDE1LjMwNTcgMjkuNTc0MVYzMS4wMDU4QzE1LjMwNTcgMzEuNjE2NCAxNS44MDI2ID'+
			'MyLjExMzMgMTYuNDEzMyAzMi4xMTMzSDE4LjQ5MDRDMTkuMTAxIDMyLjExMzMgMTkuNTk3OSAzMS42MTY0IDE5LjU5NzkgMzEuMDA1OFYyOS41NzQxQzE5LjU5NzkgMjkuMTMxOSAxOS44OTcxIDI4Ljc0NTcgMjAuMzI1MyAyOC42MzUyQzIxLjM2NSAyOC4zNjY5IDIyLjM2MTggMjcuOTUzMSAyMy4yODc5IDI3LjQwNTRDMjMuNjY4OSAyNy4xODAxIDI0LjE1NDEgMjcuMjQxNCAyNC40NjcxIDI3LjU1NDRMMjUuNDgxMiAyOC41Njg2QzI1LjkxODUgMjkuMDA2MyAyNi42MjA2IDI4Ljk5NjIgMjcuMDQ3MSAyOC41NjlMMjguNTE2MiAyNy4xQzI4Ljk0MTcgMjYuNjc1IDI4Ljk1NTkgMjUuOTcyOCAy'+
			'OC41MTY2IDI1LjUzNEwyNy41MDIxIDI0LjUxOTVDMjcuMTg5MSAyNC4yMDY1IDI3LjEyNzggMjMuNzIxMyAyNy4zNTMxIDIzLjM0MDNDMjcuOTAwOCAyMi40MTQzIDI4LjMxNDUgMjEuNDE3NSAyOC41ODI4IDIwLjM3NzdDMjguNjkzMyAxOS45NDk1IDI5LjA3OTUgMTkuNjUwNCAyOS41MjE2IDE5LjY1MDRIMzAuOTUzM0MzMS41NjM5IDE5LjY1MDQgMzIuMDYwOCAxOS4xNTM2IDMyLjA2MDggMTguNTQyOVYxNi40NjU3QzMyLjA2MDggMTUuODU1MSAzMS41NjM5IDE1LjM1ODIgMzAuOTUzMyAxNS4zNTgySDI5LjUyMTZDMjkuMDc5NCAxNS4zNTgyIDI4LjY5MzMgMTUuMDU5MSAyOC41ODI4IDE0Lj'+
			'YzMUMyOC4zMTQ1IDEzLjU5MTIgMjcuOTAwNyAxMi41OTQ0IDI3LjM1MzEgMTEuNjY4NEMyNy4xMjc4IDExLjI4NzQgMjcuMTg5MSAxMC44MDIyIDI3LjUwMjEgMTAuNDg5MkwyOC41MTYyIDkuNDc1MDNDMjguOTU0NiA5LjAzNzE1IDI4Ljk0MzIgOC4zMzUxNCAyOC41MTY2IDcuOTA5MDlMMjcuMDQ3NiA2LjQ0MDExQzI2LjYyMTggNi4wMTM3MyAyNS45MTk2IDYuMDAxMjYgMjUuNDgxNyA2LjQzOTcyTDI0LjQ2NzIgNy40NTQyN0MyNC4xNTQyIDcuNzY3MzMgMjMuNjY4OSA3LjgyODYxIDIzLjI4NzkgNy42MDMyN0MyMi4zNjE4IDcuMDU1NTYgMjEuMzY1MSA2LjY0MTc5IDIwLjMyNTQgNi4zNzM0'+
			'NkMxOS44OTcyIDYuMjYyOTkgMTkuNTk4IDUuODc2ODIgMTkuNTk4IDUuNDM0NjFWNC4wMDI4QzE5LjU5OCAzLjM5MjEzIDE5LjEwMTEgMi44OTUzIDE4LjQ5MDQgMi44OTUzSDE2LjQxMzNDMTUuODAyNyAyLjg5NTMgMTUuMzA1OCAzLjM5MjEzIDE1LjMwNTggNC4wMDI4VjUuNDM0NDhDMTUuMzA1OCA1Ljg3NjY5IDE1LjAwNjYgNi4yNjI4NiAxNC41Nzg0IDYuMzczMzRDMTMuNTM4NyA2LjY0MTY2IDEyLjU0MTkgNy4wNTU0MyAxMS42MTU4IDcuNjAzMTRDMTEuMjM0NyA3LjgyODQyIDEwLjc0OTYgNy43NjcxNCAxMC40MzY2IDcuNDU0MTRMOS40MjI0NyA2LjQzOTk4QzguOTg1MjQgNi4wMDIyMy'+
			'A4LjI4MzA0IDYuMDEyMzggNy44NTY2IDYuNDM5NTNMNi4zODc0OSA3LjkwODU3QzUuOTYyMDIgOC4zMzM1MiA1Ljk0NzggOS4wMzU3MiA2LjM4NzEgOS40NzQ1MUw3LjQwMTY1IDEwLjQ4OTFDNy43MTQ2NSAxMC44MDIxIDcuNzc1OTMgMTEuMjg3MyA3LjU1MDY1IDExLjY2ODJDNy4wMDI5NCAxMi41OTQzIDYuNTg5MjQgMTMuNTkxMSA2LjMyMDkxIDE0LjYzMDhDNi4yMTAzNyAxNS4wNTkgNS44MjQyIDE1LjM1ODEgNS4zODIwNiAxNS4zNTgxSDMuOTUwMzhDMy4zMzk3MSAxNS4zNTgyIDIuODQyODEgMTUuODU1IDIuODQyODEgMTYuNDY1N1YxOC41NDI5QzIuODQyODEgMTkuMTUzNSAzLjMzOTcx'+
			'IDE5LjY1MDQgMy45NTAzOCAxOS42NTA0SDUuMzgxOTlDNS44MjQyIDE5LjY1MDQgNi4yMTAzMSAxOS45NDk1IDYuMzIwODUgMjAuMzc3N0M2LjU4OTE3IDIxLjQxNzQgNy4wMDI5NCAyMi40MTQyIDcuNTUwNTkgMjMuMzQwMkM3Ljc3NTg2IDIzLjcyMTIgNy43MTQ1OCAyNC4yMDY0IDcuNDAxNTkgMjQuNTE5NEw2LjM4NzQzIDI1LjUzMzZDNS45NDkwMyAyNS45NzE1IDUuOTYwNDcgMjYuNjczNSA2LjM4NzA0IDI3LjA5OTVMNy44NTYwMiAyOC41Njg1QzguMjgxODEgMjguOTk0OSA4Ljk4NDA4IDI5LjAwNzQgOS40MjE5NiAyOC41Njg5TDEwLjQzNjQgMjcuNTU0M0MxMC42NjcxIDI3LjMyMzggMT'+
			'EuMTQ2OSAyNy4xMjgxIDExLjYxNTggMjcuNDA1NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTE3LjQ1MzcgMjQuNjU1OUMxMy41MTA5IDI0LjY1NTkgMTAuMzAzMiAyMS40NDgyIDEwLjMwMzIgMTcuNTA1NEMxMC4zMDMyIDEzLjU2MjcgMTMuNTEwOSAxMC4zNTUgMTcuNDUzNyAxMC4zNTVDMjEuMzk2NSAxMC4zNTUgMjQuNjA0MiAxMy41NjI3IDI0LjYwNDIgMTcuNTA1NEMyNC42MDQyIDIxLjQ0ODIgMjEuMzk2NSAyNC42NTU5IDE3LjQ1MzcgMjQuNjU1OVpNMTcuNDUzNyAxMi4yODA2QzE0LjU3MjcgMTIuMjgwNiAxMi4yMjg5IDE0LjYyNDUgMTIuMjI4'+
			'OSAxNy41MDU0QzEyLjIyODkgMjAuMzg2NCAxNC41NzI3IDIyLjczMDMgMTcuNDUzNyAyMi43MzAzQzIwLjMzNDcgMjIuNzMwMyAyMi42Nzg2IDIwLjM4NjQgMjIuNjc4NiAxNy41MDU0QzIyLjY3ODYgMTQuNjI0NSAyMC4zMzQ4IDEyLjI4MDYgMTcuNDUzNyAxMi4yODA2WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+Cjwvc3ZnPgo=';
		me._svg_15__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 15";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg element.style { height: 20px; left: 10px; position: absolute; top: calc(50% - 10px); visibility: inherit; width: 20px; pointer-events: auto; transform-origin: 50% 50%; transition: transform 0.5s ease; transform: translate(0px 0px) rotate(0deg) scale(1 1); }";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='element.style { height: 20px; left: 10px; position: absolute; top: calc(50% - 10px); visibility: inherit; width: 20px; pointer-events: auto; transform-origin: 50% 50%; transition: transform 0.5s ease; transform: translate(0px, 0px) rotate(0deg) scale(1, 1); }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_15.onclick=function (e) {
			me._container_1.ggVisible = !me._container_1.ggVisible;
			var flag=me._container_1.ggVisible;
			me._container_1.style.transition='none';
			me._container_1.style.visibility=((flag)&&(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity))?'inherit':'hidden';
		}
		me._svg_15.onmouseenter=function (e) {
			me._svg_15__img.style.visibility='hidden';
			me._svg_15__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_15']=true;
		}
		me._svg_15.onmouseleave=function (e) {
			me._svg_15__img.style.visibility='inherit';
			me._svg_15__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_15']=false;
		}
		me._svg_15.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_15']) {
				if (player.transitionsDisabled) {
					me._svg_15.style.transition='none';
				} else {
					me._svg_15.style.transition='all 6000ms ease-out 0ms';
				}
				me._svg_15.ggParameter.sx=1.28;me._svg_15.ggParameter.sy=1.28;
				me._svg_15.style.transform=parameterToTransform(me._svg_15.ggParameter);
				setTimeout(function() {skin.updateSize(me._svg_15);}, 6050);
			}
		}
		me._svg_15.ggUpdatePosition=function (useTransition) {
		}
		me._controller_2.appendChild(me._svg_15);
		el=me._svg_16=document.createElement('div');
		els=me._svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDMyIj4KIDxwYXRoIGQ9Ik0yMy40ODY5IDIzLjYzMzRMMjMuNDg4OSAyMy42MzU1TDIzLjcwNDEgMjMuODY5NkMyMy43MDQyIDIzLjg2OTcgMjMuNzA0MyAyMy44Njk4IDIzLjcwNDQgMjMuODY5OUMyMy44MjA1IDIzLjk5NTcgMjMuOTU5NyAyNC4wNDg5IDI0LjA4NTkgMjQuMDQ4OUMyNC4wOTE1IDI0LjA0ODkgMjQuMDk4MyAyNC4wNDg3IDI0LjEwNzMgMjQuMDQ4M0wyMy40ODY5IDIzLjYzMzRaTTIzLjQ4NjkgMjMuNjMzNEMyMy4yNT'+
			'M0IDIzLjM4MDggMjMuMjE1NyAyMi45NDQ2IDIzLjQyNDkgMjIuNjM5MUwyMy40MjUgMjIuNjM4OUMyNC43NTYxIDIwLjY5NDEgMjUuNDU0MyAxOC4zOTM4IDI1LjQ1NDMgMTUuOTkzQzI1LjQ1NDMgMTMuNDEyOSAyNC42NjE2IDEwLjk3NTcgMjMuMTUwNyA4Ljk1ODg2TDIzLjE1MDIgOC45NTgyMUMyMi45MjM4IDguNjU2NDIgMjIuOTUxNCA4LjIwMjA1IDIzLjE5NDEgNy45MzkyN0wyMy4xOTQ5IDcuOTM4MzZMMjMuNDEgNy43MDQ4OUMyMy40MTAyIDcuNzA0NzIgMjMuNDEwMyA3LjcwNDU1IDIzLjQxMDUgNy43MDQzN0MyMy41NDI1IDcuNTYxNTkgMjMuNjc5NiA3LjUxNzI3IDIzLjgwNjUgNy41'+
			'MjU0N0wyMy44MDY1IDcuNTI1NTJMMjMuODE2OSA3LjUyNjA5QzIzLjk1MiA3LjUzMzQ2IDI0LjEwMjYgNy42MDM0MyAyNC4yMTg0IDcuNzU2ODFDMjUuOTgxIDEwLjA5NDIgMjYuOTE4MSAxMi45Mzc2IDI2LjkxODEgMTUuOTkzNEMyNi45MTgxIDE4LjgzNzMgMjYuMDg5NCAyMS41MzE4IDI0LjUyOTggMjMuNzkyOUMyNC40MTQ0IDIzLjk1OTUgMjQuMjYwMyAyNC4wMzYzIDI0LjEyNDEgMjQuMDQ3M0wyMy40ODY5IDIzLjYzMzRaTTEuODA4NTUgMjEuMjMwNUg2LjUxMjk2SDEuODA4NTVaTTEuODA4NTUgMjEuMjMwNUMwLjkxNjM5MSAyMS4yMzEzIDAuMTkyODcxIDIwLjQ0NjkgMC4xOTI4NzEgMT'+
			'kuNDgwMVYxMi41MDQ2QzAuMTkyODcxIDExLjUzNzQgMC45MTYzOTEgMTAuNzUzMyAxLjgwODU1IDEwLjc1MzNINi41MTMzNUwxLjgwODU1IDIxLjIzMDVaTTE2LjU5NTUgMjguNDc2NkwxNi41OTIzIDI4LjQ3ODJDMTYuNTIxMyAyOC41MTQ2IDE2LjQ0ODUgMjguNTMxIDE2LjM3NjkgMjguNTMxQzE2LjI2NzYgMjguNTMxIDE2LjE0NjYgMjguNDkxMSAxNi4wMzcyIDI4LjM5MjdMMTYuMDM2OSAyOC4zOTI1TDcuMjAzOTggMjAuNDYxTDYuOTA5MTggMjAuMTk2Mkg2LjUxMjk2SDEuODA4NTVIMS44MDc1OUMxLjU2NDU3IDIwLjE5NjUgMS4yMjcxNCAxOS45NTYxIDEuMjI3MTQgMTkuNDgwMVYxMi41'+
			'MDQ2QzEuMjI3MTQgMTIuMDI4NiAxLjU2NDQxIDExLjc4NzYgMS44MDg1NSAxMS43ODc2SDYuNTEzMzVINi45MDk1Nkw3LjIwNDM2IDExLjUyMjlMMTYuMDM3MyAzLjU5MTM2TDE2LjAzNzQgMy41OTEyOEMxNi4yMTA0IDMuNDM1ODYgMTYuNDE4OSAzLjQxNzQ1IDE2LjU5MjkgMy41MDY1N0wxNi41OTU2IDMuNTA3OTNDMTYuNzg3MSAzLjYwNTMgMTYuOTU5IDMuODQ4MzEgMTYuOTU5IDQuMTcwMjZMMTYuOTU4NyAyNy44MTQ0QzE2Ljk1ODcgMjguMTM3IDE2Ljc4NjkgMjguMzc5MyAxNi41OTU1IDI4LjQ3NjZaTTI5LjA1MjUgMjkuNjY2NUwyOS4wNTIyIDI5LjY2NjNDMjguODA2MyAyOS4zOTk5ID'+
			'I4Ljc4MjMgMjguOTM3OSAyOS4wMTU0IDI4LjYzN0MzMS43NjY2IDI1LjA5MTMgMzMuMjczOSAyMC42MDE1IDMzLjI3MzkgMTUuOTkzQzMzLjI3MzkgMTEuMjAwNyAzMS42NjAyIDYuNTc0OTQgMjguNzE0MiAyLjk3MDQ3QzI4LjQ3MTUgMi42NzMxMyAyOC40ODgzIDIuMjAxNzkgMjguNzM4OSAxLjkyODU3QzI4LjczOTEgMS45MjgzOSAyOC43MzkzIDEuOTI4MiAyOC43Mzk0IDEuOTI4MDJMMjguOTUwNiAxLjY5ODc5TDI4Ljk1MTcgMS42OTc2M0MyOS4wOCAxLjU1NzkgMjkuMjA0OCAxLjUxMjE4IDI5LjM0NTQgMS41MTcwNEwyOS4zNDkzIDEuNTE3MTZDMjkuNDc5IDEuNTIxMTUgMjkuNjI1NCAx'+
			'LjU4Mzc5IDI5Ljc0MjMgMS43MjYzNUMzMi45NTcgNS42NDg1NiAzNC43MzczIDEwLjcxNDcgMzQuNzM3MyAxNS45OTNWMTUuOTkzMUMzNC43MzggMjEuMDcwMyAzMy4wNzM2IDI1Ljk5MjkgMzAuMDY2NyAyOS44NTMxQzI5Ljk1MDggMzAuMDAxNCAyOS44MDQzIDMwLjA2ODMgMjkuNjcxNSAzMC4wNzU1TDI5LjY1MjkgMzAuMDc2MUMyOS42NDc5IDMwLjA3NjMgMjkuNjQ2NSAzMC4wNzYzIDI5LjY0NzMgMzAuMDc2M0MyOS41MjA1IDMwLjA3NjMgMjkuMzgxNSAzMC4wMjMxIDI5LjI2NDcgMjkuODk2NUwyOC41MDQ2IDMwLjU5NzlMMjkuMjY0NyAyOS44OTY1TDI5LjA1MjUgMjkuNjY2NVoiIHN0cm'+
			'9rZT0iI2NiMjAyNyIgc3Ryb2tlLXdpZHRoPSIyLjA2ODUzIiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._svg_16__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_16.style.transition='';
				if (me._svg_16.ggCurrentLogicStateVisible == 0) {
					me._svg_16.style.visibility=(Number(me._svg_16.style.opacity)>0||!me._svg_16.style.opacity)?'inherit':'hidden';
					me._svg_16.ggVisible=true;
				}
				else {
					me._svg_16.style.visibility="hidden";
					me._svg_16.ggVisible=false;
				}
			}
		}
		me._svg_16.logicBlock_visible();
		me._svg_16.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
			me._svg_16.style.transition='none';
			me._svg_16.style.visibility='hidden';
			me._svg_16.ggVisible=false;
		}
		me._svg_16.ggUpdatePosition=function (useTransition) {
		}
		me._controller_2.appendChild(me._svg_16);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDMxIj4KIDxwYXRoIGQ9Ik0yMy4yOTQgMjMuMTUxTDIzLjI5NiAyMy4xNTMxTDIzLjUxMTIgMjMuMzg3MkMyMy41MTEzIDIzLjM4NzMgMjMuNTExNCAyMy4zODc0IDIzLjUxMTUgMjMuMzg3NEMyMy42Mjc2IDIzLjUxMzMgMjMuNzY2OCAyMy41NjY1IDIzLjg5MyAyMy41NjY1QzIzLjg5ODYgMjMuNTY2NSAyMy45MDU0IDIzLjU2NjMgMjMuOTE0NCAyMy41NjU5TDIzLjI5NCAyMy4xNTFaTTIzLjI5NCAyMy4xNTFDMjMuMDYwNSAyMi44OT'+
			'g0IDIzLjAyMjkgMjIuNDYyMSAyMy4yMzIgMjIuMTU2NkwyMy4yMzIxIDIyLjE1NjVDMjQuNTYzMiAyMC4yMTE3IDI1LjI2MTUgMTcuOTExNCAyNS4yNjE1IDE1LjUxMDVDMjUuMjYxNSAxMi45MzA0IDI0LjQ2ODcgMTAuNDkzMyAyMi45NTc4IDguNDc2NDRMMjIuOTU3NCA4LjQ3NTc5QzIyLjczMDkgOC4xNzQgMjIuNzU4NiA3LjcxOTYzIDIzLjAwMTIgNy40NTY4NUwyMy4wMDIxIDcuNDU1OTNMMjMuMjE3MSA3LjIyMjQ3QzIzLjIxNzMgNy4yMjIzIDIzLjIxNzQgNy4yMjIxMyAyMy4yMTc2IDcuMjIxOTVDMjMuMzQ5NiA3LjA3OTE2IDIzLjQ4NjggNy4wMzQ4NSAyMy42MTM3IDcuMDQzMDVMMjMu'+
			'NjEzNyA3LjA0MzFMMjMuNjI0IDcuMDQzNjdDMjMuNzU5MSA3LjA1MTAzIDIzLjkwOTcgNy4xMjEwMSAyNC4wMjU1IDcuMjc0MzlDMjUuNzg4MSA5LjYxMTc1IDI2LjcyNTMgMTIuNDU1MSAyNi43MjUzIDE1LjUxMUMyNi43MjUzIDE4LjM1NDkgMjUuODk2NSAyMS4wNDk0IDI0LjMzNjkgMjMuMzEwNUMyNC4yMjE1IDIzLjQ3NzEgMjQuMDY3NSAyMy41NTM5IDIzLjkzMTMgMjMuNTY0OEwyMy4yOTQgMjMuMTUxWk0xLjYxNTY4IDIwLjc0ODFINi4zMjAwOUgxLjYxNTY4Wk0xLjYxNTY4IDIwLjc0ODFDMC43MjM1MiAyMC43NDg5IDAgMTkuOTY0NSAwIDE4Ljk5NzdWMTIuMDIyMkMwIDExLjA1NSAwLj'+
			'cyMzUyIDEwLjI3MDkgMS42MTU2OCAxMC4yNzA5SDYuMzIwNDhMMS42MTU2OCAyMC43NDgxWk0xNi40MDI2IDI3Ljk5NDJMMTYuMzk5NSAyNy45OTU4QzE2LjMyODQgMjguMDMyMiAxNi4yNTU2IDI4LjA0ODYgMTYuMTg0IDI4LjA0ODZDMTYuMDc0NyAyOC4wNDg2IDE1Ljk1MzcgMjguMDA4NyAxNS44NDQzIDI3LjkxMDNMMTUuODQ0IDI3LjkxMDFMNy4wMTExMSAxOS45Nzg1TDYuNzE2MzEgMTkuNzEzOEg2LjMyMDA5SDEuNjE1NjhIMS42MTQ3MkMxLjM3MTcgMTkuNzE0IDEuMDM0MjYgMTkuNDczNiAxLjAzNDI2IDE4Ljk5NzdWMTIuMDIyMkMxLjAzNDI2IDExLjU0NjIgMS4zNzE1NCAxMS4zMDUy'+
			'IDEuNjE1NjggMTEuMzA1Mkg2LjMyMDQ4SDYuNzE2NjlMNy4wMTE0OSAxMS4wNDA1TDE1Ljg0NDQgMy4xMDg5NEwxNS44NDQ1IDMuMTA4ODZDMTYuMDE3NSAyLjk1MzQ0IDE2LjIyNjEgMi45MzUwMyAxNi40MDAxIDMuMDI0MTVMMTYuNDAyNyAzLjAyNTUxQzE2LjU5NDIgMy4xMjI4NyAxNi43NjYyIDMuMzY1ODkgMTYuNzY2MiAzLjY4Nzg0TDE2Ljc2NTggMjcuMzMyQzE2Ljc2NTggMjcuNjU0NiAxNi41OTQgMjcuODk2OSAxNi40MDI2IDI3Ljk5NDJaTTI4Ljg1OTYgMjkuMTg0MUwyOC44NTk0IDI5LjE4MzhDMjguNjEzNCAyOC45MTc1IDI4LjU4OTQgMjguNDU1NSAyOC44MjI2IDI4LjE1NDZDMz'+
			'EuNTczOCAyNC42MDg5IDMzLjA4MSAyMC4xMTkxIDMzLjA4MSAxNS41MTA1QzMzLjA4MSAxMC43MTgzIDMxLjQ2NzQgNi4wOTI1MiAyOC41MjE0IDIuNDg4MDVDMjguMjc4NiAyLjE5MDcgMjguMjk1NCAxLjcxOTM3IDI4LjU0NjEgMS40NDYxNUMyOC41NDYyIDEuNDQ1OTcgMjguNTQ2NCAxLjQ0NTc4IDI4LjU0NjYgMS40NDU2TDI4Ljc1NzcgMS4yMTYzN0wyOC43NTg4IDEuMjE1MjFDMjguODg3MSAxLjA3NTQ4IDI5LjAxMTkgMS4wMjk3NiAyOS4xNTI2IDEuMDM0NjJMMjkuMTU2NCAxLjAzNDc0QzI5LjI4NjIgMS4wMzg3MiAyOS40MzI1IDEuMTAxMzYgMjkuNTQ5NCAxLjI0MzkzQzMyLjc2NDIg'+
			'NS4xNjYxNCAzNC41NDQ0IDEwLjIzMjMgMzQuNTQ0NCAxNS41MTA1VjE1LjUxMDdDMzQuNTQ1MiAyMC41ODc5IDMyLjg4MDcgMjUuNTEwNSAyOS44NzM4IDI5LjM3MDZDMjkuNzU3OSAyOS41MTkgMjkuNjExNCAyOS41ODU4IDI5LjQ3ODcgMjkuNTkzMUwyOS40NiAyOS41OTM3QzI5LjQ1NSAyOS41OTM5IDI5LjQ1MzYgMjkuNTkzOCAyOS40NTQ0IDI5LjU5MzhDMjkuMzI3NiAyOS41OTM4IDI5LjE4ODcgMjkuNTQwNyAyOS4wNzE4IDI5LjQxNDFMMjguMzExNyAzMC4xMTU1TDI5LjA3MTggMjkuNDE0MUwyOC44NTk2IDI5LjE4NDFaIiBzdHJva2U9IiNjYjIwMjciIHN0cm9rZS13aWR0aD0iMi4wNj'+
			'g1MyIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KIDxwYXRoIGQ9Ik0zNCAyOUwyIDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjY2IyMDI3IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1vcGFjaXR5PSIxIi8+Cjwvc3ZnPgo=';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_11.style.transition='';
				if (me._svg_11.ggCurrentLogicStateVisible == 0) {
					me._svg_11.style.visibility="hidden";
					me._svg_11.ggVisible=false;
				}
				else {
					me._svg_11.style.visibility=(Number(me._svg_11.style.opacity)>0||!me._svg_11.style.opacity)?'inherit':'hidden';
					me._svg_11.ggVisible=true;
				}
			}
		}
		me._svg_11.logicBlock_visible();
		me._svg_11.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			me._svg_16.style.transition='none';
			me._svg_16.style.visibility=(Number(me._svg_16.style.opacity)>0||!me._svg_16.style.opacity)?'inherit':'hidden';
			me._svg_16.ggVisible=true;
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._controller_2.appendChild(me._svg_11);
		me.divSkin.appendChild(me._controller_2);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 60px;';
		hs+='cursor : pointer;';
		hs+='height : 420px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 255px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_8=document.createElement('div');
		el.ggId="Rectangle 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 420px;';
		hs+='left : calc(50% - ((255px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((420px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 255px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=-1;
		el.ggDy=9.99999;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='color : #000000;';
		hs+='height : 358px;';
		hs+='left : calc(50% - ((234px + 2px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((358px + 2px) / 2) + 9.99999px);';
		hs+='visibility : inherit;';
		hs+='width : 234px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: normal;';
		hs+='text-align: justify;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("B\u1ea3o t\xe0ng Th\xe1i B\xecnh l\xe0 n\u01a1i l\u01b0u gi\u1eef v\xe0 gi\u1edbi thi\u1ec7u c\xe1c gi\xe1 tr\u1ecb v\u0103n h\xf3a, l\u1ecbch s\u1eed \u0111\u1eb7c tr\u01b0ng c\u1ee7a v\xf9ng \u0111\u1ea5t Th\xe1i B\xecnh - m\u1ed9t t\u1ec9nh \u0111\u1ed3ng b\u1eb1ng B\u1eafc B\u1ed9 v\u1edbi truy\u1ec1n th\u1ed1ng v\u0103n h\xf3a phong ph\xfa v\xe0 l\xe2u \u0111\u1eddi. N\u1eb1m \u1edf trung t\xe2m th\xe0nh ph\u1ed1 Th\xe1i B\xecnh, b\u1ea3o t\xe0ng tr\u01b0ng b\xe0y nhi\u1ec1u hi\u1ec7n v\u1eadt, t\u01b0 li\u1ec7u qu\xfd v\u1ec1 qu\xe1 tr\xecnh h\xecnh th\xe0nh v\xe0 ph\xe1t tri\u1ec3n c\u1ee7a t\u1ec9nh, bao g\u1ed3m c\xe1c di s\u1ea3n v\u0103n h\xf3a v\u1eadt th\u1ec3 v\xe0 phi v\u1eadt th\u1ec3, t\u1eeb c\xe1c hi\u1ec7n v\u1eadt kh\u1ea3o c\u1ed5, c\u1ed5 v\u1eadt d\xe2n t\u1ed9c h\u1ecdc, \u0111\u1ebfn h\xecnh \u1ea3nh v\xe0 hi\u1ec7n v\u1eadt v\u1ec1 cu\u1ed9c \u0111\u1ea5u tranh c\xe1ch m\u1ea1ng v\xe0 x\xe2y d\u1ef1ng \u0111\u1ea5t n\u01b0\u1edbc. \u0110\u1ebfn v\u1edbi B\u1ea3o t\xe0ng Th\xe1i B\xecnh, du kh\xe1ch c\xf3 c\u01a1 h\u1ed9i t\xecm hi\u1ec3u v\u1ec1 c\xe1c gi\xe1 tr\u1ecb v\u0103n h\xf3a truy\u1ec1n th\u1ed1ng nh\u01b0 ch\xe8o, h\xe1t x\u1ea9m, l\u1ec5 h\u1ed9i l\xe0ng qu\xea, c\u0169ng nh\u01b0 nh\u1eefng d\u1ea5u \u1ea5n \u0111\u1eb7c s\u1eafc trong l\u1ecbch s\u1eed h\xe0o h\xf9ng c\u1ee7a t\u1ec9nh qua hai cu\u1ed9c kh\xe1ng chi\u1ebfn ch\u1ed1ng Ph\xe1p v\xe0 M\u1ef9. \u0110\xe2y l\xe0 \u0111i\u1ec3m \u0111\u1ebfn \xfd ngh\u0129a \u0111\u1ec3 ng\u01b0\u1eddi d\xe2n \u0111\u1ecba ph\u01b0\u01a1ng c\u0169ng nh\u01b0 du kh\xe1ch trong v\xe0 ngo\xe0i n\u01b0\u1edbc kh\xe1m ph\xe1, t\xf4n vinh v\xe0 ghi nh\u1edb nh\u1eefng gi\xe1 tr\u1ecb l\u1ecbch s\u1eed v\xe0 b\u1ea3n s\u1eafc v\u0103n h\xf3a d\xe2n t\u1ed9c Vi\u1ec7t Nam.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_8.appendChild(me._text_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ff0000;';
		hs+='border : 1px solid #ff0000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 34px;';
		hs+='left : calc(50% - ((253px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -0.999999px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0110\xf4i N\xe9t V\u1ec1 B\u1ea3o T\xe0ng Th\xe1i B\xecnh ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHgyPSI2IiB5MT0iNiIgeTI9IjE4IiB4MT0iMTgiLz4KIDxsaW5lIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			me._container_2.style.transition='none';
			me._container_2.style.visibility='hidden';
			me._container_2.ggVisible=false;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._text_2.appendChild(me._svg_1);
		me._rectangle_8.appendChild(me._text_2);
		me._container_2.appendChild(me._rectangle_8);
		me.divSkin.appendChild(me._container_2);
		el=me._ht_ngai_tho=document.createElement('div');
		el.ggId="ht_ngai_tho";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 71px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 666px;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_ngai_tho.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_ngai_tho.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ht_ngai_tho);
		el=me._container_map=document.createElement('div');
		el.ggId="Container_map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_map.style.transition='';
				if (me._container_map.ggCurrentLogicStateVisible == 0) {
					me._container_map.style.visibility=(Number(me._container_map.style.opacity)>0||!me._container_map.style.opacity)?'inherit':'hidden';
					me._container_map.ggVisible=true;
				}
				else {
					me._container_map.style.visibility="hidden";
					me._container_map.ggVisible=false;
				}
			}
		}
		me._container_map.logicBlock_visible();
		me._container_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg_floor_plan=document.createElement('div');
		el.ggId="bg_floor_plan";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_floor_plan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_floor_plan.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			if (me._map_1.ggMapNotLoaded == false) {
				me._map_1.ggMap.invalidateSize(false);
			}
		}
		me._bg_floor_plan.appendChild(me._map_1);
		el=me._svg_19=document.createElement('div');
		els=me._svg_19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgc3Ryb2tlLW9wYWNpdHk9IjEiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogPGxpbmUgeDI9IjYiIHkxPSI2IiB5Mj0iMTgiIHgxPSIxOCIvPgogPGxpbmUgeDI9IjE4IiB5MT0iNiIgeTI9IjE4IiB4MT0iNiIvPgo8L3N2Zz4K';
		me._svg_19__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_19__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHgyPSI2IiB5MT0iNiIgeTI9IjE4IiB4MT0iMTgiLz4KIDxsaW5lIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._svg_19__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_19'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_19.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_19.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_19.style.transition='transform 0s';
				if (me._svg_19.ggCurrentLogicStateScaling == 0) {
					me._svg_19.ggParameter.sx = 1.3;
					me._svg_19.ggParameter.sy = 1.3;
					me._svg_19.style.transform=parameterToTransform(me._svg_19.ggParameter);
					skin.updateSize(me._svg_19);
				}
				else {
					me._svg_19.ggParameter.sx = 1;
					me._svg_19.ggParameter.sy = 1;
					me._svg_19.style.transform=parameterToTransform(me._svg_19.ggParameter);
					skin.updateSize(me._svg_19);
				}
			}
		}
		me._svg_19.logicBlock_scaling();
		me._svg_19.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
		}
		me._svg_19.onmouseenter=function (e) {
			me._svg_19__img.style.visibility='hidden';
			me._svg_19__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_19']=true;
			me._svg_19.logicBlock_scaling();
		}
		me._svg_19.onmouseleave=function (e) {
			me._svg_19__img.style.visibility='inherit';
			me._svg_19__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_19']=false;
			me._svg_19.logicBlock_scaling();
		}
		me._svg_19.ggUpdatePosition=function (useTransition) {
		}
		me._bg_floor_plan.appendChild(me._svg_19);
		me._container_map.appendChild(me._bg_floor_plan);
		me.divSkin.appendChild(me._container_map);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=30000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 87px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggDeactivate=function () {
			player.openNext("{"+player.getNextNode()+"}",player.hotspot.target);
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		me._close_btn0.logicBlock_scaling();
		me.elementMouseOver['close_btn0']=false;
		me._close_btn1.logicBlock_scaling();
		me.elementMouseOver['close_btn1']=false;
		me._close_btn2.logicBlock_scaling();
		me.elementMouseOver['close_btn2']=false;
		me._close_btn3.logicBlock_scaling();
		me.elementMouseOver['close_btn3']=false;
		me._close_btn4.logicBlock_scaling();
		me.elementMouseOver['close_btn4']=false;
		me._close_btn5.logicBlock_scaling();
		me.elementMouseOver['close_btn5']=false;
		me._close_btn6.logicBlock_scaling();
		me.elementMouseOver['close_btn6']=false;
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_off.logicBlock_tabindex();
		me.elementMouseOver['sounds_off']=false;
		me._sounds_on.logicBlock_tabindex();
		me.elementMouseOver['sounds_on']=false;
		me._controller_1.logicBlock_visible();
		me._controller_1.logicBlock_alpha();
		me._exit_fullscreen.logicBlock_visible();
		me._exit_fullscreen.logicBlock_backgroundcolor();
		me._exit_fullscreen.logicBlock_bordercolor();
		me.elementMouseOver['exit_fullscreen']=false;
		me._exitfullscreen.logicBlock_visible();
		me._fullscreen_enter.logicBlock_visible();
		me._fullscreen_enter.logicBlock_backgroundcolor();
		me._fullscreen_enter.logicBlock_bordercolor();
		me.elementMouseOver['fullscreen_enter']=false;
		me._fulllscreen.logicBlock_visible();
		me._home.logicBlock_backgroundcolor();
		me._home.logicBlock_bordercolor();
		me.elementMouseOver['home']=false;
		me._maps.logicBlock_backgroundcolor();
		me._maps.logicBlock_bordercolor();
		me.elementMouseOver['maps']=false;
		me._screentint_phone_1.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone1']=false;
		me._btn_close_popup_phone1.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone1']=false;
		el = me._local_fonts;
		;
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._info_popup_text_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggMarkerInstances=[];
		me._floorplan_el_phone.ggLastNodeId=null;
		me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el_phone.ggFloorplanWidth=0;
		me._floorplan_el_phone.ggFloorplanHeight=0;
		me._floorplan_el_phone__mapdiv=document.createElement('div');
		me._floorplan_el_phone__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el_phone.appendChild(me._floorplan_el_phone__mapdiv);
		me._floorplan_el_phone__img=document.createElement('img');
		me._floorplan_el_phone__img.className='ggskin ggskin_map';
		me._floorplan_el_phone__mapdiv.appendChild(me._floorplan_el_phone__img);
		me._floorplan_el_phone.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el_phone.ggRadar.update=function() {
			var radar=me._floorplan_el_phone.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el_phone.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el_phone.ggFilteredIds.length > 0 && me._floorplan_el_phone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',160);
				radar.radarElement.setAttributeNS(null,'height',160);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 160 160');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 80 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 80 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 80 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 80 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 80;
				arcY1 += 80;
				arcX2 += 80;
				arcY2 += 80;
				var radarPathString = 'M80,80 L' + arcX1 + ',' + arcY1 + ' A 80 80 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#5cff2f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#5cff2f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el_phone__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 80;
				var radarYPos = activeMarker.radarYPos - 80;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el_phone.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el_phone.clientWidth;
			var mapHeight = me._floorplan_el_phone.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el_phone.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el_phone__img.setAttribute('src', imageFilename);
			me._floorplan_el_phone__img.setAttribute('loading', 'lazy');
		me._floorplan_el_phone__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el_phone.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el_phone.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el_phone__img.setAttribute('style','width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el_phone.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el_phone.clientWidth / me._floorplan_el_phone.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.clientHeight;
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.clientWidth;
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el_phone.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el_phone.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el_phone.ggPermeableMap = true;
			} else {
				me._floorplan_el_phone.ggPermeableMap = false;
			}
			me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el_phone.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el_phone.ggMapNotLoaded = false;
		}
		me._floorplan_el_phone.ggClearMap=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			me._floorplan_el_phone.ggMapNotLoaded = true;
		}
		me._floorplan_el_phone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el_phone.ggMapId = mapId;
			if (!me._floorplan_el_phone.ggMapNotLoaded) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap();
				me._floorplan_el_phone.ggInitMapMarkers();
			}
		}
		me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el_phone.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
					var xPos = (me._floorplan_el_phone.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el_phone.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el_phone.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el_phone.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el_phone.ggInitMapMarkers=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el_phone.ggFilteredIds = [];
			if (me._floorplan_el_phone.ggFilter != '') {
				var filter = me._floorplan_el_phone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el_phone.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el_phone.ggFilteredIds.length > 0) ids = me._floorplan_el_phone.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el_phone.ggHMarkerAnchorOffset = 20;
					me._floorplan_el_phone.ggVMarkerAnchorOffset = 22;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el_phone.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el_phone__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el_phone);
		}
		me._floorplan_el_phone.ggClearMapMarkers=function() {
			for (id in me._floorplan_el_phone.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el_phone__mapdiv.removeChild(me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el_phone.ggMarkerInstances=[];
			me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_file_popup_phone_play']=false;
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_file_popup_phone_play_icon.logicBlock_alpha();
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_url_popup_phone_play']=false;
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_url_popup_phone_play_icon.logicBlock_alpha();
		me._languages.logicBlock_position();
		me._languages.logicBlock_alpha();
		me.elementMouseOver['languages_top']=false;
		me._languages_close_btn.logicBlock_visible();
		me._languages_close_btn.logicBlock_tabindex();
		me._languages_close_btn_active.logicBlock_visible();
		me._languages_close_btn_active.logicBlock_tabindex();
		me._svg_8.logicBlock_visible();
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_toggle.logicBlock_backgroundcolor();
		me.elementMouseOver['thumbnails_toggle']=false;
		el = me._thumbnail_menu_code_1;
		;
		me._thumbnail_menu_2.logicBlock_alpha();
		el = me._thumbnail_menu_code;
		;
		me._controller_3.logicBlock_visible();
		me._controller_3.logicBlock_alpha();
		me._btn_thumbnails_icon1.logicBlock_visible();
		me.elementMouseOver['svg_12']=false;
		me._svg_13.logicBlock_visible();
		me.elementMouseOver['svg_13']=false;
		me.elementMouseOver['svg_15']=false;
		me._svg_16.logicBlock_visible();
		me._svg_11.logicBlock_visible();
		me._container_map.logicBlock_visible();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggLastLat = 0.0;
		me._map_1.ggLastLng = 0.0;
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.234375;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ff0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggSetLayer=function(layerIndex) {
			if (typeof me._map_1.ggMapLayers === 'object' && me._map_1.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._map_1.ggMapLayers).length) {
				me._map_1.ggMap.removeLayer(me._map_1.ggCurMap);
				me._map_1.ggCurMap = me._map_1.ggMapLayers[Object.keys(me._map_1.ggMapLayers)[layerIndex]];
				me._map_1.ggMap.addLayer(me._map_1.ggCurMap);
			}
		}
		me._map_1.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!me._map_1.ggMapId) return;
			if (!me._map_1.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._map_1.ggLastLat, me._map_1.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._map_1.ggMap.setMaxBounds(maxBounds);
					me._map_1.ggMap.setMinZoom(me._map_1.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map_1.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._map_1.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._map_1.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._map_1.ggMapLayers, overlayMaps).addTo(me._map_1.ggMap);
						me._map_1.ggCurMap.addTo(me._map_1.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map_1.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._map_1.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._map_1.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._map_1.ggMapLayers, overlayMaps).addTo(me._map_1.ggMap);
						me._map_1.ggCurMap.addTo(me._map_1.ggMap);
						me._map_1.ggMap.on('baselayerchange', function(event) {
							me._map_1.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_1.ggMap);
					}
				}
				me._map_1.ggMap.on('zoom', function() {
					me._map_1.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._map_1.mapHeightInDeg / 2;
					mapCenter.lng = me._map_1.mapWidthInDeg / 2;
				}
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_1.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_1.ggMap);
				me._map_1.ggMap.on('move zoom', function() {
					me._map_1.ggCheckBounds(mapDetails);
					me._map_1.ggRadar.update();
				});
				me._map_1.ggCheckBounds(mapDetails);
			}
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
		me._map_1.ggClearMapMarkers();
		if (me._map_1.ggMap) me._map_1.ggMap.remove();
		me._map_1.ggMap = null;
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_1.ggMap);
				}
			}
			me._map_1.ggMarkerArray=[];
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggLastActivMarker = null;
		}
		me._map_1.ggCenterNode=function(nodeId) {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (me._map_1.ggMapNotLoaded) return;
			if (!me._map_1.ggMap) return;
			if (me._map_1.ggMarkerBounds.isValid()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					me._map_1.ggMap.zoomOut(1, {animate: false});
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._map_1.ggMap.setView(me._map_1.ggMarkerBounds.getCenter(), me._map_1.ggMap.getZoom());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map_1.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -20 + 'px';
					div.style.top = -22 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._map_1.ggMap);
					me._map_1.ggMarkerArray[id]=marker;
					me._map_1.ggMarkerInstances.push(div);
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_1.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
				me._map_1.ggLastLat = me._map_1.ggMap.getCenter().lat;
				me._map_1.ggLastLng = me._map_1.ggMap.getCenter().lng;
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(true);
				me._map_1.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._map_1.ggMapId);
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				me._map_1.ggCheckBounds(mapDetails);
			}
		}
		me._map_1.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_1.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_1.mapHeightInDeg = me._map_1.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_1.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_1.mapWidthInDeg = me._map_1.mapHeightInDeg * mapAR;
			}
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._map_1.mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				var xMargin = (me._map_1.clientWidth * pixelInDeg - me._map_1.mapWidthInDeg) / 2;
				if (x < me._map_1.mapWidthInDeg / 2 - xMargin) x = me._map_1.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_1.mapWidthInDeg / 2 + xMargin) x = me._map_1.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_1.mapWidthInDeg - xOffset) x = me._map_1.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_1.mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				var yMargin = (me._map_1.clientHeight * pixelInDeg - me._map_1.mapHeightInDeg) / 2;
				if (y < -me._map_1.mapHeightInDeg / 2 - yMargin) y = -me._map_1.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_1.mapHeightInDeg / 2 + yMargin) y = -me._map_1.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_1.mapHeightInDeg + yOffset) y = -me._map_1.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._map_1.ggMap.setView(newCenter, me._map_1.ggMap.getZoom(), {animate: false});
			}
			me._map_1.ggInCheckBounds = false;
		}
		me._svg_19.logicBlock_scaling();
		me.elementMouseOver['svg_19']=false;
		me._timer_1.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('Rollover_Effect ')) {
				for(var i = 0; i < hotspotTemplates['Rollover_Effect '].length; i++) {
					hotspotTemplates['Rollover_Effect '][i].ggEvent_activehotspotchanged();
				}
			}
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone1.ggInstances.length; i++) {
				me._node_cloner_phone1.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_TrongDongNho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_TrongDongNho'].length; i++) {
					hotspotTemplates['Ht_3d_node_TrongDongNho'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_NgaiTho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_NgaiTho'].length; i++) {
					hotspotTemplates['Ht_3d_node_NgaiTho'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_MayChieuPhim')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_MayChieuPhim'].length; i++) {
					hotspotTemplates['Ht_3d_node_MayChieuPhim'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_DauRong')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_DauRong'].length; i++) {
					hotspotTemplates['Ht_3d_node_DauRong'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDen')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDen'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDen'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDenThoiMac')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDenThoiMac'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDenThoiMac'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Rollover_Effect ')) {
				for(var i = 0; i < hotspotTemplates['Rollover_Effect '].length; i++) {
					hotspotTemplates['Rollover_Effect '][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_back_available.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_opt_share.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
			me._sounds_off.logicBlock_tabindex();
			me._sounds_on.logicBlock_tabindex();
			me._controller_1.logicBlock_visible();
			me._screentint_phone_1.logicBlock_alpha();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_text_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone1.ggUpdateConditionNodeChange();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			for (var i=0; i < me._floorplan_el_phone.ggMarkerInstances.length; i++) {
				me._floorplan_el_phone.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
			if (me._floorplan_el_phone.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[me._floorplan_el_phone.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el_phone.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el_phone.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el_phone.ggLastNodeId = id;
			me._floorplan_el_phone.ggRadar.update();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._languages_close_btn.logicBlock_tabindex();
			me._languages_close_btn_active.logicBlock_tabindex();
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnail_menu_2.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._controller_3.logicBlock_visible();
			me._controller_3.logicBlock_alpha();
			me._btn_thumbnails_icon1.logicBlock_visible();
			me._svg_16.logicBlock_visible();
			me._svg_11.logicBlock_visible();
			me._container_map.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			}
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggCenterNode();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._timer_1.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone1.ggInstances.length; i++) {
				me._node_cloner_phone1.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_TrongDongNho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_TrongDongNho'].length; i++) {
					hotspotTemplates['Ht_3d_node_TrongDongNho'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_NgaiTho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_NgaiTho'].length; i++) {
					hotspotTemplates['Ht_3d_node_NgaiTho'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_MayChieuPhim')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_MayChieuPhim'].length; i++) {
					hotspotTemplates['Ht_3d_node_MayChieuPhim'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_DauRong')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_DauRong'].length; i++) {
					hotspotTemplates['Ht_3d_node_DauRong'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDen')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDen'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDen'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDenThoiMac')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDenThoiMac'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDenThoiMac'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Rollover_Effect ')) {
				for(var i = 0; i < hotspotTemplates['Rollover_Effect '].length; i++) {
					hotspotTemplates['Rollover_Effect '][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_back_available.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
			me._sounds_off.logicBlock_tabindex();
			me._sounds_on.logicBlock_tabindex();
			me._controller_1.logicBlock_visible();
			me._controller_1.logicBlock_alpha();
			me._screentint_phone_1.logicBlock_alpha();
			me._thumbnail_scroller_phone1.ggUpdatePosition();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_text_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			for (var i=0; i < me._floorplan_el_phone.ggMarkerInstances.length; i++) {
				me._floorplan_el_phone.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._floorplan_el_phone.ggVisible) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap(false);
				me._floorplan_el_phone.ggInitMapMarkers(true);
			}
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
			me._languages_scroller.ggUpdatePosition();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._languages_close_btn.logicBlock_tabindex();
			me._languages_close_btn_active.logicBlock_tabindex();
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnail_menu_2.ggUpdatePosition();
			me._thumbnail_menu_2.logicBlock_alpha();
			me._controller_3.logicBlock_visible();
			me._controller_3.logicBlock_alpha();
			me._btn_thumbnails_icon1.logicBlock_visible();
			me._svg_16.logicBlock_visible();
			me._svg_11.logicBlock_visible();
			me._container_map.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('fullscreenenter', function(event) {
			me._exit_fullscreen.logicBlock_visible();
			me._exitfullscreen.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
			me._fulllscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._exit_fullscreen.logicBlock_visible();
			me._exitfullscreen.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
			me._fulllscreen.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('positionchanged', function(event) {
			me._floorplan_el_phone.ggRadar.update();
			me._map_1.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_TrongDongNho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_TrongDongNho'].length; i++) {
					hotspotTemplates['Ht_3d_node_TrongDongNho'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_NgaiTho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_NgaiTho'].length; i++) {
					hotspotTemplates['Ht_3d_node_NgaiTho'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_MayChieuPhim')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_MayChieuPhim'].length; i++) {
					hotspotTemplates['Ht_3d_node_MayChieuPhim'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_DauRong')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_DauRong'].length; i++) {
					hotspotTemplates['Ht_3d_node_DauRong'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDen')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDen'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDen'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDenThoiMac')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDenThoiMac'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDenThoiMac'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_BinhTrangMen')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_BinhTrangMen'].length; i++) {
					hotspotTemplates['Ht_3d_node_BinhTrangMen'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_sizechanged();
				}
			}
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_1.logicBlock();
			me._variable_resp_phone_2.logicBlock();
			me._variable_resp_phone_3.logicBlock();
			me._variable_resp_phone_4.logicBlock();
			me._svg_8.logicBlock_visible();
			me._svg_13.logicBlock_visible();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_kb_accessibility', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_varchanged_kb_accessibility();
				}
			}
			me._sounds_off.logicBlock_tabindex();
			me._sounds_on.logicBlock_tabindex();
			for (var i=0; i < me._floorplan_el_phone.ggMarkerInstances.length; i++) {
				me._floorplan_el_phone.ggMarkerInstances[i].ggEvent_varchanged_kb_accessibility();
			}
			me._languages_close_btn.logicBlock_tabindex();
			me._languages_close_btn_active.logicBlock_tabindex();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_varchanged_kb_accessibility();
			}
		});
		player.addListener('varchanged_opt_auto_rot', function(event) {
			me._controller_3.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_back', function(event) {
			me._variable_opt_back_available.logicBlock();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_resp_phone_3', function(event) {
			me._controller_1.logicBlock_visible();
			me._controller_3.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._svg_16.logicBlock_visible();
			me._svg_11.logicBlock_visible();
		});
		player.addListener('varchanged_vis_Image', function(event) {
			if (hotspotTemplates.hasOwnProperty('Rollover_Effect ')) {
				for(var i = 0; i < hotspotTemplates['Rollover_Effect '].length; i++) {
					hotspotTemplates['Rollover_Effect '][i].ggEvent_varchanged_vis_Image();
				}
			}
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._container_map.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Rollover_Effect ')) {
				for(var i = 0; i < hotspotTemplates['Rollover_Effect '].length; i++) {
					hotspotTemplates['Rollover_Effect '][i].ggEvent_varchanged_vis_hotspots();
				}
			}
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_text_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_languages', function(event) {
			me._variable_vis_skin.logicBlock();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_share', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_TrongDongNho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_TrongDongNho'].length; i++) {
					hotspotTemplates['Ht_3d_node_TrongDongNho'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_NgaiTho')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_NgaiTho'].length; i++) {
					hotspotTemplates['Ht_3d_node_NgaiTho'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_MayChieuPhim')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_MayChieuPhim'].length; i++) {
					hotspotTemplates['Ht_3d_node_MayChieuPhim'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_DauRong')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_DauRong'].length; i++) {
					hotspotTemplates['Ht_3d_node_DauRong'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDen')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDen'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDen'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Ht_3d_node_ChanDenThoiMac')) {
				for(var i = 0; i < hotspotTemplates['Ht_3d_node_ChanDenThoiMac'].length; i++) {
					hotspotTemplates['Ht_3d_node_ChanDenThoiMac'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('Rollover_Effect ')) {
				for(var i = 0; i < hotspotTemplates['Rollover_Effect '].length; i++) {
					hotspotTemplates['Rollover_Effect '][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails_2', function(event) {
			me._thumbnail_menu_2.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnails_phone', function(event) {
			me._screentint_phone_1.logicBlock_alpha();
			me._thumbnails_toggle.logicBlock_visible();
			me._btn_thumbnails_icon1.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._node_cloner_phone.ggUpdate();
			me._node_cloner_phone1.ggUpdate();
			me._languages_cloner.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
		});
	};
	function SkinCloner_node_cloner_phone1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumb_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_thumb_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_thumb_phone.onclick=function (e) {
			if (me._node_thumb_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
		}
		me._node_thumb_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img_phone";
		el.ggDx=0;
		el.ggDy=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) - 13px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumb_img_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img_phone']=true;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img_phone']=false;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumb_img_border_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 98px;';
		hs+='left : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_img_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border_phone.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border_phone.style.visibility=me._thumb_img_border_phone.ggVisible?'inherit':'hidden';
					me._thumb_img_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border_phone.style.opacity == 0.0) { me._thumb_img_border_phone.style.visibility="hidden"; } }, 205);
					me._thumb_img_border_phone.style.opacity=0;
				}
			}
		}
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_img_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img_phone.appendChild(me._thumb_img_border_phone);
		me._node_thumb_phone.appendChild(me._thumb_img_phone);
		el=me._thumb_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((110px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumb_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title_phone.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title_phone.ggElementNodeId()) == true)) || 
				((me._thumb_title_phone.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title_phone.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title_phone.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title_phone.style.transition='color 0s';
				if (me._thumb_title_phone.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title_phone.style.color="rgba(92,255,47,1)";
				}
				else {
					me._thumb_title_phone.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title_phone.logicBlock_textcolor();
		me._thumb_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb_phone.appendChild(me._thumb_title_phone);
		me.__div.appendChild(me._node_thumb_phone);
		me.elementMouseOver['thumb_img_phone']=false;
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_title_phone.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
				me._thumb_title_phone.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(92,255,47,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.logicBlock_textcolor();
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_phone_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me._language_title.logicBlock_textcolor();
		me.elementMouseOver['language_title']=false;
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_phone_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 83px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails_phone', false);
		}
		me._thumbnail_image_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=true;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=false;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_image_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border_phone.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border_phone.style.visibility=me._thumbnail_border_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border_phone.style.opacity == 0.0) { me._thumbnail_border_phone.style.visibility="hidden"; } }, 105);
					me._thumbnail_border_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_border_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxwb2x5bGluZSBzdHJva2'+
			'UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMSIgcG9pbnRzPSIzMCw5ICYjeGE7JiN4OTsxMy41LDI1LjUgNiwxOCAiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_visited_phone);
		me.__div.appendChild(me._thumbnail_image_phone);
		me.elementMouseOver['thumbnail_image_phone']=false;
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinHotspotClass_hotspot_ngai_tho(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_ngai_tho=document.createElement('div');
		el.ggId="Hotspot_ngai_tho";
		el.ggDx=-1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_ngai_tho.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_ngai_tho.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_ngai_tho.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_ngai_tho.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_ngai_tho']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_ngai_tho.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_ngai_tho']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_ngai_tho.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_23_1=document.createElement('div');
		els=me._svg_23_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_23_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 23_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		hs+='.ripple-effect { width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 0 0 rgba(255, 255, 255, 1); \/* B\u1eaft \u0111\u1ea7u v\u1edbi m\xe0u tr\u1eafng \u0111\u1eadm *\/ animation: ripple 3s infinite ease-out; \/* \u0110i\u1ec1u ch\u1ec9nh th\u1eddi gian v\xe0 ki\u1ec3u chuy\u1ec3n \u0111\u1ed9ng *\/ } @keyframes ripple { 0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 1); \/* Ban \u0111\u1ea7u l\xe0 m\xe0u tr\u1eafng \u0111\u1eadm *\/ } 50% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.7); \/* T\u1ecfa ra m\xe0u tr\u1eafng \u0111\u1eadm v\u1edbi \u0111\u1ed9 m\u1edd, gi\u1ea3m b\xe1n k\xednh *\/ } 100% { box-shadow: 0 0 0 40px rgba(255, 255, 255, 0); \/* Cu\u1ed1i c\xf9ng l\xe0 m\u1edd d\u1ea7n v\xe0 bi\u1ebfn m\u1ea5t *\/ } }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_23_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_23_1.onclick=function (e) {
			skin._ngaitho_3d.style.transition='none';
			skin._ngaitho_3d.style.visibility=(Number(skin._ngaitho_3d.style.opacity)>0||!skin._ngaitho_3d.style.opacity)?'inherit':'hidden';
			skin._ngaitho_3d.ggVisible=true;
		}
		me._svg_23_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_ngai_tho.appendChild(me._svg_23_1);
		me.elementMouseOver['hotspot_ngai_tho']=false;
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._svg_23_1.ggParameter) {
					hs+=parameterToTransform(me._svg_23_1.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._svg_23_1.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._hotspot_ngai_tho;
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image);
		el=me._thumbnail_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me._thumbnail_tint.onclick=function (e) {
			if (me._thumbnail_tint.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 200ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 205);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_title);
		el=me._thumbnail_border=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border.style.visibility=me._thumbnail_border.ggVisible?'inherit':'hidden';
					me._thumbnail_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border.style.opacity == 0.0) { me._thumbnail_border.style.visibility="hidden"; } }, 105);
					me._thumbnail_border.style.opacity=0;
				}
			}
		}
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_border.onclick=function (e) {
			if (me._thumbnail_border.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_border);
		me.__div.appendChild(me._thumbnail_tint);
		el=me._thumbnail_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxwb2x5bGluZSBzdHJva2'+
			'UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMSIgcG9pbnRzPSIzMCw5ICYjeGE7JiN4OTsxMy41LDI1LjUgNiwxOCAiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited.style.transition='';
				if (me._thumbnail_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited.style.visibility=(Number(me._thumbnail_visited.style.opacity)>0||!me._thumbnail_visited.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited.ggVisible=true;
				}
				else {
					me._thumbnail_visited.style.visibility="hidden";
					me._thumbnail_visited.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited.logicBlock_visible();
		me._thumbnail_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited);
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me.elementMouseOver['thumbnail_tint']=false;
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited.logicBlock_visible();
				me._thumbnail_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited.logicBlock_visible();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width >= 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin.style.transition='transform 0s';
				if (me._map_pin.ggCurrentLogicStateScaling == 0) {
					me._map_pin.ggParameter.sx = 0.9;
					me._map_pin.ggParameter.sy = 0.9;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					skin.updateSize(me._map_pin);
				}
				else if (me._map_pin.ggCurrentLogicStateScaling == 1) {
					me._map_pin.ggParameter.sx = 0.8;
					me._map_pin.ggParameter.sy = 0.8;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					skin.updateSize(me._map_pin);
				}
				else {
					me._map_pin.ggParameter.sx = 1;
					me._map_pin.ggParameter.sy = 1;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					skin.updateSize(me._map_pin);
				}
			}
		}
		me._map_pin.logicBlock_scaling();
		me._map_pin.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._map_pin.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._map_pin.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._map_pin.style.transition='transform 0s';
				if (me._map_pin.ggCurrentLogicStateTabIndex == 0) {
					me._map_pin.setAttribute('tabindex', '-1');
				}
				else {
					me._map_pin.setAttribute('tabindex', '0');
				}
			}
		}
		me._map_pin.logicBlock_tabindex();
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._map_pin.onmouseenter=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
		}
		me._map_pin.onmouseleave=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_icon=document.createElement('div');
		els=me._map_pin_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgcj0iMjciIHN0eWxlPSJmaWxsOiNmZmZmMDA7IGZpbGwtb3BhY2l0eToxIiBjeT0iMzIiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIiBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMTZBMTAuNjcsMTAuNjcsMCwwLDEsNDIuNjcsMj'+
			'YuNjdoMGMwLDYuOTEtNS41MywxNy0xMC42NywyMS4zM2gwYy01LjE0LTQuMzUtMTAuNjctMTQuNDItMTAuNjctMjEuMzNoMEExMC42NywxMC42NywwLDAsMSwzMiwxNloiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZjAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxjaXJjbGUgY3g9IjMyIiByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmYwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN5PSIyNi42NyIvPgogPC9nPgo8L3N2Zz4K';
		me._map_pin_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width >= 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_icon.style.transition='transform 0s';
				if (me._map_pin_icon.ggCurrentLogicStateScaling == 0) {
					me._map_pin_icon.ggParameter.sx = 0.9;
					me._map_pin_icon.ggParameter.sy = 0.9;
					me._map_pin_icon.style.transform=parameterToTransform(me._map_pin_icon.ggParameter);
					skin.updateSize(me._map_pin_icon);
				}
				else if (me._map_pin_icon.ggCurrentLogicStateScaling == 1) {
					me._map_pin_icon.ggParameter.sx = 0.8;
					me._map_pin_icon.ggParameter.sy = 0.8;
					me._map_pin_icon.style.transform=parameterToTransform(me._map_pin_icon.ggParameter);
					skin.updateSize(me._map_pin_icon);
				}
				else {
					me._map_pin_icon.ggParameter.sx = 1;
					me._map_pin_icon.ggParameter.sy = 1;
					me._map_pin_icon.style.transform=parameterToTransform(me._map_pin_icon.ggParameter);
					skin.updateSize(me._map_pin_icon);
				}
			}
		}
		me._map_pin_icon.logicBlock_scaling();
		me._map_pin_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon.style.transition='transform 0s';
				if (me._map_pin_icon.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon.style.visibility="hidden";
					me._map_pin_icon.ggVisible=false;
				}
				else {
					me._map_pin_icon.style.visibility=(Number(me._map_pin_icon.style.opacity)>0||!me._map_pin_icon.style.opacity)?'inherit':'hidden';
					me._map_pin_icon.ggVisible=true;
				}
			}
		}
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon);
		el=me._map_pin_icon_active=document.createElement('div');
		els=me._map_pin_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIGN4PSIzMiIgcj0iMjciIHN0eWxlPSJmaWxsOiNlMjMwMzg7IGZpbGwtb3BhY2l0eToxIiBjeT0iMzIiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIiBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6bm9uZSIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMTZBMTAuNjcsMTAuNjcsMCwwLDEsNDIuNjcsMj'+
			'YuNjdoMGMwLDYuOTEtNS41MywxNy0xMC42NywyMS4zM2gwYy01LjE0LTQuMzUtMTAuNjctMTQuNDItMTAuNjctMjEuMzNoMEExMC42NywxMC42NywwLDAsMSwzMiwxNloiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxjaXJjbGUgY3g9IjMyIiByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZjAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN5PSIyNi42NyIvPgogPC9nPgo8L3N2Zz4K';
		me._map_pin_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width >= 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_icon_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_icon_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_icon_active.style.transition='transform 0s';
				if (me._map_pin_icon_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_icon_active.ggParameter.sx = 0.9;
					me._map_pin_icon_active.ggParameter.sy = 0.9;
					me._map_pin_icon_active.style.transform=parameterToTransform(me._map_pin_icon_active.ggParameter);
					skin.updateSize(me._map_pin_icon_active);
				}
				else if (me._map_pin_icon_active.ggCurrentLogicStateScaling == 1) {
					me._map_pin_icon_active.ggParameter.sx = 0.8;
					me._map_pin_icon_active.ggParameter.sy = 0.8;
					me._map_pin_icon_active.style.transform=parameterToTransform(me._map_pin_icon_active.ggParameter);
					skin.updateSize(me._map_pin_icon_active);
				}
				else {
					me._map_pin_icon_active.ggParameter.sx = 1;
					me._map_pin_icon_active.ggParameter.sy = 1;
					me._map_pin_icon_active.style.transform=parameterToTransform(me._map_pin_icon_active.ggParameter);
					skin.updateSize(me._map_pin_icon_active);
				}
			}
		}
		me._map_pin_icon_active.logicBlock_scaling();
		me._map_pin_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon_active.style.transition='transform 0s';
				if (me._map_pin_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon_active.style.visibility=(Number(me._map_pin_icon_active.style.opacity)>0||!me._map_pin_icon_active.style.opacity)?'inherit':'hidden';
					me._map_pin_icon_active.ggVisible=true;
				}
				else {
					me._map_pin_icon_active.style.visibility="hidden";
					me._map_pin_icon_active.ggVisible=false;
				}
			}
		}
		me._map_pin_icon_active.logicBlock_visible();
		me._map_pin_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon_active);
		me._map_pin.logicBlock_scaling();
		me._map_pin.logicBlock_tabindex();
		me.elementMouseOver['map_pin']=false;
		me._map_pin_icon.logicBlock_scaling();
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon_active.logicBlock_scaling();
		me._map_pin_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._map_pin.logicBlock_tabindex();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin.logicBlock_tabindex();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin.logicBlock_scaling();
				me._map_pin_icon.logicBlock_scaling();
				me._map_pin_icon_active.logicBlock_scaling();
			};
			me.ggEvent_varchanged_kb_accessibility=function() {
				me._map_pin.logicBlock_tabindex();
			};
	};
	function SkinHotspotClass_rollover_effect_(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._rollover_effect_=document.createElement('div');
		el.ggId="Rollover_Effect ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 272px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rollover_effect_.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._rollover_effect_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rollover_effect_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rollover_effect_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rollover_effect_.style.transition='opacity 0s';
				if (me._rollover_effect_.ggCurrentLogicStateVisible == 0) {
					me._rollover_effect_.style.visibility=(Number(me._rollover_effect_.style.opacity)>0||!me._rollover_effect_.style.opacity)?'inherit':'hidden';
					me._rollover_effect_.ggVisible=true;
				}
				else {
					me._rollover_effect_.style.visibility="hidden";
					me._rollover_effect_.ggVisible=false;
				}
			}
		}
		me._rollover_effect_.logicBlock_visible();
		me._rollover_effect_.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rollover_effect_.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rollover_effect_.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rollover_effect_.style.transition='opacity 0s';
				if (me._rollover_effect_.ggCurrentLogicStateAlpha == 0) {
					me._rollover_effect_.style.visibility="hidden";
					me._rollover_effect_.style.opacity=0;
				}
				else {
					me._rollover_effect_.style.visibility=me._rollover_effect_.ggVisible?'inherit':'hidden';
					me._rollover_effect_.style.opacity=1;
				}
			}
		}
		me._rollover_effect_.logicBlock_alpha();
		me._rollover_effect_.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._rollover_effect_.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._rollover_effect_.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['rollover_effect_']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._rollover_effect_.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['rollover_effect_']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._rollover_effect_.ggUpdatePosition=function (useTransition) {
		}
		el=me._rollover_effect_customimage=document.createElement('div');
		els=me._rollover_effect_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._rollover_effect_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._rollover_effect_customimage.ggSubElement.setAttribute('alt', player._(me._rollover_effect_customimage.ggAltText));
			me._rollover_effect_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._rollover_effect_customimage.ggText_untranslated = img;
			me._rollover_effect_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._rollover_effect_customimage.ggSubElement.style.width = '0px';
			me._rollover_effect_customimage.ggSubElement.style.height = '0px';
			me._rollover_effect_customimage.ggSubElement.src='';
			me._rollover_effect_customimage.ggSubElement.src=me._rollover_effect_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._rollover_effect_customimage.ggText != player._(me._rollover_effect_customimage.ggText_untranslated)) {
				me._rollover_effect_customimage.ggText = player._(me._rollover_effect_customimage.ggText_untranslated);
				me._rollover_effect_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="Rollover_Effect _CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rollover_effect_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rollover_effect_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rollover_effect_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rollover_effect_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rollover_effect_customimage.style.transition='opacity 1000ms ease 0ms';
				if (me._rollover_effect_customimage.ggCurrentLogicStateVisible == 0) {
					me._rollover_effect_customimage.style.visibility="hidden";
					me._rollover_effect_customimage.ggSubElement.src='';
					me._rollover_effect_customimage.ggVisible=false;
				}
				else {
					me._rollover_effect_customimage.style.visibility=(Number(me._rollover_effect_customimage.style.opacity)>0||!me._rollover_effect_customimage.style.opacity)?'inherit':'hidden';
					me._rollover_effect_customimage.ggSubElement.src=me._rollover_effect_customimage.ggText;
					me._rollover_effect_customimage.ggVisible=true;
				}
			}
		}
		me._rollover_effect_customimage.logicBlock_visible();
		me._rollover_effect_customimage.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_Image') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rollover_effect_customimage.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rollover_effect_customimage.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rollover_effect_customimage.style.transition='opacity 1000ms ease 0ms';
				if (me._rollover_effect_customimage.ggCurrentLogicStateAlpha == 0) {
					me._rollover_effect_customimage.style.visibility=me._rollover_effect_customimage.ggVisible?'inherit':'hidden';
					me._rollover_effect_customimage.ggSubElement.src=me._rollover_effect_customimage.ggText;
					me._rollover_effect_customimage.style.opacity=0.01;
				}
				else {
					me._rollover_effect_customimage.style.visibility=me._rollover_effect_customimage.ggVisible?'inherit':'hidden';
					me._rollover_effect_customimage.ggSubElement.src=me._rollover_effect_customimage.ggText;
					me._rollover_effect_customimage.style.opacity=0.01;
				}
			}
		}
		me._rollover_effect_customimage.logicBlock_alpha();
		me._rollover_effect_customimage.onclick=function (e) {
			var flag=me._rollover_effect_customimage.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._rollover_effect_customimage.style.transition='none';
			} else {
				me._rollover_effect_customimage.style.transition='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._rollover_effect_customimage.style.opacity='0.01';
				me._rollover_effect_customimage.style.visibility=me._rollover_effect_customimage.ggVisible?'inherit':'hidden';
				me._rollover_effect_customimage.ggSubElement.src=me._rollover_effect_customimage.ggText;
			} else {
				me._rollover_effect_customimage.style.opacity='1';
				me._rollover_effect_customimage.style.visibility=me._rollover_effect_customimage.ggVisible?'inherit':'hidden';
				me._rollover_effect_customimage.ggSubElement.src=me._rollover_effect_customimage.ggText;
			}
			me._rollover_effect_customimage.ggOpacitiyActive=!flag;
			player.setVariableValue('vis_Image', true);
		}
		me._rollover_effect_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._rollover_effect_customimage.clientWidth;
			var parentHeight = me._rollover_effect_customimage.clientHeight;
			var img = me._rollover_effect_customimage__img;
			var aspectRatioDiv = me._rollover_effect_customimage.clientWidth / me._rollover_effect_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._rollover_effect_customimage.ggScrollbars || currentWidth < me._rollover_effect_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._rollover_effect_customimage.scrollLeft=currentWidth / 2 - me._rollover_effect_customimage.clientWidth / 2;
			}
			if (!me._rollover_effect_customimage.ggScrollbars || currentHeight < me._rollover_effect_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._rollover_effect_customimage.scrollTop=currentHeight / 2 - me._rollover_effect_customimage.clientHeight / 2;
			}
		}
		me._rollover_effect_.appendChild(me._rollover_effect_customimage);
		me._rollover_effect_.logicBlock_visible();
		me._rollover_effect_.logicBlock_alpha();
		me.elementMouseOver['rollover_effect_']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._rollover_effect_customimage.style.width=hotspot.customimagewidth + 'px';
			me._rollover_effect_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._rollover_effect_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._rollover_effect_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._rollover_effect_customimage.logicBlock_visible();
		me._rollover_effect_customimage.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._rollover_effect_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._rollover_effect_.logicBlock_visible();
				me._rollover_effect_.logicBlock_alpha();
				me._rollover_effect_customimage.logicBlock_visible();
				me._rollover_effect_customimage.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._rollover_effect_.logicBlock_visible();
				me._rollover_effect_.logicBlock_alpha();
				me._rollover_effect_customimage.logicBlock_visible();
				me._rollover_effect_customimage.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_Image=function() {
				me._rollover_effect_customimage.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._rollover_effect_.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._rollover_effect_.logicBlock_visible();
			};
			me.__div = me._rollover_effect_;
	};
	function SkinHotspotClass_ht_node_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_1=document.createElement('div');
		el.ggId="ht_node_1";
		el.ggDx=0;
		el.ggDy=-200;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 200px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width >= 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1280))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_1.style.transition='transform 0s, opacity 0s';
				if (me._ht_node_1.ggCurrentLogicStateScaling == 0) {
					me._ht_node_1.ggParameter.sx = 0.3;
					me._ht_node_1.ggParameter.sy = 0.3;
					me._ht_node_1.style.transform=parameterToTransform(me._ht_node_1.ggParameter);
					skin.updateSize(me._ht_node_1);
				}
				else if (me._ht_node_1.ggCurrentLogicStateScaling == 1) {
					me._ht_node_1.ggParameter.sx = 0.5;
					me._ht_node_1.ggParameter.sy = 0.5;
					me._ht_node_1.style.transform=parameterToTransform(me._ht_node_1.ggParameter);
					skin.updateSize(me._ht_node_1);
				}
				else {
					me._ht_node_1.ggParameter.sx = 1;
					me._ht_node_1.ggParameter.sy = 1;
					me._ht_node_1.style.transform=parameterToTransform(me._ht_node_1.ggParameter);
					skin.updateSize(me._ht_node_1);
				}
			}
		}
		me._ht_node_1.logicBlock_scaling();
		me._ht_node_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_1.style.transition='transform 0s, opacity 0s';
				if (me._ht_node_1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_1.style.visibility=(Number(me._ht_node_1.style.opacity)>0||!me._ht_node_1.style.opacity)?'inherit':'hidden';
					me._ht_node_1.ggVisible=true;
				}
				else {
					me._ht_node_1.style.visibility="hidden";
					me._ht_node_1.ggVisible=false;
				}
			}
		}
		me._ht_node_1.logicBlock_visible();
		me._ht_node_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_1.style.transition='transform 0s, opacity 0s';
				if (me._ht_node_1.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_1.style.visibility="hidden";
					me._ht_node_1.style.opacity=0;
				}
				else {
					me._ht_node_1.style.visibility=me._ht_node_1.ggVisible?'inherit':'hidden';
					me._ht_node_1.style.opacity=1;
				}
			}
		}
		me._ht_node_1.logicBlock_alpha();
		me._ht_node_1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_mappin_container=document.createElement('div');
		el.ggId="ht_mappin_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95px;';
		hs+='left : calc(50% - ((95px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((95px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 95px;';
		hs+='pointer-events:none;';
		hs+='.ripple-effect1 { width: 30px; height: 30px; border-radius: 50%; box-shadow: 0 0 0 0 #1596cc; animation: ripple2 3s infinite; } @keyframes ripple2 { 70% { box-shadow: 0 0 0 20px rgba(255,255,255,0); 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); } }';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._ht_mappin_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_mappin_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width >= 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1280))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_mappin_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_mappin_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_mappin_container.style.transition='transform 0s';
				if (me._ht_mappin_container.ggCurrentLogicStateScaling == 0) {
					me._ht_mappin_container.ggParameter.sx = 0.3;
					me._ht_mappin_container.ggParameter.sy = 0.3;
					me._ht_mappin_container.style.transform=parameterToTransform(me._ht_mappin_container.ggParameter);
					skin.updateSize(me._ht_mappin_container);
				}
				else if (me._ht_mappin_container.ggCurrentLogicStateScaling == 1) {
					me._ht_mappin_container.ggParameter.sx = 0.5;
					me._ht_mappin_container.ggParameter.sy = 0.5;
					me._ht_mappin_container.style.transform=parameterToTransform(me._ht_mappin_container.ggParameter);
					skin.updateSize(me._ht_mappin_container);
				}
				else {
					me._ht_mappin_container.ggParameter.sx = 1;
					me._ht_mappin_container.ggParameter.sy = 1;
					me._ht_mappin_container.style.transform=parameterToTransform(me._ht_mappin_container.ggParameter);
					skin.updateSize(me._ht_mappin_container);
				}
			}
		}
		me._ht_mappin_container.logicBlock_scaling();
		me._ht_mappin_container.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false)) || 
				((me.hotspot.pxp < 5)) || 
				((me.hotspot.pxp > 95)) || 
				((me.hotspot.pyp < 5)) || 
				((me.hotspot.pyp > 95))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._ht_mappin_container.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._ht_mappin_container.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._ht_mappin_container.style.transition='transform 0s';
				if (me._ht_mappin_container.ggCurrentLogicStateTabIndex == 0) {
					me._ht_mappin_container.setAttribute('tabindex', '-1');
				}
				else {
					me._ht_mappin_container.setAttribute('tabindex', '0');
				}
			}
		}
		me._ht_mappin_container.logicBlock_tabindex();
		me._ht_mappin_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_mappin_container']=true;
			me._image_2.logicBlock_alpha();
		}
		me._ht_mappin_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_mappin_container']=false;
			me._image_2.logicBlock_alpha();
		}
		me._ht_mappin_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAACc0lEQVR4nO2aMW4bMRBF36R3zhG5DSBdICmdwq0L6xRJo9JNcgqpUKsiKaMLWEBaW+ewDsAUO4UDhLOr4VBBgHnlLvWH+CI55HAhSZIkSZIkSZIk6YZcKlAp5S3wAVgA18C7StMj8AQ8AnsReblE/7obUUpZAEsGEzzsgbWIPIZ16i90M6KUMgNWwDxI8gA8iMhzkN4fdDGilLIC7ntoAxsReYgWDTVC14Et9fkfxRG4i1w/3kQJ6VS4hAlojK3GDCFkRDhGwgl4ZsgMr1kAM+Bqok7YyIgy4gfTTNgxpMSfI3ofGbLM7QTNo4jcTGhn0mzExIXRteKfkXmaF9AmI7Sj30eaNXdyotmfWlJrqxFb7H/ri4jsWmK8inULfDWaHETkzqvvzhq6Y7RM2E'+
			'SZAKBaG6PJXPvkoiV9Lo13hy6bnkHzYDRZurU9P9J0+cto0jRfR2KPrUvvPenUOyKsA9SulwkAqm1NOdfhzmuENRf3Ts1zsGK41gmvEdeV56exzVIEGuNUeV3rm4nXiNoustuUOCOW66wTduhSuhZPesaKNuK/JY1Q0ggl2gj3Fvdfx/Iacaw8D6sYTaAWq9Y3E68RT5XnV1pU6YrGqFWxan0z8RphpS7v/cU5WDFcaTUPXYprRGgga7+/8uhOxNJ2XxG2ZI218W6u5bVQVNMqBq292m4j9C7SKpLca3ktBNWy6paHlvvRLN4qTRsqDWzVEWEYGa5bqVLKTAvEYyZsWhfnvOBR8spPCbsN16H/jctcAsNgwueo/Up+FqCEnj5F5EXn69gC2sJGRG6iv63KT4eU/JhMyc8LkyRJkiRJkiRJkv78BnsJ/yXM1kGrAAAA'+
			'AElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 10px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ripple-effect1";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width >= 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1280))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_2.style.transition='transform 0s, opacity 0s';
				if (me._image_2.ggCurrentLogicStateScaling == 0) {
					me._image_2.ggParameter.sx = 0.3;
					me._image_2.ggParameter.sy = 0.3;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
					skin.updateSize(me._image_2);
				}
				else if (me._image_2.ggCurrentLogicStateScaling == 1) {
					me._image_2.ggParameter.sx = 0.5;
					me._image_2.ggParameter.sy = 0.5;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
					skin.updateSize(me._image_2);
				}
				else {
					me._image_2.ggParameter.sx = 1;
					me._image_2.ggParameter.sy = 1;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
					skin.updateSize(me._image_2);
				}
			}
		}
		me._image_2.logicBlock_scaling();
		me._image_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_mappin_container'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2.style.transition='transform 0s, opacity 0s';
				if (me._image_2.ggCurrentLogicStateAlpha == 0) {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=1;
				}
				else {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=1;
				}
			}
		}
		me._image_2.logicBlock_alpha();
		me._image_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_mappin_container.appendChild(me._image_2);
		me._ht_node_1.appendChild(me._ht_mappin_container);
		me._ht_node_1.logicBlock_scaling();
		me._ht_node_1.logicBlock_visible();
		me._ht_node_1.logicBlock_alpha();
		me.elementMouseOver['ht_node_1']=false;
		me._ht_mappin_container.logicBlock_scaling();
		me._ht_mappin_container.logicBlock_tabindex();
		me.elementMouseOver['ht_mappin_container']=false;
		me._image_2.logicBlock_scaling();
		me._image_2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_node_1.logicBlock_visible();
				me._ht_node_1.logicBlock_alpha();
				me._ht_mappin_container.logicBlock_tabindex();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_1.logicBlock_visible();
				me._ht_node_1.logicBlock_alpha();
				me._ht_mappin_container.logicBlock_tabindex();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._ht_mappin_container.logicBlock_tabindex();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_node_1.logicBlock_scaling();
				me._ht_mappin_container.logicBlock_scaling();
				me._image_2.logicBlock_scaling();
			};
			me.ggEvent_varchanged_kb_accessibility=function() {
				me._ht_mappin_container.logicBlock_tabindex();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_node_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node_1.logicBlock_visible();
			};
			me.__div = me._ht_node_1;
	};
	function SkinHotspotClass_ht_3d_node_binhtrangmen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_binhtrangmen=document.createElement('div');
		el.ggId="Ht_3d_node_BinhTrangMen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_binhtrangmen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_binhtrangmen.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_binhtrangmen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_binhtrangmen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_binhtrangmen.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_binhtrangmen.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_binhtrangmen.ggParameter.sx = 0.5;
					me._ht_3d_node_binhtrangmen.ggParameter.sy = 0.5;
					me._ht_3d_node_binhtrangmen.style.transform=parameterToTransform(me._ht_3d_node_binhtrangmen.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_binhtrangmen);}, 1050);
				}
				else if (me._ht_3d_node_binhtrangmen.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_binhtrangmen.ggParameter.sx = 0.7;
					me._ht_3d_node_binhtrangmen.ggParameter.sy = 0.7;
					me._ht_3d_node_binhtrangmen.style.transform=parameterToTransform(me._ht_3d_node_binhtrangmen.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_binhtrangmen);}, 1050);
				}
				else {
					me._ht_3d_node_binhtrangmen.ggParameter.sx = 1;
					me._ht_3d_node_binhtrangmen.ggParameter.sy = 1;
					me._ht_3d_node_binhtrangmen.style.transform=parameterToTransform(me._ht_3d_node_binhtrangmen.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_binhtrangmen);}, 1050);
				}
			}
		}
		me._ht_3d_node_binhtrangmen.logicBlock_scaling();
		me._ht_3d_node_binhtrangmen.onclick=function (e) {
			skin._binhtrangmen_3d.style.transition='none';
			skin._binhtrangmen_3d.style.visibility=(Number(skin._binhtrangmen_3d.style.opacity)>0||!skin._binhtrangmen_3d.style.opacity)?'inherit':'hidden';
			skin._binhtrangmen_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_binhtrangmen.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_binhtrangmen.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_binhtrangmen']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_binhtrangmen.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_binhtrangmen']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_binhtrangmen.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_4.style.transition='transform 0s';
				if (me._container_4.ggCurrentLogicStateScaling == 0) {
					me._container_4.ggParameter.sx = 0.5;
					me._container_4.ggParameter.sy = 0.5;
					me._container_4.style.transform=parameterToTransform(me._container_4.ggParameter);
					skin.updateSize(me._container_4);
				}
				else if (me._container_4.ggCurrentLogicStateScaling == 1) {
					me._container_4.ggParameter.sx = 0.7;
					me._container_4.ggParameter.sy = 0.7;
					me._container_4.style.transform=parameterToTransform(me._container_4.ggParameter);
					skin.updateSize(me._container_4);
				}
				else {
					me._container_4.ggParameter.sx = 1;
					me._container_4.ggParameter.sy = 1;
					me._container_4.style.transform=parameterToTransform(me._container_4.ggParameter);
					skin.updateSize(me._container_4);
				}
			}
		}
		me._container_4.logicBlock_scaling();
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2.style.transition='transform 0s';
				if (me._svg_2.ggCurrentLogicStateScaling == 0) {
					me._svg_2.ggParameter.sx = 0.5;
					me._svg_2.ggParameter.sy = 0.5;
					me._svg_2.style.transform=parameterToTransform(me._svg_2.ggParameter);
					skin.updateSize(me._svg_2);
				}
				else if (me._svg_2.ggCurrentLogicStateScaling == 1) {
					me._svg_2.ggParameter.sx = 0.7;
					me._svg_2.ggParameter.sy = 0.7;
					me._svg_2.style.transform=parameterToTransform(me._svg_2.ggParameter);
					skin.updateSize(me._svg_2);
				}
				else {
					me._svg_2.ggParameter.sx = 1;
					me._svg_2.ggParameter.sy = 1;
					me._svg_2.style.transform=parameterToTransform(me._svg_2.ggParameter);
					skin.updateSize(me._svg_2);
				}
			}
		}
		me._svg_2.logicBlock_scaling();
		me._svg_2.onclick=function (e) {
			skin._binhtrangmen_3d.style.transition='none';
			skin._binhtrangmen_3d.style.visibility=(Number(skin._binhtrangmen_3d.style.opacity)>0||!skin._binhtrangmen_3d.style.opacity)?'inherit':'hidden';
			skin._binhtrangmen_3d.ggVisible=true;
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._svg_2);
		me._ht_3d_node_binhtrangmen.appendChild(me._container_4);
		me._ht_3d_node_binhtrangmen.logicBlock_scaling();
		me.elementMouseOver['ht_3d_node_binhtrangmen']=false;
		me._container_4.logicBlock_scaling();
		me._svg_2.logicBlock_scaling();
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_binhtrangmen.logicBlock_scaling();
				me._container_4.logicBlock_scaling();
				me._svg_2.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_4.ggParameter) {
					hs+=parameterToTransform(me._container_4.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_4.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_binhtrangmen;
	};
	function SkinHotspotClass_ht_3d_node_chandenthoimac(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_chandenthoimac=document.createElement('div');
		el.ggId="Ht_3d_node_ChanDenThoiMac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_chandenthoimac.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_chandenthoimac.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_chandenthoimac.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_chandenthoimac.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_chandenthoimac.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_chandenthoimac.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_chandenthoimac.ggParameter.sx = 0.5;
					me._ht_3d_node_chandenthoimac.ggParameter.sy = 0.5;
					me._ht_3d_node_chandenthoimac.style.transform=parameterToTransform(me._ht_3d_node_chandenthoimac.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_chandenthoimac);}, 1050);
				}
				else if (me._ht_3d_node_chandenthoimac.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_chandenthoimac.ggParameter.sx = 0.7;
					me._ht_3d_node_chandenthoimac.ggParameter.sy = 0.7;
					me._ht_3d_node_chandenthoimac.style.transform=parameterToTransform(me._ht_3d_node_chandenthoimac.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_chandenthoimac);}, 1050);
				}
				else {
					me._ht_3d_node_chandenthoimac.ggParameter.sx = 1;
					me._ht_3d_node_chandenthoimac.ggParameter.sy = 1;
					me._ht_3d_node_chandenthoimac.style.transform=parameterToTransform(me._ht_3d_node_chandenthoimac.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_chandenthoimac);}, 1050);
				}
			}
		}
		me._ht_3d_node_chandenthoimac.logicBlock_scaling();
		me._ht_3d_node_chandenthoimac.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_3d_node_chandenthoimac.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_3d_node_chandenthoimac.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_3d_node_chandenthoimac.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_chandenthoimac.ggCurrentLogicStateVisible == 0) {
					me._ht_3d_node_chandenthoimac.style.visibility=(Number(me._ht_3d_node_chandenthoimac.style.opacity)>0||!me._ht_3d_node_chandenthoimac.style.opacity)?'inherit':'hidden';
					me._ht_3d_node_chandenthoimac.ggVisible=true;
				}
				else {
					me._ht_3d_node_chandenthoimac.style.visibility="hidden";
					me._ht_3d_node_chandenthoimac.ggVisible=false;
				}
			}
		}
		me._ht_3d_node_chandenthoimac.logicBlock_visible();
		me._ht_3d_node_chandenthoimac.onclick=function (e) {
			skin._chandenthoimac_3d.style.transition='none';
			skin._chandenthoimac_3d.style.visibility=(Number(skin._chandenthoimac_3d.style.opacity)>0||!skin._chandenthoimac_3d.style.opacity)?'inherit':'hidden';
			skin._chandenthoimac_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chandenthoimac.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chandenthoimac.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_chandenthoimac']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chandenthoimac.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_chandenthoimac']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chandenthoimac.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_5.style.transition='transform 0s';
				if (me._container_5.ggCurrentLogicStateScaling == 0) {
					me._container_5.ggParameter.sx = 0.5;
					me._container_5.ggParameter.sy = 0.5;
					me._container_5.style.transform=parameterToTransform(me._container_5.ggParameter);
					skin.updateSize(me._container_5);
				}
				else if (me._container_5.ggCurrentLogicStateScaling == 1) {
					me._container_5.ggParameter.sx = 0.7;
					me._container_5.ggParameter.sy = 0.7;
					me._container_5.style.transform=parameterToTransform(me._container_5.ggParameter);
					skin.updateSize(me._container_5);
				}
				else {
					me._container_5.ggParameter.sx = 1;
					me._container_5.ggParameter.sy = 1;
					me._container_5.style.transform=parameterToTransform(me._container_5.ggParameter);
					skin.updateSize(me._container_5);
				}
			}
		}
		me._container_5.logicBlock_scaling();
		me._container_5.onmouseenter=function (e) {
			me.elementMouseOver['container_5']=true;
			me._svg_2_1.logicBlock_alpha();
		}
		me._container_5.onmouseleave=function (e) {
			me.elementMouseOver['container_5']=false;
			me._svg_2_1.logicBlock_alpha();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2_1.style.transition='transform 0s, opacity 0s';
				if (me._svg_2_1.ggCurrentLogicStateScaling == 0) {
					me._svg_2_1.ggParameter.sx = 0.5;
					me._svg_2_1.ggParameter.sy = 0.5;
					me._svg_2_1.style.transform=parameterToTransform(me._svg_2_1.ggParameter);
					skin.updateSize(me._svg_2_1);
				}
				else if (me._svg_2_1.ggCurrentLogicStateScaling == 1) {
					me._svg_2_1.ggParameter.sx = 0.7;
					me._svg_2_1.ggParameter.sy = 0.7;
					me._svg_2_1.style.transform=parameterToTransform(me._svg_2_1.ggParameter);
					skin.updateSize(me._svg_2_1);
				}
				else {
					me._svg_2_1.ggParameter.sx = 1;
					me._svg_2_1.ggParameter.sy = 1;
					me._svg_2_1.style.transform=parameterToTransform(me._svg_2_1.ggParameter);
					skin.updateSize(me._svg_2_1);
				}
			}
		}
		me._svg_2_1.logicBlock_scaling();
		me._svg_2_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2_1.style.transition='transform 0s, opacity 0s';
				if (me._svg_2_1.ggCurrentLogicStateVisible == 0) {
					me._svg_2_1.style.visibility=(Number(me._svg_2_1.style.opacity)>0||!me._svg_2_1.style.opacity)?'inherit':'hidden';
					me._svg_2_1.ggVisible=true;
				}
				else {
					me._svg_2_1.style.visibility=(Number(me._svg_2_1.style.opacity)>0||!me._svg_2_1.style.opacity)?'inherit':'hidden';
					me._svg_2_1.ggVisible=true;
				}
			}
		}
		me._svg_2_1.logicBlock_visible();
		me._svg_2_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['container_5'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_2_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_2_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_2_1.style.transition='transform 0s, opacity 0s';
				if (me._svg_2_1.ggCurrentLogicStateAlpha == 0) {
					me._svg_2_1.style.visibility=me._svg_2_1.ggVisible?'inherit':'hidden';
					me._svg_2_1.style.opacity=1;
				}
				else {
					me._svg_2_1.style.visibility=me._svg_2_1.ggVisible?'inherit':'hidden';
					me._svg_2_1.style.opacity=1;
				}
			}
		}
		me._svg_2_1.logicBlock_alpha();
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._svg_2_1);
		me._ht_3d_node_chandenthoimac.appendChild(me._container_5);
		me._ht_3d_node_chandenthoimac.logicBlock_scaling();
		me._ht_3d_node_chandenthoimac.logicBlock_visible();
		me.elementMouseOver['ht_3d_node_chandenthoimac']=false;
		me._container_5.logicBlock_scaling();
		me.elementMouseOver['container_5']=false;
		me._svg_2_1.logicBlock_scaling();
		me._svg_2_1.logicBlock_visible();
		me._svg_2_1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_3d_node_chandenthoimac.logicBlock_visible();
				me._svg_2_1.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_3d_node_chandenthoimac.logicBlock_visible();
				me._svg_2_1.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_chandenthoimac.logicBlock_scaling();
				me._container_5.logicBlock_scaling();
				me._svg_2_1.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_3d_node_chandenthoimac.logicBlock_visible();
				me._svg_2_1.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_5.ggParameter) {
					hs+=parameterToTransform(me._container_5.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_5.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_chandenthoimac;
	};
	function SkinHotspotClass_ht_3d_node_chanden(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_chanden=document.createElement('div');
		el.ggId="Ht_3d_node_ChanDen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_chanden.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_chanden.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_chanden.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_chanden.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_chanden.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_chanden.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_chanden.ggParameter.sx = 0.5;
					me._ht_3d_node_chanden.ggParameter.sy = 0.5;
					me._ht_3d_node_chanden.style.transform=parameterToTransform(me._ht_3d_node_chanden.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_chanden);}, 1050);
				}
				else if (me._ht_3d_node_chanden.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_chanden.ggParameter.sx = 0.7;
					me._ht_3d_node_chanden.ggParameter.sy = 0.7;
					me._ht_3d_node_chanden.style.transform=parameterToTransform(me._ht_3d_node_chanden.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_chanden);}, 1050);
				}
				else {
					me._ht_3d_node_chanden.ggParameter.sx = 1;
					me._ht_3d_node_chanden.ggParameter.sy = 1;
					me._ht_3d_node_chanden.style.transform=parameterToTransform(me._ht_3d_node_chanden.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_chanden);}, 1050);
				}
			}
		}
		me._ht_3d_node_chanden.logicBlock_scaling();
		me._ht_3d_node_chanden.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_3d_node_chanden.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_3d_node_chanden.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_3d_node_chanden.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_chanden.ggCurrentLogicStateVisible == 0) {
					me._ht_3d_node_chanden.style.visibility=(Number(me._ht_3d_node_chanden.style.opacity)>0||!me._ht_3d_node_chanden.style.opacity)?'inherit':'hidden';
					me._ht_3d_node_chanden.ggVisible=true;
				}
				else {
					me._ht_3d_node_chanden.style.visibility="hidden";
					me._ht_3d_node_chanden.ggVisible=false;
				}
			}
		}
		me._ht_3d_node_chanden.logicBlock_visible();
		me._ht_3d_node_chanden.onclick=function (e) {
			skin._chanden_3d.style.transition='none';
			skin._chanden_3d.style.visibility=(Number(skin._chanden_3d.style.opacity)>0||!skin._chanden_3d.style.opacity)?'inherit':'hidden';
			skin._chanden_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chanden.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chanden.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_chanden']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chanden.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_chanden']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_chanden.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_6.style.transition='transform 0s';
				if (me._container_6.ggCurrentLogicStateScaling == 0) {
					me._container_6.ggParameter.sx = 0.5;
					me._container_6.ggParameter.sy = 0.5;
					me._container_6.style.transform=parameterToTransform(me._container_6.ggParameter);
					skin.updateSize(me._container_6);
				}
				else if (me._container_6.ggCurrentLogicStateScaling == 1) {
					me._container_6.ggParameter.sx = 0.7;
					me._container_6.ggParameter.sy = 0.7;
					me._container_6.style.transform=parameterToTransform(me._container_6.ggParameter);
					skin.updateSize(me._container_6);
				}
				else {
					me._container_6.ggParameter.sx = 1;
					me._container_6.ggParameter.sy = 1;
					me._container_6.style.transform=parameterToTransform(me._container_6.ggParameter);
					skin.updateSize(me._container_6);
				}
			}
		}
		me._container_6.logicBlock_scaling();
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_2=document.createElement('div');
		els=me._svg_2_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2_2.style.transition='transform 0s';
				if (me._svg_2_2.ggCurrentLogicStateScaling == 0) {
					me._svg_2_2.ggParameter.sx = 0.5;
					me._svg_2_2.ggParameter.sy = 0.5;
					me._svg_2_2.style.transform=parameterToTransform(me._svg_2_2.ggParameter);
					skin.updateSize(me._svg_2_2);
				}
				else if (me._svg_2_2.ggCurrentLogicStateScaling == 1) {
					me._svg_2_2.ggParameter.sx = 0.7;
					me._svg_2_2.ggParameter.sy = 0.7;
					me._svg_2_2.style.transform=parameterToTransform(me._svg_2_2.ggParameter);
					skin.updateSize(me._svg_2_2);
				}
				else {
					me._svg_2_2.ggParameter.sx = 1;
					me._svg_2_2.ggParameter.sy = 1;
					me._svg_2_2.style.transform=parameterToTransform(me._svg_2_2.ggParameter);
					skin.updateSize(me._svg_2_2);
				}
			}
		}
		me._svg_2_2.logicBlock_scaling();
		me._svg_2_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2_2.style.transition='transform 0s';
				if (me._svg_2_2.ggCurrentLogicStateVisible == 0) {
					me._svg_2_2.style.visibility=(Number(me._svg_2_2.style.opacity)>0||!me._svg_2_2.style.opacity)?'inherit':'hidden';
					me._svg_2_2.ggVisible=true;
				}
				else {
					me._svg_2_2.style.visibility="hidden";
					me._svg_2_2.ggVisible=false;
				}
			}
		}
		me._svg_2_2.logicBlock_visible();
		me._svg_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._svg_2_2);
		me._ht_3d_node_chanden.appendChild(me._container_6);
		me._ht_3d_node_chanden.logicBlock_scaling();
		me._ht_3d_node_chanden.logicBlock_visible();
		me.elementMouseOver['ht_3d_node_chanden']=false;
		me._container_6.logicBlock_scaling();
		me._svg_2_2.logicBlock_scaling();
		me._svg_2_2.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_3d_node_chanden.logicBlock_visible();
				me._svg_2_2.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_3d_node_chanden.logicBlock_visible();
				me._svg_2_2.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_chanden.logicBlock_scaling();
				me._container_6.logicBlock_scaling();
				me._svg_2_2.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_3d_node_chanden.logicBlock_visible();
				me._svg_2_2.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_6.ggParameter) {
					hs+=parameterToTransform(me._container_6.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_6.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_chanden;
	};
	function SkinHotspotClass_ht_3d_node_daurong(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_daurong=document.createElement('div');
		el.ggId="Ht_3d_node_DauRong";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_daurong.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_daurong.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_daurong.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_daurong.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_daurong.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_daurong.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_daurong.ggParameter.sx = 0.5;
					me._ht_3d_node_daurong.ggParameter.sy = 0.5;
					me._ht_3d_node_daurong.style.transform=parameterToTransform(me._ht_3d_node_daurong.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_daurong);}, 1050);
				}
				else if (me._ht_3d_node_daurong.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_daurong.ggParameter.sx = 0.7;
					me._ht_3d_node_daurong.ggParameter.sy = 0.7;
					me._ht_3d_node_daurong.style.transform=parameterToTransform(me._ht_3d_node_daurong.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_daurong);}, 1050);
				}
				else {
					me._ht_3d_node_daurong.ggParameter.sx = 1;
					me._ht_3d_node_daurong.ggParameter.sy = 1;
					me._ht_3d_node_daurong.style.transform=parameterToTransform(me._ht_3d_node_daurong.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_daurong);}, 1050);
				}
			}
		}
		me._ht_3d_node_daurong.logicBlock_scaling();
		me._ht_3d_node_daurong.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_3d_node_daurong.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_3d_node_daurong.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_3d_node_daurong.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_daurong.ggCurrentLogicStateVisible == 0) {
					me._ht_3d_node_daurong.style.visibility=(Number(me._ht_3d_node_daurong.style.opacity)>0||!me._ht_3d_node_daurong.style.opacity)?'inherit':'hidden';
					me._ht_3d_node_daurong.ggVisible=true;
				}
				else {
					me._ht_3d_node_daurong.style.visibility="hidden";
					me._ht_3d_node_daurong.ggVisible=false;
				}
			}
		}
		me._ht_3d_node_daurong.logicBlock_visible();
		me._ht_3d_node_daurong.onclick=function (e) {
			skin._daurong_3d.style.transition='none';
			skin._daurong_3d.style.visibility=(Number(skin._daurong_3d.style.opacity)>0||!skin._daurong_3d.style.opacity)?'inherit':'hidden';
			skin._daurong_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_daurong.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_daurong.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_daurong']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_daurong.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_daurong']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_daurong.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_7=document.createElement('div');
		el.ggId="Container 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_7.style.transition='transform 0s';
				if (me._container_7.ggCurrentLogicStateScaling == 0) {
					me._container_7.ggParameter.sx = 0.5;
					me._container_7.ggParameter.sy = 0.5;
					me._container_7.style.transform=parameterToTransform(me._container_7.ggParameter);
					skin.updateSize(me._container_7);
				}
				else if (me._container_7.ggCurrentLogicStateScaling == 1) {
					me._container_7.ggParameter.sx = 0.7;
					me._container_7.ggParameter.sy = 0.7;
					me._container_7.style.transform=parameterToTransform(me._container_7.ggParameter);
					skin.updateSize(me._container_7);
				}
				else {
					me._container_7.ggParameter.sx = 1;
					me._container_7.ggParameter.sy = 1;
					me._container_7.style.transform=parameterToTransform(me._container_7.ggParameter);
					skin.updateSize(me._container_7);
				}
			}
		}
		me._container_7.logicBlock_scaling();
		me._container_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_3=document.createElement('div');
		els=me._svg_2_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2_3.style.transition='transform 0s';
				if (me._svg_2_3.ggCurrentLogicStateScaling == 0) {
					me._svg_2_3.ggParameter.sx = 0.5;
					me._svg_2_3.ggParameter.sy = 0.5;
					me._svg_2_3.style.transform=parameterToTransform(me._svg_2_3.ggParameter);
					skin.updateSize(me._svg_2_3);
				}
				else if (me._svg_2_3.ggCurrentLogicStateScaling == 1) {
					me._svg_2_3.ggParameter.sx = 0.7;
					me._svg_2_3.ggParameter.sy = 0.7;
					me._svg_2_3.style.transform=parameterToTransform(me._svg_2_3.ggParameter);
					skin.updateSize(me._svg_2_3);
				}
				else {
					me._svg_2_3.ggParameter.sx = 1;
					me._svg_2_3.ggParameter.sy = 1;
					me._svg_2_3.style.transform=parameterToTransform(me._svg_2_3.ggParameter);
					skin.updateSize(me._svg_2_3);
				}
			}
		}
		me._svg_2_3.logicBlock_scaling();
		me._svg_2_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2_3.style.transition='transform 0s';
				if (me._svg_2_3.ggCurrentLogicStateVisible == 0) {
					me._svg_2_3.style.visibility=(Number(me._svg_2_3.style.opacity)>0||!me._svg_2_3.style.opacity)?'inherit':'hidden';
					me._svg_2_3.ggVisible=true;
				}
				else {
					me._svg_2_3.style.visibility="hidden";
					me._svg_2_3.ggVisible=false;
				}
			}
		}
		me._svg_2_3.logicBlock_visible();
		me._svg_2_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_7.appendChild(me._svg_2_3);
		me._ht_3d_node_daurong.appendChild(me._container_7);
		me._ht_3d_node_daurong.logicBlock_scaling();
		me._ht_3d_node_daurong.logicBlock_visible();
		me.elementMouseOver['ht_3d_node_daurong']=false;
		me._container_7.logicBlock_scaling();
		me._svg_2_3.logicBlock_scaling();
		me._svg_2_3.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_3d_node_daurong.logicBlock_visible();
				me._svg_2_3.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_3d_node_daurong.logicBlock_visible();
				me._svg_2_3.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_daurong.logicBlock_scaling();
				me._container_7.logicBlock_scaling();
				me._svg_2_3.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_3d_node_daurong.logicBlock_visible();
				me._svg_2_3.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_7.ggParameter) {
					hs+=parameterToTransform(me._container_7.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_7.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_daurong;
	};
	function SkinHotspotClass_ht_3d_node_maychieuphim(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_maychieuphim=document.createElement('div');
		el.ggId="Ht_3d_node_MayChieuPhim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_maychieuphim.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_maychieuphim.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_maychieuphim.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_maychieuphim.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_maychieuphim.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_maychieuphim.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_maychieuphim.ggParameter.sx = 0.5;
					me._ht_3d_node_maychieuphim.ggParameter.sy = 0.5;
					me._ht_3d_node_maychieuphim.style.transform=parameterToTransform(me._ht_3d_node_maychieuphim.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_maychieuphim);}, 1050);
				}
				else if (me._ht_3d_node_maychieuphim.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_maychieuphim.ggParameter.sx = 0.7;
					me._ht_3d_node_maychieuphim.ggParameter.sy = 0.7;
					me._ht_3d_node_maychieuphim.style.transform=parameterToTransform(me._ht_3d_node_maychieuphim.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_maychieuphim);}, 1050);
				}
				else {
					me._ht_3d_node_maychieuphim.ggParameter.sx = 1;
					me._ht_3d_node_maychieuphim.ggParameter.sy = 1;
					me._ht_3d_node_maychieuphim.style.transform=parameterToTransform(me._ht_3d_node_maychieuphim.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_maychieuphim);}, 1050);
				}
			}
		}
		me._ht_3d_node_maychieuphim.logicBlock_scaling();
		me._ht_3d_node_maychieuphim.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_3d_node_maychieuphim.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_3d_node_maychieuphim.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_3d_node_maychieuphim.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_maychieuphim.ggCurrentLogicStateVisible == 0) {
					me._ht_3d_node_maychieuphim.style.visibility=(Number(me._ht_3d_node_maychieuphim.style.opacity)>0||!me._ht_3d_node_maychieuphim.style.opacity)?'inherit':'hidden';
					me._ht_3d_node_maychieuphim.ggVisible=true;
				}
				else {
					me._ht_3d_node_maychieuphim.style.visibility="hidden";
					me._ht_3d_node_maychieuphim.ggVisible=false;
				}
			}
		}
		me._ht_3d_node_maychieuphim.logicBlock_visible();
		me._ht_3d_node_maychieuphim.onclick=function (e) {
			skin._maychieuphim_3d.style.transition='none';
			skin._maychieuphim_3d.style.visibility=(Number(skin._maychieuphim_3d.style.opacity)>0||!skin._maychieuphim_3d.style.opacity)?'inherit':'hidden';
			skin._maychieuphim_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_maychieuphim.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_maychieuphim.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_maychieuphim']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_maychieuphim.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_maychieuphim']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_maychieuphim.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_8=document.createElement('div');
		el.ggId="Container 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_8.style.transition='transform 0s';
				if (me._container_8.ggCurrentLogicStateScaling == 0) {
					me._container_8.ggParameter.sx = 0.5;
					me._container_8.ggParameter.sy = 0.5;
					me._container_8.style.transform=parameterToTransform(me._container_8.ggParameter);
					skin.updateSize(me._container_8);
				}
				else if (me._container_8.ggCurrentLogicStateScaling == 1) {
					me._container_8.ggParameter.sx = 0.7;
					me._container_8.ggParameter.sy = 0.7;
					me._container_8.style.transform=parameterToTransform(me._container_8.ggParameter);
					skin.updateSize(me._container_8);
				}
				else {
					me._container_8.ggParameter.sx = 1;
					me._container_8.ggParameter.sy = 1;
					me._container_8.style.transform=parameterToTransform(me._container_8.ggParameter);
					skin.updateSize(me._container_8);
				}
			}
		}
		me._container_8.logicBlock_scaling();
		me._container_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_4=document.createElement('div');
		els=me._svg_2_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2_4.style.transition='transform 0s';
				if (me._svg_2_4.ggCurrentLogicStateScaling == 0) {
					me._svg_2_4.ggParameter.sx = 0.5;
					me._svg_2_4.ggParameter.sy = 0.5;
					me._svg_2_4.style.transform=parameterToTransform(me._svg_2_4.ggParameter);
					skin.updateSize(me._svg_2_4);
				}
				else if (me._svg_2_4.ggCurrentLogicStateScaling == 1) {
					me._svg_2_4.ggParameter.sx = 0.7;
					me._svg_2_4.ggParameter.sy = 0.7;
					me._svg_2_4.style.transform=parameterToTransform(me._svg_2_4.ggParameter);
					skin.updateSize(me._svg_2_4);
				}
				else {
					me._svg_2_4.ggParameter.sx = 1;
					me._svg_2_4.ggParameter.sy = 1;
					me._svg_2_4.style.transform=parameterToTransform(me._svg_2_4.ggParameter);
					skin.updateSize(me._svg_2_4);
				}
			}
		}
		me._svg_2_4.logicBlock_scaling();
		me._svg_2_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2_4.style.transition='transform 0s';
				if (me._svg_2_4.ggCurrentLogicStateVisible == 0) {
					me._svg_2_4.style.visibility=(Number(me._svg_2_4.style.opacity)>0||!me._svg_2_4.style.opacity)?'inherit':'hidden';
					me._svg_2_4.ggVisible=true;
				}
				else {
					me._svg_2_4.style.visibility="hidden";
					me._svg_2_4.ggVisible=false;
				}
			}
		}
		me._svg_2_4.logicBlock_visible();
		me._svg_2_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_8.appendChild(me._svg_2_4);
		me._ht_3d_node_maychieuphim.appendChild(me._container_8);
		me._ht_3d_node_maychieuphim.logicBlock_scaling();
		me._ht_3d_node_maychieuphim.logicBlock_visible();
		me.elementMouseOver['ht_3d_node_maychieuphim']=false;
		me._container_8.logicBlock_scaling();
		me._svg_2_4.logicBlock_scaling();
		me._svg_2_4.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_3d_node_maychieuphim.logicBlock_visible();
				me._svg_2_4.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_3d_node_maychieuphim.logicBlock_visible();
				me._svg_2_4.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_maychieuphim.logicBlock_scaling();
				me._container_8.logicBlock_scaling();
				me._svg_2_4.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_3d_node_maychieuphim.logicBlock_visible();
				me._svg_2_4.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_8.ggParameter) {
					hs+=parameterToTransform(me._container_8.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_8.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_maychieuphim;
	};
	function SkinHotspotClass_ht_3d_node_ngaitho(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_ngaitho=document.createElement('div');
		el.ggId="Ht_3d_node_NgaiTho";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_ngaitho.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_ngaitho.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_ngaitho.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_ngaitho.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_ngaitho.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_ngaitho.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_ngaitho.ggParameter.sx = 0.5;
					me._ht_3d_node_ngaitho.ggParameter.sy = 0.5;
					me._ht_3d_node_ngaitho.style.transform=parameterToTransform(me._ht_3d_node_ngaitho.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_ngaitho);}, 1050);
				}
				else if (me._ht_3d_node_ngaitho.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_ngaitho.ggParameter.sx = 0.7;
					me._ht_3d_node_ngaitho.ggParameter.sy = 0.7;
					me._ht_3d_node_ngaitho.style.transform=parameterToTransform(me._ht_3d_node_ngaitho.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_ngaitho);}, 1050);
				}
				else {
					me._ht_3d_node_ngaitho.ggParameter.sx = 1;
					me._ht_3d_node_ngaitho.ggParameter.sy = 1;
					me._ht_3d_node_ngaitho.style.transform=parameterToTransform(me._ht_3d_node_ngaitho.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_ngaitho);}, 1050);
				}
			}
		}
		me._ht_3d_node_ngaitho.logicBlock_scaling();
		me._ht_3d_node_ngaitho.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_3d_node_ngaitho.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_3d_node_ngaitho.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_3d_node_ngaitho.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_ngaitho.ggCurrentLogicStateVisible == 0) {
					me._ht_3d_node_ngaitho.style.visibility=(Number(me._ht_3d_node_ngaitho.style.opacity)>0||!me._ht_3d_node_ngaitho.style.opacity)?'inherit':'hidden';
					me._ht_3d_node_ngaitho.ggVisible=true;
				}
				else {
					me._ht_3d_node_ngaitho.style.visibility="hidden";
					me._ht_3d_node_ngaitho.ggVisible=false;
				}
			}
		}
		me._ht_3d_node_ngaitho.logicBlock_visible();
		me._ht_3d_node_ngaitho.onclick=function (e) {
			skin._ngaitho_3d.style.transition='none';
			skin._ngaitho_3d.style.visibility=(Number(skin._ngaitho_3d.style.opacity)>0||!skin._ngaitho_3d.style.opacity)?'inherit':'hidden';
			skin._ngaitho_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_ngaitho.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_ngaitho.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_ngaitho']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_ngaitho.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_ngaitho']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_ngaitho.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_9=document.createElement('div');
		el.ggId="Container 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_9.style.transition='transform 0s';
				if (me._container_9.ggCurrentLogicStateScaling == 0) {
					me._container_9.ggParameter.sx = 0.5;
					me._container_9.ggParameter.sy = 0.5;
					me._container_9.style.transform=parameterToTransform(me._container_9.ggParameter);
					skin.updateSize(me._container_9);
				}
				else if (me._container_9.ggCurrentLogicStateScaling == 1) {
					me._container_9.ggParameter.sx = 0.7;
					me._container_9.ggParameter.sy = 0.7;
					me._container_9.style.transform=parameterToTransform(me._container_9.ggParameter);
					skin.updateSize(me._container_9);
				}
				else {
					me._container_9.ggParameter.sx = 1;
					me._container_9.ggParameter.sy = 1;
					me._container_9.style.transform=parameterToTransform(me._container_9.ggParameter);
					skin.updateSize(me._container_9);
				}
			}
		}
		me._container_9.logicBlock_scaling();
		me._container_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_5=document.createElement('div');
		els=me._svg_2_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2_5.style.transition='transform 0s';
				if (me._svg_2_5.ggCurrentLogicStateScaling == 0) {
					me._svg_2_5.ggParameter.sx = 0.5;
					me._svg_2_5.ggParameter.sy = 0.5;
					me._svg_2_5.style.transform=parameterToTransform(me._svg_2_5.ggParameter);
					skin.updateSize(me._svg_2_5);
				}
				else if (me._svg_2_5.ggCurrentLogicStateScaling == 1) {
					me._svg_2_5.ggParameter.sx = 0.7;
					me._svg_2_5.ggParameter.sy = 0.7;
					me._svg_2_5.style.transform=parameterToTransform(me._svg_2_5.ggParameter);
					skin.updateSize(me._svg_2_5);
				}
				else {
					me._svg_2_5.ggParameter.sx = 1;
					me._svg_2_5.ggParameter.sy = 1;
					me._svg_2_5.style.transform=parameterToTransform(me._svg_2_5.ggParameter);
					skin.updateSize(me._svg_2_5);
				}
			}
		}
		me._svg_2_5.logicBlock_scaling();
		me._svg_2_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2_5.style.transition='transform 0s';
				if (me._svg_2_5.ggCurrentLogicStateVisible == 0) {
					me._svg_2_5.style.visibility=(Number(me._svg_2_5.style.opacity)>0||!me._svg_2_5.style.opacity)?'inherit':'hidden';
					me._svg_2_5.ggVisible=true;
				}
				else {
					me._svg_2_5.style.visibility="hidden";
					me._svg_2_5.ggVisible=false;
				}
			}
		}
		me._svg_2_5.logicBlock_visible();
		me._svg_2_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_9.appendChild(me._svg_2_5);
		me._ht_3d_node_ngaitho.appendChild(me._container_9);
		me._ht_3d_node_ngaitho.logicBlock_scaling();
		me._ht_3d_node_ngaitho.logicBlock_visible();
		me.elementMouseOver['ht_3d_node_ngaitho']=false;
		me._container_9.logicBlock_scaling();
		me._svg_2_5.logicBlock_scaling();
		me._svg_2_5.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_3d_node_ngaitho.logicBlock_visible();
				me._svg_2_5.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_3d_node_ngaitho.logicBlock_visible();
				me._svg_2_5.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_ngaitho.logicBlock_scaling();
				me._container_9.logicBlock_scaling();
				me._svg_2_5.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_3d_node_ngaitho.logicBlock_visible();
				me._svg_2_5.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_9.ggParameter) {
					hs+=parameterToTransform(me._container_9.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_9.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_ngaitho;
	};
	function SkinHotspotClass_ht_3d_node_trongdongnho(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d_node_trongdongnho=document.createElement('div');
		el.ggId="Ht_3d_node_TrongDongNho";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_3d_node_trongdongnho.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d_node_trongdongnho.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_3d_node_trongdongnho.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_3d_node_trongdongnho.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_3d_node_trongdongnho.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_trongdongnho.ggCurrentLogicStateScaling == 0) {
					me._ht_3d_node_trongdongnho.ggParameter.sx = 0.5;
					me._ht_3d_node_trongdongnho.ggParameter.sy = 0.5;
					me._ht_3d_node_trongdongnho.style.transform=parameterToTransform(me._ht_3d_node_trongdongnho.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_trongdongnho);}, 1050);
				}
				else if (me._ht_3d_node_trongdongnho.ggCurrentLogicStateScaling == 1) {
					me._ht_3d_node_trongdongnho.ggParameter.sx = 0.7;
					me._ht_3d_node_trongdongnho.ggParameter.sy = 0.7;
					me._ht_3d_node_trongdongnho.style.transform=parameterToTransform(me._ht_3d_node_trongdongnho.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_trongdongnho);}, 1050);
				}
				else {
					me._ht_3d_node_trongdongnho.ggParameter.sx = 1;
					me._ht_3d_node_trongdongnho.ggParameter.sy = 1;
					me._ht_3d_node_trongdongnho.style.transform=parameterToTransform(me._ht_3d_node_trongdongnho.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_3d_node_trongdongnho);}, 1050);
				}
			}
		}
		me._ht_3d_node_trongdongnho.logicBlock_scaling();
		me._ht_3d_node_trongdongnho.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_3d_node_trongdongnho.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_3d_node_trongdongnho.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_3d_node_trongdongnho.style.transition='transform 1000ms ease-in-out 0ms';
				if (me._ht_3d_node_trongdongnho.ggCurrentLogicStateVisible == 0) {
					me._ht_3d_node_trongdongnho.style.visibility=(Number(me._ht_3d_node_trongdongnho.style.opacity)>0||!me._ht_3d_node_trongdongnho.style.opacity)?'inherit':'hidden';
					me._ht_3d_node_trongdongnho.ggVisible=true;
				}
				else {
					me._ht_3d_node_trongdongnho.style.visibility="hidden";
					me._ht_3d_node_trongdongnho.ggVisible=false;
				}
			}
		}
		me._ht_3d_node_trongdongnho.logicBlock_visible();
		me._ht_3d_node_trongdongnho.onclick=function (e) {
			skin._trongdongnho_3d.style.transition='none';
			skin._trongdongnho_3d.style.visibility=(Number(skin._trongdongnho_3d.style.opacity)>0||!skin._trongdongnho_3d.style.opacity)?'inherit':'hidden';
			skin._trongdongnho_3d.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_trongdongnho.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_trongdongnho.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d_node_trongdongnho']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_trongdongnho.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d_node_trongdongnho']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_3d_node_trongdongnho.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_10=document.createElement('div');
		el.ggId="Container 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_10.style.transition='transform 0s';
				if (me._container_10.ggCurrentLogicStateScaling == 0) {
					me._container_10.ggParameter.sx = 0.5;
					me._container_10.ggParameter.sy = 0.5;
					me._container_10.style.transform=parameterToTransform(me._container_10.ggParameter);
					skin.updateSize(me._container_10);
				}
				else if (me._container_10.ggCurrentLogicStateScaling == 1) {
					me._container_10.ggParameter.sx = 0.7;
					me._container_10.ggParameter.sy = 0.7;
					me._container_10.style.transform=parameterToTransform(me._container_10.ggParameter);
					skin.updateSize(me._container_10);
				}
				else {
					me._container_10.ggParameter.sx = 1;
					me._container_10.ggParameter.sy = 1;
					me._container_10.style.transform=parameterToTransform(me._container_10.ggParameter);
					skin.updateSize(me._container_10);
				}
			}
		}
		me._container_10.logicBlock_scaling();
		me._container_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_6=document.createElement('div');
		els=me._svg_2_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB5Mj0iMS43ODcyIiB5MT0iNjIuMjEyOCIgeDI9IjMyIiBpZD0iU1ZHSURfMV8iIHgxPSIzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSBjeD0iMzIiIHI9IjMwLjIiIGNsYXNzPSJzdDAiIGN5PSIzMiIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2MwLDAuOS0wLjQsMS'+
			'43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIgY2xhc3M9InN0MSIvPgogICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIi8+CiAgIDxyZWN0IHdpZHRoPSIxNC43IiBoZWlnaHQ9IjIuNCIgeD0i'+
			'MzAuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgeT0iMjMiLz4KICA8L2c+CiAgPHBhdGggZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOCwzNy41LDQ4Ljh6Ii'+
			'BjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41LTAuNC0wLjgtMS4x'+
			'LTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2_6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width > 0)) && 
				((player.getViewerSize(true).width <= 480))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_2_6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_2_6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_2_6.style.transition='transform 0s';
				if (me._svg_2_6.ggCurrentLogicStateScaling == 0) {
					me._svg_2_6.ggParameter.sx = 0.5;
					me._svg_2_6.ggParameter.sy = 0.5;
					me._svg_2_6.style.transform=parameterToTransform(me._svg_2_6.ggParameter);
					skin.updateSize(me._svg_2_6);
				}
				else if (me._svg_2_6.ggCurrentLogicStateScaling == 1) {
					me._svg_2_6.ggParameter.sx = 0.7;
					me._svg_2_6.ggParameter.sy = 0.7;
					me._svg_2_6.style.transform=parameterToTransform(me._svg_2_6.ggParameter);
					skin.updateSize(me._svg_2_6);
				}
				else {
					me._svg_2_6.ggParameter.sx = 1;
					me._svg_2_6.ggParameter.sy = 1;
					me._svg_2_6.style.transform=parameterToTransform(me._svg_2_6.ggParameter);
					skin.updateSize(me._svg_2_6);
				}
			}
		}
		me._svg_2_6.logicBlock_scaling();
		me._svg_2_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2_6.style.transition='transform 0s';
				if (me._svg_2_6.ggCurrentLogicStateVisible == 0) {
					me._svg_2_6.style.visibility=(Number(me._svg_2_6.style.opacity)>0||!me._svg_2_6.style.opacity)?'inherit':'hidden';
					me._svg_2_6.ggVisible=true;
				}
				else {
					me._svg_2_6.style.visibility="hidden";
					me._svg_2_6.ggVisible=false;
				}
			}
		}
		me._svg_2_6.logicBlock_visible();
		me._svg_2_6.ggUpdatePosition=function (useTransition) {
		}
		me._container_10.appendChild(me._svg_2_6);
		me._ht_3d_node_trongdongnho.appendChild(me._container_10);
		me._ht_3d_node_trongdongnho.logicBlock_scaling();
		me._ht_3d_node_trongdongnho.logicBlock_visible();
		me.elementMouseOver['ht_3d_node_trongdongnho']=false;
		me._container_10.logicBlock_scaling();
		me._svg_2_6.logicBlock_scaling();
		me._svg_2_6.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_3d_node_trongdongnho.logicBlock_visible();
				me._svg_2_6.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_3d_node_trongdongnho.logicBlock_visible();
				me._svg_2_6.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_3d_node_trongdongnho.logicBlock_scaling();
				me._container_10.logicBlock_scaling();
				me._svg_2_6.logicBlock_scaling();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_3d_node_trongdongnho.logicBlock_visible();
				me._svg_2_6.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				var hs='';
				if (me._container_10.ggParameter) {
					hs+=parameterToTransform(me._container_10.ggParameter) + ' ';
				}
				hs+='scale(' + (1.0/Math.tan(player.getHFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
				me._container_10.style.transform=hs;
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_3d_node_trongdongnho;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='Ht_3d_node_TrongDongNho') {
				hotspot.skinid = 'Ht_3d_node_TrongDongNho';
				hsinst = new SkinHotspotClass_ht_3d_node_trongdongnho(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Ht_3d_node_NgaiTho') {
				hotspot.skinid = 'Ht_3d_node_NgaiTho';
				hsinst = new SkinHotspotClass_ht_3d_node_ngaitho(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Ht_3d_node_MayChieuPhim') {
				hotspot.skinid = 'Ht_3d_node_MayChieuPhim';
				hsinst = new SkinHotspotClass_ht_3d_node_maychieuphim(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Ht_3d_node_DauRong') {
				hotspot.skinid = 'Ht_3d_node_DauRong';
				hsinst = new SkinHotspotClass_ht_3d_node_daurong(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Ht_3d_node_ChanDen') {
				hotspot.skinid = 'Ht_3d_node_ChanDen';
				hsinst = new SkinHotspotClass_ht_3d_node_chanden(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Ht_3d_node_ChanDenThoiMac') {
				hotspot.skinid = 'Ht_3d_node_ChanDenThoiMac';
				hsinst = new SkinHotspotClass_ht_3d_node_chandenthoimac(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Ht_3d_node_BinhTrangMen') {
				hotspot.skinid = 'Ht_3d_node_BinhTrangMen';
				hsinst = new SkinHotspotClass_ht_3d_node_binhtrangmen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_1') {
				hotspot.skinid = 'ht_node_1';
				hsinst = new SkinHotspotClass_ht_node_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='Rollover_Effect ') {
				hotspot.skinid = 'Rollover_Effect ';
				hsinst = new SkinHotspotClass_rollover_effect_(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'Hotspot_ngai_tho';
				hsinst = new SkinHotspotClass_hotspot_ngai_tho(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._key_up.ggUpdateConditionTimer();
		me._key_down.ggUpdateConditionTimer();
		me._key_left.ggUpdateConditionTimer();
		me._key_right.ggUpdateConditionTimer();
		me._key_s.ggUpdateConditionTimer();
		me._key_a.ggUpdateConditionTimer();
		me._svg_15.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				player.openNext("{"+player.getNextNode()+"}",player.hotspot.target);
			}
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressedText) {
				case 'ArrowLeft':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changePanLog(0.3,true);
}
					break;
				case 'ArrowUp':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeTiltLog(0.3,true);
}
					break;
				case 'ArrowRight':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changePanLog(-0.3,true);
}
					break;
				case 'ArrowDown':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeTiltLog(-0.3,true);
}
					break;
				case 'a':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeFovLog(-0.3,true);
}
					break;
				case 's':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeFovLog(0.3,true);
}
					break;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggdefaulthotspot { font-family: "Montserrat", sans-serif; font-weight: 400; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown a { color: #aaa; } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .montserrat_light { font-family: "Montserrat", sans-serif; font-weight: 300; } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; } .combined-effect { width: 100px; height: 100px; border-radius: 50%; margin: 50px; box-shadow: 0 0 0 0 #FFFFFF; animation: stretch 1s infinite alternate, ripple 3s infinite; /* Rotate the hotspot to appear flat on the ground */ transform: rotateX(deg); /* Adjust the angle as needed for a flatter appearance */ transform-origin: center bottom; /* Ensures the rotation pivots around the bottom edge */ perspective: 500px; /* Adds depth to make the hotspot look more grounded */ } .ripple-effect { width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 0 0 rgba(255, 255, 255, 1); /* Bắt đầu với màu trắng đậm */ animation: ripple1 3s infinite ease-out; /* Điều chỉnh thời gian và kiểu chuyển động */ } @keyframes ripple1 { 0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 1); /* Ban đầu là màu trắng đậm */ } 50% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.7); /* Tỏa ra màu trắng đậm với độ mờ, giảm bán kính */ } 100% { box-shadow: 0 0 0 40px rgba(255, 255, 255, 0); /* Cuối cùng là mờ dần và biến mất */ } } .ripple-effect1 { width: 100px; height: 100px; border-radius: 50%; box-shadow: 0 0 0 0 #FFFFFF; animation: stretch 1s infinite, ripple 3s infinite; } .combined-effect:hover { transform: scale(1.1) rotateX(deg); /* Slightly larger on hover, keeping it flat */ } @keyframes stretch { 0% { transform: scale(1) rotateX(60deg); } 100% { transform: scale(1.2) rotateX(60deg); } } @keyframes stretch1 { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } } @keyframes ripple { 70% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); } } @media only screen and (min-width: 601px) { .controller { width: 960px; /* Maintain width for larger screens */ height: 50px; /* Or any desired height */ bottom: 0; position: fixed; } } .container { position: relative; width: 200px; height: 400px; } @keyframes movePerson { 0% { left: 0; } 50% { left: 50px; } 100% { left: 0; } } @keyframes blink { 0% { opacity: 1; } 100% { opacity: 0.8; } } .image-container { background-color: transparent; width: 300px; /* Adjust the size accordingly */ height: auto; position: relative; } .blend-image { width: 100%; height: auto; mix-blend-mode: multiply; /* Blend mode to remove white */ } @keyframes movePerson { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); /* Move the person up by 10px */ } 100% { transform: translateY(0); } } .movePerson { animation: movePerson 3s ease-in-out infinite; /* 3s animation duration */ position: relative; /* Ensures the element can be moved */ display: inline-block; } document.addEventListener("DOMContentLoaded", function() { var container = document.getElementById("modelContainer"); // Ensure ID matches if (container) { // Create iframe var iframe = document.createElement("iframe"); iframe.src = "./loadModel/3dmodel.html"; iframe.width = "100%"; iframe.height = "100%"; iframe.style.border = "none"; // Set fullscreen attributes iframe.allowFullscreen = true; iframe.setAttribute("mozallowfullscreen", "true"); iframe.setAttribute("webkitallowfullscreen", "true"); iframe.setAttribute("frameborder", "0"); // Append iframe to container container.appendChild(iframe); } }); /* Định dạng chung cho bản đồ */ .map-container { width: 100%; height: 100%; max-width: 800px; /* Điều chỉnh tùy theo yêu cầu */ margin: 0 auto; position: relative; } /* Khi ở màn hình nhỏ (di động) */ @media (max-width: 768px) { .map-container { width: 100%; /* Chiếm toàn bộ chiều rộng */ height: 300px; /* Hoặc chiều cao tùy chỉnh */ } } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat { font-family: "Montserrat", sans-serif; } @font-face { font-family: "Hepta Slab"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/hepta-slab-latin-regular.woff2") format("woff2"); } .hepta_slab { font-family: "Hepta Slab", serif; } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/montserrat-latin-300.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/montserrat-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = e.keyCode;
		me.skinKeyPressedText = e.key;
	});
	document.addEventListener('keyup', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = 0;
		me.skinKeyPressedText = '';
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}