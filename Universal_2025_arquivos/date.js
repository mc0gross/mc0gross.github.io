(function(){

	var DateUtil = {
		DD_MM_YYYY: {
			day: [0, 2],
			month: [3, 5],
			year: [6, 10]		
		},
		isValid: function(date) {
			return (!isNaN(date) && date != "Invalid Date");
		},
		dateToStr: function(date) {
			var year = date.getFullYear(),
				month = (date.getMonth() < 9) ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				day = (date.getDate() <= 9) ? "0" + date.getDate() : date.getDate();
				
			return (day + "/" + month + "/" + year);
		},
		strToDate: function(str, format) {
			if (!format)
				format = DateUtil.DD_MM_YYYY;
				
			var year = str.substring(format.year[0], format.year[1]),
				month = parseInt(str.substring(format.month[0], format.month[1]), 10) - 1,
				day = str.substring(format.day[0], format.day[1]);
				
			return (new Date(year, month, day));
		},
		format: function(str) {
			var dirty = /\D/g,
				format = /\d{2}(?=\d)/;
				
			str = str.replace(dirty, "");
			for (var x=0; x<2; x++, str = str.replace(format, str.match(format) + "/"));
			
			return str;
		},
		diffFn: {
			year: function(d1, d2) {
				var diff = 0;
				for (year = d1.getFullYear(), d1.setFullYear(++year); d1 <= d2 ; diff++, d1.setFullYear(++year));
				return diff;
			},
			month: function(d1, d2) {
				var diff = 0;
				for (month = d1.getMonth(), year = d1.getFullYear(), d1.setMonth(++month); d1 <= d2; diff++, year = d1.getFullYear(), month = (d1.getFullYear() != year) ? 0 : d1.getMonth(), d1.setMonth(++month));
				return diff;
			},
			day: function(d1, d2) {
				var diff = 0;
				for (day = d1.getDate(), month = d1.getMonth(), d1.setDate(++day); d1 <= d2; diff++, month = d1.getMonth(), day = (d1.getMonth() != month) ? 0 : d1.getDate(), d1.setDate(++day));
				return diff;
			}
		},
		getDiff: function(d1, d2, unit) {
			if (!d1) throw new Error("parameter d1 is not defined");
			if (!d2) throw new Error("parameter d2 is not defined");

			var inverse = (d1 > d2),
				low = new Date(Math.min(d1, d2)),
				high = new Date(Math.max(d1,d2)),
				diff = 0,
				unit = unit || "year";
				
			if (unit == "year")
				diff = DateUtil.diffFn.year(low, high);

			if (unit == "month")
				diff = DateUtil.diffFn.month(low, high);

			if (unit == "day")
				diff = DateUtil.diffFn.day(low, high);

			return (inverse ? -diff : diff);
		},
		inRange: function(d1, d2, min, max, unit) {
			if (!min) throw new Error("parameter min is not defined");
			if (!max) throw new Error("parameter max is not defined");
			if (!unit) unit = "year";
			
			var diff = DateUtil.getDiff(d1, d2, unit);
			return ((diff >= min) && (diff <= max));
		}
	};
	
	window.DateUtil = DateUtil;
	
})();