(function(window, $){

	var TOOLTIP_MANAGER_OPTS = {
		width:"auto",
		alignX:"right",
		alignY:"top",
		offsetX:-24,
		offsetY:14,
		showSpeed:100,
		hideSpeed:100
	};

	function TooltipManager(opts) {
		
		// instance reference
		var self = this;
		
		opts = $.extend(TOOLTIP_MANAGER_OPTS, opts);
		
		// private methods
		var pvt = {
			beforeShow:function(o) {
				o.data("title", o.attr("title")).attr("title", "");
			},
			afterHide:function(o) {
				o.attr("title", o.data("title")).removeData("title");
			},
			show:function(o) {
				var o = $(o);
				
				pvt.beforeShow(o);
				o.data("tooltip", new Tooltip(o, o.data("title"), opts));
			},
			hide:function(o) {
				var o = $(o),
					tooltip = o.data("tooltip");
				
				if (tooltip) {
					tooltip.hide();
					pvt.afterHide(o);
				}
			},
			init:function() {
				self.refresh();
				self.enable();
			}
		};
		
		// event handler
		var handler = {
			mouseenter:function(e) {
				pvt.show(e.currentTarget);
			},
			mouseleave:function(e) {
				pvt.hide(e.currentTarget);
			}
		};
		
		// public methods
		$.extend(self, {
			refresh:function() {
				self.disable();
				managed = $("*[title]");
			},
			enable:function() {
				if (enabled) return false;
				managed.bind(evt);
				enabled = true;
			},
			disable:function() {
				if (!enabled) return false;
				managed.unbind(evt);
				enabled = false;
			}
		});
		
		// variables
		var managed = $(),
			enabled = false,
			evt = {mouseenter:handler.mouseenter, mouseleave:handler.mouseleave};
			
		pvt.init();
		
	};
	
	window.TooltipManager = TooltipManager;

	function Tooltip(o, c, opts) {
		
		// instance reference
		var self = this;
		
		// private methods
		var pvt = {
			getX:function() {
				var x = ref.position().left + ObjectUtil.getMarginLeft(ref);
				
				switch (opts.alignX) {
					case "left":
						x -= (wrapper.outerWidth() + opts.offsetX);
					break;
					case "center":
						x += (ref.outerWidth() - wrapper.outerWidth())/2;
					break;
					case "right":
						x += (ref.outerWidth() + opts.offsetX);
					break;
				}
				
				return x;
			},
			getY:function() {
				var y = ref.position().top + ObjectUtil.getMarginTop(ref);
				
				switch (opts.alignY) {
					case "top":
						y -= (wrapper.outerHeight() + opts.offsetY);
					break;
					case "middle":
						y += (ref.outerHeight() - wrapper.outerHeight())/2;
					break;
					case "bottom":
						y += (ref.outerHeight() + opts.offsetY);
					break;
				}
				
				return y;
			},
			init:function(element) {
				var positionLeftCss = 0;
				var positionTopCss = 0;
				if (o.attr('data-top') != undefined){
					positionTopCss = parseInt(o.attr('data-top'));
				}
				if (o.attr('data-left') != undefined){					
					positionLeftCss = parseInt(o.attr('data-left'));
				}
				
				if(o.attr('data-left-arrow') != undefined){
					$j("div.tooltip-wrapper span.tooltip-arrow").css('left', o.attr('data-left-arrow'));
				}
				if(o.attr('data-text-align') != undefined){
					$j("div.tooltip-wrapper").css('text-align', o.attr('data-text-align'));
				}
				if(o.attr('data-text-transform') != undefined){					
					$j("div.tooltip-wrapper").css('text-transform', o.attr('data-text-transform'));
					$j("div.tooltip-wrapper").css('font', '1em/1.6em arial');					
				}
				wrapper.css({left: positionLeftCss > 0 ? positionLeftCss : pvt.getX(), top:positionTopCss > 0 ? positionTopCss : pvt.getY()});
				self.show();
			},
			destroy:function() {
				wrapper.remove();
			}
		};
		
		// event handler
		var handler = {
			mouseenter:function(e) {
				wrapper.stop(true, false).css("opacity", 1);
			},
			mouseleave:function(e) {
				self.hide();
			}
		};		
		
		// public methods
		$.extend(self, {
			hide:function() {
				wrapper.fadeOut(opts.hideSpeed, pvt.destroy);
			},
			show:function() {
				wrapper.fadeIn(opts.showSpeed);
			}
		});
		
		// variables
		var wrapperCSS = {position:"absolute"},
			evt = {mouseenter:handler.mouseenter, mouseleave:handler.mouseleave},
			wrapper = $("<div class='tooltip-wrapper' />").css(wrapperCSS).bind(evt).appendTo("body").hide(),
			decorator = new Decorator(wrapper),
			content = $("<div class='tooltip-content' />").css("width", opts.width).html(c).appendTo(decorator.getInner()),
			arrow = $("<span class='tooltip-arrow'><span></span/></span>").appendTo(decorator.getInner()),
			ref = $(o);
			
		pvt.init();

	};
	
}(window, jQuery))