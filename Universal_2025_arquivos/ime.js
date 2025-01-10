(function(window, $){

	/*
	*	StringUtil
	*		substitute(string, args)
	*			description:
	*				replace specific characters in strings
	*			example:
	*				StringUtil.substitute("{0} brown {1}", "quick", "fox") == "quick brown fox"
	*		removeAccents(string)
	*			description:
	*				replace accented characters in ISO-8859-1 by their unaccented equivalent
	*		alike(string, string)
	*			description:
	*				compare two strings after applying the methods trim, lowercase and removeAccents
	*/
	
	var StringUtil = {
		rules:[{from:"[абвгд]", to:"a"}, {from:"[ийкл]", to:"e"}, {from:"[мноп]", to:"i"}, {from:"[туфхц]", to:"o"}, {from:"[щъыь]", to:"u"}, {from:"[ж]", to:"ae"}, {from:"[с]", to:"n"},{from:"[з]", to:"c"}],
		substitute:function(str) {
			for (var x=1, pattern; x<arguments.length; x++) {
				pattern = new RegExp("\\{" + (x-1) + "\\}");
				str = str.replace(pattern, arguments[x]);
			}
			return str;
		},
		removeAccents:function(str) {
			for (var x=0; x<StringUtil.rules.length; x++) {
				var rule = StringUtil.rules[x];
				pattern = new RegExp(rule.from, "gi");
				str = str.replace(pattern, rule.to);
			}
			return str;
		},
		alike:function(s, t) {
			var like = false,
				s = $.trim(StringUtil.removeAccents(s)).toLowerCase(),
				t = $.trim(StringUtil.removeAccents(t)).toLowerCase();
			
			if (s == t) like = true;
			
			return like;
		}
	};
	
	window.StringUtil = StringUtil;
	
	/*
	*	TextMetrics
	*		getWidth(string, object)
	*			description:
	*				get the width of the text when using the inherited style from the object
	*		getHeight(string, object)
	*			description:
	*				get the height of the text when using the inherited style from the object
	*/
	
	var TextMetrics = {
		CSS: {position:"absolute", top:0, left:0},
		clone: null, value: null,
		engine:function(text, holder) {
			clone = $(holder).clone().empty().text(text).css(TextMetrics.CSS).appendTo("body");
		},
		getWidth:function(text, holder) {
			TextMetrics.engine(text, holder);
			return (value = clone.width(), clone.remove(), value);
		},
		getHeight:function(text, holder) {
			TextMetrics.engine(text, holder);
			return (value = clone.height(), clone.remove(), value);
		}
	};
	
	/*
	*	ObjectUtil
	*		getMarginLeft(object)
	*			description:
	*				get the left margin of the object or 0 (zero) case its not set
	*		getMarginTop(object)
	*			description:
	*				get the top margin of the object or 0 (zero) case its not set
	*/
	
	var ObjectUtil = {
		getMargin:function(o, side) {
			var value = 0, 
				margin = $(o).css(side);
			
			if (/(px)/gi.test(margin)) value += parseInt(margin, 10);
			
			return value;			
		},
		getMarginTop:function(o) {
			return ObjectUtil.getMargin(o, "marginTop");
		},
		getMarginLeft:function(o) {
			return ObjectUtil.getMargin(o, "marginLeft");
		}
	};
	
	window.ObjectUtil = ObjectUtil;
	
	/*
	*	Decorator
	*		get(string)
	*			description:
	*				retrieve the cell with the specified className
	*/
	
	function Decorator(o) {
		
		// instance reference
		var self = this;
		
		// private methods
		var pvt = {
			init:function() {
				for (var x=0; x<rowClasses.length; x++) {
					var tr = $("<tr />").addClass(rowClasses[x]).appendTo(tbody);
					for (var y=0; y<cellClasses.length; y++) {
						var td = $("<td />").addClass(cellClasses[y]).appendTo(tr);
						if (x == 1 && y == 1) inner = td;
					}
				}
			}
		};
		
		// public methods
		$.extend(self, {
			getInner:function() {
				return inner;
			}
		});
		
		// variables
		var inner,
			wrapper = $("<table class='decorator' />").attr({cellspacing:0, cellpadding:0}).appendTo(o),
			tbody = $("<tbody />").appendTo(wrapper),
			rowClasses = ["top", "mid", "bot"],
			cellClasses = ["left", "center", "right"];
			
		pvt.init();
	};
	
	window.Decorator = Decorator;

}(window, jQuery))