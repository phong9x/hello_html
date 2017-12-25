/*
Copyright (C) NAVER corp.  

This library is free software; you can redistribute it and/or  
modify it under the terms of the GNU Lesser General Public  
License as published by the Free Software Foundation; either  
version 2.1 of the License, or (at your option) any later version.  

This library is distributed in the hope that it will be useful,  
but WITHOUT ANY WARRANTY; without even the implied warranty of  
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU  
Lesser General Public License for more details.  

You should have received a copy of the GNU Lesser General Public  
License along with this library; if not, write to the Free Software  
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA  
*/
/*
 * Smart Editor 2 Configuration : This setting must be changed by service
 */
window.nhn = window.nhn || {};
nhn.husky = nhn.husky || {};
nhn.husky.SE2M_Configuration = nhn.husky.SE2M_Configuration || {};

/**
 * CSS LazyLoad? ?? ??
 */
nhn.husky.SE2M_Configuration.SE2B_CSSLoader = {
	sCSSBaseURI : "css"
};

/**
 * ???? ??
 */
nhn.husky.SE2M_Configuration.SE_EditingAreaManager = {
	sCSSBaseURI : "css",					// smart_editor2_inputarea.html ??? ????
	sBlankPageURL : "smart_editor2_inputarea.html",
	sBlankPageURL_EmulateIE7 : "smart_editor2_inputarea_ie8.html",
	aAddtionalEmulateIE7 : [] // IE8 default ??, IE9 ~ ??? ??
};

/**
 * [????]
 * ??? ALT+,  ALT+. ? ???? ?????? ??? ??/?? ??? ??? ? ??.
 * 		sBeforeElementId : ?????? ?? ?? ??? id
 * 		sNextElementId : ?????? ?? ?? ??? id 
 * 
 * ?????? ?? ??? ?? ?? (?:??????? ??? ??? ?? ?????? ?? ??) ? ???? ?????? Tab?? ??? ??? ???? ???? ???? ? ??.
 * 		sTitleElementId : ??? ???? input ??? id. 
 */
nhn.husky.SE2M_Configuration.SE2M_Accessibility = {
    sBeforeElementId : '',
    sNextElementId : '',
    sTitleElementId : ''
};

/**
 * ?? ?? ??
 */
nhn.husky.SE2M_Configuration.SE2M_Hyperlink = {
	bAutolink : true	// ?????? ????(???:true)
};

nhn.husky.SE2M_Configuration.Quote = {
	sImageBaseURL : 'http://static.se2.naver.com/static/img'
};

nhn.husky.SE2M_Configuration.SE2M_ColorPalette = {
	bUseRecentColor : false
};