define([], function() {
  var Logger;

  Logger = function(loggerName) {
    if (!loggerName) {
      return Logger.get("Log4Js");
    } else {
      return Logger.get(loggerName);
    }
  };
  Logger.get = function(loggerName) {
    if (Logger.define[loggerName]) {
      Logger.define[loggerName].name = loggerName;
      return new Logger.main(Logger.define[loggerName]);
    } else if (loggerName === "Log4Js") {
      return new Logger.main();
    } else {
      throw "Log4Js: No such logger with name " + loggerName;
    }
  };
  Logger.main = function(config) {
    var applyData, defaultOutway, getTimestamp, output, tplArgs, _this;

    _this = this;
    tplArgs = {
      timestamp: "{TIMESTAMP}",
      loggername: "{LOGGERNAME}",
      loggerlevel: "{LOGGERLEVEL}",
      logtext: "{TEXT}"
    };
    defaultOutway = function(prefix, msg, obj) {
      switch (obj.level) {
        case "ERROR":
          console.error(prefix, msg);
          break;
        case "WARNNING":
          console.warn(prefix, msg);
          break;
        default:
          console.log(prefix, msg);
      }
      return null;
    };
    config = config || {};
    _this.name = config.name || "Log4Js";
    _this.outputLevel = config.level ? config.level.toUpperCase() : "ALL";
    _this.outway = config.outway || defaultOutway;
    _this.tpl = config.tpl || "{TIMESTAMP},{LOGGERLEVEL}[{LOGGERNAME}]:";
    _this.dateFormat = config.dateFormat || "yyyy-MM-dd hh:mm:ss";
    applyData = function(data) {
      var t;

      t = _this.tpl;
      t = t.replace(tplArgs.timestamp, data.timestamp);
      t = t.replace(tplArgs.loggername, data.name);
      t = t.replace(tplArgs.loggerlevel, data.level);
      t = t.replace(tplArgs.logtext, data.text);
      return t;
    };
    output = function(logObj, msg) {
      var out, prefix, _ref, _ref1, _ref2, _ref3, _ref4;

      out = _this.outway;
      prefix = applyData(logObj);
      if (logObj.level === "LOG") {
        out("", msg, logObj);
        return;
      }
      switch (_this.outputLevel) {
        case "ALL":
        case "DEBUG":
          if ((_ref = logObj.level) === "DEBUG" || _ref === "INFO" || _ref === "WARNNING" || _ref === "ERROR" || _ref === "FATAL") {
            out(prefix, msg, logObj);
          }
          break;
        case "INFO":
          if ((_ref1 = logObj.level) === "INFO" || _ref1 === "WARNNING" || _ref1 === "ERROR" || _ref1 === "FATAL") {
            out(prefix, msg, logObj);
          }
          break;
        case "WARNNING":
          if ((_ref2 = logObj.level) === "WARNNING" || _ref2 === "ERROR" || _ref2 === "FATAL") {
            out(prefix, msg, logObj);
          }
          break;
        case "ERROR":
          if ((_ref3 = logObj.level) === "ERROR" || _ref3 === "FATAL") {
            out(prefix, msg, logObj);
          }
          break;
        case "FATAL":
          if ((_ref4 = logObj.level) === "FATAL") {
            out(prefix, msg, logObj);
          }
          break;
      }
      return null;
    };
    getTimestamp = function() {
      return Logger.util.DateFormat(new Date(), _this.dateFormat);
    };
    Logger.publicMethods = {
      log: function(txt) {
        var logs;

        logs = {
          timestamp: getTimestamp(),
          name: _this.name,
          level: "LOG"
        };
        return output(logs, txt);
      },
      debug: function(txt) {
        var logs;

        logs = {
          timestamp: getTimestamp(),
          name: _this.name,
          level: "DEBUG"
        };
        return output(logs, txt);
      },
      info: function(txt) {
        var logs;

        logs = {
          timestamp: getTimestamp(),
          name: _this.name,
          level: "INFO"
        };
        return output(logs, txt);
      },
      error: function(txt) {
        var logs;

        logs = {
          timestamp: getTimestamp(),
          name: _this.name,
          level: "ERROR"
        };
        return output(logs, txt);
      },
      warn: function(txt) {
        var logs;

        logs = {
          timestamp: getTimestamp(),
          name: _this.name,
          level: "WARNNING"
        };
        return output(logs, txt);
      },
      fatal: function(txt) {
        var logs;

        logs = {
          timestamp: getTimestamp(),
          name: _this.name,
          level: "FATAL"
        };
        return output(logs, txt);
      }
    };
    return Logger.publicMethods;
  };
  Logger.util = {};
  Logger.util.getType = function(t) {
    var o, _t;

    o = t;
    return ((_t = typeof o) === "object" ? o === null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
  };
  Logger.util.DateFormat = function(date, format) {
    var k, o;

    o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  };
  return Logger;
});
